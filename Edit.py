books = int(input())
fun = 0
bookInfo = [list(map(int, input().split())) for _ in range(books)]
print(bookInfo)

i = 0
while True:
    try:
        if fun-bookInfo[i][0] + bookInfo[i][1] >= 0:
            fun -= bookInfo[i][0]
            fun += bookInfo[i][1]
            bookInfo.pop(i)
    except:
        print(bookInfo, i)
        break
    else:
        i += 1


'''
[[0, 2], [1, 1]] pop
[[1, 3]] 

'''
