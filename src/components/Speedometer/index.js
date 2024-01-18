import React, {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => {
      console.log(`previous state value ${prevState.count}`)
      return {count: prevState.count + 10}
    })
  }

  onDecrement = () => {
    this.setState(prevState => {
      console.log(`previous state value ${prevState.count}`)
      // Check if count is greater than 0, if true, decrement by 10, else set to 0.
      return {count: prevState.count > 0 ? prevState.count - 10 : 0}
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="box-container">
        <h1 className="head">Speedometer</h1>
        <img
          className="speedometer"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="para">Speed is {count}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="acc" onClick={this.onIncrement}>
            Accelerate
          </button>
          <button className="brk" onClick={this.onDecrement}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
