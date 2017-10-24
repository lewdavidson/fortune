$(document).ready(function(){
  $("form#fortuneSurvey").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=luck]:checked").each(function() {
      var omenVal = $(this).val();
      var omenArray = [];
      omenArray.push(omenVal);
      for (var index = 0; i < omenArray.length; index++) {
        if 
      }
    });


  });

});
