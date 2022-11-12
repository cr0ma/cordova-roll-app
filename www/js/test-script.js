
var randomNumber = function(low, high) {
    return Math.floor( Math.random() * (1 + high - low) ) + low;
};

var showFace = function() {

    var face = randomNumber( 1, 20 );

    //if not already at this number
    if (dice.className !== 'show-' + face ) {

        dice.className = 'show-' + face;

        // //delay for spin to finish
        // messageDelay = setTimeout( function() {

        //     //show message
        //     outcomeText.innerHTML = messages[ face - 1 ];
        //     outcome.className = 'show';

        //     //display message then fade out
        //     fadeout = setTimeout( function() {

        //         //hide message
        //         outcome.className = '';

        //     }, 2000);

        // } , 1000);

    } else {
        //repeat number, try again
        return showFace();
    }

};

$( document ).ready(function() {

    showFace();
    $("#test-roll").on("click", function(){
        showFace();
    });
});
