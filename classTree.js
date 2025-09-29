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

    //function that outputs a visual representation of the tree in console
    prettyPrint = (node, prefix = '', isLeft = true) => {
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