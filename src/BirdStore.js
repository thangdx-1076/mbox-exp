import { observable, action, computed, configure, autorun, intercept } from 'mobx'

import BirdModel from './BirdModel'
//configure({enforceActions:"observed"})
class BirdStore {
  @observable birds = []

  @observable birdTest = {}
  constructor() {
    this.birdTest = {
      test: {
        test1: {
          id: 'Asd',
          name: 'test',
          color: 'blue',
        },
      },
    }
    // autorun(() => {
    //   console.log('auto run', this.birds)
    // })
  }
  @action
  addBird = (bird) => {
    this.birds.push(new BirdModel(bird))
  // this.birds = [...this.birds, new BirdModel(bird)]
  }

  @computed
  get birdCount() {
    return this.birds.length
    //return this.birds
  }
  // addBird1 = (bird) => {
  //   this.birds.push(new BirdModel(bird))
  // }
  @action
  changeBirdTest = () => {
    this.birdTest.test.test1.color = 'green'
   // this.birdTest={...this.birdTest}
  }
  @action
  changeColorFistArray = () => {
    // let temp = [...this.birds]
    // temp[0].color = 'black'
    // this.birds = temp
     this.birds[0] = { ...this.birds[0], color: 'black' }
    //this.birds[0].color = 'black'
    // this.birds = [...this.birds]
    console.log('test change')
  }
  @action
  removeBird = () => {
    this.birds.pop()
  }
}

export default new BirdStore()
