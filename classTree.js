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

    // function that deletes the node if it exists in the tree
    deleteItem(value){
        let currentNode = this.root;
        let previousNode = null;
        let previousIsLeft = true;

        while(true){
            if(currentNode == null){
                break;
            };

            if(currentNode.data == value){

                //3 cases:

                //delete node that has no children
                if(currentNode.left == null && currentNode.right == null){

                    if(previousIsLeft){
                        previousNode.left = null;
                    } else {
                        previousNode.right = null;
                    };
                    break;
                }

                //delete node with single child
                if(!currentNode.right.right && !currentNode.right.left){
                    console.log(`Node ${value} is single child`)
                    let childNode = currentNode.right;
                    childNode.left = currentNode.left;

                    if(previousNode){
                        if(previousIsLeft){
                            previousNode.left = childNode;
                        } else {
                            previousNode.right = childNode;
                        };
                    }else{
                        this.root = childNode;
                    }
                    break;
                }

                //delete node with 2 children
                let inorderSuccessor = currentNode.right;
                let previousSuccessor = null;

                while(true){
                    if(!inorderSuccessor.left){
                        console.log(`Inorder successor is ${inorderSuccessor.data}`)
                        break;
                    }
                    console.log(`Reading node ${inorderSuccessor.data}`)
                    previousSuccessor = inorderSuccessor;
                    inorderSuccessor = inorderSuccessor.left;
                }

                inorderSuccessor.left = currentNode.left;
                inorderSuccessor.right = currentNode.right;

                if(previousNode){
                    if(previousIsLeft){
                        previousNode.left = inorderSuccessor;
                    } else {
                        previousNode.right = inorderSuccessor;
                    };
                }else{
                    this.root = inorderSuccessor;
                }

                previousSuccessor.left = null;

                break;
            };

            if(currentNode.data > value){
                previousNode = currentNode;
                currentNode = currentNode.left;
                previousIsLeft = true;
            } else {
                previousNode = currentNode;
                currentNode = currentNode.right;
                previousIsLeft = false;
            };
        };
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
