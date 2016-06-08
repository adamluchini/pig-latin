$(function () {
  $('form#pl').submit(function(event) {
    event.preventDefault();
    var word = $('#inputWord').val();
    var pigLatin = ('');

    var words = [$('#inputWord').val()];
    var vowels = ['a', 'e', 'i' , 'o', 'u', 'y'];

    for (i=0, x=0; i <= vowels.length; i++) {
      if ($(vowels).toString([i]) === $(words).toString([x])) {
        pigLatin = word + 'ay';
      }
    }










    $('#output').text(pigLatin);

  });
});
