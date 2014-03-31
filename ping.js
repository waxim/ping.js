jQuery(document).ready(function(){  
  $('#ping').click(function(){
      ($('#ping').html() == 'Ping') ? $('#ping').html('Pong') : $('#ping').html('Ping');
  });
});
