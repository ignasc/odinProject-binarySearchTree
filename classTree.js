import Node from "./classNode.js";

class Tree {
    constructor(array){
        this.root = this.buildTree(array);
    }

    buildTree(array){
        if(array.length == 0){return null};
        let middleIndex = parseInt(array.length / 2);

        let leftHalfArray = array.slice(0, middleIndex);
        let rightHalfArray = array.slice(middleIndex + 1);

        return new Node(
            array[middleIndex],
            this.buildTree(leftHalfArray),
            this.buildTree(rightHalfArray))
    }

    //function that inserts new value into the tree if it does not exist already
    insert(value){
        let currentNode = this.root;

        while(true){
            if(currentNode == null){
                break;
            };
            if(currentNode.data == value){
                break;
            };

            if(currentNode.data > value){
                if(currentNode.left == null){
                    currentNode.left = new Node(value);
                    break;
                };
                currentNode = currentNode.left;
            } else {
                if(currentNode.right == null){
                    currentNode.right = new Node(value);
                    break;
                };
                currentNode = currentNode.right;
            };
        };
    }

    //function that returns reference to node
    getNode(root, value){
        if(root.data === value){
            return root;
        };

        if(value < root.data){
            return this.getNode(root.left, value);
        } else{
            return this.getNode(root.right, value);
        };
    }

    // function that is called by user to delete a node
    deleteItem(value){

        this.deleteNode(this.root, value);
    }

    // function that is called internally to delete a node
    deleteNode(root, value){
        if(root === null){
            return root;
        };

        let currentNode = root;

        if(value < currentNode.data){
            currentNode.left = this.deleteNode(currentNode.left, value)
        }else if(value > currentNode.data){
            currentNode.right = this.deleteNode(currentNode.right, value)
        }else{

            //all operations of deletion here for all cases

            // if there are no children or just right child (means no successor)
            if(currentNode.left === null){
                return currentNode.right;
            }

            // if there is only left child
            if(currentNode.right === null){
                return currentNode.left;
            };

            // if both children are present
            const inOrderSuccessor = this.getSuccessor(currentNode.right, value);

            currentNode.data = inOrderSuccessor.data;
            currentNode.right = this.deleteNode(currentNode.right, inOrderSuccessor.data)

            return currentNode;
        }

        return currentNode;
    };

    getSuccessor(root, value){
        if(root.left === null){
            return root;
        }
        const currentNode = this.getSuccessor(root.left, value);
        return currentNode;

    }

    //function that outputs a visual representation of the tree in console
    prettyPrint = (node = this.root, prefix = '', isLeft = true) => {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
    };

}

export default Tree;
