#include <iostream>
using namespace std;

int main() {
    double a,b;
    cout.precision(1);
    cout << fixed;

    cin >> a >> b;
    cout << (a*b)/2 << "\n";

    return 0;
}