import keyframes from './keyframes.js';
import animation from './animation.js';

const observer = (customOptions= {}) => {
    let options = {
        root: customOptions.root? customOptions.root : null,
        rootMargin: '0px',
        threshold: customOptions.threshold? customOptions.threshold : .4
    }
    return new IntersectionObserver(
        (entries, observer)=>{
        entries.forEach(entry => {
            if(entry.boundingClientRect.y >0 && entry.isIntersecting) {
                animation(entry.target, keyframes(entry.target.id));
            }
            if((entry.rootBounds.width/entry.boundingClientRect.y)>.6 && !entry.isIntersecting) {
                animation(entry.target, keyframes(entry.target.id), {direction: 'reverse'});
            }
            
        });
        },
        options
    );

}

export default observer;