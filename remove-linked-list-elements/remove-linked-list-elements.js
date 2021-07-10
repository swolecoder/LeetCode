/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head)return head;
    
    let c = new ListNode(-1);
    c.next = head;
    let ans =c;
    while(c){
        
        while(c && c.next && c.next.val == val)c.next = c.next.next
        
        c = c.next
    }
    
    return ans.next
};