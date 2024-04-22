#include <stdio.h>

int main() {
    int a, res = 0;
    scanf("%d", &a);
    int b[a];
    for(int i = 0; i<a; i++) { scanf("%d", &b[i]); }
    for(int i = 0; i<a; i++) {
        for(int j = 0; j<a-1; j++) {
            if(b[j]>b[j+1]) {
                int tmp = b[j+1];
                b[j+1] = b[j];
                b[j] = tmp;
            }
        }
    }
    for(int i = 0; i<a; i++) { 
        res += b[i]*(a-i);
    }
    
    printf("%d", res);
    return 0;
}