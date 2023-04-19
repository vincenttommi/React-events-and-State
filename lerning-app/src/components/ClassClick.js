import React, { Component } from 'react'


///handling a event in  class component 
class ClassClick extends Component {

clickHandler(){


    alert('you clicked me buddy')
}


render() {
  return (
    <div>
   <button onClick={this.clickHandler}>ClickMe</button>
    </div>
  )
}  
}

export default ClassClick