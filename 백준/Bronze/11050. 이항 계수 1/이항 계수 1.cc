#include <iostream>
using namespace std;

long long f(int n) {
    long long r=1;
    for(int i=1; i<=n; i++) r*=i;
    return r;
};


int main() {
    int n,k;
    cin >> n >> k;
    cout << f(n)/(f(k)*f(n-k)) << "\n";
    return 0;
}