const animation = (target, keyframes, options ={}) => {
    const 
            DIRECTION = options.direction? options.direction : 'normal',
            DURATION = options.duration? options.duration : 500, 
            DELAY = options.delay? options.delay : 300, 
            EASING = options.easing? options.easing : 'ease-out';

    return target.animate(
        keyframes,
        {
            duration: DURATION,
            delay: DELAY,
            direction: DIRECTION,
            easing: EASING,
            iterations: 1,
            fill: 'forwards'
        }
    )
}

export default animation;