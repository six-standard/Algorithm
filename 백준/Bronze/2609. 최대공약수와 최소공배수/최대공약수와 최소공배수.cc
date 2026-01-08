#include <iostream>
using namespace std;

int main() {
    int n,m,t0,t1,t2;

    cin >> n >> m;
    t1=n;
    t2=m;
    while(t2!=0) {
        t0 = t2;
        t2 = t1%t2;
        t1=t0;
    }

    cout << t1 << "\n" << n*m/t1 << "\n";

    return 0;
}