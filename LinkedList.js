class Node{
  constructor(value)
  {
    this.value = value
    this.next = null
  }
}
class LinkedList 
{
  constructor(value)
  {
    this.head = {
      value: value,
      next: null
    } 
    this.tail = this.head
  }
  
  append(value)
  {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
  }
  prepand(value)
  {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
  }
  
}

const myLinkedList = new LinkedList(10)

myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepand(1)
console.log("1", myLinkedList)
