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
    this.length = 0
  }
   traverse(index)
  {
    let counter = 0
    let currentNode = this.head
    while(counter !== index)
      {
        currentNode = currentNode.next
        counter++
      }
    return currentNode  
  }
  append(value)
  {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
  }
  prepand(value)
  {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length++
  }
  
  printList()
  {
    
    let currentNode = this.head
    while(currentNode != null)
    {
        console.log(currentNode.value)    
        currentNode = currentNode.next
    }
  }
  
  insert(index, value)
  {
    if(index>= this.length)
    {
      this.append(value)    
    }
    let currentNode = this.head
    let currentIndex = 0
    while(currentNode != null)
    {
        if(currentIndex == index) 
         {
           let next = currentNode.next
           let newNode = new Node(value)
           currentNode.next = newNode
           newNode.next = next
           this.length++
          break   
         }
        currentIndex++;
        currentNode = currentNode.next
    }
  }
  
  remove(index) 
  {
    let currentNode = this.head
    let currentIndex = 0
    let previous = null
    currentNode = this.traverse(index-1)
    let unwantedNode = currentNode.next
    currentNode.next = unwantedNode.next
    this.length--
  }
 
}

const myLinkedList = new LinkedList(10)

myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepand(1)
myLinkedList.insert(2, 15)
myLinkedList.insert(200, 200)
myLinkedList.remove(5)

myLinkedList.printList()
