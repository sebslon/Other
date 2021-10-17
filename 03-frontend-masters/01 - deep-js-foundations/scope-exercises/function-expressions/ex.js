// With use of function declarations and named function expressions.
function getStudentById(studentId) {
  return studentRecords.find(function matchById(record) {
    return record.id == studentId;
  });
}

function printRecords(recordIds) {
  const students = recordIds.map(getStudentById);

  students.sort(function sortByNameAsc(stud1, stud2) {
    if (stud1.name < stud2.name) return -1;
    else if (stud1.name > stud2.name) return 1;
    else return 0;
  });

  function printOut(student) {
    const paid = student.paid ? "Paid" : "Not Paid";

    console.log(`${student.name} (${student.id}): ${paid}`);
  }

  students.forEach(printOut);
}

function paidStudentsToEnroll() {
  const studentsToEnroll = studentRecords.filter(function needToEnroll(record) {
    return record.paid && !currentEnrollment.includes(record.id);
  });

  const idsToEnroll = studentsToEnroll.map(function getStudentId(record) {
    return record.id;
  });

  return [...currentEnrollment, ...idsToEnroll];
}

function remindUnpaid(recordIds) {
  const unpaidIds = recordIds.filter(function notYetPaid(id) {
    const record = getStudentById(id);

    return !record.paid;
  });

  printRecords(unpaidIds);
}

// ********************************

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
  { id: 313, name: "Frank", paid: true },
  { id: 410, name: "Suzy", paid: true },
  { id: 709, name: "Brian", paid: false },
  { id: 105, name: "Henry", paid: false },
  { id: 502, name: "Mary", paid: true },
  { id: 664, name: "Bob", paid: false },
  { id: 250, name: "Peter", paid: true },
  { id: 375, name: "Sarah", paid: true },
  { id: 867, name: "Greg", paid: false },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
