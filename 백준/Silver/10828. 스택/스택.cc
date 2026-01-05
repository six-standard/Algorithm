#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    vector<int> p;
    int a[10000];

    cin >> n;
    for(int i=0; i<n; i++) {
        string c;
        cin >> c;
        
        if(c=="push") {
            int m;
            cin >> m;
            p.push_back(m);
        } else if(c=="pop") {
            if(p.size() > 0) {
                cout << p[p.size()-1] << "\n";
                p.pop_back();
            } else {
                cout << -1 << "\n";
            }
        } else if(c=="size") {
            cout << (p.size()) << "\n";
        } else if(c=="empty") {
            cout << (p.size() == 0 ? 1 : 0) << "\n";
        } else if(c=="top") {
            cout << (p.size() ? p[p.size()-1] : -1) << "\n";
        }
    }

    return 0;
}