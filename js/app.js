$(document)
  .ready(function () {
    // fix menu when passed
    $('.masthead')
      .visibility({
        once: false,
        onBottomPassed: function () {
          $('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse: function () {
          $('.fixed.menu').transition('fade out');
        }
      });

    // create sidebar and attach to menu open
    $('.ui.sidebar')
      .sidebar('attach events', '.toc.item');

    var $grayscale = $('.grayscale');
    $($grayscale).hover(
      function () {
        $(this).addClass('gray')
      },
      function () {
        $(this).removeClass('gray')
      }
    )
  });