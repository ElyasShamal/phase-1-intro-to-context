// Your code here

function createEmployeeRecord(arrayEmployee){
    const testEmployee={
        firstName: arrayEmployee[0],
        familyName: arrayEmployee[1],
        title: arrayEmployee[2],
        payPerHour : arrayEmployee[3],
        timeInEvents: [],
        timeOutEvents: [],
    }

    return testEmployee;
}


function createEmployeeRecords(array){
     let employeeRecords = [];
     array.forEach(element => {
        employeeRecords.push(createEmployeeRecord(element))
        
     });
     return employeeRecords;

}


function createTimeInEvent(employeeRecord,Date){
    employeeRecord.timeInEvents.push({
        type: "TimeIn",
        date: Date.split(" ")[0],
        hour: parseInt(Date.split(" ")[1]),
    })
    return employeeRecord;
}

function createTimeOutEvent(employeeRecord,Date){
    employeeRecord.timeOutEvents.push({
        type: "TimeOut",
        date : Date.split(" ")[0],
        hour : parseInt(Date.split(" ")[1]),
    })
    return employeeRecord
}

function hoursWorkedOnDate(employeeRecord,Date){
    let timeIn=0;
    let timeOut=0;
    employeeRecord.timeOutEvents.forEach(elemment =>{
        if(elemment.date==Date){
            timeOut=elemment.hour;
        } 
    })    
    employeeRecord.timeInEvents.forEach(elemment =>{
        if(elemment.date==Date){
            timeIn=elemment.hour;
        } 
    }) 
    return (timeOut-timeIn)/100;
} 

function wagesEarnedOnDate(employeeRecord,Date){
    let wage = hoursWorkedOnDate(employeeRecord,Date)
    return wage *employeeRecord.payPerHour;
}

    let allWagesFor = function(employeeRecord){
    let payment=0;
    for( let i   of employeeRecord.timeInEvents){
    payment += wagesEarnedOnDate(employeeRecord,i.date)
}
    return payment;
}


function calculatePayroll(employeeRecords){
    let totalPayment=0;
    for(let record of employeeRecords){
        totalPayment += allWagesFor(record)
    }
    return totalPayment;
}