#include <iostream>
using namespace std;

int main() {
    int n,a,b;
    string r;
    cin >> n >> a >> b;

    // if(지하철==이동) {
    //     if(이동>버스) { r="Bus"; }
    //     else if (이동<버스) { r="Subway"; }
    //     else { r="Anything"; }
    // } else {
        if(a<b) { r="Bus"; }
        else if (a>b) { r="Subway"; }
        else { r="Anything"; }
    // }
    cout << r << "\n";

    return 0;
}