$(function () {
  $('form#pl').submit(function(event) {
    event.preventDefault();
    var word = $('#inputWord').val();




    pigLatin = word + 'ay';





    $('#output').text(pigLatin);

  });
});
