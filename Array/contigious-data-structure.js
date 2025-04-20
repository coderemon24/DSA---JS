const CONSTANT_SIZE = 10;

class CustomArray{
    constructor(capacity = CONSTANT_SIZE){
        this.length = 0;
        this.data = new Array(capacity);
        this.capacity = capacity;
    }
    
    push(item)
    {
        if(this.capacity <= this.length)
        {
            throw new Error("Warning: Array is full");
        }
        
        this.data[this.length] = item;
        this.length++;
        return;
    }
    
    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    
    insert(index, item)
    {
        if(this.capacity <= this.length)
        {
            throw new Error("Warning: Array is full");
        }
        
        if(index >= this.length)
        {
            return this.push(item);
        }
        
        for(let i = this.length; i > index; i--)
        {
            this.data[i] = this.data[i - 1]; 
        }
        
        this.data[index] = item;
        this.length++;
        return;
    }
    
    remove(index, item)
    {
        if(index >= this.length || this.data[index] !== item)
        {
            throw new Error("Item not found");
        }
        
        for(let i = index; i < this.length - 1; i++)
        {
            this.data[i] = this.data[i + 1];
        }
        
        delete this.data[this.length - 1];
        
        this.length--;
        return;
    }
    
    update(index, item)
    {
        if(this.capacity <= this.length)
        {
            throw new Error("Warning: Array is full");
        }
        
        if(index >= this.length)
        {
            return this.push(item);
        }
        
        this.data[index] = item;
        return;
    }
}

const arr = new CustomArray();

arr.push(1);
arr.push(2);
arr.push(3);
arr.insert(1, 4);
arr.remove(1, 4);
arr.update(1, 5);
arr.update(3, 10);
console.log(arr);