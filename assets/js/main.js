// navbar offcanvas

$(function () {
    'use strict'

    $('[data-toggle="offcanvas"]').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })

})

// filters

document.querySelector("#filter-marketing").addEventListener("change", filterMarketing);
document.querySelector("#filter-coding").addEventListener("change", filterCoding);
document.querySelector("#filter-design").addEventListener("change", filterDesign);

function filterMarketing() {
    hideAllCards();

    if(document.querySelector("#filter-marketing").checked) {
        var marketingCards = document.querySelectorAll(".marketing");

        marketingCards.forEach(marketing => {
            marketing.style.display = "block";
        });

        document.querySelector("#filter-coding").checked = false;
        document.querySelector("#filter-design").checked = false;
    } else {
        showAllCards();
    };
}

function filterCoding() {
    hideAllCards();

    if(document.querySelector("#filter-coding").checked) {
        var codingCards = document.querySelectorAll(".coding");

        codingCards.forEach(coding => {
            coding.style.display = "block";
        });

        document.querySelector("#filter-design").checked = false;
        document.querySelector("#filter-marketing").checked = false;
    } else {
        showAllCards();
    };
}

function filterDesign() {
    hideAllCards();

    if(document.querySelector("#filter-design").checked) {
        var designCards = document.querySelectorAll(".design");

        designCards.forEach(design => {
            design.style.display = "block";
        });

        document.querySelector("#filter-marketing").checked = false;
        document.querySelector("#filter-coding").checked = false;
    } else {
        showAllCards();
    };
}

function hideAllCards() {
    var allCards = document.querySelectorAll(".project, #loadMore");

    allCards.forEach(project => {
        project.style.display = "none";
    });
}

function showAllCards() {
    var allCards = document.querySelectorAll(".project, #loadMore");

    allCards.forEach(project => {
        project.style.display = "block";
    });
}


// Show more button

$(document).ready(function () {
    $(".project").slice(0, 3).show();
    if ($(".card:hidden").length != 0) {
        $("#loadMore").show();
    }
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".project:hidden").slice(0, 6).slideDown();
        if ($(".project:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
        }
    });
});