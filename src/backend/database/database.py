from mongoengine import *
import bcrypt
import re
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
    picture = FileField(required=False)
    is_teacher = BooleanField(default=False)
    is_admin = BooleanField(default=False)
    fields_id = ListField()


# Necessary to create fields of study. Useless for rn
class FieldsOfStudy(Document):
    name = StringField(required=True)


def create_user(first_name, last_name, user_pass, school_id, email, is_teacher, is_admin):
    created_user = User(
        first_name=first_name,
        last_name=last_name,
        user_pass=bcrypt.hashpw(user_pass.encode('utf-8'), bcrypt.gensalt()),
        school_id=school_id,
        email=email,
        is_teacher=is_teacher,
        is_admin=is_admin
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
    create_user(first_name, last_name, user_pass, school_id, email, False, False)


def create_teacher(first_name, last_name, user_pass, school_id, email):
    create_user(first_name, last_name, user_pass, school_id, email, True, False)


# Remind front end team to not leave an option available to sign up as an administrator
def create_admin(first_name, last_name, user_pass, school_id, email, is_teacher):
    create_user(first_name, last_name, user_pass, school_id, email, is_teacher, True)


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


# def change_password(email, new_password):
#     users = get_user_by_email_no_domain(email)
#     if users.count() == 1:
#         users[0].user_pass = bcrypt.hashpw(new_password.encode('utf-8'), bcrypt.gensalt())
#         users[0].save()
#     else:
#         raise Exception("No unique user found")

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


def create_field_of_study(name):
    created_field = FieldsOfStudy(
        name=name
    )
    created_field.save()


def get_all_fields_of_study():
    return FieldsOfStudy.objects()


def delete_user(school_id):
    users = get_user_by_school_id(school_id)
    if users.count() == 1:
        users[0].delete()
    else:
        raise Exception("No user found")


if get_all_fields_of_study().count() == 0:
    create_field_of_study("Algorithms and Theory of Computing")
    create_field_of_study("Data Science and Machine Learning")
    create_field_of_study("Database Systems")
    create_field_of_study("Extended Reality")
    create_field_of_study("Image Processing")
    create_field_of_study("Networking")
    create_field_of_study("Online Social Networks")
    create_field_of_study("Security and Cryptography")





