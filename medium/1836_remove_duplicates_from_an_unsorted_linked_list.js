/*

Given the head of a linked list, find all the values that appear more than once in the list and delete the nodes that have any of those values.

Return the linked list after the deletions.

Input: head = [1,2,3,2]
Output: [1,3]
Explanation: 2 appears twice in the linked list, so all 2's should be deleted. After deleting all 2's, we are left with [1,3].

*/

const deleteDuplicatesUnsorted = (head) => {
  let numbersSeen = {};
  let current = head;

  while (current) {
    if (!numbersSeen[current.val]) {
      numbersSeen[current.val] = 1;
    } else {
      numbersSeen[current.val]++;
    }
    current = current.next;
  }


  let dummyHead = new listNode(0, head);
  current = dummyHead;
  while(current) {
    while(current.next && numbersSeen[current.next.val] > 1) {
      current.next = current.next.next;
    }
    current = current.next;
  }

  return dummyHead.next;
}
