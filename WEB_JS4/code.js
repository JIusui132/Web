// Функція обміну
function bubbleSort(array, order) {
    let comparisons = 0;
    let swaps = 0;
    console.log(`Bubble sort: comparisons - ${comparisons}, swaps - ${swaps}`);
}

// Функція мінімальних елементів
function selectionSort(array, order) {
    let comparisons = 0;
    let swaps = 0;
    console.log(`Selection sort: comparisons - ${comparisons}, swaps - ${swaps}`);
}

// Функція вставок
function insertionSort(array, order) {
    let comparisons = 0;
    let swaps = 0;
    console.log(`Insertion sort: comparisons - ${comparisons}, swaps - ${swaps}`);
}

// Функція Шелла
function shellSort(array, order) {
    let comparisons = 0;
    let swaps = 0;
    console.log(`Shell sort: comparisons - ${comparisons}, swaps - ${swaps}`);
}

// Функція Хоара (швидке сортування)
function quickSort(array, order) {
    let comparisons = 0;
    let swaps = 0;
    console.log(`Quick sort: comparisons - ${comparisons}, swaps - ${swaps}`);
}

// Експортуємо функції для використання ззовні
export { bubbleSort, selectionSort, insertionSort, shellSort, quickSort };
