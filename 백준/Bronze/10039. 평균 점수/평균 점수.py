res = 0

for i in range(0, 5):
  a = int(input())
  if(a >= 40): 
    res = res + a
  else:
    res = res + 40

print(int(res/5))