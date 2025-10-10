import Tree from "./classTree.js";

const testData = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

let arraySorted = testData.sort((a,b)=>{
    if(a < b){return -1};
    if(a == b){return 0};
    if(a > b){return 1};
});

let arrayNoDuplicates = [...new Set(arraySorted)];

const binaryTree = new Tree(arrayNoDuplicates);

console.log(`\nSorted array without duplicates:\n${arrayNoDuplicates}\n`);

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

console.log(`\nDeleting value 8`);
binaryTree.deleteItem(8);
binaryTree.prettyPrint();
