function removeduplicates() {
    var array1 = document.getElementById("array1");
    var array2 = document.getElementById("array2");

    var array1 = array1.value.split(",").map(item => item.trim());
    var array2 = array2.value.split(",").map(item => item.trim());

    var mergedArray = array1.concat(array2);
    var uniqueArray = Array.from(new Set(mergedArray));

    p1.textContent = "Merged Areey Without Duplicates: " + uniqueArray.join(",");

}