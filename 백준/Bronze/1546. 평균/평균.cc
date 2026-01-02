#include <algorithm>
#include <iomanip>
#include <vector>
#include <iostream>
using namespace std;

int main() {
    cout << fixed << setprecision(6);

    double a,b,r=0;
    vector<double> c;
    cin >> a;
    for(int i=0; i<a; i++) {
        cin >> b;
        c.push_back(b);
    }
    sort(c.begin(), c.end());
    for(int i=0; i<a; i++) {
        r+= c[i]/c[a-1]*100;
    }
    cout << r/a;
    
    return 0;
}