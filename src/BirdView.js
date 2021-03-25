import React from 'react'
import { inject, observer } from 'mobx-react'
import { observe, intercept, autorun } from 'mobx'
import BirdForm from './BirdForm'
import BirdList from './BirdList'
@inject('BirdStore')
@observer
class BirdView extends React.Component {
  componentDidMount() {
    const { BirdStore } = this.props
    this.dispose = observe(BirdStore, 'birdTest', ({ newValue }) => {
      console.log('change', newValue)
    })
    this.dispose = autorun(() => {
      console.log('BirdTest change changes: ', BirdStore.birdTest)
    })
  }

  render() {
    return (
      <div>
        <h2>Birds</h2>
        <BirdForm addBird={this.props.BirdStore.addBird} />
        <br />
        {/* <BirdForm addBird={this.props.BirdStore.addBird1} /> */}
        <br />
        <div style={{ backgroundColor: this.props.BirdStore.birdTest.test.test1.color }}>
          {this.props.BirdStore.birdTest.test.test1.name}
        </div>
        <BirdList birdCount={this.props.BirdStore.birdCount} birds={this.props.BirdStore.birds} />
        <button onClick={this.props.BirdStore.changeBirdTest}>change birdtest</button>
        <button onClick={this.props.BirdStore.changeColorFistArray}>Change color first array</button>
        <button onClick={this.props.BirdStore.removeBird}>Remove bird</button>
      </div>
    )
  }
}
// const BirdView = ({ BirdStore: { birds, birdCount, addBird } }) => (
//   <div>
//     <h2>Birds</h2>
//     <BirdForm addBird={addBird} />
//     <br />
//     <BirdList birds={birds} birdCount={birdCount} />
//   </div>
// )

export default BirdView
