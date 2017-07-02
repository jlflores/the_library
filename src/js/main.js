(function () {
  'use strict';

  $(document).ready(function () {

    // INIT
    $('body').scrollspy({target: ".navbar", offset: 50});

    var HomeMap = GoogleMap('HomeMap');
    HomeMap.addMarker('Visit Us', 20.683670, -103.453185);

    /** LISTENERS **/

    // Capture all clicks (this is used add functionality to dynamic contect created)
    $(document).on('click', function (event) {
      var element = $(event.target);

      // Scroll Anchors
      if (element.hasClass('anchor')) {
        scrollToHash(event.target.hash);
      }
    });

    // Contact Form
    $('#ContactForm').on('submit', function (event) {
      event.preventDefault();
      // Parse Data
      var data = {};
      console.log(this);
      $(this).serializeArray().forEach(function (field) {
        data[field.name] = field.value;
      })
      alert('Thank you for contact us. You will hear from us soon.');
      // Send the server the information

      // $.ajax({
      //   url: '#',
      //   data: data,
      //   method: 'POST',
      //   success: function (res) {
      //     alert('Thank you for contact us. You will hear from us soon.');
      //   }
      // });
    });
  });
})();

/**
 * Scroll the document to selected position
 */
function scrollToHash(hash) {
  $('html, body').animate({
    scrollTop: $(hash).offset().top - 70
  }, 500, function () {
    window.location.hash = hash;
  });
}