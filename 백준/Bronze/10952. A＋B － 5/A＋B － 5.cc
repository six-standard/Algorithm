#include <iostream>
using namespace std;

int main() {
    cin.tie(0);
    ios::sync_with_stdio(false);
    int A,B;

    while(true) {
        cin >> A >> B;
        if(A==0&&B==0) return 0;
        cout << A+B << "\n";
    }
}