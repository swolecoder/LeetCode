/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    
    if(!l1)return l2;
    if(!l2)return l1;
    
     let dummyNode = new ListNode(-1);
    let result = dummyNode;
    
    
    while(l1 && l2){
        
        if(l1.val > l2.val){
            dummyNode.next = new ListNode(l2.val);
            dummyNode = dummyNode.next;
            l2 = l2.next;
            
        }else if(l2.val > l1.val){
            dummyNode.next = new ListNode(l1.val);
            dummyNode = dummyNode.next;
            l1 = l1.next;
        }else{
            dummyNode.next = new ListNode(l1.val);
            dummyNode = dummyNode.next;
            l1 = l1.next;
            
            dummyNode.next = new ListNode(l2.val);
            dummyNode = dummyNode.next;
            l2 = l2.next;
        }
 
    }
    
    if(l1)dummyNode.next = l1;
    if(l2)dummyNode.next = l2;
    
    return result.next;
    
};