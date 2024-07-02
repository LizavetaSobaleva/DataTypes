function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let node1 = new ListNode()
node1.val = 1
let node2 = new ListNode()
node2.val = 2
let node3 = new ListNode()
node3.val = 1

node1.next = node2
node2.next = node3

function isPalindrome(head) {
    let list = []
    let current = head
    while (current) {
        list.push(current.val)
        current = current.next
    }
    return list.join('') === list.reverse().join('')
}

console.log(isPalindrome(node1))

console.log([1,4,3,5,6].sort((a,b) => a - b))