#include <cstdio>
#include <iostream>
using namespace std;

int main() {
    int n,m,l;
    cin >> n;

    for(int i=0; i<n; i++) {
        cin >> m >> l;
        printf("Case #%d: %d + %d = %d\n", i+1, m, l, m+l);
    }

    return 0;
}