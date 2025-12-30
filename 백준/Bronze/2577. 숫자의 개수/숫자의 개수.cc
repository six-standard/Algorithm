#include <string>
#include <iostream>
using namespace std;

int main() {
    int a,b,c,l[10]={0,0,0,0,0,0,0,0,0, 0};
    string r;
    
    cin >> a;
    cin >> b;
    cin >> c;

    r = to_string(a*b*c);

    for(int i=0; i<r.size(); i++) {
        l[r[i] - 48]++;
    }

    for(int i=0; i<10; i++) {
        cout << l[i] << "\n";
    }

    return 0;
}