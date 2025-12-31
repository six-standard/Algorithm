#include <algorithm>
#include <iostream>
using namespace std;

int main() {
    int a[3],r;
    cin >> a[0] >> a[1] >> a[2];
    sort(a, a+3);
    if(a[2] < a[0]+a[1]) {
        r= a[2]+a[0]+a[1];
    } else {
        r=(a[0]+a[1]-1)+a[0]+a[1];
    }

    cout << r << "\n";

    return 0;
}