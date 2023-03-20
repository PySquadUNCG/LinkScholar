from mongoengine import *
import bcrypt
import re
import json

connect(
    host="mongodb+srv://jluolbro:kennaHbrWlKSXBKH@cluster0.zbpmsb3.mongodb.net/?retryWrites=true&w=majority",
    db="Students"
)


class User(Document):
    first_name = StringField(required=True)
    last_name = StringField(required=True)
    user_pass = StringField(required=True)
    school_id = StringField(required=True)
    email = StringField(required=True)
    is_teacher = BooleanField(required=True, default=False)
    fields_id = ListField()


class FieldsOfStudy(Document):
    _id = IntField(required=True, primary_key=True)
    name = StringField(required=True)


def create_user(first_name, last_name, user_pass, school_id, email, is_teacher):
    created_user = User(
        first_name=first_name,
        last_name=last_name,
        user_pass=bcrypt.hashpw(user_pass.encode('utf-8'), bcrypt.gensalt()),
        school_id=school_id,
        email=email,
        is_teacher=is_teacher
    )

    if not re.match(r'^\d{9}$', school_id):
        raise Exception("Invalid ID")
    if "@uncg.edu" not in email:
        raise Exception("Invalid school email")
    if get_user_by_school_id(school_id).count() > 0:
        raise Exception("User already exist (Check ID)")
    if get_user_by_email(email).count() > 0:
        raise Exception("User already exist (Check Email)")
    else:
        created_user.save()


def create_student(first_name, last_name, user_pass, school_id, email):
    create_user(first_name, last_name, user_pass, school_id, email, False)


def create_teacher(first_name, last_name, user_pass, school_id, email):
    create_user(first_name, last_name, user_pass, school_id, email, True)


# Remind front end team to not leave an option available to sign up as an administrator
# def create_admin(first_name, last_name, user_pass, school_id, email, is_teacher):
#     create_user(first_name, last_name, user_pass, school_id, email, is_teacher, True)


def get_all_users():
    return User.objects()


def get_user_by_first_name(name):
    q_set = User.objects(first_name=name)
    return q_set


def get_user_by_last_name(lastname):
    q_set = User.objects(last_name=lastname)
    return q_set

# Takes first part of email to query the database.


def get_user_by_email_no_domain(email):
    email_to_query = email + "@"
    q_set = User.objects(email__startswith=email_to_query)
    return q_set


def get_user_by_email(email):
    q_set = User.objects(email__startswith=email)
    return q_set


def get_user_by_school_id(school_id):
    q_set = User.objects(school_id=school_id)
    return q_set


def change_password(email, new_password):
    users = get_user_by_email(email)
    if users.count() == 1:
        temp = str(bcrypt.hashpw(new_password.encode('utf-8'), bcrypt.gensalt()), 'utf-8')
        users[0].update(user_pass=temp)
    else:
        raise Exception("No unique user found")


def compare_password(email, user_pass):
    users = get_user_by_email(email)
    if users.count() == 1:
        return bcrypt.checkpw(user_pass.encode('utf-8'), users[0].user_pass.encode('utf-8'))
    else:
        raise Exception("No unique user found")


def create_field_of_study(id, name):
    created_field = FieldsOfStudy(
        _id=id,
        name=name
    )
    created_field.save()


def get_all_fields_of_study():
    return FieldsOfStudy.objects()


def update_user_fields_of_study(student_id, fos_id):
    users = get_user_by_school_id(student_id)
    if users.count() == 1:
        if len(users[0].fields_id) < 3 and fos_id not in users[0].fields_id:
            users.update_one(push__fields_id=fos_id)
        else:
            raise Exception("Too many fields or already existing")
    else:
        raise Exception("No unique user found")


# def get_user_fields_of_study(school_id):
#     q_set = User.objects(school_id=school_id)
#     if q_set.count() == 1:
#         temp_q = q_set.only('school_id', 'fields_id').exclude('id')
#         return temp_q
#     else:
#         raise Exception("User not found")

def get_user_fields_of_study(school_id):
    users = User.objects(school_id=school_id).aggregate(*[
        {
            '$lookup': {
                'from': FieldsOfStudy._get_collection_name(),
                'localField': 'fields_id',
                'foreignField': '_id',
                'as': 'Field_of_Study'}
        }])
    result_list = list(users)
    fos = []
    for FOS in result_list[0]['Field_of_Study']:
        fos.append(FOS['name'])
    temp_dict = {
        "school_id": result_list[0]["school_id"],
        "Field_of_Study": fos
    }
    return print(json.dumps(temp_dict))

#[{'_id': ObjectId('6416226b7ca58f762a323722'), 'first_name': 'Luke', 'last_name': 'Brown',
# 'user_pass': '$2b$12$vawrnNJxkJI5UoJMVhS3LOmEYE57lFg6YKgdO7A0157tj08tcYy1i', 'school_id': '888319834',
# 'email': 'lcbrown9@uncg.edu', 'is_teacher': False, 'fields_id': [0, 5],
# 'Field_of_Study': [{'_id': 0, 'name': 'Algorithms and Theory of Computing'}, {'_id': 5, 'name': 'Networking'}]}]


def get_pretend_teachers_fields_of_study():
    users = User.objects.aggregate(*[
        {
            '$lookup': {
                'from': FieldsOfStudy._get_collection_name(),
                'localField': 'fields_id',
                'foreignField': '_id',
                'as': 'Field_of_Study'}
        }])
    result_list = list(users)
    output = []
    for result in result_list:
        fos = []
        for FOS in result['Field_of_Study']:
            fos.append(FOS['name'])
        temp_dict = {
            "school_id": result_list[0]["school_id"],
            "Field_of_Study": fos
        }
        output.append(temp_dict)
    return print(json.dumps(output))


def delete_user(school_id):
    users = get_user_by_school_id(school_id)
    if users.count() == 1:
        users[0].delete()
    else:
        raise Exception("No user found")



def get_student_field_of_study(school_id):
    if FieldsOfStudy.count() == 1:
        return StudentFieldOfStudy.objects()
    else:
        raise Exception("Student has no fields of study")

def get_professor_field_of_study(school_id):
    if FieldsOfStudy.count() == 1:
        return ProfessorFieldOfStudy.objects()
    else:
        raise Exception("Professor has no fields of study")


if get_all_fields_of_study().count() == 0:
    create_field_of_study(0, "Algorithms and Theory of Computing")
    create_field_of_study(1, "Data Science and Machine Learning")
    create_field_of_study(2, "Database Systems")
    create_field_of_study(3, "Extended Reality")
    create_field_of_study(4, "Image Processing")
    create_field_of_study(5, "Networking")
    create_field_of_study(6, "Online Social Networks")
    create_field_of_study(7, "Security and Cryptography")





