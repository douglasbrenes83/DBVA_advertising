$('.first-level').hover(function () {
      $('#transparente div').stop(false, false).slideToggle(500);
      $(this).children('ul').stop(false, false).toggle("slow");
      })