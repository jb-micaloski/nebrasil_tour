
const Scenes = {
  convoo:{
      title:'Convoo do NE Brasil',
      image: '../../images/comp/ne-beg-1.jpg',
      pitch: -7.8568981336071655,
      yaw: -151.58489911587074,
      preview: '../../images/prev/ne-beg-1.png',
      hotSpot:{
          nexScene:{
              type: 'custom',
              pitch: -30.057758740774947,
              yaw: -150.33545060468305,
              cssClass: 'moveScene',
              scene: 'gm1'
          }
      }
  },
  gm1:{
      title:'Sala de Estar dos Guardas-Marinha',
      image: "../../images/comp/ne-gm-1.jpg",
      pitch: -1.135847770636051,
      yaw: 177.35597278159588,
      preview: '../../images/prev/ne-gm-1.png',
      hotSpot:{
          nexScene:{
            type: 'custom',
            pitch: -34.31278512991658,
            yaw: 177.71500729185388,
            cssClass: 'moveScene',
            scene: 'gm2'
          },
          back:{
            type: 'custom',
            pitch: -25.99659601851994,
            yaw: 4.428237379399544,
            cssClass: 'moveScene',
            scene: 'convoo'
          }
      }
  },
  gm2:{
    title:'Sala de Estar dos Guardas-Marinha',
    image: "../../images/comp/ne-gm-2.jpg",
    pitch: -0.601995311364734,
    yaw: -176.1979292605151,
    preview: '../../images/prev/ne-gm-2.png',
    hotSpot:{
        nexScene:{
          type: 'custom',
          pitch: -18.951377314735694,
          yaw: 169.75940774232004,
          cssClass: 'moveScene',
          scene: 'gm3'
        },
          back:{
            type: 'custom',
            pitch: -25.99659601851994,
            yaw: 4.428237379399544,
            cssClass: 'moveScene',
            scene: 'convoo'
        },
          nexScene2:{
            type: 'custom',
            pitch: -17.112708706864137,
            yaw: -152.41041382749813,
            cssClass: 'moveScene',
            scene: 'gm4'
        },
    }
  },
  gm3:{
    title:'Sala de Estar dos Guardas-Marinha',
    image: "../../images/comp/ne-gm-3.jpg",
    pitch: -4.162702143703805,
    yaw: -179.70542407138072,
    preview: '../../images/prev/ne-gm-3.png',
    hotSpot:{
        nexScene:{
          type: 'custom',
          pitch: -24.504759298912997,
          yaw: -153.44021408428415,
          cssClass: 'moveScene',
          scene: 'gm4'
        },
        nexScene2:{
          type: 'custom',
          pitch: -6.185517987440792,
          yaw: 143.37014015214226,
          cssClass: 'moveScene',
          scene: 'gm5'
        },
        back:{
          type: 'custom',
          pitch: -20.859158595875908,
          yaw: -41.001874721087546,
          cssClass: 'moveScene',
          scene: 'convoo'
        }
    }
  },
  gm4:{
    title:'Sala de Estar dos Guardas-Marinha',
    image: "../../images/comp/ne-gm-4.jpg",
    pitch: -0.8411331298705084,
    yaw: 169.18388431908457,
    preview: '../../images/prev/ne-gm-4.png',
    hotSpot:{
        nexScene:{
          type: 'custom',
          pitch: -10.447770711265148  ,
          yaw: 143.09098528172728,
          cssClass: 'moveScene',
          scene: 'gm5'
        },
        backScene:{
          type: 'custom',
          pitch: -14.550359226512253,
          yaw: 24.748518750414426,
          cssClass: 'moveScene',
          scene: 'gm2'
        },
        backScene2:{
          type: 'custom',
          pitch: 9.412814583894038,
          yaw: 95.90655051952781,
          cssClass: 'moveScene',
          scene: 'gm2'
        },
    }
  },
  gm5:{
    title:'Sala de Estar dos Guardas-Marinha',
    image: "../../images/comp/ne-gm-5.jpg",
    pitch: -1.972767750731397,
    yaw: 6.153389282908155,
    preview: '../../images/prev/ne-gm-5.png',
    hotSpot:{
        nexScene:{
          type: 'custom',
          pitch: -0.20410405385981484,
          yaw: 77.06740829241551,
          cssClass: 'moveScene',
          scene: 'convoo'
    }
    }
  },
}


export default Scenes;