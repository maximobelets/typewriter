'use strict'

const text = document.querySelector('.text');

const typeWriter = (string) => {
    for(let i = 0; i < string.length; i++ ) {
        setTimeout((i) => {
            text.innerHTML += string[i];
            console.log(i)
        }, i*1000, i)
    }
}

typeWriter('text')







