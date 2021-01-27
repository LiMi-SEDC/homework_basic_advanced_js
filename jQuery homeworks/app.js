// HOMEWORK 1

let button = $('#btn');

button.click(function () {
    let input = $('#input').val();
    $('#htmlChange').html(input);
});




// HOMEWORK 2
let buttonChange = $('#btn1');

let color = $('#color');
buttonChange.click(function () {
    let text = $('#text').val();
    let color = $('#color');

    if (text) {
        $('#textChange').html(`<h3>${text}</h3>`);
    } if (!text){
        alert(`Put text on the input field`);
    }
});


// P.s : The first homework to write something on the input and after click the button to print in the html that work but ...
// the second one to print in the html the word with a color from color picker it doesn't work i tried so hard to find something with val(color) or add() or another methods but failed so it worked to print a word h3 but without a color...