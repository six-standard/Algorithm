#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    string s(n, ' ');
    
    for(int i=n-1; i>=0; i--) {
        s[i] = '*';
        cout << s << "\n";
    }

    return 0;
}