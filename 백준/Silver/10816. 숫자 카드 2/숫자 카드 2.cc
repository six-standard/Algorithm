#include <iostream>
#include <unordered_map>
#define FASTIO ios_base::sync_with_stdio(false); cin.tie(NULL);

using namespace std;
int main() {
    FASTIO;
    int n, m;
    unordered_map<int, int> k;
    
    cin >> n;
    for(int i=0; i<n; i++) {
        cin >> m;
        k[m]++;
    }

    cin >> n;
    for(int i=0; i<n; i++) {
        cin >> m;
        cout << k[m] << " ";
    }

    return 0;
}