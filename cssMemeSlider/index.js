

document.addEventListener('click', (e) => {
    const sliderLine = document.getElementById('sliderLine')
    const memText = document.getElementById('memText')

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
        
    } else if (click_at_memButtonWrapTwo) {
        sliderLine.style.marginLeft = "-100%"
    } else if (click_at_memButtonWrapThree) {
        sliderLine.style.marginLeft = "-200%"
    } else if (click_at_memButtonWrapFour) {
        sliderLine.style.marginLeft = "-300%"
    }
});