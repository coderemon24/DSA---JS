class Node{
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}


class SinglyLinkedList{
    constructor()
    {
        this.head = null;
        this.size = 0;
    }
    
    append(data)
    {
        const newNode = new Node(data);
        
        if(this.head == null)
        {
            this.head = newNode;
            this.size++;
            return;
        }
        
        let current = this.head;
        while(current.next)
        {
            current = current.next;
        }
        current.next = newNode;
        this.size++;

    }
    
    prepend(data)
    {
        const newNode = new Node(data);
        
        if(this.head == null)
        {
            this.head = newNode;
            this.size++;
            return;
        }
        
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
        return;
    }
    
    insert(index, data)
    {
        const newNode = new Node(data);
        let current = this.head;
        let previous = null;
        
        let count = 0;
        while(count < index)
        {
            previous = current;
            current = current.next;
            count++;
        }
        
        previous.next = newNode;
        newNode.next = current;
        this.size++;
    }
    
    
}

let list = new SinglyLinkedList();
list.append(10);
list.append(20);
list.append(50);

list.prepend(5);
list.prepend(15);

list.insert(2, 25);
list.insert(3, 30);

console.log(JSON.stringify(list, null, 2)); 