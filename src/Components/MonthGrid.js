import React, { Component } from 'react'
import '../styles/MonthGrid.scss'

class MonthGrid extends Component {

    state = {
        monthName: '',
        daysNumber: null,
        firstDayOfWeek: null,
    }

    updateMonthName() {
        const monthsNames = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
        this.setState({
            monthName: monthsNames[this.props.dateToDisplay.getMonth()]
        })
    }
    getNumberOfDays(year, month) {
        const daysNumber = new Date(year, month, 0).getDate()
        this.setState({
            daysNumber: daysNumber
        })
    }
    getFirstDay() {
        const currentDate = this.props.dateToDisplay
        currentDate.setDate(1)
        const firstDayOfWeek = currentDate.getDay()

        this.setState({
            firstDayOfWeek: firstDayOfWeek
        })
    }
    renderPrevDays() {
        const day1 = new Date(this.props.dateToDisplay.getFullYear(), this.props.dateToDisplay.getMonth(), 1)
        const day2 = new Date(this.props.dateToDisplay.getFullYear(), this.props.dateToDisplay.getMonth(), 1)
        const day3 = new Date(this.props.dateToDisplay.getFullYear(), this.props.dateToDisplay.getMonth(), 1)
        const day4 = new Date(this.props.dateToDisplay.getFullYear(), this.props.dateToDisplay.getMonth(), 1)
        const day5 = new Date(this.props.dateToDisplay.getFullYear(), this.props.dateToDisplay.getMonth(), 1)
        const day6 = new Date(this.props.dateToDisplay.getFullYear(), this.props.dateToDisplay.getMonth(), 1)
        day1.setDate(day1.getDate() - 1)
        day2.setDate(day2.getDate() - 2)
        day3.setDate(day3.getDate() - 3)
        day4.setDate(day4.getDate() - 4)
        day5.setDate(day5.getDate() - 5)
        day6.setDate(day6.getDate() - 6)

        let daysBefore

        switch (this.state.firstDayOfWeek) {
            case 1:
                daysBefore = null
                break;
            case 2:
                daysBefore = (<>
                    <div className="prev-day">{day1.getDate()}</div>
                </>)
                break;
            case 3:
                daysBefore = (<>
                    <div className="prev-day">{day2.getDate()}</div>
                    <div className="prev-day">{day1.getDate()}</div>
                </>)
                break;
            case 4:
                daysBefore = (<>
                    <div className="prev-day">{day3.getDate()}</div>
                    <div className="prev-day">{day2.getDate()}</div>
                    <div className="prev-day">{day1.getDate()}</div>
                </>)
                break;
            case 5:
                daysBefore = (<>
                    <div className="prev-day">{day4.getDate()}</div>
                    <div className="prev-day">{day3.getDate()}</div>
                    <div className="prev-day">{day2.getDate()}</div>
                    <div className="prev-day">{day1.getDate()}</div>
                </>)
                break;
            case 6:
                daysBefore = (<>
                    <div className="prev-day">{day5.getDate()}</div>
                    <div className="prev-day">{day4.getDate()}</div>
                    <div className="prev-day">{day3.getDate()}</div>
                    <div className="prev-day">{day2.getDate()}</div>
                    <div className="prev-day">{day1.getDate()}</div>
                </>)
                break;
            case 0:
                daysBefore = (<>
                    <div className="prev-day">{day6.getDate()}</div>
                    <div className="prev-day">{day5.getDate()}</div>
                    <div className="prev-day">{day4.getDate()}</div>
                    <div className="prev-day">{day3.getDate()}</div>
                    <div className="prev-day">{day2.getDate()}</div>
                    <div className="prev-day">{day1.getDate()}</div>
                </>)
                break;

            default:
                break;
        }
        return daysBefore
    }
    renderNextDays() {
        const day1 = new Date(this.props.dateToDisplay.getFullYear(), this.props.dateToDisplay.getMonth(), 0)
        const day2 = new Date(this.props.dateToDisplay.getFullYear(), this.props.dateToDisplay.getMonth(), 0)
        const day3 = new Date(this.props.dateToDisplay.getFullYear(), this.props.dateToDisplay.getMonth(), 0)
        const day4 = new Date(this.props.dateToDisplay.getFullYear(), this.props.dateToDisplay.getMonth(), 0)
        const day5 = new Date(this.props.dateToDisplay.getFullYear(), this.props.dateToDisplay.getMonth(), 0)
        const day6 = new Date(this.props.dateToDisplay.getFullYear(), this.props.dateToDisplay.getMonth(), 0)
        day1.setDate(day1.getDate() + 1)
        day2.setDate(day2.getDate() + 2)
        day3.setDate(day3.getDate() + 3)
        day4.setDate(day4.getDate() + 4)
        day5.setDate(day5.getDate() + 5)
        day6.setDate(day6.getDate() + 6)
        let daysArray = [day1.getDate(), day2.getDate(), day3.getDate(), day4.getDate(), day5.getDate(), day6.getDate()]
        let daysAfter

        switch (this.state.firstDayOfWeek) {
            case 0:
                if (this.state.daysNumber === 29) {
                    daysAfter = null
                } else if (this.state.daysNumber === 28) {
                    daysAfter = (<>
                        <div className="prev-day">{day1.getDate()}</div>
                    </>)
                } else if (this.state.daysNumber === 30) {
                    daysAfter = (<>
                        {daysArray.map((day) => {
                            return <div className="prev-day">{day}</div>
                        })}
                    </>)
                } else {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            if (index < 5) {
                                return <div className="prev-day">{day}</div>
                            }
                            return false
                        })}
                    </>)
                }
                break;
            case 6:
                if (this.state.daysNumber === 28) {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            if (index < 2) {
                                return <div className="prev-day">{day}</div>
                            }
                            return false
                        })}
                    </>)
                } else if (this.state.daysNumber === 29) {
                    daysAfter = (<>
                        <div className="prev-day">{day1.getDate()}</div>
                    </>)
                } else if (this.state.daysNumber === 31) {
                    daysAfter = (<>
                        {daysArray.map((day) => {
                            return <div className="prev-day">{day}</div>
                        })}
                    </>)
                } else daysAfter = null
                break;
            case 5:
                if (this.state.daysNumber === 28) {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            if (index < 3) {
                                return <div className="prev-day">{day}</div>
                            }
                            return false
                        })}
                    </>)
                } else if (this.state.daysNumber === 29) {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            if (index < 2) {
                                return <div className="prev-day">{day}</div>
                            }
                            return false
                        })}
                    </>)
                } else if (this.state.daysNumber === 30) {
                    daysAfter = <div className="prev-day">{day1.getDate()}</div>
                } else {
                    daysAfter = null
                }
                break;
            case 4:
                if (this.state.daysNumber === 28) {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            if (index < 4) {
                                return <div className="prev-day">{day}</div>
                            }
                            return false
                        })}
                    </>)
                } else if (this.state.daysNumber === 29) {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            if (index < 3) {
                                return <div className="prev-day">{day}</div>
                            }
                            return false
                        })}
                    </>)
                } else if (this.state.daysNumber === 30) {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            if (index < 2) {
                                return <div className="prev-day">{day}</div>
                            }
                            return false
                        })}
                    </>)
                } else {
                    daysAfter = <div className="prev-day">{day1.getDate()}</div>
                }
                break;
            case 3:
                if (this.state.daysNumber === 28) {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            if (index < 5) {
                                return <div className="prev-day">{day}</div>
                            }
                            return false
                        })}
                    </>)
                } else if (this.state.daysNumber === 29) {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            if (index < 4) {
                                return <div className="prev-day">{day}</div>
                            }
                            return false
                        })}
                    </>)
                } else if (this.state.daysNumber === 30) {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            if (index < 3) {
                                return <div className="prev-day">{day}</div>
                            }
                            return false
                        })}
                    </>)
                } else {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            if (index < 2) {
                                return <div className="prev-day">{day}</div>
                            }
                            return false
                        })}
                    </>)

                }
                break;
            case 2:
                if (this.state.daysNumber === 28) {
                    daysAfter = (<>
                        {daysArray.map((day) => {
                            return <div className="prev-day">{day}</div>
                        })}
                    </>)
                } else if (this.state.daysNumber === 29) {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            if (index < 5) {
                                return <div className="prev-day">{day}</div>
                            }
                            return false
                        })}
                    </>)
                } else if (this.state.daysNumber === 30) {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            if (index < 4) {
                                return <div className="prev-day">{day}</div>
                            }
                            return false
                        })}
                    </>)
                } else {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            if (index < 3) {
                                return <div className="prev-day">{day}</div>
                            }
                            return false
                        })}
                    </>)
                }
                break;
            case 1:
                if (this.state.daysNumber === 28) {
                    daysAfter = null
                } else if (this.state.daysNumber === 29) {
                    daysAfter = (<>
                        {daysArray.map((day) => {
                            return <div className="prev-day">{day}</div>
                        })}
                    </>)
                } else if (this.state.daysNumber === 30) {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            if (index < 5) {
                                return <div className="prev-day">{day}</div>
                            }
                            return false
                        })}
                    </>)
                } else {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            if (index < 4) {
                                return <div className="prev-day">{day}</div>
                            }
                            return false
                        })}
                    </>)
                }
                break;

            default:
                break;
        }
        return daysAfter
    }
    componentWillReceiveProps(props) {
        this.setState({
            currentDate: props.dateToDisplay,
            month: props.dateToDisplay.getMonth(),
            year: props.dateToDisplay.getFullYear()
        })
        this.getFirstDay()
        this.updateMonthName()
        this.getNumberOfDays(this.props.dateToDisplay.getFullYear(), this.props.dateToDisplay.getMonth() + 1)
    }


    render() {

        let daysOfMonth = []
        for (let i = 1; i <= this.state.daysNumber; i++) {
            daysOfMonth.push(i)
        }

        return (
            <div>
                <div className="month-name">
                    <h1>{this.state.monthName}</h1>
                    <h2>{this.props.dateToDisplay.getFullYear()}</h2>
                </div>
                <div className="week-days-container">
                    <div>
                        <span>Pon</span>
                    </div>
                    <div>
                        <span>Wt</span>
                    </div>
                    <div>
                        <span>Śr</span>
                    </div>
                    <div>
                        <span>Czw</span>
                    </div>
                    <div>
                        <span>Pt</span>
                    </div>
                    <div>
                        <span>Sob</span>
                    </div>
                    <div>
                        <span>Nie</span>
                    </div>
                </div>
                <div className="month-grid-container">
                    {/* <Day/> */}
                    {this.renderPrevDays()}
                    {daysOfMonth.map((day, index) => {
                        return <div key={`day-${index}`} className="day">{day}</div>
                    })}
                    {this.renderNextDays()}


                </div>
            </div>

        )
    }
}

export default MonthGrid
