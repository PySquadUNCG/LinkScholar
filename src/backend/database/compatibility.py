
from database.database import get_user_fields_of_study
from database.database import get_teachers_fields_of_study
from database.database import update_match


# Define the compatibility function
def calculate_compatibility(user1, user2):
    # Find the common attributes between the users
    common_attributes = set(user1).intersection(user2)

    # Calculate the compatibility score
    compatibility_score = len(common_attributes) / len(user1)

    return compatibility_score


def compute_compatibility(school_id):
    # Define the attributes for the users
    student = get_user_fields_of_study(school_id)
    professors = get_teachers_fields_of_study()
    comp_map = {}

    # Calculate the compatibility between each student and professor

    for professor_attributes in professors:
        professor_id = professor_attributes["school_id"]
        professor_fos = professor_attributes["Field_of_Study"]
        compatibility_score = calculate_compatibility(student["Field_of_Study"], professor_fos)

        my_list = None

        if compatibility_score not in comp_map:
            my_list = []
            comp_map[compatibility_score] = my_list
        else:
            my_list = comp_map[compatibility_score]
        my_list.append(professor_id)

    # print(comp_map)
    sorted_dict = dict(sorted(comp_map.items(), key=lambda x: x[0], reverse=True))
    # print(sorted_dict.items())

    result = []
    num = 0

    for key, value in sorted_dict.items():
        for x in value:
            result.append(x)
            num += 1
            if num == 2:
                break
        if num == 2:
            break
    # Saves the results to db before returning
    
    update_match(school_id, result)
    return result
