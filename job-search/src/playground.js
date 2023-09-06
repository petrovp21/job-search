const developer = {
  salary: 100000,
  experience: 4.5,
  techStack: ["Vue", "HTML", "CSS"],
  lookingForWork: true,

  doubleSalary() {
    this.salary = this.salary * 2;
    this.lookingForWork = false;
  },
};
developer.doubleSalary();
console.log(developer.lookingForWork);
console.log(developer.salary);
