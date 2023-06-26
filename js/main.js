// Зачеркнутые ссылки

$(".header__link").click(function() {
    $(this).css("text-decoration", "line-through");
});

// Модальное меню

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";

}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Табы

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 1; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

// Слайдер № 1

$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    prevArrow: "<img src='images/left.png' class='prev' alt='1'>",
    nextArrow: "<img src='images/right.png' class='next' alt='2'>",
    responsive: [{
            breakpoint: 900,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        }
    ]
});


// Аккордион

$('.accordion-item__title').on('click', function(e) {
    $(this)
        .parent('.accordion-item')
        .siblings('.accordion-item')
        .children('.accordion-item__content')

    .slideUp(300)

    const contentElement = $(this).siblings('.accordion-item__content')

    if (contentElement.css('display') === 'none') {
        contentElement
            .slideDown(300)
    } else {
        contentElement
            .slideUp(300)
    }
})
$('.accordion-item__title').on('click', function(e) {
    $(this)
        .parent('.accordion-item')
        .siblings('.accordion-item')
        .children('.accordion-item__content')

        .slideUp(300)

    const contentElement = $(this).siblings('.accordion-item__content')

    if (contentElement.css('display') === 'none') {
        contentElement
            .slideDown(300)
    } else {
        contentElement
            .slideUp(300)
    }
})

$(window).on('click', function(event) {
    if ($(event.target).closest('.accordion-item').length === 0) {
        $('.accordion-item__content')
            .slideUp(300)
    }
})


// Слайдер № 2

$('.slider-testimonials').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3500,
    prevArrow: "<img src='images/left-2.png' class='prev-2' alt='1'>",
    nextArrow: "<img src='images/right-2.png' class='next-2' alt='2'>",
    prevArrow: "<img src='images/left-2.png' class='prev-2' alt='1'>",
    nextArrow: "<img src='images/right-2.png' class='next-2' alt='2'>",
    prevArrow: "<img src='images/left-2.png' class='prev-2' alt='1'>",
    nextArrow: "<img src='images/right-2.png' class='next-2' alt='2'>",
    cssEase: 'linear'
});

// Плавная прокрутка

var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 2000);
    return false;
});


// Бургер меню

$('.menu__burger').click(function(event) {
    $('.menu__burger, .header__list').toggleClass('.active');
    $('.menu__span').toggleClass('.close');
    $('body').toggleClass('.lock');
});