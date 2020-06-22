$(document).ready(function () {

    // Cursor

    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {
        cursor.setAttribute(
            "style",
            "top: " + (e.pageY - 7) + "px; left: " + (e.pageX - 7) + "px;"
        );
    });

    document.addEventListener("click", (e) => {
        cursor.classList.add("expand");
        setTimeout(() => {
            cursor.classList.remove("expand");
        }, 500);
    });

    $('.large_file ').hover(function () {
        $('.cursor').addClass('cursor_change');
        document.getElementById('cursor').innerHTML = "LARGE FILE, CLICK TO DOWNLOAD";
    }, function () {
        $('.cursor').removeClass('cursor_change');
        document.getElementById('cursor').innerHTML = "";

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
        $('.top_contents_index').delay(1000).animate({
            height: '60%'
        }, function () {
            $('.history_tab').animate({
                opacity: '1'
            }, 100, function () {
                $('.law_tab').animate({
                    opacity: '1'
                }, 100, function () {
                    $('.language_tab').animate({
                        opacity: '1'
                    }, 100, function () {
                        $('.survival_tab').animate({
                            opacity: '1'
                        }, 100, function () {
                            $('.crisis_tab').animate({
                                opacity: '1'
                            }, 100, function () {
                                $('.main_title').animate({
                                    opacity: '1'
                                }, 800, function () {
                                    $('.file_count, .local_date_time').animate({
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
        }, 100, function () {
            setTimeout(function () {
                location.href = 'index.html'
            }, 500);
        })
    });

    // Takes you to history contents
    $('.history_tab').click(function () {
        $('.tab_fade').animate({
            opacity: '0'
        }, 200, function () {
            $('.top_contents_index').delay(500).animate({
                height: '0'
            }, 200, function () {
                setTimeout(function () {
                    location.href = "history.html";
                })
            })
        })
    });

    // Takes you to Law & Ownership contents
    $('.law_tab').click(function () {
        $('.tab_fade').animate({
            opacity: '0'
        }, 200, function () {
            $('.top_contents_index').delay(500).animate({
                height: '0'
            }, 200, function () {
                setTimeout(function () {
                    location.href = "law.html";
                })
            })
        })
    });

    // Takes you to The Crisis
    $('.crisis_tab').click(function () {
        $('.tab_fade').animate({
            opacity: '0'
        }, 200, function () {
            $('.top_contents_index').delay(500).animate({
                height: '0'
            }, 200, function () {
                setTimeout(function () {
                    location.href = "the_crisis.html";
                })
            })
        })
    });



    // Takes you to Language contents
    $('.language_tab').click(function () {
        $('.tab_fade').animate({
            opacity: '0'
        }, 200, function () {
            $('.top_contents_index').delay(500).animate({
                height: '0'
            }, 200, function () {
                setTimeout(function () {
                    location.href = "language.html";
                })
            })
        })
    });


    // Takes you to Survival contents
    $('.survival_tab').click(function () {
        $('.tab_fade').animate({
            opacity: '0'
        }, 200, function () {
            $('.top_contents_index').delay(500).animate({
                height: '0'
            }, 200, function () {
                setTimeout(function () {
                    location.href = "survival.html";
                })
            })
        })

    });



})