#include <iostream>
#include <vector>
using namespace std;

int main() {
    int N = 0, K = 0;
    cin >> N >> K;
    vector<int> dp(K+1, 0);
    int coins[100];
    dp[0] = 1;
    
    for(int i = 0; i<N; i++) { cin >> coins[i]; }

    for(int i = 0; i<N; i++) {
        for(int j = coins[i]; j<=K; j++) { dp[j] += dp[j - coins[i]]; }
    }

    cout << dp[K] << '\n';
}