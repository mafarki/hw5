$(document).ready(function () {
    $("#spin").click(function () {
        spin("tb1");
        spin("tb2");
        spin("tb3");
        CheckMatchingBoxes();
    })
})



function spin(tbId) {
    for (counter = 0; counter < 10; counter ++) {
        var NumGen = Math.floor(Math.random() * 10) + 1;

        if ((NumGen <= 0) || (NumGen >= 4))
            continue;

        var el = document.getElementById(tbId);
        
        if (NumGen == 1) {
            el.className = "one";
        }

        if (NumGen == 2) {
            el.className = "two";
        }

        if (NumGen == 3) {
            el.className = "three";
        }
    }
}
function CheckMatchingBoxes() {
    var b1 = $("#tb1").attr("class");
    var b2 = $("#tb2").attr("class");
    var b3 = $("#tb3").attr("class");

    var WinMsg = "Congratulations, you won!";
    var NoWinMsg = "Sorry, try again";

    if (b1 == b2 && b1 == b3) {
        document.getElementById("msg").innerHTML=WinMsg;
    }
    else {
        document.getElementById("msg").innerHTML = NoWinMsg;
    }
}

$("#spin").mouseover(function () {
    $("#spin").text("SPIN NOW");
})
$("#spin").mouseout(function () {
    $("#spin").text("Spin Again");
})

$("#stop").click(function () {
    $("div").fadeOut(2000);
    $("#msg1").fadeIn(2000);
})