'use strict';

const nav =document.querySelector('#navbar');
const header = document.querySelector('header');

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function(entries) {
    const[entry] = entries;

    if(!entry.isIntersecting) {
        nav.classList.add('sticky');
    }
    else navbar.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold:0,
    rootMargin: `${navHeight}px`,
});

headerObserver.observe(header);