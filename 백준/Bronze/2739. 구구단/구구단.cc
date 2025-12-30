#include <iostream>
#include <stdio.h>
using namespace std;

int main() {
    int A;
    cin >> A;

    for(int L=1; L<=9; L++) {
        printf("%d * %d = %d\n", A, L, A*L);
    }
}