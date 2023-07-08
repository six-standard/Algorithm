/*문제 :  개 윷짝을 던져서 나온 각 윷짝의 배 혹은 등 정보가 주어질 때 도(배 한 개, 등 세 개), 개(배 두 개, 등 두 개), 걸(배 세 개, 등 한 개), 윷(배 네 개), 모(등 네 개) 중 
어떤 것인지를 결정하는 프로그램을 작성하라.*/
//입력 : 첫째 줄부터 셋째 줄까지 각 줄에 각각 한 번 던진 윷짝들의 상태를 나타내는 네 개의 정수(0 또는 1)가 빈칸을 사이에 두고 주어진다.
//출력 : 첫째 줄부터 셋째 줄까지 한 줄에 하나씩 결과를 도는 A, 개는 B, 걸은 C, 윷은 D, 모는 E로 출력 한다.

#include <stdio.h>

int main() { //배 : 0, 등: 1
    int yoot[4], res;
    for(int i = 0; i<3; i++) {
        scanf("%d %d %d %d", &yoot[0], &yoot[1], &yoot[2], &yoot[3]);
        res = yoot[0]+yoot[1]+yoot[2]+yoot[3];
        if(res==3) printf("A\n"); //도 (배1등3)
        else if(res==2) printf("B\n"); //개 (배2등2, res=2)
        else if(res==1) printf("C\n"); //걸 (배3등1, res=1)
        else if(res==0) printf("D\n"); //윷 (배4, res=0)
        else printf("E\n"); //모 (등4)
    }
}