

document.addEventListener('click', (e) => {
    const sliderLine = document.getElementById('sliderLine')

    const memText1 = document.getElementById('memText1')
    const memText2 = document.getElementById('memText2')
    const memText3 = document.getElementById('memText3')
    const memText4 = document.getElementById('memText4')

    const memButtonOne = document.getElementById('memButtonOne')
    const memButtonTwo = document.getElementById('memButtonTwo')
    const memButtonThree = document.getElementById('memButtonThree')
    const memButtonFour = document.getElementById('memButtonFour')

    const memButtonWrapOne = document.getElementById('memButtonWrapOne')
    const memButtonWrapTwo = document.getElementById('memButtonWrapTwo')
    const memButtonWrapThree = document.getElementById('memButtonWrapThree')
    const memButtonWrapFour = document.getElementById('memButtonWrapFour')

    const click_at_memButtonWrapOne = e.composedPath().includes(memButtonWrapOne);
    const click_at_memButtonWrapTwo = e.composedPath().includes(memButtonWrapTwo);
    const click_at_memButtonWrapThree = e.composedPath().includes(memButtonWrapThree);
    const click_at_memButtonWrapFour = e.composedPath().includes(memButtonWrapFour);
    if (click_at_memButtonWrapOne) {
        sliderLine.style.marginLeft = "0"
        memText1.classList.add('active');
        memText1.classList.remove('none');
        memText2.classList.remove('active');
        memText3.classList.remove('active');
        memText4.classList.remove('active');

        memButtonOne.classList.add("active")
        memButtonTwo.classList.remove("active")
        memButtonThree.classList.remove("active")
        memButtonFour.classList.remove("active")
    } else if (click_at_memButtonWrapTwo) {
        sliderLine.style.marginLeft = "-100%"
        memText1.classList.remove('active');
        memText2.classList.add('active');
        memText3.classList.remove('active');
        memText4.classList.remove('active');

        memText1.classList.add('none');

        memButtonOne.classList.remove("active")
        memButtonTwo.classList.add("active")
        memButtonThree.classList.remove("active")
        memButtonFour.classList.remove("active")
    } else if (click_at_memButtonWrapThree) {
        sliderLine.style.marginLeft = "-200%"
        memText1.classList.remove('active');
        memText2.classList.remove('active');
        memText3.classList.add('active');
        memText4.classList.remove('active');

        memText1.classList.add('none');

        memButtonOne.classList.remove("active")
        memButtonTwo.classList.remove("active")
        memButtonThree.classList.add("active")
        memButtonFour.classList.remove("active")
    } else if (click_at_memButtonWrapFour) {
        sliderLine.style.marginLeft = "-300%"
        memText1.classList.remove('active');
        memText2.classList.remove('active');
        memText3.classList.remove('active');
        memText4.classList.add('active');

        memText1.classList.add('none');

        memButtonOne.classList.remove("active")
        memButtonTwo.classList.remove("active")
        memButtonThree.classList.remove("active")
        memButtonFour.classList.add("active")
    }
});