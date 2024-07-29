class ListNode{
    constructor(val, next = null){
        this.val = val
        this.next = next
    }
}

let node1 = new ListNode(2)
let node2 = new ListNode(4)
node1.next = node2

const list = {
    'node1':{
        'val':node1.val,
        'next':{
            'val':node2.val,
            'next':node2.next
        }
    }
}

console.table(list)