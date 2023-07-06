import sys

input = sys.stdin.readline

stack = []

a = int(input())

for i in range(a):
    b = input().split()
    if(b[0] == "push"):
        stack.append(b[1])
    if(b[0] == "pop"):
        print(-1 if not stack else stack.pop())
    if(b[0] == "size"):
        print(len(stack))
    if(b[0] == "empty"):
        print(0 if stack else 1)
    if(b[0] == "top"):
        print(stack[-1] if stack else -1)