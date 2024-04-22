#include <stdio.h>
#include <string.h>

int main() {
    int a, cnt=0;
    scanf("%d", &a);
    while(1) {
        if(a%5==0) {
            cnt += (a/5);
            printf("%d", cnt);
            return 0;
        }
        a -= 3;
        cnt++;
        if(a<=0) { break; } 
    }
    if(a<0) { printf("-1"); }
    else { printf("%d", cnt); }
}
