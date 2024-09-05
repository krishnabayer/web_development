var ran_image_1 = math.floor(Math.random()*6 + 1);
var ran_image_2 = math.floor(Math.random()*6 + 1);


document.querySelector('.img1').setAttribute('src','./images/dice'+ran_image_1+'.png')
document.querySelector('.img2').setAttribute('src','./images/dice'+ran_image_2+'.png')

if (ran_image_1===ran_image_2){
    document.querySelector('h1').innerHTML='Its a tie, roll again';
}
else if (ran_image_1>ran_image_2){
    document.querySelector('h1').innerHTML='Player 1 wins';
}
else {
    document.querySelector('h1').innerHTML='Player 2 wins';
}
