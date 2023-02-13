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


def get_user_by_school_id(school_id):
    q_set = User.objects(school_id=school_id)
    return q_set


def change_password(email, new_password):
    users = get_user_by_email_no_domain(email)
    if users.count() == 1:
        users[0].user_pass = bcrypt.hashpw(new_password.encode('utf-8'), bcrypt.gensalt())
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
    create_field_of_study("Natural Language Processing")
    create_field_of_study("Artificial Intelligence")
    create_field_of_study("Wireless Networks")
    create_field_of_study("Network Security")
    create_field_of_study("Databases")
    create_field_of_study("Data Mining")
    create_field_of_study("Algorithms")
    create_field_of_study("Virtual Reality")
    create_field_of_study("Extended Reality Interfaces")
    create_field_of_study("Augmented Reality")
    create_field_of_study("Human Computer Interaction")
    create_field_of_study("Deep Learning")
    create_field_of_study("Image Processing")
    create_field_of_study("Computer Vision")
    create_field_of_study("Biomedical Informatics")
    create_field_of_study("Amorphous Computing")
    create_field_of_study("Information Retrieval")
    create_field_of_study("Big Data Analytics")
    create_field_of_study("Big Data Privacy and Security")
    create_field_of_study("Computer Security")
    create_field_of_study("Cryptography")
    create_field_of_study("Data Structures")
    create_field_of_study("Stochastic Optimization")
    create_field_of_study("Differential Privacy")
    create_field_of_study("Graph Convolutional Network and Federated Learning")
    create_field_of_study("Cyber-security")
