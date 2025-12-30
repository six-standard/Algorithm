#include <iostream>
using namespace std;

int main() {
    int a;
    long long z = 1;
    cin >> a;

    if(a == 0) {z=1;}
    else for(int b=1; b<=a; b++) { z *= b; }

    cout << z << endl;
    return 0;
}