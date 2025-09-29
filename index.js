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

console.log(`\nDeleting value 5`);
binaryTree.deleteItem(5);
binaryTree.prettyPrint();
