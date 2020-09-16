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
    let skill = [
      {
        transform: 'translateX(-200px)',
        opacity:0
      },
      {
        transform: 'translateX(30px)',
        opacity:1,
        offset: .7
      },
      {
        transform: 'translateX(0)',
        opacity:1
      }
    ]
    let skill2 = [
      {
        transform: 'translateX(200px)',
        opacity:0
      },
      {
        transform: 'translateX(-30px)',
        opacity:1,
        offset: .7
      },
      {
        transform: 'translateX(0)',
        opacity:1
      }
    ]
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
      contactButton: contact,
      skill1: skill,
      skill2: skill,
      skill3: skill,
      skill4: skill2,
      skill5: skill2,
      skill6: skill2,
  }
  return options[id];
}
export default keyframes;