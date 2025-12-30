#include <stdio.h>
#include <ctime>
using namespace std;

int main(){
    time_t now = time(NULL);
    struct tm* t = localtime(&now);
    printf("%d-%d-%d", t->tm_year+1900, t->tm_mon+1, t->tm_mday);

    return 0;
}