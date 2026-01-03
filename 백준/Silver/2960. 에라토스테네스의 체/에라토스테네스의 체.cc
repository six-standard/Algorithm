#include <algorithm>
#include <iostream>
using namespace std;

int main() {
    int a[1000001],m,n;
    fill(a, a+1000001, 1);
    cin >> m >> n;
    a[0] = a[1] = 0;
    for(int i=2; i<=m; i++) {
        if(a[i]) {
            for(int j=i; j<=m; j+=i) {
                if(a[j]) {
                    a[j]=0;
                    if(--n <= 0) {
                        cout << j << "\n";
                        return 0;
                    }
                }
            }
        }
    }
    
    return 0;
}