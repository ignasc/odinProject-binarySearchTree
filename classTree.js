import Node from "./classNode.js";

class Tree {
    constructor(array){
        let arraySorted = array.sort((a,b)=>{
            if(a<b){return -1};
            if(a==b){return 0};
            if(a>b){return 1};
        });

        let arrayNoDuplicates = [...new Set(arraySorted)];

        this.root = this.buildTree(arrayNoDuplicates);
    }

    buildTree(array){
        return "To be implemented";
    }

    //function that outputs a visual representation of the tree in console
    prettyPrint = (node, prefix = '', isLeft = true) => {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.left !== null) {
            prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
    };

}

export default Tree;