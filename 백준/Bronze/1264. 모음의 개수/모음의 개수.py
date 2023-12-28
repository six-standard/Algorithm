while(1):
    n = input();
    if(n == "#"): break
    else:
        count = 0;
        for i in n:
            i = i.lower()
            if(i=='a' or i=='e' or i=='i' or i=='o' or i=='u'):
                count += 1
        print(count)