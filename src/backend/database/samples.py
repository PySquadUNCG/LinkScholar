from database import*

#creating a user
create_student("testID", "fds", "testpassword","123456789", "j_luo3@uncg.edu")

#Hard-coding administrator accounts
create_admin("Jacky", "Luo", "jackyluo123","884594913", "j_luo3@uncg.edu")
create_admin("Luke", "Brown", "lukebrown123","8883198384", "lcbrown9@uncg.edu")

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