import React, { Component } from 'react'
import '../styles/Menu.scss'

class Menu extends Component {

    state = {
        currentDate: new Date(),
        currentDisplay: "month",
        clickCountMonth: 0,
        clickCountYear: 0
    }
    sendData = () => {
        this.props.parentCallback(this.state.currentDate, this.state.currentDisplay)
    }

    changeDate = (e) => {
        let currentDate = this.state.currentDate
        let year = currentDate.getFullYear()
        let month = currentDate.getMonth()

        if (e.target.value === 'prev') {
            if (this.state.currentDisplay === "month") {
                currentDate.setMonth(month - 1)
                this.setState(prevState => ({
                    clickCountMonth: prevState.clickCountMonth - 1
                }))
            }
            if (this.state.currentDisplay === "year") {
                currentDate.setFullYear(year - 1)
                this.setState(prevState => ({
                    clickCountYear: prevState.clickCountYear - 1
                }))
            }
            this.setState({
                currentDate: currentDate
            })
        }
        if (e.target.value === 'next') {
            if (this.state.currentDisplay === "month") {
                currentDate.setMonth(month + 1)
                this.setState(prevState => ({
                    clickCountMonth: prevState.clickCountMonth + 1
                }))
            }
            if (this.state.currentDisplay === "year") {
                currentDate.setFullYear(year + 1)
                this.setState(prevState => ({
                    clickCountYear: prevState.clickCountYear + 1
                }))
            }

        }
        if (e.target.value === 'reset') {
            currentDate.setFullYear(year - this.state.clickCountYear)
            currentDate.setMonth(month - this.state.clickCountMonth)

            this.setState({
                clickCountMonth: 0,
                clickCountYear: 0
            })
        }
        this.setState({
            currentDate: currentDate
        })
        this.sendData()

    }

    changeDisplay = (e) => {
        this.setState({
            currentDisplay: e.target.value
        })
    }

    componentDidMount = () => {
        this.sendData()
    }
    render() {
        return (
            <div className="menu-container">
                <div className="navigation-container">
                    <button value="reset" onClick={this.changeDate}>dzisiaj</button>
                    <button value="prev" onClick={this.changeDate}>left</button>
                    <button value="next" onClick={this.changeDate}>right</button>
                </div>
                <div className="display-buttons-container">
                    <button value="week" onClick={this.changeDisplay} id="display-week" className="display-button">Tydzień</button>
                    <button value="month" onClick={this.changeDisplay} id="display-month" className="display-button">Miesiąc</button>
                    <button value="year" onClick={this.changeDisplay} id="display-year" className="display-button">Rok</button>
                </div>
                <div className="settings-container">
                    <button>settings</button>
                </div>
            </div>
        )
    }
}

export default Menu
