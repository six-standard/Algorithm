//문제 : 7개의 자연수들 중 홀수들의 합과 최솟값을 찾는 프로그램을 작성하시오
//입력 : 첫째 줄부터 일곱 번째 줄까지 자연수가 주어진다.
/*출력 : 홀수가 존재하지 않는 경우에는 -1
존재하는 경우에는 첫째 줄에 홀수들의 합, 둘째 줄에 홀수들 중 최솟값을 출력한다.*/

#include <stdio.h>

int main() {
    int tmp, result = 0, min = 100;
    for(int i = 0; i<7; i++) {
        scanf("%d", &tmp);
        if(tmp%2!=0) { 
            result += tmp;
            if(min>tmp) min = tmp; 
        }
    }
    printf("%d\n%d", result, min);
}