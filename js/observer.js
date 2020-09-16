import keyframes from './keyframes.js';
import animation from './animation.js';

const observer = (customOptions= {}) => {
    let options = {
        root: customOptions.root? customOptions.root : null,
        rootMargin: '0px',
        threshold: customOptions.threshold? customOptions.threshold : .3
    }
    return new IntersectionObserver(
        (entries, observer)=>{
        entries.forEach(entry => {
            console.log(entry.target.offsetTop)
            if(window.pageYOffset < entry.target.offsetTop && entry.isIntersecting) {
                //show
                animation(entry.target, keyframes(entry.target.id));
            }
            if(window.pageYOffset < entry.target.offsetTop && !entry.isIntersecting && window.pageYOffset !== 0) {
                //hide
                animation(entry.target, keyframes(entry.target.id), {direction: 'reverse'});
            }
            
        });
        },
        options
    );

}

export default observer;