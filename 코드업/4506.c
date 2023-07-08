//문제 : 두개의 자연수를 입력받아 최대 공약수와 최소 공배수를 출력하는 프로그램을 작성하시오.
//입력 : 첫째 줄에 두 개의 자연수가 주어진다.
//출력 : 첫째 줄에는 입력으로 주어진 두 수의 최대공약수를, 둘째 줄에는 입력으로 주어진 두 수의 최소공배수를 출력한다.

#include <stdio.h>

int main() {
    int a, b, min, val;
    scanf("%d %d", &a, &b);
    min=a;
    if(min>b) min=b;
    for(int i=1; i<=min; i++) {
        if(a%i==0 && b%i==0) val=i;
    }
    printf("%d\n", val);
    printf("%d", (a*b)/val); // 최소공배수 구하는 법 : (값1*값2)/최대공약수
}