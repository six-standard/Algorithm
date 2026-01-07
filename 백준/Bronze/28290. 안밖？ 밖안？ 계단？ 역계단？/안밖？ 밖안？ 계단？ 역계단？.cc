#include <iostream>
using namespace std;

int main() {
    string n;
    
    cin >> n;
    if(n == "fdsajkl;" || n == "jkl;fdsa") {
        cout << "in-out";
    } else if(n == "asdf;lkj" || n == ";lkjasdf") {
        cout << "out-in";
    } else if(n == "asdfjkl;") {
        cout << "stairs";
    } else if(n == ";lkjfdsa") {
        cout << "reverse";
    } else {
        cout << "molu";
    }

    return 0;
}