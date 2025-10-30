import Tree from "./classTree.js";

const testData = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const binaryTree = new Tree(testData);

binaryTree.prettyPrint();

console.log(`\nInserting value 24`);
binaryTree.insert(24);
binaryTree.prettyPrint();

// console.log(`\nDeleting value 5`);
// binaryTree.deleteItem(5);
// binaryTree.prettyPrint();

// console.log(`\nDeleting value 9`);
// binaryTree.deleteItem(9);
// binaryTree.prettyPrint();
// console.log(`\nDeleting value 23`);
// binaryTree.deleteItem(23);
// binaryTree.prettyPrint();

// console.log(`\nDeleting value 67`);
// binaryTree.deleteItem(67);
// binaryTree.prettyPrint();
// console.log(`\nDeleting value 6345`);
// binaryTree.deleteItem(6345);
// binaryTree.prettyPrint();
// console.log(`\nDeleting value 24`);
// binaryTree.deleteItem(24);
// binaryTree.prettyPrint();

// console.log(`\nDeleting value 8`);
// binaryTree.deleteItem(8);
// binaryTree.prettyPrint();

// console.log(`\nFind value 23`);
// console.log(binaryTree.find(23));

// console.log(`\nBreadth-first level order traversal`)
// binaryTree.levelOrderForEach((element)=>{
//     console.log(`Callback called with ${element.data}`)
// })

// console.log(`\nIn-order traversal`)
// binaryTree.inOrderForEach((element)=>{
//     console.log(`Callback called on node ${element.data}`)
// })

// console.log(`\nPre-order traversal`)
// binaryTree.preOrderForEach((element)=>{
//     console.log(`Callback called on node ${element.data}`)
// })

// console.log(`\nPost-order traversal`)
// binaryTree.postOrderForEach((element)=>{
//     console.log(`Callback called on node ${element.data}`)
// })

// console.log(`\nNode 67 height:`);
// console.log(binaryTree.height(67));

// console.log(`\nNode 23 depth:`);
// console.log(binaryTree.depth(23));

console.log(`\nInserting value 323 to make the tree unbalanced`);
binaryTree.insert(323);
binaryTree.insert(322);
binaryTree.prettyPrint();

console.log(`\nCheck if tree is balanced:`);
console.log(binaryTree.isBalanced());

console.log(`\nRebalancing the tree...`);
console.log(binaryTree.rebalance());

console.log(`\nCheck if tree is balanced:`);
console.log(binaryTree.isBalanced());
binaryTree.prettyPrint();

//Driver script

// function generateArrayOfRandomNumbers(minSize, maxSize, numberOfElements){
//     const array = [];

//     while(array.length < numberOfElements){
//         const randomNumber = Math.floor((maxSize - minSize) * Math.random()) + minSize;
//         array.push(randomNumber);
//     };

//     return array;
// };

// const arrayOfNumbers = generateArrayOfRandomNumbers(1, 100, 100);

// console.log(arrayOfNumbers);
// console.log(arrayOfNumbers.length);