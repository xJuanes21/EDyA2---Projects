class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(element) {
        this.queue.push(element);
        return this.queue;
    }

    dequeue() {
        return this.queue.shift();
    }

    peek() {
        return this.queue[0];
    }

    size() {
        return this.queue.length;
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    print() {
        return this.queue;
    }
}

class Person{
    constructor(name, arrive){
        this.name= name ;
        this.arrive= arrive;
    }
    toString() {
        return `Name: ${this.name}, Arrive: ${this.arrive}`;
    }
}

const ATM = new Queue();
const person1 = new Person("Alice", "08:00 AM");
const person2 = new Person("Bob", "08:40 AM");
const person3 = new Person("Charlie", "08:30 AM");


ATM.enqueue(person1);
ATM.enqueue(person2);
ATM.enqueue(person3);


console.log(ATM.print());
console.log("Al retornarme mediante peek no seré eliminado", ATM.peek(),"\n Al retornarme mediante dequeue seré eliminado :(", ATM.dequeue())
console.log(ATM.print());