if (this.state.daysNumber === 28) {

} else if (this.state.daysNumber === 29) {
    
} else if (this.state.daysNumber === 30) {
    
} else {
    
}

//6
daysAfter = (<>
    {daysArray.map((day) => {
            return <div className="prev-day">{day}</div>
    })}
</>)
//5
daysAfter = (<>
    {daysArray.map((day, index) => {
        if (index < 4) {
            return <div className="prev-day">{day}</div>
        }
    })}
</>)
//4
daysAfter = (<>
    {daysArray.map((day, index) => {
        if (index < 3) {
            return <div className="prev-day">{day}</div>
        }
    })}
</>)
//3
daysAfter = (<>
    {daysArray.map((day, index) => {
        if (index < 3) {
            return <div className="prev-day">{day}</div>
        }
    })}
</>)
//2
daysAfter = (<>
    {daysArray.map((day, index) => {
        if (index < 2) {
            return <div className="prev-day">{day}</div>
        }
    })}
</>)

//1
daysAfter = <div className="prev-day">{day1.getDate()}</div>