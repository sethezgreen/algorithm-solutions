# Pseudo Code
    # receive a string of letters
    # check if all letters of alphabet are in the string
    # need to keep track of which letters have been seen
    # could have a list/dict that each letter gets add to, and check if there are 27 elements at the end

def pangrams(s):
    s = s.lower()
    list = []
    for i in s:
        if i not in list and i != ' ':
            list.append(i)
    print(list)
    if len(list) == 26:
        return "pangram"
    return "not pangram"

print(pangrams("The quick brown fox jumps over the lazy dog"))