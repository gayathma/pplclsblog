$ = jQuery;
$( document ).ready(function() {

    $('.match-height').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
    });

    var fHeight = $('footer.footer').outerHeight();
    $('footer.footer').css({'margin-top': -fHeight + 'px'});
    $('.wrapper').css({'padding-bottom': fHeight + 'px'});

    $(window).resize(function(){
        var fHeight = $('footer.footer').outerHeight();
        $('footer.footer').css({'margin-top': -fHeight + 'px'});
        $('.wrapper').css({'padding-bottom': fHeight + 'px'});
    });

    function toggleMenu() {
        $input
            .parent().parent().prev().toggleClass('menu-visible')
            .prev().toggleClass('menu-visible');

        $input.parent().parent().parent().toggleClass('has-search-active');
        $btn.toggleClass('active');
    }

    $('header .btn-search').on('click', function (event) {
        $btn = $(this);
        if ($btn.hasClass('active')) {return true;}

        $input = $(event.currentTarget).parent().find('input.search');
        event.preventDefault();
        $input.animate({width: '100%'}, 100).focus();
        toggleMenu();

        $input.one('blur', function (e) {
            if ($(e.relatedTarget).hasClass('btn-search')) {return true;}
            $input.animate({width: '0'}, 200).val('');
            setTimeout(toggleMenu, 200);
        });
    });


    $('.portfolio-item').bind('mouseover', function(){
        $(this).find('.portfolio-desc').slideDown('200');
    });
    $('.portfolio-item').bind('mouseleave', function(){
        $(this).find('.portfolio-desc').slideUp('200');
    });
    $('.fade-desc .item').bind('mouseover', function(){
        $(this).find('.item-desc').slideDown('200');
    });
    $('.fade-desc .item').bind('mouseleave', function(){
        $(this).find('.item-desc').slideUp('200');
    });
    $('.team-boxed .item').bind('mouseenter', function(){
        $(this).find('.item-desc').animate({
            bottom: '0',
            height: '100%',
            'padding-top': '88px'
        }, 300);
    });
    $('.team-boxed .item').bind('mouseleave', function(){
        $(this).find('.item-desc').animate({
            bottom: '-80%',
            height: '100%',
            'padding-top': '18px'
        },300);
    });
    $('.owl-desc-more').on('click', function () {
        $('.owl-desc').toggle();
    });
    $('#play').on('click', function (event) {
        $(this).css({'opacity': 0, 'display': 'none'});
        $('.video-overlay').css({'opacity': 0, 'display': 'none'});
        $('#video img').css({'opacity': 0, 'display': 'none'});
    });
    if (document.getElementById('play') != null) {
        var tag = document.createElement('script');
        tag.src = 'http://www.youtube.com/player_api';
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        var player;
        function onYouTubePlayerAPIReady() {
            player = new YT.Player('player', {
                height: '150',
                width: '100%',
                videoId: 'bpOR_HuHRNs',
            });
            console.log(typeof player);
            document.getElementById('play').onclick = function() {
                player.playVideo();
            };
            document.getElementById('pause').onclick = function() {
                player.pauseVideo();
            };
        }
    };

    $('.contact-us select').select2();
    $('#billing_country').select2();
    $('#project_type').select2();
    $('input[type="file"]').styler({
        filePlaceholder: 'Attach a file',
        fileBrowse: '',
        fileNumber: 'Select files: %s',
        selectPlaceholder: 'Select',
        selectSearch: false,
        selectSearchLimit: 10,
        selectSearchNotFound: 'No matches found',
        selectSearchPlaceholder: 'Search',
    });
    $('select.orderby').styler();

    $('.thumbnails').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1
    });

    $('.boxed:not(.slick-initialized)').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    swipe: true
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipe: true
                }
            }
        ]
    });
    $('.elipsed:not(.slick-initialized)').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    swipe: true
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipe: true
                }
            }
        ]
    });
    $('.team-boxed .slick:not(.slick-initialized)').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipe: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    swipe: true
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipe: true
                }
            }
        ]
    });
    $('.products-items-4 .slick:not(.slick-initialized)').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    swipe: true
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipe: true
                }
            }
        ]
    });

    $('.products-items-3 .slick:not(.slick-initialized)').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipe: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    swipe: true
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipe: true
                }
            }
        ]
    });
    $('.featured-products .featured:not(.slick-initialized)').slick({
        dots: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipe: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    swipe: true
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipe: true
                }
            }
        ]
    });
    $('.featured-slick:not(.slick-initialized)').slick({
        dots: true,
        arrows: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipe: true
                }
            }
        ]
    });

    $('.photo-gallery .cstiles, .latest-works .cstiles, .gallery .cstiles, .portfolio-grid .cstiles').CSTiles({
        shareTile: false,
        margin: 0,
        imagePosition: ['center','center'],
        animate: {
            zoom:true
        },
        adaptivSize: {
            'big-desktop': [4,'auto'],
            'desktop': [4,'auto'],
            'tablet': [3,'auto'],
            'phone-landscape': [2,'auto'],
            'phone': [1,'auto']
        },
        adaptivMedia: {
            'big-desktop':'screen and (min-width: 1279px)',
            'desktop':'screen and (max-width: 1279px)',
            'tablet':'screen and (max-width: 1023px)',
            'phone-landscape':'screen and (max-width: 767px)',
            'phone':'screen and (max-width: 479px)'
        }
    });
    $('.slidee').removeClass('invisible');

    $('.scroll-gallery .frame').sly({
        horizontal: 1,
        itemNav: 'centered',
        smart: 1,
        activateOn: 'click',
        mouseDragging: true,
        touchDragging: true,
        releaseSwing: 1,
        startAt: 1,
        scrollBar: $('.scrollbar'),
        scrollBy: 0,
        speed: 100,
        clickBar: 1,
        dragHandle: true,
        prev: $('.sly-prev'),
        next: $('.sly-next'),
        itemSelector: null
    });
    $(window).resize(function(e) {
        $('.scroll-gallery .frame').sly('reload');
    });
    $('a.page-numbers.hidded').hide();
    $('a.next.page-numbers').hide();

    $(document).on('click', '.blog-grid .pagination a.page-numbers, .portfolio-grid .pagination a.page-numbers', function (e) {

        e.preventDefault();

        var postType = $('div.blog-grid, div.portfolio-grid').attr('postType');
        var currentPageEl = $('.page-numbers.current');
        var activePage = parseInt(currentPageEl.text(), 10);
        var nextPage = (parseInt($(this).text(), 10)) ? parseInt($(this).text(), 10): activePage + 1;

        if(activePage == 1){
            $(currentPageEl).before('<a class="page-numbers hidded" href="">'+ 0 +'</a>');
            $(currentPageEl).replaceWith('<a class="page-numbers" href="">'+ activePage +'</a>');
        }

        $('a.next.page-numbers').hide();
        $('a.page-numbers.hidded').hide();
        //$('a.page-numbers.hidded').hide();

        $('div.blog-grid, .row .page-numbers:contains("'+ activePage +'")').removeClass('current');
        $('div.portfolio-grid .row .page-numbers:contains("'+ activePage +'")').removeClass('current');

        callAJAX('all', nextPage, postType);

    });

    $(document).on('click', '.tab-pane.active .pagination a.page-numbers', function (e) {

        e.preventDefault();

        var postType = $('.tab-pane').attr('postType');
        var currentPageEl = $('.tab-pane.active .page-numbers.current');
        var activePage = parseInt(currentPageEl.text(), 10);
        var activeCategory = $('.tab-pane.active').attr('id');
        var nextPage = (parseInt($(this).text(), 10)) ? parseInt($(this).text(), 10): activePage + 1;
        if(activePage == 1){
            $(currentPageEl).before('<a class="page-numbers hidded" href="">'+ 0 +'</a>');
            $(currentPageEl).replaceWith('<a class="page-numbers" href="">'+ activePage +'</a>');
        }

        $('a.next.page-numbers').hide();
        $('a.page-numbers.hidded').hide();
        //$('a.page-numbers.hidded').hide();

        $('.tab-pane.active .page-numbers:contains("'+ activePage +'")').removeClass('current');

        callAJAX(activeCategory, nextPage, postType);
    });

    function callAJAX(activeCategory, nextPage, postType){
        // get next page of galleries
        $(function ($) {
            $.ajax({
                type: 'POST',
                url: window.wp_data.ajaxurl,
                data: {
                    action: 'load_next_page_elements',
                    category: activeCategory,
                    page: nextPage,
                    postType: postType
                },
                success: function (response) {
                    showNextPage(response, activeCategory, nextPage, postType);
                }
            });
        });
    }

    function showNextPage(response, activeCategory, nextPage, postType) {

        response = JSON.parse(response);
        var items = response.result;
        var html = '';

        items.forEach(function (e) {

            var monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
                'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
            ];

            //noinspection JSUnresolvedVariable
            var imgUrl = e.itemThumbnail[0],
                title = e.post_title,
                itemUrl = e.guid,
                categoryName = e.itemCategoryName,
                itemId = e.ID,
                itemCommentsCount = e.comment_count,
                itemDateRaw = new Date(e.post_date_gmt),
                itemPostContent = e.post_content;

            var month = monthNames[itemDateRaw.getMonth()];
            var itemDate = month + ' ' + itemDateRaw.getDate() + ', ' + itemDateRaw.getFullYear();

            if (itemCommentsCount == 0) {
                var itemComments = 'NO COMMENTS'
            } else {
                itemComments = itemCommentsCount + ' COMMENTS'
            }

            if (postType == 'gallery' || postType == 'gallery2') {

                html += '<div class="col-sm-6 col-md-4 col-no-padding"><div class="item">';
                html += '<div class="item-tag">' + categoryName + '</div>';
                html += '<img class="img-responsive" src="' + imgUrl + '" alt=""><div class="item-desc">';
                html += '<div class="item-cat"> ' + title + '</div><div class="item-desc-hidden">';
                html += '<a href="' + itemUrl + '" class="readmore">View gallery</a></div></div></div></div>';

                $('.tab-pane.active .col-sm-6').remove();
            } else if (postType == 'portfolio') {

                html += '<div class="col-sm-6 col-md-4 col-no-padding"><div class="portfolio-item"><div class="item-cat">';
                html += categoryName + '</div><div class="portfolio-desc"><div class="portfolio-title">';
                html += title + '</div><a href="' + itemUrl + '" class="readmore">View project</a>';
                html += '</div><img class="img-responsive" src="' + imgUrl + '" alt=""></div></div>';

                $('.tab-pane.active .col-sm-6').remove();
            } else if (postType == 'post2') {

                html += '<div class="col-md-4"><article id="post-'+ itemId +'" class="post type-post"><div class="post-img">';
                html += '<img class="" src="'+ imgUrl +'" alt="">';
                html += '<div class="blog-label label-orange">'+ categoryName +'</div> </div><div class="intro-text">';
                html += '<h2 class="post-title"><a href="'+ itemUrl +'">'+ title +'</a></h2>';
                html += '<div class="intro-text-content"><p>'+ itemPostContent +'</p></div>';
                html += '</div></article></div>';

                $('div.blog-grid .row .col-md-4').remove();
            } else if (postType == 'portfolio2') {

                html += '<div class="col-md-4"><article id="post-'+ itemId +'" class="post type-post"><div class="post-img">';
                html += '<img class="" src="'+ imgUrl +'" alt=""></div>';
                html += '<div class="intro-text"><h2 class="post-title"><a href="'+ itemUrl +'">'+ title +'</a></h2>';
                html += '<div class="post-cat">'+ categoryName +'</div></article></div>';

                $('div.portfolio-grid .row .col-md-4').remove();
            }else {
                html += '<div class="col-sm-4"><article id="post-' + itemId + '" class="post type-post"><div class="post-img">';
                html += '<img class="img-responsive" src="' + imgUrl + '" alt=""></div><div class="intro-text">';
                html += '<h2 class="post-title"><a href="' + itemUrl + '"> ' + title + '</a></h2>';
                html += '<div class="page-info"><span> ' + itemDate + ' </span>';
                html += '<span> ' + itemComments + ' </span> </div></div></article></div>';

                $('.tab-pane.active .col-sm-4').remove();
            }

        });

        var tabs = $('.tab-pane');

        //add class current to current page number
        if (tabs.length > 0) {
            $('.tab-pane.active .centered').before(html);
            $('.tab-pane.active .page-numbers:contains("' + nextPage + '")').addClass('current');
        } else {
            if (postType == 'post2') {
                $('div.blog-grid .row .centered').before(html);
                $('div.blog-grid .row .page-numbers:contains("' + nextPage + '")').addClass('current');
            } else {
                $('div.portfolio-grid .row .centered').before(html);
                $('div.portfolio-grid .row .page-numbers:contains("' + nextPage + '")').addClass('current');
            }
        }
    }

    $('.blog-tabs li[role=presentation]').on('click', function () {
        var category = $(this).find('a').attr('id');

        $('.portfolio-grid .tab-content .tab-pane').removeClass('active');
        $('.portfolio-grid .tab-content .tab-pane' + '#' + category).addClass('active');
    });

    $('.gallery li[role=presentation]').on('click', function () {
        var category = $(this).find('a').attr('id');

        $('.gallery .tab-content .tab-pane').removeClass('active');
        $('.gallery .tab-content .tab-pane' + '#' + category).addClass('active');
    });

    // Load more elements on gallery view 1
    $('.loadmore').on('click', function () {

        var category = $('ul.nav-pills li.active > a');
        var categorySlug = category.attr('id');
        var dataOffset = parseInt(category.attr('data-offset'), 10) + 12;
        var postType = $('.tab-pane').attr('postType');

        category.attr('data-offset', dataOffset);

        // get next portion of galleries
        $(function ($) {
            $.ajax({
                type: 'POST',
                url: window.wp_data.ajaxurl,
                data: {
                    action: 'load_more_elements',
                    category: categorySlug,
                    offset: dataOffset,
                    postType: postType
                },
                success: function (response) {
                    appendNewElements(response, categorySlug);
                }
            });
        });
    });

    /**
     * @param response
     * @param categorySlug
     */
    function appendNewElements(response, categorySlug) {
        response = JSON.parse(response);
        var items = response.result,
            a = 0,
            c = 2,
            html = '',
            className = '';
        if (response.result == null) {
            $('.loadmore a').remove();

            return false;
        }

        items.forEach(function (e) {
            //noinspection JSUnresolvedVariable
            var imgUrl = e.itemThumbnail[0],
                title = e.post_title,
                itemUrl = e.guid;

            if (a === 0) {
                className = c;
                a++;
            } else if (a === 1) {
                className = c - 1;
                a++;
            } else if (a === 2) {
                className = c - 1;
                a -= 2;
            }

            html += '<a class="cstiles__item" data-cstiles-size="' + className + '" href=" ' + itemUrl + '">';
            html += '<img class="cstiles__item-image" src="' + imgUrl + '" alt="">';

            html += '<div class="item-desc">';
            html += '<div class="item-cat">Branding</div>';
            html += '<div class="item-desc-hidden">';
            html += '<div class="item-title">' + title + '</div>';
            html += '<span class="readmore">View project</span>';
            html += '</div>';
            html += '</div>';
            html += '</span>';
        });

        /* Remove .is-fixer element */
        $('.tab-pane.active .cstiles .is-fixer').remove();

        $('.tab-pane.active .cstiles .cstiles__item:last').after(html);

        $(' #' + categorySlug + ' .cstiles').CSTiles({
            shareTile: false,
            margin: 0,
            imagePosition: ['center', 'center'],
            animate: {'zoom': true},
            adaptivSize: {
                'big-desktop': [4, 'auto'],
                'desktop': [4, 'auto'],
                'tablet': [3, 'auto'],
                'phone-landscape': [2, 'auto'],
                'phone': [1, 'auto']
            },
            adaptivMedia: {
                'big-desktop': 'screen and (min-width: 1279px)',
                'desktop': 'screen and (max-width: 1279px)',
                'tablet': 'screen and (max-width: 1023px)',
                'phone-landscape': 'screen and (max-width: 767px)',
                'phone': 'screen and (max-width: 479px)'
            }
        });
        if (Boolean(response.isLast)) {
            $('.loadmore[data-category=' + categorySlug + ']').css('visibility', 'hidden');
        }
    }
    $('.qty-minus').on('click', function () {
        var count = parseInt($(this).next().val(), 10);
        $(this).next().val(Math.abs(--count));
    });
    $('.qty-plus').on('click', function () {
        var count = parseInt($(this).prev().val(), 10);
        $(this).prev().val(++count);
    });

    $('.content-single a.btn-share').on('click', function (e) {

        e.preventDefault();

        var width = 400,
            height = 300,
            curl = $(this).attr('href'),
            leftPosition,
            topPosition;

        //Allow for borders.
        leftPosition = (window.screen.width / 2) - ((400 / 2) + 10);
        //Allow for title and status bars.
        topPosition = (window.screen.height / 2) - ((300 / 2) + 50);
        var windowFeatures = "status=no,height=" + 300 + ",width=" + 400 + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";

        var pageTitle = document.title;
        window.open(curl + '' + '&t=' + encodeURIComponent(pageTitle), 'sharer', windowFeatures);
        return false;
    });

    $('.blog-categories .product-list:not(.slick-initialized)').slick({
        dots: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipe: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    swipe: true
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipe: true
                }
            }
        ]
    });

    $('.nav.nav-pills a').on('shown.bs.tab', function (e) {
            $(e.currentTarget).closest('ul').next('.tab-content')
            .find($(e.currentTarget).attr('href') + ' .product-list').slick('setPosition')
    });

    $('.product-categories .product-list:not(.slick-initialized)').slick({
        dots: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        customPaging: 40,
        swipe: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    swipe: true,
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipe: true
                }
            }
        ]
    });

    $('.shop-full .product').on('mouseover', function(){
        $(this).find('.product-bottom').slideDown('200');
    }).on('mouseleave', function(){
        $(this).find('.product-bottom').slideUp('200');
    });
    $('.testimonials-grid .cstiles').CSTiles({
        shareTile: false,
        margin: 0,
        imagePosition: ['center','center'],
        animate: {
            'zoom':true
        },
        adaptivSize: {
            'big-desktop': [4,'auto'],
            'desktop': [4,'auto'],
            'tablet': [2,'auto'],
            'phone-landscape': [2,'auto'],
            'phone': [1,'auto']
        },
        adaptivMedia: {
            'big-desktop':'screen and (min-width: 1200px)',
            'desktop':'screen and (max-width: 1199px)',
            'tablet':'screen and (max-width: 991px)',
            'phone-landscape':'screen and (max-width: 767px)',
            'phone':'screen and (max-width: 767px)'
        }
    });
    window.setCookie = function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = 'expires='+d.toUTCString();
        var path = 'path=/';
        document.cookie = cname + '=' + cvalue + '; ' + expires + ';' + path;
    }

    window.getCookie = function (cname) {
        var name = cname + '=';
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
        }
        return '';
    }
    if(getCookie('notice') != 'closed') {
        $('.notice-top').css({'display': 'block'});
    }
    $('.notice-close').on('click', function () {
        $(this).closest('.notice-top').slideUp();
        setCookie('notice', 'closed');
    });

    $('#like-button').on('click', function () {
        var likesBlock = $('#likes-count');
        if ($('#like-button').hasClass('btn-warning')) {
            likes = parseInt(likesBlock.text(), 10) - 1;
            $('#like-button').removeClass('btn-warning');
        } else {
            var likes = parseInt(likesBlock.text(), 10) + 1;
            $('#like-button').addClass('btn-warning');
        }
        likesBlock.text(likes);
    });

    initTestimonials = function(selector){
        var $parent = $(selector);

        if($parent.length){
            var $icons       = $parent.find('.center'),
                $description = $parent.find('.center-desc');
            $icons.slick({
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3,
                slidesToScroll: 1
            });
            $description.slick({
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                speed: 500,
                arrows: false
            });
            $icons.on('beforeChange', function(){
                var nextSlide = arguments[3];
                if(nextSlide != $icons.slick('slickCurrentSlide')) {
                    $description.slick('slickGoTo', arguments[3]);
                }
            });

            $description.on('beforeChange', function(){
                var nextSlide = arguments[3];
                if(nextSlide != $icons.slick('slickCurrentSlide')) {
                    $icons.slick('slickGoTo', arguments[3]);
                }
            });
        }
    }
    initTestimonials('.center-block');

    var bxSlider1 = jQuery('.bx-view-1 .bxslider').bxSlider({
        pager: false
    });
    var bxSlider2 = jQuery('.bx-view-2 .bxslider').bxSlider({
        pager: true,
        controls: false
    });

    jQuery(window).on('resize',function(){
        if (bxSlider1.length > 0) {
            bxSlider1.reloadSlider();
        }
        if (bxSlider2.length > 0) {
            bxSlider2.reloadSlider();
        }
    });
    $('.bx-view-1 .scroll-icon').on('click', function (e) {
        var scrollHeight = $('.bxslider-overlay').height() + $('.bxslider-overlay').offset().top;
        $('html, body').stop().animate({
            scrollTop: scrollHeight
        }, '500', 'swing');
        e.preventDefault();
    });
    $('.vertical-slick:not(.slick-initialized)').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        mobileFirst: true,
        cssEase: 'linear'
    });
    $(window).on('resize',function(){
        $('.vertical-slick').slick('unslick');
        $('.vertical-slick:not(.slick-initialized)').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            mobileFirst: true,
            cssEase: 'linear'
        });
    });
    $('form#contact_form').submit(function () {
        $('form#contact_form .error-message').remove();
        var hasError = false;
        $('form#contact_form .required').each(function () {
            if ($.trim($(this).val()) == '') {

                if ($(this).attr('id') == 'contact_name') {
                    $(this).parent().append('<span class="error-message">Enter your full name</span>');

                }
                if ($(this).attr('id') == 'contact_email') {
                    $(this).parent().append('<span class="error-message">Enter your Email</span>');
                }

                if ($(this).attr('id') == 'contact_topic') {
                    $(this).parent().append('<span class="error-message">Enter topic</span>');
                }
                $(this).addClass('error');
                hasError = true;
            } else if ($(this).attr('id') == 'contact_email') {
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if (!emailReg.test($.trim($(this).val()))) {
                    $(this).parent().append('<span class="error-message">Please enter valid Email </span>');
                    $(this).addClass('error');
                    hasError = true;
                } else {
                    $(this).removeClass('error');
                }
            } else {
                $(this).removeClass('error');
            }
        });
        if (hasError) {
            return false;
        } else {
            return true;
        }
    });
    window.circles = {};
    window.bars = {};

    $('.progress-item-circle .progressItem').each(function (index, element) {
        var elemColor = $(element).attr('bar-color');
        var elemStyle = $(element).attr('bar-style');
        var elemPercent = $(element).attr('bar-percent');

        progressCircle(element, elemStyle, elemColor, elemPercent, index);

    });

    $('.progress-item-line .progressItem').each(function (index, element) {
        var elemColor = $(element).attr('bar-color');
        var elemStyle = $(element).attr('bar-style');
        var elemPercent = $(element).attr('bar-percent');
        progressLine(element, elemStyle, elemColor, elemPercent, index);

    });

    function isScrolledIntoView(elem) {
        var $elem = $(elem);
        var $window = $(window);

        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    function init() {
        $.each(window.circles, function (index, item) {
            if (isScrolledIntoView(item.element._container)) {
                item.element.animate(item.percent);
            }
        });
        $.each(window.bars, function (index, item) {
            if (isScrolledIntoView(item.element._container)) {
                item.element.animate(item.percent);
            }
        })
    }

    init(window);

    $(window).on('scroll', function () {
        init(this);
    });

    /**
     * @param {mixed} selector - progress line node element
     * @param {String} type - type of progress line
     * @param {String} color - progress line color
     * @param {String} percent - progress line percent
     * @param {Number} index - element index
     */
    function progressLine(selector, type, color, percent, index) {
        if ($(selector).length != 0) {
            window.bars[index] = {};
            window.bars[index]['element'] = new ProgressBar.Line(selector, {
                color: color,
                strokeWidth: 0.9,
                trailWidth: 0.9,
                duration: 1500,
                easing: 'linear',
                svgStyle: {
                    strokeLinecap: type,
                    padding: '0px 6px'
                },
                text: {
                    value: '0',
                    className: 'progress-value',
                    style: {
                        color: '#191f2e',
                        position: 'absolute',
                        top: '0px',
                        padding: '0 0 2px 0',
                        transform: {
                            prefix: false,
                            value: 'translate(-50%, -50%)'
                        }
                    }
                },
                step: function (state, bar) {
                    var width = 21;
                    if (percent >= 100) {
                        width = 34;
                    } else if (percent > 83) {
                        width = 26;
                    } else if (percent > 60 ) {
                        width = 23;
                    } else if (percent >= 100) {
                        width = 34;
                    } else if (percent < 10) {
                        width = 11;
                    }
                    $(bar.text).css({'left': (bar.value() * 100 + '%'), 'margin-left': 0 - width});
                    bar.setText((bar.value() * 100).toFixed(0) + '%');
                }
            });
            window.bars[index]['percent'] = percent / 100;
        }
    }

    /**
     * @param {mixed} selector - progress circle node element
     * @param {String} type - type of progress circle
     * @param {String} color - progress circle color
     * @param {String} percent - progress circle percent
     * @param {Number} index - element index
     */
    function progressCircle(selector, type, color, percent, index) {
        if ($(selector).length != 0) {
            window.circles[index] = {};
            window.circles[index]['element'] = new ProgressBar.Circle(selector, {
                color: color,
                strokeWidth: 4.6,
                trailWidth: 4.6,
                duration: 1500,
                easing: 'linear',
                svgStyle: {
                    strokeLinecap: type
                },
                text: {
                    value: '0'
                },
                step: function (state, bar) {
                    bar.setText((bar.value() * 100).toFixed(0) + '%');
                }
            });
            window.circles[index]['percent'] = percent / 100;
        }
    }

    if (typeof $('.owl-carousel-h').owlCarousel != 'undefined') {
        $('.owl-carousel-h').owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            video: true,
            center: true
        });
    }

    $('.list-logos .slick:not(.slick-initialized)').slick({
        dots: false,
        arrows: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    if (typeof $('.nivoslider').nivoSlider != 'undefined') {
        $('.nivoslider').nivoSlider({effect:'fade'});
    }
    if (typeof $( '#accordion' ).accordion != 'undefined') {
        $( '#accordion' ).accordion();
    }
    if (typeof GMaps != 'undefined' && $('#map').length) {
        var map;
        map = new GMaps({
            div: '#map',
            lat: 6.915180,
            lng: 79.973291,
            zoomControl : false,
            panControl : false,
            scrollwheel: false,
            streetViewControl : false,
            mapTypeControl: false,
            overviewMapControl: false,
            styles: [{'featureType':'water','elementType':'geometry','stylers':[{'color':'#e9e9e9'},{'lightness':17}]},{'featureType':'landscape','elementType':'geometry','stylers':[{'color':'#f5f5f5'},{'lightness':20}]},{'featureType':'road.highway','elementType':'geometry.fill','stylers':[{'color':'#ffffff'},{'lightness':17}]},{'featureType':'road.highway','elementType':'geometry.stroke','stylers':[{'color':'#ffffff'},{'lightness':29},{'weight':0.2}]},{'featureType':'road.arterial','elementType':'geometry','stylers':[{'color':'#ffffff'},{'lightness':18}]},{'featureType':'road.local','elementType':'geometry','stylers':[{'color':'#ffffff'},{'lightness':16}]},{'featureType':'poi','elementType':'geometry','stylers':[{'color':'#f5f5f5'},{'lightness':21}]},{'featureType':'poi.park','elementType':'geometry','stylers':[{'color':'#dedede'},{'lightness':21}]},{'elementType':'labels.text.stroke','stylers':[{'visibility':'on'},{'color':'#ffffff'},{'lightness':16}]},{'elementType':'labels.text.fill','stylers':[{'saturation':36},{'color':'#333333'},{'lightness':40}]},{'elementType':'labels.icon','stylers':[{'visibility':'off'}]},{'featureType':'transit','elementType':'geometry','stylers':[{'color':'#f2f2f2'},{'lightness':19}]},{'featureType':'administrative','elementType':'geometry.fill','stylers':[{'color':'#fefefe'},{'lightness':20}]},{'featureType':'administrative','elementType':'geometry.stroke','stylers':[{'color':'#fefefe'},{'lightness':17},{'weight':1.2}]}]
        });
        map.addMarker({
            icon: 'images/marker-orange.png',
            lat: 6.915180,
            lng: 79.973291,
            title: 'Marker with InfoWindow',
            infoWindow: {
                content: '<div class="marker"><div>' +
                '<span class="add-label">A</span>' +
                '<span class="add-value">SRI LANKA INSTITUTE OF INFORMATION TECHNOLOGY, NEW KANDY ROAD,MALABE.</span></div>' +
                '<div><span class="add-label">P</span>' +
                '<span class="add-value">+94 11 241 3900</span></div>' +
                '</div>'
            }
        });
    }


});
