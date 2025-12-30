#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    vector<int> a(30, 1);
    
    for(int l=0; l<28; l++) {
        cin >> n;
        a[n-1] = 0;
    }

    for(int l=0; l<30; l++) {
        if(a[l] == 1) { cout << l+1 << "\n"; }
    }

    return 0;
}