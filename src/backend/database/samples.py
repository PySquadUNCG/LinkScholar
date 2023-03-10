from database import*

#creating a user
create_student("John", "Smith", "testpassword","123456789", "j_luo3@uncg.edu")

#Hard-coding administrator accounts
create_admin("Jacky", "Luo", "jacky123","884594913", "j_luo3@uncg.edu")
create_admin("Luke", "Brown", "luke123","8883198384", "lcbrown9@uncg.edu")
create_admin("Jordan", "Barksdale", "jordan123","874594123", "jkbarksd@uncg.edu")
create_admin("Jesea", "Littlejohn", "jesea123","888319832", "jalittl5@uncg.edu")
create_admin("Jason", "Martinez-Jimenez", "jason123","884591234", "j_mart24@uncg.edu")
create_admin("Devon", "Loy", "devon123","8883198384", "d_loy@uncg.edu")

# grabbing all the users.
# for user in get_all_users():
#     print(user.to_json())

# persons = get_user_by_first_name('Logan')
# Can add subscripts to grab similar first named users ex ('Name')[k]
# print(persons.to_json())
# print(persons.count())

# How to grab ids from mongodb
# person = get_user_by_first_name('Allen')[0]
# print(str(person.id))