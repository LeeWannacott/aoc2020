# --- Day 2: Password Philosophy --

valid_password = 0

def give_number_of_valid_passwords():
    
    input = open('day2input.txt','r')
    global valid_password
    for line in input:
        count = 0 
        min_max_occurence = (line.split()[0].split('-'))
        letter = (line.split()[1][0])
        password = (line.split()[2])
        for char in password:
            if char == letter:
                count +=1
        if count in range(int(min_max_occurence[0]),int(min_max_occurence[1])+1):
            valid_password += 1
        else:
            pass
    input.close()
    return f"Number of valid passwords {valid_password}"

print(give_number_of_valid_passwords())


# --- Day 2: Password Philosophy -- part 2
valid_password_2 = 0 
def give_number_of_valid_passwords_part2():
    input = open('day2input.txt','r')
    global valid_password_2
    for line in input:
        count = 0 
        min_max_occurences = (line.split()[0].split('-'))
        letter = (line.split()[1][0])
        password = (line.split()[2])
        first_char = password[int(min_max_occurences[0])-1]
        second_char = password[int(min_max_occurences[1])-1]
        if (first_char == letter  and
                second_char != letter):
                valid_password_2 +=1
        elif (first_char != letter  and
        second_char == letter):
                valid_password_2 +=1
    input.close()
    return f"Number of valid passwords {valid_password_2}"

print(give_number_of_valid_passwords_part2())
