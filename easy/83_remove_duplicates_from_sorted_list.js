/*

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.


ex. Input: head = [1,1,2]
Output: [1,2]

Input: head = [1,1,2,3,3]
Output: [1,2,3]
*/

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const deleteDuplicates = (head) => {
  if (!head) return head;
  let current = head;

  while (current !== null && current.next !== null) {
    if (current.next.val === current.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}
let head = [1,1,2] // Output: [1,2]

console.log(deleteDuplicates(head));
