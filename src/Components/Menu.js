import React, { Component } from 'react'
import '../styles/Menu.scss'

class Menu extends Component {

    state = {
        currentDate: new Date(),
        currentDisplay: "month",
    }

    changeDate = (e) => {
        const currentDate = this.state.currentDate
        let year = currentDate.getFullYear()
        let month = currentDate.getMonth()

        if (e.target.value === 'prev') {
            if (this.state.currentDisplay === "month") {
                if (month === 0) {
                    currentDate.setMonth(11)
                    currentDate.setFullYear(year - 1)
                } else {
                    currentDate.setMonth(month - 1)
                }
            }
            if (this.state.currentDisplay === "year") {
                currentDate.setFullYear(year - 1)
            }
            this.setState({
                currentDate: currentDate
            })
        }

        if (e.target.value === 'next') {
            if (this.state.currentDisplay === "month") {
                if (month === 11) {
                    currentDate.setMonth(0)
                    currentDate.setFullYear(year + 1)
                } else {
                    currentDate.setMonth(month + 1)
                }
            }
            if (this.state.currentDisplay === "year") {
                currentDate.setFullYear(year + 1)
            }
            this.setState({
                currentDate: currentDate
            })
        }
    }

    resetDate = () => {
        this.setState({
            currentDate: new Date()
        }, () => { console.log(this.state.currentDate) })


    }

    changeDisplay = (e) => {
        this.setState({
            currentDisplay: e.target.value
        })
    }
    render() {
        return (
            <div className="menu-container">
                <div className="navigation-container">
                    <button onClick={this.resetDate}>dzisiaj</button>
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
                <p>{this.state.currentDate.toString()}</p>
            </div>
        )
    }
}

export default Menu
