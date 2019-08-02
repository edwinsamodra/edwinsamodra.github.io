var page = [];

function load() {
    $("#body1").slideUp(700, () => {
        $(".cont").slideDown("slow");
    });
}

function hide() {
    $(".cont").slideUp(700, () => {
        $("#body1").show("slow");
    });
}

for (let i = 0; i <= 4; i++) {
    page[i] = function () {
        $('html, body').animate({
            scrollTop: $("#" + i).offset().top
        }, 1500);
    }
}

function mouseover() {
    $('#name').style.color = "#00b0ff";
}