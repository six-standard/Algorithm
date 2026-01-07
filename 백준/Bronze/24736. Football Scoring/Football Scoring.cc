#include <iostream>
using namespace std;

int main() {
    int n[5], m[5];
    cin >> n[0] >> n[1] >> n[2] >> n[3] >> n[4] >> m[0] >> m[1] >> m[2] >> m[3] >> m[4];

    cout << n[0]*6 + n[1]*3 + n[2]*2 + n[3] + n[4]*2 << " ";
    cout << m[0]*6 + m[1]*3 + m[2]*2 + m[3] + m[4]*2 << "\n";
    return 0;
}