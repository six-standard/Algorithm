t = int(input())
ret = [0 for i in range(4)]

for i in range(0, t):
    c = int(input())
    while(c!=0):
        if(c>=25): 
            c -= 25
            ret[0] += 1
        elif(c>=10): 
            c -= 10
            ret[1] += 1
        elif(c>=5): 
            c -= 5
            ret[2] += 1
        elif(c>=1): 
            c -= 1
            ret[3] += 1
    for i in ret: print(i, end=' ')
    ret = [0 for i in range(4)]