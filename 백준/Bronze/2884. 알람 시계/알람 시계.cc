#include <iostream>
using namespace std;

int main() {
    int h,m;
    cin >> h >> m;
    m += 45;
    if(m<=60) { h-=1;m-=30; } 
    else {
        if(m < 90) { h-=1;m=m%60+30; }
        else { m=m%60-30; }
    }
    if(h < 0) { h+=24; }
    cout << h << " " << m << "\n";
    return 0;
}

// m에 45를 더했을 때
// 60보다 적거나 같은 경우 H-1 M-30
// 60보다 많은 경우 
    // 90보다 적은 경우 H-1 M%60+30
    // 90보다 많은 경우 M%60-30