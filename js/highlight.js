var indexOfMover = 0;
var indexOfNewPos = 0;




function markActiveLink(el) {

    selectedId = $(el).attr("id");
    tag = document.getElementById(selectedId).tagName;
    inner = document.getElementById(selectedId).innerHTML;

    if (indexOfMover == 0) {
      indexOfMover = selectedId;
    } else if (indexOfMover != 0 && indexOfNewPos == 0 && (indexOfMover != indexOfNewPos)) {
      indexOfNewPos = selectedId;
    }


    if (indexOfMover !== 0 || indexOfNewPos == 0) {
      var mess = "You have chosen " + inner + ". What do you want to change about this element? (delete, italicize, center, bold)?"
    }
    var hsg = new SpeechSynthesisUtterance(mess);
    window.speechSynthesis.speak(hsg);
    $(".messages").append("<div class='message'><div class='bot'>" + mess + "</div></div>");

}
