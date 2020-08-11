$(document).ready(function() {
// Clear previous transaction
//Load initial state
LoadItems();



$('#change-return-button').on('click', function() {


});//INITIALIZE TOTALIN VARIABLE

var totalIn = 0;

$('#change-return-button').on('click', function() {
    totalIn=0;

 $('#total-in-input-box').val('$' + totalIn.toFixed(2));
});

$('#total-in-input-box').val('$' + totalIn.toFixed(2));




//SET TOTAL IN DISPLAY BOX TO THE VALUE OF TOTAL IN
$('#total-in-input-box').val('$' + totalIn.toFixed(2));

//Start -ADD ONCLICK TO FOUR BUTTONS add $ buttons
$('#add-dollar-button').on('click', function() {

  totalIn = totalIn + 1;
   $('#total-in-input-box').val('$' + totalIn.toFixed(2));
});

$('#add-quarter-button').on('click', function() {
  totalIn = totalIn + .25;
   $('#total-in-input-box').val('$' + totalIn.toFixed(2));
});

$('#add-dime-button').on('click', function() {
  totalIn = totalIn + .1;
  $('#total-in-input-box').val('$' + totalIn.toFixed(2));
});

$('#add-nickel-button').on('click', function() {
  totalIn = totalIn + .05;
  $('#total-in-input-box').val('$' + totalIn.toFixed(2));
});

//END -- CLICKS FOR FOUR $ BUTTONS

//START - CLICK "MAKE PURCHASE BUTTON"
$('#make-purchase-button').on('click', function() {
  var currentTotal = totalIn;

  var itemNumber = $('#item-output-box').val();



  $.ajax ({
    type: 'GET',

    url: 'http://localhost:8080/money/' + currentTotal + '/item/' + itemNumber,
    success: function(data, status) {

      $('#Messages-output-box').val("Thank you!!!");


      var message ="";

      if(data.quarters == 0 && data.dimes == 0 && data.nickels==0 && data.pennies==0) {

      }

      if(data.quarters > 0) {
        message = message + data.quarters + ' Quarter ';
      }

      if(data.dimes > 0) {
        message = message + data.dimes + ' Dime ';
      }

      if(data.nickels > 0) {
        message = message + data.nickels + ' Nickel ';
      }

      if(data.pennies > 0) {
        message = message + data.pennies + ' Pennie ';
      }

      $('#change-output-box').val(message);

      },
      error: function(jqXHR, status) {
       //alert('There was an error: ' + data);
       $('#Messages-output-box').val(jqXHR.responseJSON.message);
       //$('#Messages-output-box').val(jqXHR.statusText);
       //How do I get the error message (i.,e sold out or deposit x amount from messag ebody in error)

      }


    });

});

//START - CHANGE RETURN bUTTON
$('#change-return-button').on('click', function() {
  LoadItems();
  clearData();

});

//END - CHANGE RETURN BUTTON

//WHEN ITEM 1 IS CLICKED, ITEM OUTPUT BOX DIDPLAYS ITEM NUMBER
$('#item-1-div').on('click', function() {
  //get the item name and put it in the mmessages item box
    $('#item-output-box').val('1');
});



$('#item-2-div').on('click', function() {
  //get the item name and put it in the mmessages item box
  $('#item-output-box').val('2');
});

$('#item-3-div').on('click', function() {
  //get the item name and put it in the mmessages item box
  $('#item-output-box').val('3');
});

$('#item-4-div').on('click', function() {
  //get the item name and put it in the mmessages item box
  $('#item-output-box').val('4');
});

$('#item-5-div').on('click', function() {
  //get the item name and put it in the mmessages item box
  $('#item-output-box').val('5');
});

$('#item-6-div').on('click', function() {
  //get the item name and put it in the mmessages item box
  $('#item-output-box').val('6');
});

$('#item-7-div').on('click', function() {
  //get the item name and put it in the mmessages item box
  $('#item-output-box').val('7');
});

$('#item-8-div').on('click', function() {
  //get the item name and put it in the mmessages item box
  $('#item-output-box').val('8');
});

$('#item-9-div').on('click', function() {
  //get the item name and put it in the mmessages item box
  $('#item-output-box').val('9');
});


})


function LoadItems() {

  $.ajax ({
    type: 'GET',
    url: 'http://localhost:8080/items',
    success: function(data, status) {
      $.each(data, function(index, item){
        var id = item.id;
        var name = item.name;
        var price = item.price.toFixed(2);
        var quantity= item.quantity;

        $('#item-number-'+ id).val(id);//get the box with that id in it
        $('#item-name-'+id).text(name);
        $('#item-price-'+id).text('$'+price);
        $('#item-quantity-'+id).text('Quantity: ' + quantity);
        }); // end success:function

      },
      error: function() {
        alert('failure');
      //$('#errorMessages')
        //  .append($('<li>')
          //.attr({class: 'list-group-item list-group-item-danger'})
          //.text('Error calling web service. Please try again later.'));
      }

  }); //end ajax call
}

function clearData() {

  $('#Messages-output-box').val('');
  $('#item-output-box').val('');
  $('#change-output-box').val('');
  $('#Messages-output-box').val('');


}
