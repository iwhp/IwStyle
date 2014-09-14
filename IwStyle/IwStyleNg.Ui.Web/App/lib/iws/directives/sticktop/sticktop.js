(function () {
    'use strict';

    angular.module('iws.sticktop', []).directive('iwsSticktop', [iwsSticktop]);

    function iwsSticktop() {
        // Usage:
        //     <iw-sticktop></iw-sticktop>
        //     <div data-iw-sticktop></div>
        var directive = {
            link: link,
            restrict: 'EA',
            transclude: true,
            templateUrl: '/App/lib/iws/directives/sticktop/sticktop.html'
        };
        return directive;

        function link(scope, element, attrs) {
            iwsSticktopInit(element);
        }
    }
})();

// =========================================================================================================
function iwsSticktopInit(element) {
    var elementClone = element.clone();
    elementClone.css('visibility', 'hidden');
    elementClone.css('position', 'fixed');
    elementClone.css('top', 0);
    elementClone.css('width', element[0].clientWidth);
    element.after(elementClone);

    var offsetTopInit = element[0].offsetTop;

    // HACK: After a resize has happen, a following scroll will be interupted by addtional calls to resize
    //       isScrolling is used to test in resize, if a scroll did happen some milliseconds ago
    //var isScrolling = false;

    $(window).scroll(function () {
        //isScrolling = true;

        if ($(document).scrollTop() < offsetTopInit) {
            // Element not sticked to the top
            element.css('visibility', 'visible');
            elementClone.css('visibility', 'hidden');
        } else {
            // Element sticked to the top
            element.css('visibility', 'hidden');
            elementClone.css('visibility', 'visible');
        }

        //setTimeout(function () {
        //    isScrolling = false;
        //}, 100);
    });

    $(window).resize(function () {
        //if (isScrolling) {
        //    return;
        //}
        elementClone.css('width', element[0].clientWidth);
    });
};
// =========================================================================================================
