//문제 : 훈제오리구이를 시작하는 시각과 오븐구이를 하는 데 필요한 시간이 초 단위로 주어졌을 때, 오븐구이가 끝나는 시각을 계산하는 프로그램을 작성하시오.
/*입력 : 입력파일의 첫 째 줄에는 현재 시각이 나온다. 
현재 시각은 시 A (0<=A<=23) , 분 B (0<=B<=59) 와 초 C (0<=C<=59) 가 정수로 빈칸을 사이에 두고 순서대로 주어진다. 
두 번째 줄에는 요리하는 데 필요한 시간 D (0<=D<=500,000)가 초 단위로 주어진다.*/
//출력 : 첫째 줄에 종료되는 시각의 시, 분, 초을 공백을 사이에 두고 출력한다. 

#include <stdio.h>

int main() {
    int hour, minute, second, time;
    scanf("%d %d %d", &hour, &minute, &second);
    scanf("%d", &time);
    int newh = (time/60)/60, newm = (time/60)%60, news = time%60; //% : 초, / : 분
    printf("%d %d %d", newh, newm, news); ///% : 초, / : 분
    if (news+second>=60) { //1. 초 계산
        second = news+second-60;
        minute++;
    } else second += news;
    if (newm+minute>=60) { //2. 분 계산
        minute = newm+minute-60;
        hour++;
    } else minute += newm;
    if (newh+hour)
}