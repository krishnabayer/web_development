// alert('hi there')

// document.querySelector('button').addEventListener('click',handleclick);

// function handleclick(){
//     alert('handle click');
// }


var drum_buttons = document.querySelectorAll('.set button');

// for (var i=0;i<drum_buttons.length;i++){
//     drum_buttons[i].addEventListener('click',function (){
//         alert('handle click');
//     });
// }

for (var i=0;i<drum_buttons.length;i++){
    drum_buttons[i].addEventListener('click',function (){
        var thisinnerhtml = this.innerHTML;
        buttonanimation(thisinnerhtml);
        switch (thisinnerhtml) {
            case 'w':
                    console.log(event)
                    var audio = new Audio('./sounds/crash.mp3');
                    audio.play();
                break;
            case 'a':
                var audio = new Audio('./sounds/kick-bass.mp3');
                audio.play();
                break;
            case 's':
                var audio = new Audio('./sounds/snare.mp3');
                audio.play();
                break;
            case 'd':
                var audio = new Audio('./sounds/tom-1.mp3');
                audio.play();
                break;
            case 'j':
                var audio = new Audio('./sounds/tom-2.mp3');
                audio.play();
                break;
            case 'k':
                var audio = new Audio('./sounds/tom-3.mp3');
                audio.play();
                break;
            case 'l':
                var audio = new Audio('./sounds/tom-4.mp3');
                audio.play();
                break;
            default:
                break;
        }


    });
}


document.addEventListener('keypress',function(event){
    console.log(event);
    buttonanimation(event.key);
    makesound(event.key);
    }
);



function makesound(key){
    switch (key) {
        case 'w':
                var audio = new Audio('./sounds/crash.mp3');
                audio.play();
            break;
        case 'a':
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        default:
            break;
    }
}

function buttonanimation(key){
    document.querySelector('.'+key).classList.add('pressed');
    setTimeout(function(){
        //do what you need here
        document.querySelector('.'+key).classList.remove('pressed');
    }, 100);
}

