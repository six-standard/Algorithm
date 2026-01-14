#include <iostream>

using namespace std;
int main() {
    int n, m, r;
    cin >> n >> m;
    r=10 + 2 * (25 - n + m);
    
    cout << (r < 0 ? 0 : r);

    return 0;
}