class Book {
    constructor(nombre,isbn,author,editorial){
        this.nombre =nombre;
        this.isbn = isbn;
        this.author= author;
        this.editorial= editorial;
    }
    toString() {
        return `${this.nombre} por ${this.author}, ISBN: ${this.isbn}, Editorial: ${this.editorial}`;
    }
}
class Stack {
    constructor() {
        this.stack = {};
        this.count = 0;
    }
    push(element) {
        this.stack[this.count] = element;
        this.count++;
        return this.stack;
    }

    pop() {
        this.count--;
        const element = this.stack[this.count];
        delete this.stack[this.count];
        return element;
    }

    peek() {
        return this.stack[this.count - 1];
    }

    size() {
        return this.count;
    }

    print() {
        console.log('------------------------------');
        console.log('Los libros registrados son:');
        console.log('------------------------------');
        for (let i = 0; i < this.count; i++) {
            console.log(`${i + 1}: ${this.stack[i].toString()}`);
        }
        console.log('------------------------------');
    }
}



let Exp = new Stack();
const book1 = new Book("To Kill a Mockingbird", "978-0-06-112008-4", "Harper Lee", "J.B. Lippincott & Co.");
const book2 = new Book("1984", "978-0-452-28423-4", "George Orwell", "Secker & Warburg");
const book3 = new Book("Pride and Prejudice", "978-0-19-953556-9", "Jane Austen", "T. Egerton");


Exp.push(book1);
Exp.push(book2);
Exp.push(book3);


console.log(Exp.print(),"El tamaño es", Exp.size())



