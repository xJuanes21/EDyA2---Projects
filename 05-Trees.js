class PersonNode{
    constructor(name,bday){
        this.name = name;
        this.bday = bday;
        this.children = [];
    }
    isLeaf(){
        if(this.children.length === 0){
            return true;
        } else{
            return false;
        }
    }
}


class NaryTree{
    constructor(){
        this.root = null;
    }

    search(name, node= this.root){
        if(!this.root){
            return null;
        }

        if(this.root.name === name){
            return this.root;
        } else {
            const children =node.children;

            const inChildren = children.find( item => item.name === name)
            if(inChildren){
                return inChildren;
            } else {
                let hasChild;
                children.forEach(item => {
                    if (hasChild){
                        return;
                    }
                    hasChild =this.search(name, item)

                })
                return hasChild;
            }
        }
    }

    insert(name, bday, parent){
         const newNode = new PersonNode(name, bday);

         if (!parent){
            if(!this.root){
                this.root = newNode;
            }else{
                return null;
            }
         }else {
            const parentNode = this.search(parent);
            parentNode.children.push(newNode);
         }
    }

    preOrder(node=this.root){
        if(!node) {
            return;
        }
        console.log(node.name);

        node.children.forEach( element => {
            this.preOrder(element);
        });
    }

    postOrder(node = this.root){
        if(!node){
            return;
        }
        node.children.forEach(element => {
            this.postOrder(element);
        });
        console.log(node.name)
    }

    inOrder(node = this.root){
        if(!node){
            return;
        }
        if(node.children.length === 0){
            console.log(node.name)
        }else {
            this.inOrder(node.children[0])
            console.log(node.name)

            for(let i=1; i<node.children.length; i++){
                this.inOrder(node.children[i])
            }

        }
    }

}

const familyTree = new NaryTree();

// Abuelo
familyTree.insert("Heriberto Salazar", "1940-05-10", null);

// Papá y Tío
familyTree.insert("Heriberto Salazar jr", "1965-08-15", "Heriberto Salazar");
familyTree.insert("Ivan Salazar", "1968-11-20", "Heriberto Salazar");

//Yo, hermana y prima
familyTree.insert("Juan Esteban Salazar", "2004-02-01", "Heriberto Salazar jr");
familyTree.insert("Gabriela Salazar", "2019-21-02", "Heriberto Salazar jr");
familyTree.insert("Mariana Salazar", "2021-14-07", "Ivan Salazar");

// Probar los recorridos
console.log("Preorden: ------------------------------------------------------------------------");
familyTree.preOrder();

console.log("Postorden: -----------------------------------------------------------------------");
familyTree.postOrder();

console.log("Inorden: --------------------------------------------------------------------------");
familyTree.inOrder();
