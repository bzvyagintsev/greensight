document.addEventListener('DOMContentLoaded', function() {

    drawLines();

    window.onresize = function(event) {
        drawLines();
    };

})

var drawLines = function() {
    var first = document.getElementById('first-text').getBoundingClientRect();
    var second = document.getElementById('second-text').getBoundingClientRect();
    var third = document.getElementById('third-text').getBoundingClientRect();
    var fourth = document.getElementById('fourth-text').getBoundingClientRect();

    var container = document.getElementById('pepyaka-container').getBoundingClientRect();
    var pepyaka = document.getElementById('pepyaka').getBoundingClientRect();

    var c = document.getElementById("canvas");

    if (window.innerWidth > 1280) {
        c.width = 1100;
    } else if (window.innerWidth > 960) {
        c.width = 900;
    } else if (window.innerWidth < 960) {
        c.width = 0;
    }

    c.height = 620;

    var firstLine = c.getContext("2d");
    var secondLine = c.getContext("2d");
    var thirdLine = c.getContext("2d");
    var fourthLine = c.getContext("2d");

    firstLine.beginPath();
    firstLine.moveTo(first.right - container.left - 5, first.bottom - (first.bottom - first.top) / 4 - container.top);
    firstLine.lineTo(pepyaka.left - container.left + 150, pepyaka.top - container.top + 170);
    firstLine.stroke();

    secondLine.beginPath();
    secondLine.moveTo(second.left - container.left + 20, second.bottom - (second.bottom - second.top) / 3 - container.top);
    secondLine.lineTo(pepyaka.right - container.left - 200, pepyaka.top - container.top + 140);
    secondLine.stroke();

    thirdLine.beginPath();
    thirdLine.moveTo(third.right - container.left - 20, third.top - container.top);
    thirdLine.lineTo(pepyaka.left - container.left + 90, pepyaka.bottom - container.top - 250);
    thirdLine.stroke();

    fourthLine.beginPath();
    fourthLine.moveTo(fourth.left - container.left - 10, fourth.top + (fourth.bottom - fourth.top) / 3 - container.top);
    fourthLine.lineTo(pepyaka.right - container.left - 80, pepyaka.bottom - container.top - 150);
    fourthLine.stroke();
}