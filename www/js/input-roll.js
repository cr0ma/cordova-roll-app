$( document ).ready(function() {

    $('#roll').on("click", function(){
        var _roll = $(this).roll({
            exp: $('#input-roll').val()
        });
        $('div#dice').removeClass('show-20').addClass('show-'+_roll.roll("faceToShow"));
    })
});
