#include <iostream>
#include <string>
using namespace std;

int main() {
    int n,m=0,x;
    string c;

    cin >> n;
    cin >> c;

    for(int i=0; i<n; i++) {
        m += c[i] - '0';
    }

    cout << m;

    return 0;
}