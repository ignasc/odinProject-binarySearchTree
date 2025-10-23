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
        if(root === null){return null}
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

    //function that returns the node with matching value
    find(value){
        let currentNode = this.root;

        while(currentNode != null){
            if(currentNode.data === value){
                return currentNode;
            }
            if(value < currentNode.data){
                currentNode = currentNode.left;
            }else if(value > currentNode.data){
                currentNode = currentNode.right;
            };
        }

        return `Node ${value} not found.`
    }

    //function that traverses tree in beadth-first level order and calls the callback function on each node.
    levelOrderForEach(callback = null){
        if(typeof callback != "function"){
            throw Error("supplied parameter must be a callback function")
        };

        let currentNode = this.root;
        const orderQueue = [];
        orderQueue.push(currentNode);

        while(orderQueue.length != 0){

            if(currentNode.left != null){orderQueue.push(currentNode.left)};
            if(currentNode.right != null){orderQueue.push(currentNode.right)};

            callback(orderQueue.shift());

            if(orderQueue.length != 0){
                currentNode = orderQueue[0];
            };

        };

    };

    //function that calls a callback function on each node in in-order sequence
    inOrderForEach(callback){
        if(typeof callback != "function"){
            throw Error("supplied parameter must be a callback function")
        };

        const nodeQueue = [];

        this.inOrderQueue(this.root, nodeQueue);

        for(let i = 0; i < nodeQueue.length; i++){
            callback(nodeQueue[i])
        };

    };

    //function that generates in-order queue of nodes and stores it in provided array
    inOrderQueue(root, queue){
        if(root === null){return}

        this.inOrderQueue(root.left, queue);
        queue.push(root);
        this.inOrderQueue(root.right, queue);
    }

    //function that calls a callback function on each node in pre-order sequence
    preOrderForEach(callback){
        if(typeof callback != "function"){
            throw Error("supplied parameter must be a callback function")
        };

        const nodeQueue = [];

        this.preOrderQueue(this.root, nodeQueue);

        for(let i = 0; i < nodeQueue.length; i++){
            callback(nodeQueue[i])
        };

    };

    //function that generates pre-order queue of nodes and stores it in provided array
    preOrderQueue(root, queue){
        if(root === null){return};

        queue.push(root);
        this.preOrderQueue(root.left, queue);
        this.preOrderQueue(root.right, queue);
    }

    //function that calls a callback function on each node in post-order sequence
    postOrderForEach(callback){
        if(typeof callback != "function"){
            throw Error("supplied parameter must be a callback function")
        };

        const nodeQueue = [];

        this.postOrderQueue(this.root, nodeQueue);

        for(let i = 0; i < nodeQueue.length; i++){
            callback(nodeQueue[i])
        };

    };

    //function that generates post-order queue of nodes and stores it in provided array
    postOrderQueue(root, queue){
        if(root === null){return};

        this.postOrderQueue(root.left, queue);
        this.postOrderQueue(root.right, queue);
        queue.push(root);
    }

    //function that calls heigh calculation method and returns its value or null if node does not exist.
    height(value){
        let nodeRef = this.getNode(this.root, value);

        if(!nodeRef){return null};

        return this.findHeight(nodeRef, 0) - 1;
    };

    // function that returns the height (node to leaf node) of the given node.
    findHeight(root, currHeight){

        if(!root){return 0};

        let nodeHeightLeft = 1 + this.findHeight(root.left, currHeight);
        let nodeHeightRight = 1 + this.findHeight(root.right, currHeight);

        return nodeHeightLeft > nodeHeightRight ? nodeHeightLeft : nodeHeightRight;
    }

    //function that returns the depth (node to root node) of the given node or null if it doesn't exist.
    depth(value){
        if(this.root.data === value){return 0};
        if(!this.getNode(this.root, value)){return null};

        let currentNode = this.root;
        let depthCounter = 0;

        while(currentNode.data != value){
            if(value < currentNode.data){
                currentNode = currentNode.left;
                depthCounter++;
            } else {
                currentNode = currentNode.right;
                depthCounter++;
            };
        }

        return depthCounter;
    };

    //function that returns true if the tree is balanced and false if the tree is not balanced
    isBalanced(){
        let leftNodeHeight = 0;
        let rightNodeHeight = 0;
        let maxHeightDiff = 0;

        this.levelOrderForEach((node) =>{
            if(node.left){
                leftNodeHeight = this.height(node.left.data);
            };

            if(node.right){
                rightNodeHeight = this.height(node.right.data);
            };

            let currentDiff = Math.abs(leftNodeHeight - rightNodeHeight);

            if(maxHeightDiff < currentDiff){
                maxHeightDiff = currentDiff;
            }
        })

        return maxHeightDiff > 1 ? false : true;
    };

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
