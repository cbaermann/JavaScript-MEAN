https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple

$(document).ready(function()
{
    $.get("https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple", function(data1){
        science = data1.results;
    })

    $.get("https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple", function(data2){
        history = data2.results;
    })

    $.get("https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple", function(data3){
        nature = data3.results;
    })
  

});