# comp-3005-Assignment-4

INSTRUCTIONS ON HOW TO CREATE THE DATABASE WITH THE SCHEMA AND RUN MY CODE:
Create a database called assignment4
The password for that database will be 12345
Create a table called students
Open up the query tool and run this function:
ALTER TABLE public.students
    ADD COLUMN student_id SERIAL PRIMARY KEY,
    ADD COLUMN first_name text NOT NULL,
    ADD COLUMN last_name text NOT NULL,
    ADD COLUMN email text NOT NULL UNIQUE,
    ADD COLUMN enrollment_date date;
After that's successful, run this query:
INSERT INTO public.students (first_name, last_name, email, enrollment_date)
VALUES
('John', 'Doe', 'john.doe@example.com', '2023-09-01'),
('Jane', 'Smith', 'jane.smith@example.com', '2023-09-01'),
('Jim', 'Beam', 'jim.beam@example.com', '2023-09-02');

Now the database is created according to the assignment spec's schema.

Once this is done, please open up my code and in the terminal install the following:
npm init -y
npm install pg
npm install pg-promise

Once thats done, you can then run the code by calling each function as shown in the video.

FUNCTION DESCRIPTIONS:
getAllStudents(): This function retrieves all students within the database with all of their values including the student_id, first_name, last_name, email, enrollment_date

addStudent(first_name, last_name, email, enrollment_date): This function adds the student with the parameters that are inserted into the function with first_name being the first name of the student, last_name being the last name of the student, email being the student's email, enrollment_date being the date the student was enrolled.

updateStudentEmail(student_id, new_email): This function updates the student that is selected based off of their student_id.

deleteStudent(student_id): This function deletes the student based off of the students id. it selects the student with that id and deletes them from the database.

YOUTUBE VIDEO DEMO LINK:
https://www.youtube.com/watch?v=lFo1EZ3MzsM
