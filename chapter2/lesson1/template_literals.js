const student = {
  name: 'Richard Kalehoff',
  guardian: 'Mr. Kalehoff'
};

const teacher = {
  name: 'Mrs. Wilson',
  room: 'N231'
};

let message = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`;

console.log(message);

let note = `${teacher.name},

Please excuse ${student.name}.
He is recovering from the flu.

Thank you,
${student.guardian}`;

console.log(note);