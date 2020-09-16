const navTransition = (nav, container, navLinks) => {
    return () => {
        setTimeout(() => {
        
            if(window.pageYOffset > nav.offsetTop) {
            nav.classList.add("sticky")
            container.classList.remove("flex-md-column")
            for(let i=0; i<navLinks.length; i++) {
                navLinks[i].classList.add('sticky-link');
            }
            } else {
            nav.classList.remove("sticky")
            container.classList.add("flex-md-column")
            for(let i=0; i<navLinks.length; i++) {
                navLinks[i].classList.remove('sticky-link');
            }
            }
        }, 300);
    }
}

export {
    navTransition
}