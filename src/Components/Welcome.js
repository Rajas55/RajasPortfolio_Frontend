import React,{ Component } from "react";
class Welcome extends Component{
    render(){
        const {name,otherName}= this.props
        // const {state1, state2} = this.state
        return <h1> Welcome{name} aka {otherName}</h1>
    }
}
export default Welcome