const CONSTANT_SIZE = 10;

class CustomArray{
    constructor(capacity = CONSTANT_SIZE){
        this.length = 0;
        this.data = new Array(capacity);
    }
    
    push(item)
    {
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
}

const arr = new CustomArray();

arr.push(1);
arr.push(2);
arr.push(3);
arr.insert(1, 4);
arr.remove(5, 4);
console.log(arr);