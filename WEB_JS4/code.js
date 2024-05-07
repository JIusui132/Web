const SortingLibrary = {
    exchangeSort: function(array, order = 'asc') {
        let comparisons = 0;
        let exchanges = 0;

        for (let i = 0; i < array.length - 1; i++) {
            for (let j = i + 1; j < array.length; j++) {
                comparisons++;
                if ((order === 'asc' && array[i] > array[j]) || (order === 'desc' && array[i] < array[j])) {
                    const temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                    exchanges++;
                }
            }
        }

        console.log(`Exchange sort: comparisons = ${comparisons}, exchanges = ${exchanges}`);
        return array;
    },

    minElementSort: function(array, order = 'asc') {
        let comparisons = 0;
        let exchanges = 0;

        for (let i = 0; i < array.length - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < array.length; j++) {
                comparisons++;
                if ((order === 'asc' && array[j] < array[minIndex]) || (order === 'desc' && array[j] > array[minIndex])) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                const temp = array[i];
                array[i] = array[minIndex];
                array[minIndex] = temp;
                exchanges++;
            }
        }

        console.log(`Min element sort: comparisons = ${comparisons}, exchanges = ${exchanges}`);
        return array;
    },

    insertionSort: function(array, order = 'asc') {
        let comparisons = 0;
        let exchanges = 0;

        for (let i = 1; i < array.length; i++) {
            let current = array[i];
            let j = i - 1;
            while (j >= 0 && ((order === 'asc' && array[j] > current) || (order === 'desc' && array[j] < current))) {
                comparisons++;
                array[j + 1] = array[j];
                j--;
                exchanges++;
            }
            array[j + 1] = current;
        }

        console.log(`Insertion sort: comparisons = ${comparisons}, exchanges = ${exchanges}`);
        return array;
    },

    shellSort: function(array, order = 'asc') {
        let comparisons = 0;
        let exchanges = 0;
        const length = array.length;
        let h = 1;

        while (h < length / 3) {
            h = 3 * h + 1;
        }

        while (h >= 1) {
            for (let i = h; i < length; i++) {
                for (let j = i; j >= h && ((order === 'asc' && array[j - h] > array[j]) || (order === 'desc' && array[j - h] < array[j])); j -= h) {
                    comparisons++;
                    const temp = array[j];
                    array[j] = array[j - h];
                    array[j - h] = temp;
                    exchanges++;
                }
            }
            h = Math.floor(h / 3);
        }

        console.log(`Shell sort: comparisons = ${comparisons}, exchanges = ${exchanges}`);
        return array;
    },

    quickSort: function(array, order = 'asc') {
        function partition(array, low, high) {
            const pivot = array[Math.floor((low + high) / 2)];
            let i = low;
            let j = high;

            while (i <= j) {
                while ((order === 'asc' && array[i] < pivot) || (order === 'desc' && array[i] > pivot)) {
                    i++;
                }
                while ((order === 'asc' && array[j] > pivot) || (order === 'desc' && array[j] < pivot)) {
                    j--;
                }
                if (i <= j) {
                    const temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                    i++;
                    j--;
                }
            }
            return i;
        }

        function quickSortRecursive(array, low, high) {
            let comparisons = 0;
            let exchanges = 0;

            if (low < high) {
                const pi = partition(array, low, high);

                quickSortRecursive(array, low, pi - 1);
                quickSortRecursive(array, pi, high);
            }

            console.log(`Quick sort: comparisons = ${comparisons}, exchanges = ${exchanges}`);
        }

        quickSortRecursive(array, 0, array.length - 1);
        return array;
    }
};

// Test the library
const testArray = [5, 3, 8, 1, 9, 2, 7, 4, 6];
console.log("Original array:", testArray);

console.log("Exchange sort result (asc):", SortingLibrary.exchangeSort([...testArray]));
console.log("Exchange sort result (desc):", SortingLibrary.exchangeSort([...testArray], 'desc'));

console.log("Min element sort result (asc):", SortingLibrary.minElementSort([...testArray]));
console.log("Min element sort result (desc):", SortingLibrary.minElementSort([...testArray], 'desc'));

console.log("Insertion sort result (asc):", SortingLibrary.insertionSort([...testArray]));
console.log("Insertion sort result (desc):", SortingLibrary.insertionSort([...testArray], 'desc'));

console.log("Shell sort result (asc):", SortingLibrary.shellSort([...testArray]));
console.log("Shell sort result (desc):", SortingLibrary.shellSort([...testArray], 'desc'));

console.log("Quick sort result (asc):", SortingLibrary.quickSort([...testArray]));
console.log("Quick sort result (desc):", SortingLibrary.quickSort([...testArray], 'desc'));
