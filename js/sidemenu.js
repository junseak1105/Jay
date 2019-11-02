$('ul.main-menu li').click(function (e) {
    
                if ($().siblings('li').find('ul.submenu:visible').length) {
                    $('ul.submenu').slideUp('normal');
                }
                $(this).find('ul.submenu').slideToggle('normal');
            });
    
            var t1 = new TimelineMax({ paused: true });     /*전환 시간 설정*/
    
            t1.to(".menu", 0.2, {
                opacity: 0.7
            });
            t1.to(".close-menu", 0.1, {
                opacity: 1
            });
            t1.to(".menu-btn", 0.1, {
                opacity: 0
            });
    
            t1.staggerFrom(".main-menu li a:not(.submenu li a)", 1, {         /*메인메뉴 활성화*/
                opacity: 0,
                y: 10,
                ease: Power3.easeInOut
            }, 0.1);
    
            t1.from(".submenu", 0.1, {                                        /*서브메뉴 활성화*/
                autoAlpha: 0
            });
    
            t1.from(".call", 0.1, {                                             /*전화번호 활성화*/
                delay: -1,
                opacity: 0,
                y: 10,
                ease: Power3.easeInOut
            });
    
            t1.from(".mail", 0.1, {                                             /*이메일 활성화*/
                delay: -1,
                opacity: 0,
                y: 10,
                ease: Power3.easeInOut
            });
    
            t1.reverse();
    
            $(document).on("click", ".menu-btn", function () {                  /*클릭시 t1 함수 활성화*/
                t1.reversed(!t1.reversed());
            });
    
            $(".close-menu").click(function () {                /*클릭시 t1 함수 역으로 활성화*/
                t1.reversed(!t1.reversed());
            });
    
    