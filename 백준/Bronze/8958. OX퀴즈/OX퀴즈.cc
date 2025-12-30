#include <iostream>
using namespace std;

int main() {
    string s;
    int n,c=0,r=0;

    cin >> n;

    for(int i=0; i<n; i++) {
        cin >> s;
        c=0,r=0;
        for(int j=0; j<s.size(); j++) {
            if (s[j] == 'O') {
                c++,r+=c;
            } else {
                c = 0;
            }
        }
        cout << r << "\n";
    }

    return 0;
}