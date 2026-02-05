#include <bits/stdc++.h>
using namespace std;

int minTime(vector<char>& tasks, int n){
    vector<int> freq (26,0);
    for(char t:tasks){
        freq[t-'A']++;
    }
    int maxfreq= *max_element(freq.begin(), freq.end());
    int cntmax=0;

    for(int f:freq){
        if(f == maxfreq) cntmax++;
    }

    int total=tasks.size();
    int time=(maxfreq-1)*(n+1)+cntmax;
    return max(total, time);

}




int main(){
    vector<char> tasks = {'A', 'A', 'A', 'B', 'B', 'B'};
    int n = 2;

    cout<<minTime(tasks, n)<<endl;
    return 0;

}