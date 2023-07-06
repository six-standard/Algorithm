//문제 : 열 개의 자연수가 주어질 때 이들의 평균과 최빈값을 구하는 프로그램을 작성하시오.
//입력 : 첫번째 줄부터 열번째 줄까지 1,000보다 작은 10의 배수가 주어진다.
//출력 : 첫째 줄에는 평균, 둘째 줄에는 최빈값이 주어진다.

#include <stdio.h>

int main() {
    int a = 0, tmp = 0;
    int most[101] = {0};
    int max = -1;
    int max_index = 0;
    for(int i = 0; i<10; i++) { 
        scanf("%d", &tmp); 
        a += tmp;
        most[tmp/10]++; 
    }
    printf("%d\n", a/10);
    for(int i = 1; i<=100; i++) {
       if(max<most[i]) {
            max = most[i];
            max_index = i;
       }
    }
    printf("%d", max_index*10);
}