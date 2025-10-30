import Tree from "./classTree.js";

//Driver script

function generateArrayOfRandomNumbers(minSize, maxSize, numberOfElements){
    const array = [];

    while(array.length < numberOfElements){
        const randomNumber = Math.floor((maxSize - minSize) * Math.random()) + minSize;
        array.push(randomNumber);
    };

    return array;
};

const arrayOfNumbers = generateArrayOfRandomNumbers(1, 100, 100);

console.log(arrayOfNumbers);

const binaryTree = new Tree(arrayOfNumbers);

binaryTree.prettyPrint();

console.log(`Checking if the tree is balanced: ${binaryTree.isBalanced()}`)

console.log(`Print nodes in level order:`)
binaryTree.levelOrderForEach((node)=>{console.log(node.data)});

console.log(`Print nodes in pre-order:`)
binaryTree.preOrderForEach((node)=>{console.log(node.data)});

console.log(`Print nodes in post-order:`)
binaryTree.postOrderForEach((node)=>{console.log(node.data)});

console.log(`Print nodes in in-order:`)
binaryTree.inOrderForEach((node)=>{console.log(node.data)});

console.log(`Unbalancing the tree by adding more numbers > 100`);
const newArrayOfNumbers = generateArrayOfRandomNumbers(100, 1000, 100);

for (let index = 0; index < newArrayOfNumbers.length; index++) {
    const element = newArrayOfNumbers[index];
    binaryTree.insert(element);
}

binaryTree.prettyPrint();
console.log(`Checking if the tree is balanced: ${binaryTree.isBalanced()}`)

console.log(`Rebalancing the tree...`)
binaryTree.rebalance();
console.log(`Checking if the tree is balanced: ${binaryTree.isBalanced()}`)

console.log(`Print nodes in level order:`)
binaryTree.levelOrderForEach((node)=>{console.log(node.data)});

console.log(`Print nodes in pre-order:`)
binaryTree.preOrderForEach((node)=>{console.log(node.data)});

console.log(`Print nodes in post-order:`)
binaryTree.postOrderForEach((node)=>{console.log(node.data)});

console.log(`Print nodes in in-order:`)
binaryTree.inOrderForEach((node)=>{console.log(node.data)});
