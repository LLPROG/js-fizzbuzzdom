

const areaBoxs = document.querySelector('.area-boxs');

// cycle

for (let i = 1; i <= 100; i++) {
    let element = document.createElement('div')
    element.classList.add('box');
    element.innerHTML = i;

    if (i % 15 == 0) {
        element.classList.add('fizz-buzz');
        element.innerHTML= 'fizz-buzz';
    } else if (i % 3 == 0) {
        element.classList.add('fizz');
        element.innerHTML= 'fizz';
    } else if (i % 5 == 0) {
        element.classList.add('buzz');
        element.innerHTML= 'buzz';
    } 

    areaBoxs.append(element)
}


