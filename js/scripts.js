$(document).ready(function(){
  $("form#fortuneSurvey").submit(function(event){
    event.preventDefault();
    var goodOmen = [];
    var badOmen = [];
    $("input:checkbox[name=good]:checked").each(function() {
      var goodVal = $(this).val();
      goodOmen.push(goodVal);
    });
    $("input:checkbox[name=bad]:checked").each(function() {
      var badVal = $(this).val();
      badOmen.push(badVal);
    });
    if (goodOmen.length === badOmen.length) {
      $("#fortuneSurvey").hide();
      $("#mehFortune").show();
    } else if (goodOmen.length > badOmen.length) {
      $("#fortuneSurvey").hide();
      $("#goodFortune").show();
    } else {
      $("#fortuneSurvey").hide();
      $("#badFortune").show();
    }

  });

});
