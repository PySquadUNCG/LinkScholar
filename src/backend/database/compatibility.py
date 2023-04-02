# Define the attributes for the users

# Instead of hard coding a student, we need to take a student by using a method from database.py
student = {
    "school_id": "123456789",
    "Field_of_Study": ["Algorithms and Theory of Computing", "Security and Cryptography"]
           }

# instead of hard coding the professors here, call all professors using a method from database.py
professors = [
    {
        "school_id": "123456789",
        "Field_of_Study": ["Algorithms and Theory of Computing", "Security and Cryptography"]
    },
    {
        "school_id": "123456788",
        "Field_of_Study": ["Algorithms and Theory of Computing", "Data Science and Machine Learning",
                           "Database Systems", "Artificial Intelligence"]
    },
    {
        "school_id": "123456787",
        "Field_of_Study": ["Database Systems", "Online Social Networks"]
    },
    {
        "school_id": "123456786",
        "Field_of_Study": ["Data Science and Machine Learning", "Image Processing"]
    },
    {
        "school_id": "123456785",
        "Field_of_Study": ["Networking", "Online Social Networks", "Security and Cryptography"]
    },
    {
        "school_id": "123456784", "Field_of_Study": ["Extended Reality"]
    },
    {
        "school_id": "123456783",
        "Field_of_Study": ["Data Science and Machine Learning"]
    },
    {
        "school_id": "123456782",
        "Field_of_Study": ["Data Science and Machine Learning", "Networking", "Security and Cryptography"]
    }
]


# Define the compatibility function
def calculate_compatibility(user1, user2):
    # Find the common attributes between the users
    common_attributes = set(user1).intersection(user2)

    # Calculate the compatibility score
    compatibility_score = len(common_attributes) / len(user1)

    return compatibility_score


compMap = {}

# Calculate the compatibility between each student and professor

for professor_attributes in professors:
    professor_id = professor_attributes["school_id"]
    professor_fos = professor_attributes["Field_of_Study"]
    compatibility_score = calculate_compatibility(student["Field_of_Study"], professor_fos)

    myList = None

    if compatibility_score not in compMap:
        myList = []
        compMap[compatibility_score] = myList
    else:
        myList = compMap[compatibility_score]
    myList.append(professor_id)

# print(compMap)
sorted_dict = dict(sorted(compMap.items(), key=lambda x: x[0], reverse=True))
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
print(result)
