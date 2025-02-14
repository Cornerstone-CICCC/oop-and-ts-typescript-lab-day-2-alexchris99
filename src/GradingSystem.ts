// 🎓 Student Grading System
// 🏫 Create a system that manages student records and calculates their average grade.
//
// 1. Implement a class `Gradebook<T>` to store student records.
// 2. Implement a method `addStudent` that adds a new student with an empty grade list.
// 3. Implement a method `addGrade` that records a new grade for a student.
// 4. Implement a method `getAverageGrade` that returns a student’s average grade.
// 5. Implement a method `getStudentGrades` that returns all recorded grades for a student. Formula to get average: sumOfAllGrades / numberOfSubjects.
// 6. Implement a method `updateSubjectGrade` that updates a subject grade for a student.

interface Grade {
  subject: string;
  grade: number;
}

interface Student {
  id: number;
  name: string;
  grades: Grade[];
}

// 1. Implement a class `Gradebook<T>` to store student records.
class Gradebook<T extends Student> {
  students: T[] = []

  // 2. Implement a method `addStudent` that adds a new student with an empty grade list.
  addStudent(student: T) {
    this.students.push(student)
    return `${student.name} added to the grade book`
  }
  // 3. Implement a method `addGrade` that records a new grade for a student.
  addGrade(id: number, grade: Grade) {
    this.students.forEach(student => student.id === id ? student.grades.push(grade): "")
    return `Grade recorder for ${grade.subject}`
  }
  // 4. Implement a method `getAverageGrade` that returns a student’s average grade.
  getAverageGrade(id: number) {
    let average = 0 
    let grades = 0
    this.students.forEach(student => student.id === id ? student.grades.forEach(subject => {average+=subject.grade, grades++ }) : "")
    return `Average grade ${average/grades}`
  }
  // 5. Implement a method `getStudentGrades` that returns all recorded grades for a student. Formula to get average: sumOfAllGrades / numberOfSubjects.
  getStudentGrades(id: number) {
    let grades = {}
    this.students.forEach(student => student.id === id ? grades = student.grades : "")
    return grades
  }

  // 6. Implement a method `updateSubjectGrade` that updates a subject grade for a student.
  updateSubjectGrade(id: number, subject: string, newGrade: number) {
    this.students.forEach(student => student.id === id ? student.grades.forEach(grade =>  grade.subject === subject ? grade.grade = newGrade: ""): "")
    return this.students[0].grades
  }
}

// Test cases
const gradebook = new Gradebook();

console.log(gradebook.addStudent({ id: 1, name: "Alice", grades: [] })); // "Alice added to the gradebook."
console.log(gradebook.addGrade(1, { subject: "Math", grade: 90 })); // "Grade recorded for Math."
console.log(gradebook.addGrade(1, { subject: "English", grade: 80 })); // "Grade recorded for English."
console.log(gradebook.addGrade(1, { subject: "Science", grade: 85 })); // "Grade recorded for Science."
console.log(gradebook.getStudentGrades(1)); // Should return all grades for Alice
console.log(gradebook.getAverageGrade(1)); // Should return Alice's average grade
console.log(gradebook.updateSubjectGrade(1, "English", 95)); // Should update Alice's English grade to 95