$(document).ready(function(){
  $('section.category h4').on({
    mouseenter:function(){
      $(this).css('borderBottom','1px solid #e21d1d');
    },
    mouseleave:function(){
      $(this).css('borderBottom','none');
    }
  });
});
