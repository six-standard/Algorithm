#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n,t,v;
    int c = 0;
    cin >> n;
    vector<int> a;

    for(int l=0; l<n; l++) {
        cin >> t;
        a.push_back(t);
    }

    cin >> v;

    for(int l=0; l<n; l++) {
        if(a[l] == v) c++;
    }

    cout << c;

    return 0;
}