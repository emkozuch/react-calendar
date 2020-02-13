
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
  componentDidMount =() => {
    this.getDataFromMenu()
  }
  render() {
    return (
      <div>
        <Menu  parentCallback={this.getDataFromMenu} />
        <MonthGrid currentDate={this.state.currentDate} />
        </div>
    )
  }
}

export default App
