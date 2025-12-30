#include <iostream>
#include <ctime>
using namespace std;

int main(){
    time_t now = time(NULL);
    struct tm* t = localtime(&now);
    cout << "\\    /\\\n" << " )  ( ')\n" << "(  /  )\n" << " \\(__)|" << "\n";

    return 0;
}