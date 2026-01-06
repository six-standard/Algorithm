#include <iostream>
using namespace std;

int main() {
    int n,m,c[100],max=0;
    cin >> n >> m;
    for(int i=0; i<n; i++) {
        cin >> c[i];
    };

    for(int i=0; i<n; i++) {
        for(int j=i+1; j<n; j++) {
            for(int k=j+1; k<n; k++) {
                if(c[i]+c[j]+c[k] > max && c[i]+c[j]+c[k] <= m) {
                    max=c[i]+c[j]+c[k];
                }
            }
        }
    }

    cout << max << "\n";

    return 0;
}