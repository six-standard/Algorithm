#include <iostream>
#include <math.h>

using namespace std;

int main()
{
    long a;
    int b,c;
    cin.tie(NULL);
    ios::sync_with_stdio(false);

    cin >> a;

	for(int i=0; i<a; i++) {
        cin >> b >> c;
        cout << b+c << "\n";
    }

	return 0;
}