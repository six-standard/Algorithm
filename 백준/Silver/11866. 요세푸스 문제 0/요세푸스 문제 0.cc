#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n,k;
    int a[1000];
    cin >> n >> k;
    int s=k-1;
    vector<int> b;
    fill(a, a+n+1, 1);

    for(int i=0;;i=(i+1>n-1 ? 0:i+1)) {
        if(a[i]) {
            if(s>0) { s--; }
            else { a[i]=0; s=k-1; b.push_back(i+1); }
        }
        if(b.size() == n) { break; }
    }
    
    cout << "<";
    for(int i=0; i<n; i++) {
        cout << b[i] << (i == n-1 ? "" : ", ");
    }
    cout << ">" << "\n";
    return 0;
}