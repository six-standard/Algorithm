n = list(input().upper())
words = [0 for i in range(26)]
for i in range(0, len(n)):
    words[ord(n[i])-65] += 1
newords = sorted(words, reverse=True)
print(chr(words.index(max(words))+65) if newords[0] != newords[1] else '?')