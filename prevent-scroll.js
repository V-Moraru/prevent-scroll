define([
    'jquery',
    'domReady!'
], function ($) {
    'use strict';

    var previousScrollY = 0,
        body = $('body');

    return {

        fixedBody: function () {
            previousScrollY = window.scrollY;
            body.css({
                marginTop: -previousScrollY,
                position: 'fixed',
                width: '100%',
                'overflow-y': 'scroll',
                scrollbarGutter: 'stable'
            });
        },

        unfixedBody: function () {
            previousScrollY = Math.abs(parseInt(body.css("margin-top"), 10));
            body.css({
                marginTop: 0,
                position: 'static',
                'overflow-y': 'auto',
                scrollbarGutter: 'auto'
            });
            window.scrollTo(0, previousScrollY);
        }

    };
});

