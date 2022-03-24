/**
 * JS Objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 * create object person with firstName and lastName properties
 * implement method getFullName that returns full name
 */

const person = {
	firstName: "john",
	lastName: "dou",
	getFullName() {
		 return this.firstName + " " + this.lastName
	}
}; 



/**
 * create object student that has property grade and method getGrade
 * set person as prototype of student
 */

const student = {
	firstName: "Name",
	lastName: "LastName",
	grade: 1,
	getGrade() {
		return this.grade
	},
	getFullName: function() {
		return this.firstName + " " + this.lastName
   }
};
Object.setPrototypeOf(person, student)


/**
 * create new instance of student using Object.create
 */
 
 const student2 = Object.create(student);

module.exports = {
	person,
	student,
	student2
};