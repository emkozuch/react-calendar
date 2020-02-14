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

        const daysArray = [
            new Date(this.props.dateToDisplay.getFullYear(),
                this.props.dateToDisplay.getMonth(), 0),
            new Date(this.props.dateToDisplay.getFullYear(),
                this.props.dateToDisplay.getMonth(), -1),
            new Date(this.props.dateToDisplay.getFullYear(),
                this.props.dateToDisplay.getMonth(), -2),
            new Date(this.props.dateToDisplay.getFullYear(),
                this.props.dateToDisplay.getMonth(), -3),
            new Date(this.props.dateToDisplay.getFullYear(),
                this.props.dateToDisplay.getMonth(), -4),
            new Date(this.props.dateToDisplay.getFullYear(),
                this.props.dateToDisplay.getMonth(), -5)
        ]

        let daysBefore

        switch (this.state.firstDayOfWeek) {
            case 1:
                daysBefore = null
                break;
            case 2:
                daysBefore = (<>
                    <div key={`prev-0`} className="prev-day">{daysArray[0].getDate()}</div>
                </>)
                break;
            case 3:
                daysBefore = (<>
                    {daysArray.map((day, index) => {
                        while (index < 2) {
                            return <div key={`prev-${index}`} className="prev-day">{day.getDate()}</div>
                        }
                    })}
                </>)
                break;
            case 4:
                daysBefore = (<>
                    {daysArray.map((day, index) => {
                        while (index < 3) {
                            return <div key={`prev-${index}`} className="prev-day">{day.getDate()}</div>
                        }
                    })}
                </>)
                break;
            case 5:
                daysBefore = (<>
                    {daysArray.map((day, index) => {
                        while (index < 4) {
                            return <div key={`prev-${index}`} className="prev-day">{day.getDate()}</div>
                        }
                    })}
                </>)
                break;
            case 6:
                daysBefore = (<>
                    {daysArray.map((day, index) => {
                        while (index < 5) {
                            return <div key={`prev-${index}`} className="prev-day">{day.getDate()}</div>
                        }
                    })}
                </>)
                break;
            case 0:
                daysBefore = (<>
                    {daysArray.map((day, index) => (
                        <div key={`prev-${index}`} className="prev-day">{day.getDate()}</div>
                    ))}
                </>)
                break;
            default:
                break;
        }
        return daysBefore
    }
    renderNextDays() {

        const daysArray = [1, 2, 3, 4, 5, 6, 7]
        let daysAfter

        switch (this.state.firstDayOfWeek) {
            case 0:
                if (this.state.daysNumber === 29) {
                    daysAfter = null
                } else if (this.state.daysNumber === 28) {
                    daysAfter = (<>
                        <div key='nextDay-0' className="next-day">{daysArray[0]}</div>
                    </>)
                } else if (this.state.daysNumber === 30) {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            while (index < 6) {
                                return <div key={`nextDay-${index}`} className="next-day">{day}</div>
                            }
                            return null
                        })}
                    </>)
                } else {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            while (index < 5) {
                                return <div key={`nextDay-${index}`} className="next-day">{day}</div>
                            }
                            return null
                        })}
                    </>)
                }
                break;

            case 6:
                if (this.state.daysNumber === 28) {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            while (index < 2) {
                                return <div key={`nextDay-${index}`} className="next-day">{day}</div>
                            }
                            return null
                        })}
                    </>)
                } else if (this.state.daysNumber === 29) {
                    daysAfter = (<>
                        <div key='nextDay-0' className="next-day">{daysArray[0]}</div>
                    </>)
                } else if (this.state.daysNumber === 31) {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            while (index < 6) {
                                return <div key={`nextDay-${index}`} className="next-day">{day}</div>
                            }
                            return null
                        })}
                    </>)
                } else daysAfter = null
                break;
            case 5:
                if (this.state.daysNumber === 28) {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            if (index < 3) {
                                return <div key={`nextDay-${index}`} className="next-day">{day}</div>
                            }
                            return null
                        })}
                    </>)
                } else if (this.state.daysNumber === 29) {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            if (index < 2) {
                                return <div key={`nextDay-${index}`} className="next-day">{day}</div>
                            }
                            return null
                        })}
                    </>)
                } else if (this.state.daysNumber === 30) {
                    return <div key="nextDay-0" className="next-day">{daysArray[0]}</div>
                } else {
                    daysAfter = null
                }
                break;
            case 4:
                if (this.state.daysNumber === 28) {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            if (index < 4) {
                                return <div key={`nextDay-${index}`} className="next-day">{day}</div>
                            }
                            return null
                        })}
                    </>)
                } else if (this.state.daysNumber === 29) {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            if (index < 3) {
                                return <div key={`nextDay-${index}`} className="next-day">{day}</div>
                            }
                            return null
                        })}
                    </>)
                } else if (this.state.daysNumber === 30) {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            if (index < 2) {
                                return <div key={`nextDay-${index}`} className="next-day">{day}</div>
                            }
                            return null
                        })}
                    </>)
                } else {
                    daysAfter = <div key="nextDay-0" className="next-day">{daysArray[0]}</div>
                }
                break;
            case 3:
                if (this.state.daysNumber === 28) {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            if (index < 5) {
                                return <div className="next-day">{day}</div>
                            }
                            return null
                        })}
                    </>)
                } else if (this.state.daysNumber === 29) {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            if (index < 4) {
                                return <div key={`nextDay-${index}`} className="next-day">{day}</div>
                            }
                            return null
                        })}
                    </>)
                } else if (this.state.daysNumber === 30) {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            if (index < 3) {
                                return <div className="next-day">{day}</div>
                            }
                            return false
                        })}
                    </>)
                } else {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            if (index < 2) {
                                return <div className="next-day">{day}</div>
                            }
                            return false
                        })}
                    </>)

                }
                break;
            case 2:
                if (this.state.daysNumber === 28) {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            while (index < 6) {
                                return <div key={`nextDay-${index}`} className="next-day">{day}</div>
                            }
                            return null
                        }
                        )
                        }

                    </>)
                } else if (this.state.daysNumber === 29) {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            while (index < 5) {
                                return <div key={`nextDay-${index}`} className="next-day">{day}</div>
                            }
                            return null
                        })}
                    </>)
                } else if (this.state.daysNumber === 30) {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            if (index < 4) {
                                return <div key={`nextDay-${index}`} className="next-day">{day}</div>
                            }
                            return null
                        })}
                    </>)
                } else {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            if (index < 3) {
                                return <div key={`nextDay-${index}`} className="next-day">{day}</div>
                            }
                            return null
                        })}
                    </>)
                }
                break;
            case 1:
                if (this.state.daysNumber === 28) {
                    {daysArray.map((day, index) => {
                            return <div key={`nextDay-${index}`} className="next-day">{day}</div>
                        })}
                } else if (this.state.daysNumber === 29) {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            while (index < 6) {
                                return <div key={`nextDay-${index}`} className="next-day">{day}</div>
                            }
                            return null

                        })}
                    </>)
                } else if (this.state.daysNumber === 30) {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            if (index < 5) {
                                return <div key={`nextDay-${index}`} className="next-day">{day}</div>
                            }
                            return null
                        })}
                    </>)
                } else {
                    daysAfter = (<>
                        {daysArray.map((day, index) => {
                            if (index < 4) {
                                return <div key={`nextDay-${index}`} className="next-day">{day}</div>
                            }
                            return null
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
