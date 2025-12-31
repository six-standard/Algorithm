#include <iostream>
using namespace std;

int main() {
    string a;

    while(cin >> a) {
        if(a == "end") { break; }
        else if(a == "animal") { cout << "Panthera tigris" << "\n"; }
        else if(a == "tree") { cout << "Pinus densiflora" << "\n"; }
        else if(a == "flower") { cout << "Forsythia koreana" << "\n"; }
    }

    return 0;
}