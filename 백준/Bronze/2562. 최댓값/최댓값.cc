#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> n;
    int m;

    for(int i=0; i<9; i++) {
        cin >> m;
        n.push_back(m);
    }

    cout << *max_element(n.begin(), n.end()) << "\n" << max_element(n.begin(), n.end()) - n.begin() + 1 << "\n";

    return 0;
}