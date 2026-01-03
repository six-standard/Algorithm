#include <algorithm>
#include <iostream>
using namespace std;

int main() {
    int a[1000001],m,n,t;
    fill(a, a+1000001, 1);
    cin >> m >> n;
    a[0] = a[1] = 0;
    for(int i=2; i<=n; i++) {
        if(a[i]) {
            for(int j=i+i; j<=n; j+=i) {
                a[j]=0;
            }
        }
    }

    for(int i=m; i<=n; i++) {
        if(a[i]) {
            cout << i << "\n";
        }
    }
    
    return 0;
}