#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    int t,h,w,n;
    cin >> t;
    for(int i = 0; i<t; i++) {
        cin >> h >> w >> n;
        cout << (n%h == 0 ? h : n%h) << setw(2) << setfill('0') << (n%h == 0 ? n/h : n/h+1) << "\n";
    }
    return 0;
}

