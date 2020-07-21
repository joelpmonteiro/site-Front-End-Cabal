/* eslint-disable */

function getScrollTopByHref1(element, AttributeIg) {
    const id = element.getAttribute('href').split('/');
    console.log('getScrollTopByHref1: ', id)
    console.log('getScrollTopByHref1: ', element)
    const tool = id[0] + id[1];
    let element1 = document.getElementById(AttributeIg);
    //console.log(tool)

    // element1.scrollIntoView({
    //     behavior: 'smooth',
    //     block: 'start' //scroll to top of the target element
    // });

    return document.querySelector(tool).offsetTop;
}

function getScrollTopByHref(element) {
    let element1 = document.getElementById('register');

    element1.scrollIntoView({
        behavior: 'smooth',
        block: 'start' //scroll to top of the target element
    });

}

function scrollToPosition(to) {
    smoothScrollTo(0, to);
}

function scrollToIdOnClick(event, AttributeIg) {
    event.preventDefault();
    console.log('scrollToIdOnClick: ', event.currentTarget)
    const to = getScrollTopByHref1(event.currentTarget, AttributeIg) - 80;
    scrollToPosition(to);
}


function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== 'undefined' ? duration : 400;

    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
}


export default { scrollToIdOnClick }