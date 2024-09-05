$('h1').css('color','white')

$('h1').click(function () {
    $('h1').css('color','purple')
}
);

$('input').keypress( function(event){
    $('h1').text(event.key);
}

);