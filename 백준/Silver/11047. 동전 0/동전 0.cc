#include <stdio.h>

int main() {
    int a, b, i, cnt=0;
    int c[10];
    scanf("%d %d", &a, &b);
    i = a - 1;
    for(int i = 0; i<a; i++) { scanf("%d", &c[i]); }
    while (b > 0) {
        if (c[i] > b) { i--; }
        else { b = b - c[i]; cnt++; }
    }
    printf("%d", cnt);
    return 0;
}