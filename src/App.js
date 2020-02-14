
import React, { Component } from 'react'
import './styles/App.scss';
import Layout from './Components/Layout'
import MonthGrid from './Components/MonthGrid';
import Menu from './Components/Menu'
export class App extends Component {
  state = {
    currentDate: new Date(),
    currentDisplay: 'month'
  }

  getDataFromMenu = (menuDate, menuDisplay) => {
    this.setState({
      currentDate: menuDate,
      currentDisplay: menuDisplay
    })
    
  }
  componentWillReceiveProps(){
    this.getDataFromMenu()
  }
  componentDidMount =() => {
 
    
  }
  render() {
   
    return (
      <div>
        <Menu  parentCallback={this.getDataFromMenu} />
        <MonthGrid dateToDisplay={this.state.currentDate} />
        </div>
    )
  }
}

export default App
