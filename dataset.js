/*
computer model 
id
type
checkedOut
studentName
studentId
date

create computer
read all computers
update a computer - checked out, returned, information updated
delete computer
*/

module.exports = [
    {
        id: "12312423",
        type: "chromebook",
        checkedOut: false,
        studentName: "",
        studentId: "",
        date: null
    },
    {
        id: "12312427",
        type: "chromebook",
        checkedOut: true,
        studentName: "John Smith",
        studentId: "asd3234",
        date: new Date()
    },

]