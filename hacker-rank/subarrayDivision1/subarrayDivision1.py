# pseudo code
    # receive an array and a day and month integer
    # locate a contigous segement that's length matches the month and the sum adds to the day
    # iterate through the array and check the next m elements if they add to d
    # return the number of possible segments that meet the criteria

def birthday(s, d, m):
    for i in s:
        for x in range(m):
            if i[x + i]
    pass