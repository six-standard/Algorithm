#include <iostream>
#include <ctime>
using namespace std;

int main(){
    time_t now = time(NULL);
    struct tm* t = localtime(&now);
    cout << "|\\_/|\n" << "|q p|   /}\n" << "( 0 )\"\"\"\\\n" << "|\"^\"`    |\n" << "||_/=\\\\__|" << "\n";

    return 0;
}