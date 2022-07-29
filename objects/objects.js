// Objects

// Creation of a basic object using literal object
// with key value structure
// the object can store any kind of data type, objects and primitives
// we can add method to an object to store functionality

// const student = {};
// empty object
// console.log(student);

// const student = {
//   firstName: 'Andres',
//   surName: 'Alcaraz',
//   age: 25,
//   isGraduated: false,
//   currentSubjects: ['Math', 'Ethic', 'Physics', 'Sports'],
//   contact: {
//     phone: '+57 31313131313',
//     email: 'andres@mail.com',
//     availableHours: ['8:00', '12:00', '14:00']
//   },
//   getFullName: function() { return this.firstName + this.surName },
//   getFullNameOp2() {
//     return this.firstName + this.surName; // interpolation of strings
//   }
// };

// console.log(student);
// console.log(student.getFullName());
// console.log(student.getFullNameOp2());

// currentSubjects: [
  //   {
  //     id: '01',
  //     name: 'Math',
  //     teacher: 'Erick'
  //   },
  //   {
  //     id: '02',
  //     name: 'Science',
  //     teacher: 'Nathaly'
  //   },
  //   {
  //     id: '03',
  //     name: 'Sports',
  //     teacher: 'Brian'
  //   },
  //   {
  //     id: '04',
  //     name: 'Ethics',
  //     teacher: 'Sara'
  //   }
  // ],

// // Accessing to values
// const studentName = student.firstName;
// const studentName2 = student['firstName'];

// destructuring
// const { firstName } = student;

// console.log(studentName);
// console.log(studentName2);
// console.log(firstName);

// Accession to undefined values
// const notDefined = student.password;
// console.log(notDefined);

// // Overriding values
// student.isGraduated = true;
// console.log(student);

// // Add new properties to the object
// student.grade = 0.5;
// console.table(student);

// // Go over the object information

// Object has multiples methods to get iterable data about the object
// Object.keys(student);
// Object.values(student);
// Object.entries(student);

// // By keys
// Object.keys(student).forEach((key) => { // o con map, for
//   console.log(key);
// });

// // By values
// Object.values(student).forEach((val) => {
//   console.log(val);
// });

// // By key and value
// Object.entries(student).forEach((entry) => {
//   console.log(` ${entry[0]} ===> ${entry[1]} `);
// });

// Creating objects with a constructor function
// 'this' reference the object just created
// function Cellphone(brand, version, so) {
//   this.brand = brand;
//   this.version = version;
//   this.so = so;
//   this.displayVersion = () => {
//     console.log(`${this.version} :o:o`);
//   }
// }

// const redmi = new Cellphone('xiaomi', 2.0, 'android');

// console.table(redmi);
// console.log(redmi.brand);
// redmi.displayVersion();
