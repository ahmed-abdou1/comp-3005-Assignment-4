//promise set up for functions
const pgp = require('pg-promise')();
//connecting to the database
const db = pgp('postgres://postgres:12345@localhost/assignment4');

//getAllStudents() function as described in the assignment 4 spec
async function getAllStudents() {
  try {
    const allStudents = await db.any('SELECT * FROM students');
    console.log("Now printing all the students that are in the database:");
    console.log(allStudents);
    //catch the error
  } catch (error) {
    console.error('Here is the following error that was caught:', error);
  } finally {
    pgp.end();
  }
}

//addStudent() function as described in the assignment 4 spec
async function addStudent(first_name, last_name, email, enrollment_date) {
    try {
        //query that will be what is called to insert the students
        const query = `INSERT INTO students (first_name, last_name, email, enrollment_date) VALUES ($/first_name/, $/last_name/, $/email/, $/enrollment_date/)
        RETURNING *;`;

        const data = await db.one(query, {first_name, last_name, email, enrollment_date,});
        console.log('New student record added:', data);
        //catch the error
    } catch (error) {
        console.error('Here is the following error that was caught:', error);
    } finally {
        pgp.end();
    }
}

//updateStudentEmail() function as described in the assignment 4 spec
async function updateStudentEmail(student_id, new_email) {
    try {
        //query that will be what is called to update the students email
        const query = `UPDATE students SET email = $/new_email/ WHERE student_id = $/student_id/
        RETURNING *;`;

        const data = await db.one(query, {
        new_email,
        student_id,
        });
        console.log('Updated Email:', data);
        //catch the error
    } catch (error) {
        console.error('Here is the following error that was caught:', error);
    } finally {
        pgp.end();
    }
}
  
//deleteStudent() function as described in the assignment 4 spec
async function deleteStudent(student_id) {
    try {
        //query that will be what is called to delete the student at their id
        const query = `DELETE FROM students WHERE student_id = $/student_id/
        RETURNING *;`;

        const data = await db.one(query, { student_id });
        console.log('The record that was deleted:', data);
        //catch the error
    } catch (error) {
        console.error('Here is the following error that was caught:', error);
    } finally {
        pgp.end();
    }
}


getAllStudents();

// addStudent('Ahmed', 'Abdou', 'Ahmed.Abdou@gmail.com', '1997-02-11');

updateStudentEmail(4, 'ahmedsami@gmail.com');

// deleteStudent(2);