import sys
input = sys.stdin.readline
deque = []

a = int(input())

for i in range(a):
    b = input().split()
    if(b[0] == "push_front"):
        deque.insert(0, b[1])
    if(b[0] == "push_back"):
        deque.append(b[1])
    if(b[0] == "pop_front"):
        print(-1 if not deque else deque.pop(0))
    if(b[0] == "pop_back"):
        print(-1 if not deque else deque.pop(-1))
    if(b[0] == "size"):
        print(len(deque))
    if(b[0] == "empty"):
        print(0 if deque else 1)
    if(b[0] == "front"):
        print(deque[0] if deque else -1)
    if(b[0] == "back"):
        print(deque[-1] if deque else -1)