#include <iostream>
#include <ctime>
using namespace std;

int main(){
    time_t now = time(NULL);
    struct tm* t = localtime(&now);
    cout << "         ,r'\"7\n" << "r`-_   ,'  ,/\n" << " \\. \". L_r'\n" << "   `~\\/\n" << "      |\n" << "      |\n" << "\n";

    return 0;
}

