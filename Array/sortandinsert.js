/*
 * @author Ahmed Emon
 * @Description: This code implements a custom array class that allows for inserting elements in sorted order.
 * It includes methods for pushing elements into the array and sorting the array after each insertion.
 * The array is initialized with a default capacity of 10, and an error is thrown if the array exceeds this capacity.
 * The sorting algorithm used is a simple bubble sort, which is not the most efficient for large datasets but serves the purpose for this example.
 */

class CustomArray{
    constructor(capacity = 10){
        this.capacity = capacity;
        this.length = 0;
        this.data = new Array(capacity);
    }
    
    
    push(value)
    {
        if(this.length === this.capacity){
            throw new Error("Array is out of bounds!");
        }
        
        this.data[this.length] = value;
        this.length++;
        
        this.sort();
        
        return;
    }
    
    /*
    * @Description: i just create this logic to sort the array but i don't even know that this is called bubble sort algorithm
    * @Time Complexity: O(n^2)
    * @Space Complexity: O(1)
    */
    sort()
    {
        for(let i = 0; i < this.length; i++)
        {
            for(let x = i +1; x <this.length; x++)
            {
                if(this.data[i] > this.data[x])
                {
                    let temp = this.data[i];
                    this.data[i] = this.data[x];
                    this.data[x] = temp;
                }
            }
        }
    }
    
    
    
}

const customArray = new CustomArray();

customArray.push(15);
customArray.push(2);
customArray.push(4);
customArray.push(1);
customArray.push(0);
customArray.push(8);
customArray.push(7);
customArray.push(5);
customArray.push(6);

console.log(customArray.data)
