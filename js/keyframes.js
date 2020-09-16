let keyframes = (id) =>{
    let contact = [
      {
        transform: 'scale(.8)',
        opacity:0
      },
      {
        transform: 'scale(1)',
        opacity:1
      }
    ];
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
      contactTitle: contact,
      contactButton: contact
  }
  return options[id];
}
export default keyframes;