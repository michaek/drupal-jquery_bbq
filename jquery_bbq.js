$('#content').bbq_pjax({
  linkSelector: 'a:not([href~=/admin/])',
  transition: function($from, $to, dir){
    $from.slideUp()
    $to.slideDown()
  }
});
