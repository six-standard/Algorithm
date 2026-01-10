#include <iostream>
#include <set>
#define FASTIO ios_base::sync_with_stdio(false); cin.tie(NULL);
using namespace std;

int main() {
    FASTIO;
    int n;
    cin >> n;
    set<int> s;
    
    for(int i = 0; i < n; i++) {
        int num;
        cin >> num;
        s.insert(num);
    }
    
    cin >> n;
    for(int i = 0; i < n; i++) {
        int num;
        cin >> num;
        cout << (s.count(num) ? 1 : 0) << "\n";
    }
    
    return 0;
}