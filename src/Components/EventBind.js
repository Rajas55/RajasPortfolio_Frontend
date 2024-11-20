import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Hello"
      }
    //   this.clickHandler = this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         message:"Button is pressed"
    //     })
    // }
    clickHandler = () =>{
        this.setState({
            message:"goodbye"
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Event</button> */}
        <button onClick={this.clickHandler}>event</button>
      </div>
    )
  }
}

export default EventBind