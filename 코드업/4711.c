/*문제 : 4개의 역에 대해 기차에서 내린 사람 수와 탄 사람 수가 주어졌을 때
기차에 사람이 가장 많을 때의 사람 수를 계산하는 프로그램을 작성하시오.*/
//입력 : 각 역에서 내린 사람 수와 탄 사람 수가 빈칸을 사이에 두고 첫째 줄부터 넷째 줄까지 역 순서대로 한 줄에 하나씩 주어진다. 
//출력 : 첫째 줄에 최대 사람 수를 출력한다.  

#include <stdio.h>

int main() {
    int minus, plus, max=0, res=0;
    for(int i = 0; i<10; i++) {
        scanf("%d %d", &minus, &plus);
        res = res - minus + plus;
        if(res>max) max = res;
    }
    printf("%d", max);
}