import sys
input = sys.stdin.readline

n = int(input())

for i in range(0, n):
    words = input().split()
    words.reverse()
    print(f"Case #{i+1}: {' '.join(words)}")