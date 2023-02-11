from mongoengine import *
import bcrypt
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
    fields_id = ListField()


class FieldsOfStudy(Document):
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
    created_user.save()


def create_student(first_name, last_name, user_pass, school_id, email):
    create_user(first_name, last_name, user_pass, school_id, email, False)


def create_teacher(first_name, last_name, user_pass, school_id, email):
    create_user(first_name, last_name, user_pass, school_id, email, True)


def get_all_users():
    return User.objects()


def get_user_by_first_name(name):
    qset = User.objects(first_name=name)
    return qset


def get_user_by_last_name(lastname):
    qset = User.objects(last_name=lastname)
    return qset

# Takes first part of email to query the database.


def get_user_by_email_no_domain(email):
    email_to_query = email + "@"
    qset = User.objects(email__startswith=email_to_query)
    return qset


def get_user_by_school_id(schoolid):
    qset = User.objects(school_id=schoolid)
    return qset

def change_password(email, new_passowrd):
    users = get_user_by_email_no_domain(email)
    if users.count() == 1:
        users[0].user_pass = bcrypt.hashpw(new_passowrd.encode('utf-8'), bcrypt.gensalt())
        users[0].save()
    else:
        raise Exception("No unique user found")

def create_field_of_study(name):
    created_field = FieldsOfStudy(
        name=name
    )
    created_field.save()


def get_all_fields_of_study():
    return FieldsOfStudy.objects()

# DON'T TOUCH THIS :
#                  V


if get_all_fields_of_study().count() == 0:
    create_field_of_study("Machine Learning")
    create_field_of_study("Natural Processing Language")
    create_field_of_study("AI")
