$(document)
  .ready(function () {
    var $grayscale = $('.grayscale');
    $($grayscale).hover(
      function () {
        $(this).addClass('gray')
      },
      function () {
        $(this).removeClass('gray')
      }
    )

    // fix menu when passed
    $followingNavItems = $('#following-nav').children('.item');
    $stripeSegments = $('.stripe.segment');

    $('.ui.sidebar')
      .sidebar('attach events', '.toc.item');

    /* $('.ui.sidebar')
      .sidebar('toggle'); */

    $('.masthead').visibility({
      once: false,
      continuous: true,
      onPassing: function (calculations) {
        var bgColor = 'rgba(255, 255, 255, ' + calculations.percentagePassed + ')';
        var borderColor = 'rgba(34, 36, 38, ' + calculations.percentagePassed * 0.15 + ')';
        $('.top-bar').css({
          'background-color': bgColor,
          'border-bottom': '1px solid ' + borderColor
        });
      }
    });


    $stripeSegments
      .visibility({
        once: false,
        observeChanges: false,
        offset: 150,
        onTopPassed: function () {
          $segment = $(this);
          var index = $stripeSegments.index($segment);
          $followingNavItems.filter('.active').removeClass('active');
          $followingNavItems.eq(index + 1).addClass('active');
        },
        onTopPassedReverse: function () {
          $segment = $(this);
          var index = $stripeSegments.index($segment);
          $followingNavItems.filter('.active').removeClass('active');
          if (index > 0) {
            $followingNavItems.eq(index).addClass('active');
          }
        }
      });

    $scrollToLinks = $('#following-nav').find('.scroll-to');
    $scrollToLinks.on('click', function (event) {
      var
        id = $(this).attr('href').replace('#', ''),
        $element = $('#' + id),
        position = $element.offset().top + 10;
      $('html, body')
        .animate({
          scrollTop: position
        }, 500);
      event.preventDefault();
    });
  });