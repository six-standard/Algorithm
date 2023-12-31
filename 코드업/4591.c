//문제 : 9개의 서로 다른 자연수가 주어질 때, 이들 중 최대값을 찾고 그 최대값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.
//입력 : 첫 째 줄부터 아홉 번째 줄까지 한 줄에 하나의 자연수가 주어진다. 주어지는 자연수는 100보다 작다.
//출력 : 첫째 줄에 최대값을 출력하고, 둘째 줄에 최대값이 몇 번째 수인지를 출력한다.

#include <stdio.h>

int main() {
    int val, max[2] = {0, 0};
    for(int i=0; i<9; i++) {
        scanf("%d", &val);
        if(val>max[0]) { max[0]=val; max[1]=i; }
    }
    printf("%d\n%d", max[0], max[1]+1);
}