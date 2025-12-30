#include <iostream>
#include <stdio.h>
using namespace std;

int main() {
    string s = "";
    int A;
    cin >> A; 

    for(int l=0; l<A; l++) {
        s += "*";
        cout << s << "\n";
    }
    
    return 0;
}