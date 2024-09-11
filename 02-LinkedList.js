class Node {
    constructor(title, descp) {
        this.title = title;
        this.descp = descp;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;  // Añadido para contar el tamaño de la lista
    }

    // Método 1: Append
    append(title, descp) {
        let newNode = new Node(title, descp);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;  
    }

    // Método 2: Peek
    peek(title, current = this.head) {
        if (!current) return false;
        if (current.title === title) return true;
        return this.peek(title, current.next);
    }

    // Método 3: Size
    size() {
        return this.length;
    }

    // Método 4: Remove
    remove(title) {
        if (!this.head) return null;

        if (this.head.title === title) {
            this.head = this.head.next;
            this.length--;
            if (!this.head) this.tail = null;  // Si la lista queda vacía, actualizar el tail
            return;
        }

        let current = this.head;
        while (current.next && current.next.title !== title) {
            current = current.next;
        }

        if (current.next) {
            if (current.next === this.tail) this.tail = current;  
            current.next = current.next.next;
            this.length--;
        }
    }

    // Método 5: Print
    print() {
        let current = this.head;
        while (current) {
            console.log(`Título: ${current.title}, Descripción: ${current.descp}`);
            current = current.next;
        }
    }
}

// Pruebas de uso
let TODOs = new LinkedList();

TODOs.append("Hacer la tarea", "Hacer la tarea de EDyA2");
TODOs.append("Comprar leche", "Ir al supermercado y comprar leche");
TODOs.append("Hacer ejercicio", "Ir al gimnasio y completar la rutina de ejercicios");
console.log("-------------------------------------------------------------------------")
TODOs.print();

console.log(TODOs.size());

console.log("-------------------------------------------------------------------------")

TODOs.remove("Comprar leche");
TODOs.print();
console.log(TODOs.size());

console.log("-------------------------------------------------------------------------")

console.log("¿Existe una tarea 'Hacer ejercicio'? ",TODOs.peek("Hacer ejercicio"));

console.log("-------------------------------------------------------------------------")