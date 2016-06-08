$(function () {
  $('form#pl').submit(function(event) {
    event.preventDefault();
    var word = $('#inputWord').val();
    var pigLatin = ('');

    var words = [$('#inputWord').val()];
    var vowels = ['a', 'e', 'i' , 'o', 'u', 'y'];

//
// var firstLetter = words.slice(0, 1);
//
// // for (i=0; i <= vowels.length; i++) {
// //   if (firstLetter == vowels[i]) {
// //     pigLatin = word + 'ay';
// //   }
// // }
// vowels.forEach(function(vowel){
//   if (vowel == firstLetter){
//     pigLatin = word + 'ay';
//     alert(pigLatin)
//   }
// })
//
//
//
// for (i=0; i <= vowels.length; i++) {
//   if ($(vowel[i]).inArray(firstLetter)) {
//     pigLatin = word + 'ay';
//   }
// }




    $('#output').text(pigLatin);

  });
});
