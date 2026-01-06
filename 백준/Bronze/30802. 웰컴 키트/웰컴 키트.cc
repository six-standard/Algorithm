#include <iostream>
using namespace std;

int main() {
    int n,s[6],t,p,sum[3];
    sum[0]=0;

    cin >> n >> s[0] >> s[1] >> s[2] >> s[3] >> s[4] >> s[5] >> t >> p;

    for(int i=0; i<6; i++) {
        sum[0]+=s[i]/t + (s[i]%t ? 1 : 0);
    }

    sum[1] = n/p;
    sum[2] = n%p;

    cout << sum[0] << "\n" << sum[1] << " " << sum[2] << "\n";

    return 0;
}