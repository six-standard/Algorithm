#include <algorithm>
#include <iostream>
using namespace std;

int main() {
    int l[43],r=0,a;
    fill_n(l, 43, -1);

    for(int i=0; i<10; i++) {
        cin >> a;
        l[a%42]=1;
    }

    for(int i=0; i<42; i++) {
        if(l[i] == 1) r++;
    }

    cout << r << "\n";

    return 0;
}