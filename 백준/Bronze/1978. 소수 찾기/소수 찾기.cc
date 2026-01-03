#include <algorithm>
#include <iostream>
using namespace std;

int main() {
    int a[1001],n,m,c=0;
    fill(a, a+1001, 1);
    a[0] = a[1] = 0;
    for(int i=2; i<=1001; i++) {
        if(a[i]) for(int j=i+i; j<=1000; j+=i) {
            if(a[j]) a[j]=0;
        }
    }

    cin >> n;
    for(int i=0; i<n; i++) {
        cin >> m;
        if(a[m]) {
            c++;
        }
    }

    cout << c << "\n";
    
    return 0;
}