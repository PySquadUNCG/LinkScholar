# Define the attributes for the users
students = {
    "student1": ["Cyber-security", "Information Retrieval", "Computer Vision","Differential Privacy","Computer Security" ],
    "student2": ["Deep Learning", "Image Processing", "Biomedical Informatics", "Amorphous Computing", "Human Computer Interaction"],
    "student3": ["Databases", "Machine Learning", "Data Mining", "Virtual Reality","Extended Reality Interfaces" ],
    "student4": ["Amorphous Computing", "Big Data Privacy and Security", "Algorithms", "Information Retrieval", "Big Data Analytics"],
    "student5": ["Artificial Intelligence", "Wireless Networks", "Network Security", "Cryptography", "Data Structures"],
    "student6": ["Cryptography", "Data Structures","Stochastic Optimization", "Differential Privacy", "Cyber-security"],
    "student7": ["Machine Learning","Natural Language Processing", "Artificial Intelligence",  "Wireless Networks","Network Security" ],
    "student8": ["Databases", "Data Mining","Algorithms", "Virtual Reality", "Extended Reality Interfaces" ],
    "student9": ["Augmented Reality", "Human Computer Interaction","Deep Learning", "Image Processing","Computer Vision" ],
    "student10": ["Biomedical Informatics", "Amorphous Computing", "Information Retrieval","Big Data Analytics", "Big Data Privacy and Security" ]
}

professors = {
    "professor1": ["Cyber-security", "Information Retrieval", "Computer Vision", "Data Structures", "Differential Privacy"],
    "professor2": ["Databases", "Algorithms", "Virtual Reality","Cyber-security", "Image Processing" ],
    "professor3": ["Differential Privacy", "Cyber-security", "Big Data Privacy and Security", "Artificial Intelligence", "Augmented Reality" ],
    "professor4": ["Machine learning", "Natural Language Processing", "Artificial Intelligence", "Information Retrieval", "Computer Security"],
    "professor5": ["Cyber-security", "Information Retrieval", "Computer Vision","Differential Privacy","Computer Security"],
    "professor6": ["Augmented Reality", "Human Computer Interaction","Deep Learning", "Image Processing","Computer Vision" ],
    "professor7": ["Computer Security","Cryptography", "Data Structures", "Stochastic Optimization", "Differential Privacy" ],
    "professor8": ["Graph Convolutional Network and Federated Learning", "Cyber-security", "Big Data Privacy and Security","Data Structures",  "Information Retrieval"],
    "professor9": ["Image Processing", "Augmented Reality", "Virtual Reality", "Data Mining","Differential Privacy" ],
    "professor10": ["Cryptography", "Information Retrieval", "Network Security", "Algorithms", "Databases"]
}

# Define the compatibility function
def calculate_compatibility(user1, user2):
    # Find the common attributes between the users
    common_attributes = set(user1).intersection(user2)
    
    # Calculate the compatibility score
    compatibility_score = len(common_attributes) / len(user1)
    
    return compatibility_score


# Calculate the compatibility between each student and professor
for student_name, student_attributes in students.items():
    for professor_name, professor_attributes in professors.items():
        compatibility_score = calculate_compatibility(student_attributes, professor_attributes)
        # only prints out if they are compatible. 
        if compatibility_score == 1:
            print(f"{professor_name} and {student_name} are compatible.")
        elif compatibility_score >= 0.6:
            print(f'{professor_name} and {student_name} would be the second choice.')
            # will print every compatible score without the if statement. 
        print(f"{student_name} and {professor_name} have a compatibility score of {compatibility_score}")

