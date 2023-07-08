/*문제 : N명 학생들의 점수가 주어졌을 때, 가낭 높은 점수와
가장 낮은 점수의 차이를 구하는 프로그램을 작성하시오*/ 
//입력 : 첫 번째 줄에는 학생 수 N이 주어진다.
//출력 : 가장 높은 점수와 가장 낮은 점수의 차이를 출력한다.

#include <stdio.h>

int main() {
    int students = 0, score, max = 0, min = 1000;
    scanf("%d", &students);
    for(int i = 0; i<students; i++) {
        scanf("%d", &score);
        if(max<score) max = score;
        if(min>score) min = score;
    }
    printf("%d", max-min);
}