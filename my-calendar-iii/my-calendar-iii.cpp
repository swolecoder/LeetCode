class MyCalendarThree {
public:
    MyCalendarThree() {
      
    }
      map<int, int> mp;
    int book(int start, int end) {
        
        mp[start]++;
        mp[end]--;
        
        auto count = 0;
        auto ans = 0;
        
        for(auto i = mp.begin(); i != mp.end(); i++){
            count += i->second;
            ans = max(ans, count);
        }
        
        
        return ans;
        
    }
};

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * MyCalendarThree* obj = new MyCalendarThree();
 * int param_1 = obj->book(start,end);
 */