from database import*
from compatibility import*

#creating a user

# create_student("Luke", "Brown", "newpassword", "888319834", "lcbrown9@uncg.edu")
# update_user_fields_of_study("888319834", 0)
# update_user_fields_of_study("888319834", 1)
# update_user_fields_of_study("888319834", 2)

# Testing update_match
# update_match("888319834","123456783")
#
# test_list = ['123456789', '123456788']
# update_match('888319834', test_list)
# print(get_teachers_fields_of_study())
#delete_user("888319834")
#Hard-coding administrator accounts
# create_teacher("Stephen", "Tate", "tate123", "123456789", "srtate@uncg.edu")
# create_teacher("Chunjiang", "Zhu", "zhu123", "123456788", "chunjiang.zhu@uncg.edu")
# create_teacher("Lixin", "Fu", "fu123", "123456787", "lfu@uncg.edu")
# create_teacher("Minjeong", "Kim", "kim123", "123456786", "mkim@uncg.edu")
# create_teacher("Jing", "Deng", "deng123", "123456785", "jing.deng@uncg.edu")
# create_teacher("Regis", "Kopper", "kopper123", "123456784", "kopper@uncg.edu")
# create_teacher("Yingcheng", "Sun", "sun123", "123456783", "y_sun4@uncg.edu")
# create_teacher("Shan", "Suthaharan", "suthahran123", "123456782", "s_suthah@uncg.edu")

# grabbing all the users.
# for user in get_all_users():
#     print(user.to_json())

# change_password("lcbrown9@uncg.edu", "newpassword2")
# print(compare_password("j_luo3@uncg.edu", "testp2ssword"))

# Testing Fields
# print(get_teachers_fields_of_study())

# Can add subscripts to grab similar first named users ex ('Name')[k]
# print(persons.to_json())
# print(persons.count())

# How to grab ids from mongodb
# person = get_user_by_first_name('Allen')[0]
# print(str(person.id))
#
# print(compute_compatibility("888319834"))

#
# print(get_match_id("888319834"))


# print(get_id('123456789'))