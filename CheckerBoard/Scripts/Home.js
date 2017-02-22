//If any red piece is highlighted, this will cancel the highlight
//If a black piece is highlighted, that piece will take this one
function RedClickEvent()
{

    $(".red").click(function () {
        if ($(".blackHighlight").length > 0) {

            $(".blackHighlight").addClass("cell").removeClass("cellHighlight");
            $(".blackHighlight").addClass("blank").removeClass("piece");
            $(".blackHighlight").removeClass("blackHighlight");


            $(this).addClass("black").removeClass("red");
            return;
        }

        if ($(".redHighlight").length > 0) {
            $(".redHighlight").addClass("cell").removeClass("cellHighlight");
            $(".redHighlight").addClass("red").removeClass("redHighlight");
        }
        else {
            $(this).addClass("cellHighlight").removeClass("cell");
            $(this).addClass("redHighlight").removeClass("red");
        }


    });

}

//If any black piece is highlighted, this will cancel the highlight
//If a red piece is highlighted, that piece will take this one
function BlackClickEvent() {

    $(".black").click(function () {


        if ($(".redHighlight").length > 0) {
            $(".redHighlight").addClass("cell").removeClass("cellHighlight");
            $(".redHighlight").removeClass("redHighlight");

            $(this).addClass("red").removeClass("black");
            return;
        }

        if ($(".blackHighlight").length > 0) {
            $(".blackHighlight").addClass("cell").removeClass("cellHighlight");
            $(".blackHighlight").addClass("black").removeClass("blackHighlight");
        }
        else {
            $(this).addClass("cellHighlight").removeClass("cell");
            $(this).addClass("blackHighlight").removeClass("black");
        }

    });

}

//If a red piece is highlighted, that piece will take this one
//If a black piece is highlighted, that piece will take this one
//If no piece is highlighted, this will do nothing
function BlankClickEvent() {

    $(".blank").click(function () {

        if ($(".blackHighlight").length > 0) {

            $(".blackHighlight").addClass("cell").removeClass("cellHighlight");
            $(".blackHighlight").addClass("blank").removeClass("piece");
            $(".blackHighlight").removeClass("blackHighlight");


            $(this).addClass("black").addClass("piece").removeClass("blank").removeClass("red");
            return;
        }

        if ($(".redHighlight").length > 0) {

            $(".redHighlight").addClass("cell").removeClass("cellHighlight");
            $(".redHighlight").addClass("blank").removeClass("piece");
            $(".redHighlight").removeClass("redHighlight");


            $(this).addClass("red").addClass("piece").removeClass("blank").removeClass("black");
            return;
        }
    });

}

$(document).ready(function ()
{
    
    var cells = $(".cell");
    var colorCount = 0;

    for (var i = 0; i < cells.length; i++)
    {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.css("background-color", isDark ? "navy" : "white");
    }

    //readying all the functions above
    RedClickEvent();
    BlackClickEvent();
    BlankClickEvent();


});

