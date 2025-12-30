#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n,m;
    vector<int> l;

    cin >> n;
    for(int i=0; i<n; i++) {
        cin >> m;
        l.push_back(m);       
    }

    cout << *min_element(l.begin(), l.end()) << " " << *max_element(l.begin(), l.end());

    return 0;
}