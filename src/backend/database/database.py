from mongoengine import *
import bcrypt
client = connect(
    host="mongodb+srv://jluolbro:<password>.zbpmsb3.mongodb.net/?retryWrites=true&w=majority",
    db="Test"
)


class User(Document):
    first_name = StringField(required=True)
    last_name = StringField(required=True)
    user_pass = StringField(required=True)
    school_id = StringField(required=True)
    email = StringField(required=True)
    picture = FileField(required=False)
    is_teacher = BooleanField(default=False)


user = User(
    first_name="Luke",
    last_name="Brown",
    user_pass=bcrypt.hashpw("testPassword".encode('utf-8'), bcrypt.gensalt()),
    school_id="888319834",
    email="lcbrown9@uncg.edu"
)
user.save()

users = User.objects()
for user in users:
    print(
        User.first_name,
        User.last_name,
        User.user_pass,
        User.school_id,
        User.email,
        User.picture,
        User.is_teacher
    )
