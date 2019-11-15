function sorting(arrNumber) {
  // code di sini
  var swap;
  for (var i = 0; i < arrNumber.length; i++) {
    for (var j = i + 1; j < arrNumber.length; j++) {
      if (arrNumber[i] < arrNumber[j]) {
        swap = arrNumber[j];
        arrNumber[j] = arrNumber[i];
        arrNumber[i] = swap;
      }
    }
  }
  return arrNumber;
}
// console.log(sorting([2, 8, 4, 6, 8, 5, 8, 4]))

function getTotal(arrNumber) {
  // code di sini
  if (arrNumber.length === 0) {
    return "";
  }
  var grup = [];
  for (var i = 0; i < arrNumber.length; i++) {
    var sama = false;
    for (var j = 0; j < grup.length; j++) {
      if (arrNumber[i] === grup[j][0]) {
        sama = true;
        grup[j].push(arrNumber[i]);
      }
    }
    if (!sama) {
      grup.push([arrNumber[i]]);
    }
  }
  return (
    "angka paling besar adalah " +
    grup[0][0] +
    " dan jumlah kemunculan sebanyak " +
    grup[0].length +
    " kali"
  );
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(
  mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150])
);
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
