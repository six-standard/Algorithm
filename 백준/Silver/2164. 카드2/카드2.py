import sys
from collections import deque

a = sys.stdin.readline()
cards = [i+1 for i in range(0, int(a))]
cards = deque(cards) #deque 함수를 이용하여 리스트를 큐나 스택처럼 사용할 수 있다.

while(len(cards)!=1):
    cards.popleft() #popleft(): 배열의 첫째 값을 지워주는 함수
    cards.append(cards.popleft())

print(cards[0])