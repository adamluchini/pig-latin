// $(function () {
//   $('form#pl').submit(function(event) {
//     event.preventDefault();
//     var word = $('#inputWord').val();
//     var pigLatin = ('');
//
//     var words = [$('#inputWord').val()];
//     var vowels = ['a', 'e', 'i' , 'o', 'u', 'y'];
//
// //
// // var firstLetter = words.slice(0, 1);
// //
// // // for (i=0; i <= vowels.length; i++) {
// // //   if (firstLetter == vowels[i]) {
// // //     pigLatin = word + 'ay';
// // //   }
// // // }
// // vowels.forEach(function(vowel){
// //   if (vowel == firstLetter){
// //     pigLatin = word + 'ay';
// //     alert(pigLatin)
// //   }
// // })
// //
// //
// //
// // for (i=0; i <= vowels.length; i++) {
// //   if ($(vowel[i]).inArray(firstLetter)) {
// //     pigLatin = word + 'ay';
// //   }
// // }
//
//
//(
//
//     $('#output').text(pigLatin);
//
//   });
// });

// Let's take a second shot at this:
//====================================

function pigLatinize() {
  var pigLatinOutput = [];
  var input = $("#inputWord").val();
  var words = input.split(" ");

  //Declare our vowels:
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  //Iterate through our array of words:
  for(i=0; i<words.length; i++) {
    var word = words[i];
    var letters = word.split("");

    //Identify the first letter:
    var firstLetter = letters[0];

    //Loop through vowels array comparing each item, in order, to firstLetter variable
    for(j = 0; j < vowels.length; j++) {
      //If first letter matches anything in vowels, concatenate word with 'ay'
      if (vowels.includes(letters[0])) {
        var pigWord = word.concat('ay');
        pigLatinOutput.push(pigWord);
        break;
      } else {
        pigLatinOutput.push(word);
        break;
      }
    }
  }
  //This currently broken: it pushes each word or pigWord for each vowel check. Need to get it to check each word only once.
  return pigLatinOutput;
};

//First, we set up our form and submit function:
$(function () {
  $('form#pl').submit(function(event) {
    event.preventDefault();
    console.log(pigLatinize($("#inputWord").val()));
    // console.log($("#inputWord").val());

  });
});
