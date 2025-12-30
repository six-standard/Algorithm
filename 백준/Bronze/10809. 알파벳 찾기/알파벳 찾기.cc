#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    string s;
    vector<int> l(26, -1);

    cin >> s;

    for(int i=0; i<s.size(); i++) {
        if(l[int(s[i]) - 97] == -1) {
            l[int(s[i]) - 97] = i;
        }
    }

    for(int i=0; i<26; i++) {
        cout << l[i];
        if(i < 25) { cout << " "; }
    }
    cout << "\n";

    return 0;
}