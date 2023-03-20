from database import*

#creating a user
#create_student("testID", "fds", "testpassword","123456789", "j_luo3@uncg.edu")
# create_student("Luke", "Brown", "newpassword2", "888319834", "lcbrown9@uncg.edu")
#delete_user("888319834")
#Hard-coding administrator accounts
# create_admin("Jacky", "Luo", "jacky123","884594913", "j_luo3@uncg.edu")
# create_admin("Luke", "Brown", "luke123","8883198384", "lcbrown9@uncg.edu")
# create_admin("Jordan", "Barksdale", "jordan123","874594123", "jkbarksd@uncg.edu")
# create_admin("Jesea", "Littlejohn", "jesea123","888319832", "jalittl5@uncg.edu")
# create_admin("Jason", "Martinez-Jimenez", "jason123","884591234", "j_mart24@uncg.edu")
# create_admin("Devon", "Loy", "devon123","8883198384", "d_loy@uncg.edu")

# grabbing all the users.
# for user in get_all_users():
#     print(user.to_json())

# change_password("lcbrown9@uncg.edu", "newpassword2")
# compare_password("lcbrown9@uncg.edu", "newpassword3")

# Testing Fields
get_pretend_teachers_fields_of_study()
# update_user_fields_of_study("888319834", 5)

# Can add subscripts to grab similar first named users ex ('Name')[k]
# print(persons.to_json())
# print(persons.count())

# How to grab ids from mongodb
# person = get_user_by_first_name('Allen')[0]
# print(str(person.id))