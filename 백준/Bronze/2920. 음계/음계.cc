#include <iostream>
using namespace std;

int main() {
    int l[8];
    string s;
    cin >> l[0] >> l[1] >> l[2] >> l[3] >> l[4] >> l[5] >> l[6] >> l[7];

    for(int i=0; i<7; i++) {
        if(l[i+1] == l[i]+1) {
            s="ascending";
        } else if (l[i+1] == l[i]-1) {
            s="descending";
        } else {
            s="mixed";
            break;
        }
    }

    cout << s << "\n";

    return 0;
}