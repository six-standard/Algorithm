#include <iostream>
#include <stdio.h>
#include <vector>
using namespace std;

int main() {
    int n,x,t;
    vector<int> a;
    cin >> n >> x;

    for(int l=0; l<n; l++) {
        cin >> t;
        a.push_back(t);
    }

    for(int l=0; l<n; l++) {
        if(a[l] < x) { cout << a[l] << " "; }
    }

    return 0;
}