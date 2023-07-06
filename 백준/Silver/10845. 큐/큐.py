import sys
input = sys.stdin.readline
queue = []

a = int(input())

for i in range(a):
    b = input().split()
    if(b[0] == "push"):
        queue.append(b[1])
    if(b[0] == "pop"):
        print(-1 if not queue else queue.pop(0))
    if(b[0] == "size"):
        print(len(queue))
    if(b[0] == "empty"):
        print(0 if queue else 1)
    if(b[0] == "front"):
        print(queue[0] if queue else -1)
    if(b[0] == "back"):
        print(queue[-1] if queue else -1)