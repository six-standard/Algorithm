#include <iostream>
using namespace std;

int main() {
    string c;

    cin >> c;

    for(int i=0; i<c.size(); i++) {
        if(isupper(c[i])) {
            c[i] = tolower(c[i]);
        } else if (islower(c[i])) {
            c[i] = toupper(c[i]);
        }
    }

    cout << c << "\n";

    return 0;
}