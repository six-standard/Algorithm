#include <iostream>
using namespace std;

int main() {
    int n,r;
    string s,p;

    cin >> n;
    for(int i=0; i<n; i++) {
        cin >> r >> s;
        for(int j=0; j<s.size(); j++) {
            for(int k=0; k<r; k++) {
                cout << s[j];
            }
        }
        cout << "\n";
    }

    return 0;
}