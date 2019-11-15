function changeVocals(str) {
  //code di sini
  var abc = "aiueoAIUEO";
  var ganti = "bjvfpBJVFP";
  var hasil = "";
  for (var i = 0; i < str.length; i++) {
    var vokal = false;
    for (var j = 0; j < abc.length; j++) {
      if (str[i] === abc[j]) {
        hasil += ganti[j];
        vokal = true;
      }
    }
    if (!vokal) {
      hasil += str[i];
    }
  }
  return hasil;
}
// console.log(changeVocals('Sergei Dragunov'))
function reverseWord(str) {
  //code di sini
  var hasil = "";
  for (var k = str.length - 1; k >= 0; k--) {
    hasil += str[k];
  }
  return hasil;
}

function setLowerUpperCase(str) {
  //code di sini
  var hasil = "";

  for (var l = 0; l < str.length; l++) {
    if (str[l] === str[l].toUpperCase()) {
      hasil += str[l].toLowerCase();
    } else if (str[l] === str[l].toLowerCase()) {
      hasil += str[l].toUpperCase();
    }
  }
  return hasil;
}

function removeSpaces(str) {
  //code di sini
  var hasil = "";
  for (var m = 0; m < str.length; m++) {
    if (str[m] !== " ") {
      hasil += str[m];
    }
  }
  return hasil;
}

function passwordGenerator(name) {
  //code di sini
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah  5 karakter";
  }
  var ganti = changeVocals(name);
  var balik = reverseWord(ganti);
  var tuker = setLowerUpperCase(balik);
  var noSpace = removeSpaces(tuker);
  return noSpace;
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
