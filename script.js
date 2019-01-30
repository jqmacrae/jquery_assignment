
$ (document) .ready(function() {


      
      $(".bluebtn").click(function() {
          $( "p1" ).slideToggle();
        });

    $( "a" ).click(function( event ) {
    event.preventDefault();
    $( this ).hide();
    });

    $( ".btnshow" ).click(function() {
        $( "p3" ).show( "slow" );
      });


})
