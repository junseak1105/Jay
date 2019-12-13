$('ul.main-menu li').click(function (e) {
    
                if ($().siblings('li').find('ul.submenu:visible').length) {
                    $('ul.submenu').slideUp('normal');
                }
                $(this).find('ul.submenu').slideToggle('normal');
            });
    
            var t1 = new TimelineMax({ paused: true });   
    
            t1.to(".menu", 0.2, {
                opacity: 0.7
            });
            t1.to(".close-menu", 0.1, {
                opacity: 1
            });
            t1.to(".menu-btn", 0.1, {
                opacity: 0
            });
    
            t1.staggerFrom(".main-menu li a:not(.submenu li a)", 1, {        
                opacity: 0,
                y: 10,
                ease: Power3.easeInOut
            }, 0.1);
    
            t1.from(".submenu", 0.1, {                                       
                autoAlpha: 0
            });
    
            t1.from(".call", 0.1, {                                         
                delay: -1,
                opacity: 0,
                y: 10,
                ease: Power3.easeInOut
            });
    
            t1.from(".mail", 0.1, {                                           
                delay: -1,
                opacity: 0,
                y: 10,
                ease: Power3.easeInOut
            });
    
            t1.reverse();
    
            $(document).on("click", ".menu-btn", function () {                  
                $(".menu").show();
                t1.reversed(!t1.reversed());
            });
    
            $(".close-menu").click(function () {                
                t1.reversed(!t1.reversed());
                $(".menu").hide();
            });
    
    