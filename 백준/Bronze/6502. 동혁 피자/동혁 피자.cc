#include <cstdio>
#include <iostream>
using namespace std;

int main() {
    int n,m,l,i=0;

    while(cin >> n) {
        if(n == 0) { 
            break; 
        }
        cin >> m >> l;
        printf(4 * n * n >= m*m+l*l ? "Pizza %d fits on the table.\n" : "Pizza %d does not fit on the table.\n", ++i);
    }

    return 0;
}