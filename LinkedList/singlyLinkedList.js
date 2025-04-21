class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList{
    
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(data){
        const newNode = new Node(data);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        
        return;
    }
    
    pop(){
        if(this.length === 0) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    
    shift(){
        if(this.length === 0) return undefined;
        const currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);

list.shift();

console.log(JSON.stringify(list, null, 2));