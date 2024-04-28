class LinkedList 
{
  constructor(value)
  {
    this.head = {
      value: value,
      next:null
    } 
    this.tail = this.head
  }
  
  append(value)
  {
    const newNode = {
      value:value,
      next:null
    }
    this.tail.next = newNode
    this.tail = newNode
  }
  
}

const myLinkedList = new LinkedList(10)

console.log(myLinkedList)
myLinkedList.append(5)
console.log(myLinkedList)
myLinkedList.append(16)
console.log("2", myLinkedList)
