users
codekata
attendance
topics
tasks
company_drives
mentors


// Find all the topics and tasks which are thought in the month of October
db.task2.find({}, { _id: 0, topics: 1, tasks: 1 })
// Find all the company drives which appeared between 15 oct - 2020 and 31 - oct - 2020
db.task2.find({}, { _id: 0, company_drives: 1 })
// Find all the company drives and students who are appeared for the placement

// Find the number of problems solved by the user in codekata
db.task2.find({}, { _id: 0, codekata: 1 })

// Find all the mentors with who has the mentee's count more than 15
db.task2.find({ mentors: { $gt: 15 } }, { user: 1 })
// Find the number of users who are absent and task is not submitted  between 15 oct - 2020 and 31 - oct - 2020
db.task2.find({ attendance: "false", tasks: 16 })
show dbs

useTask2

db.task2.insertMany([
    {
        user: "Gopinath",
        codekata: "500",
        attendance: "true",
        topics: "26",
        tasks: 20,
        company_drives: 5,
        mentors: {
            name: "Gopi",
            name: "Dharshu"
        }
    },
    {
        users: "Santhosh",
        codekata: "450",
        attendance: "false",
        topics: 30,
        tasks: 16,
        company_drives: 10,
        mentors: {
            name: " Gopi",
            name: ' Dharshu'
        }
    },
    {
        users: "Dharshinee",
        codekata: "480",
        attendance: "true",
        topics: 25,
        tasks: 54,
        company_drives: 8,
        mentors: {
            name: "Gopi1",
            name: " Dharshu1"
        }
    },
    {
        users: "Nimalan",
        codekata: "300",
        attendance: "true",
        topics: 30,
        tasks: 42,
        company_drives: 10,
        mentors: {
            name: "Gopi2",
            name: "Dharshu2"
        }
    },
    {
        users: "Nimmu",
        codekata: "500",
        attendance: "true",
        topics: 50,
        tasks: 60,
        company_drives: 10,
        mentors: {
            name: "Gopi3",
            name: "Dharshu3"
        }
    },
    {
        users: "Thambi",
        codekata: "470",
        attendance: "false",
        topics: 70,
        tasks: 65,
        company_drives: 8,
        mentors: {
            name: "Gopi4",
            name: "Dharshu4"
        }
    }
])

db.task2.find({}, { _id: 0, topics: 1, tasks: 1 })
db.task2.find({}, { _id: 0, company_drives: 1 })

