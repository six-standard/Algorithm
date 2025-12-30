#include <iostream>
using namespace std;

int main() {
    string c;
    float p = 5;
    cout << fixed;
    cout.precision(1);


    cin >> c;

    if(c[0] == 'F') cout << 0.0;
    else {
        switch(c[0]) {
            case 'A':
                p -= 0;
                break;
            case 'B':
                p -= 1;
                break;
            case 'C':
                p -= 2;
                break;
            case 'D':
                p -= 3;
                break;
        }
        switch(c[1]) {
            case '+':
                p -= 0.7;
                break;
            case '0':
                p -= 1;
                break;
            case '-':
                p -= 1.3;
                break;
        }
        cout << p << "\n";
    }

    return 0;
}