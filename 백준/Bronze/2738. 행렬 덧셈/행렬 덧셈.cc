#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> a;
    int n,m,num;
    cin >> n >> m;

    while(cin >> num) {
        a.push_back(num);
    }

    for(int i=0; i<n; i++) {
        for(int j=0; j<m; j++) {
            cout << a[(i*m)+j] + a[(n*m)+(i*m)+j];
            if(j<m-1) cout << " ";
        }   
        cout << "\n";
    }
    return 0;
}