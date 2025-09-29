class Node {
    constructor(data = null, leftChild = null, rightChild = null){
        this.data = data;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
    }

    getNode(){
        return {
            "data": this.data,
            "leftChild": this.leftChild,
            "rightChild": this.rightChild,
        };
    }
};

export default Node;
