let keyframes = (id) =>{
    let options ={
      aboutText: [
        {
            transform: 'translateX(-200px)',
            opacity:0
        },
        {
            transform: 'translateX(0)',
            opacity: 1
            
        }
      ],
      aboutImage: [
        {
            transform: 'translateX(200px)',
            opacity:0
        },
        {
            transform: 'translateX(0)',
            opacity: 1
        }
      ],
      contactTitle: [
        {
          transform: 'translateX(200px)',
          opacity:0
        },
        {
          transform: 'translateX(0)',
          opacity:1
        }
      ]
  }
  return options[id];
}
export default keyframes;