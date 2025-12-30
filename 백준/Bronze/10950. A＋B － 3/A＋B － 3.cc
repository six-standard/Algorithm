#include <iostream>
using namespace std;

int main() {
    cin.tie(0);
    ios::sync_with_stdio(false);
    
    int A,B,T;
    cin >> T;

    for(int L=0; L<T; L++) {
        cin >> A >> B;
        cout << A+B << "\n";
    }

    return 0;
}