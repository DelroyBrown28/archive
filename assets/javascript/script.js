$(document).ready(function () {

    // Cursor

    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {
        cursor.setAttribute(
            "style",
            "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
        );
    });

    document.addEventListener("click", (e) => {
        cursor.classList.add("expand");
        setTimeout(() => {
            cursor.classList.remove("expand");
        }, 500);
    });

    $('.large_file').hover(function() {
        $('#large_file_popup').animate({
            opacity: '1'
        });
    }, function() {
        $('#large_file_popup').animate({
            opacity: '0'
        })
    })


    // Local time display
    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    function timeUpdate() {
        var grabDate = new Date();
        var theTime = document.getElementById("the_time");
        var hours = addZero(grabDate.getHours());
        var minutes = addZero(grabDate.getMinutes());
        var seconds = addZero(grabDate.getSeconds());
        theTime.innerHTML = hours + ":" + minutes + ":" + seconds;
    }
    setInterval(timeUpdate, 1000);



    // Fade in for Index page
    function fadeInOnload() {
        $('.world_history_wrap').animate({
            opacity: '1'
        });
        $('.top_contents_index').animate({
            opacity: '1'
        }, function () {
            $('.history_tab').animate({
                opacity: '1'
            }, 200, function () {
                $('.science_tab').animate({
                    opacity: '1'
                }, 200, function () {
                    $('.language_tab').animate({
                        opacity: '1'
                    }, 200, function () {
                        $('.survival_tab').animate({
                            opacity: '1'
                        }, 200, function () {
                            $('.law_tab').animate({
                                opacity: '1'
                            }, 200, function () {
                                $('.main_title').animate({
                                    opacity: '1'
                                }, 2000, function () {
                                    $('.file_count').animate({
                                        opacity: '1'
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }
    window.onload = fadeInOnload;


    // Takes you to index page
    $('.main_title_white').click(function () {
        $('.world_history_wrap').animate({
            opacity: '0'
        }, function () {
            setTimeout(function () {
                location.href = 'index.html'
            }, 700);
        })

    });

    // Takes you to history contents
    $('.history_tab').click(function () {
        $('.tabs').animate({
            opacity: '0'
        }, function () {
            setTimeout(function () {
                location.href = 'history.html'
            }, 700);
        })

    });

    // Takes you to Survival contents
    $('.survival_tab').click(function () {
        $('.tabs').animate({
            opacity: '0'
        }, function () {
            setTimeout(function () {
                location.href = 'survival.html'
            }, 700);
        })

    });

    // Takes you to Language contents
    $('.language_tab').click(function () {
        $('.tabs').animate({
            opacity: '0'
        }, function () {
            setTimeout(function () {
                location.href = 'language.html'
            }, 700);
        })

    });





})