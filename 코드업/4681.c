//문제 : 고유번호의 처음 5자리의 숫자들을 입력 받아 검증수를 계산하는 프로그램을 작성하시오.
//입력 : 첫째 줄에 고유번호의 처음 5자리의 숫자들이 빈칸을 사이에 두고 하나씩 주어진다.
//출력 : 첫째 줄에 검증수를 출력한다.

#include <stdio.h>

int main() {
    int val, res=0;
    for(int i = 0; i<5; i++) {
        scanf("%d", &val);
        res += val*val;
    }
    printf("%d", res%10);
}