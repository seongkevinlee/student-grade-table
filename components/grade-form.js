class GradeForm {
  constructor(formElement, gradeID) {
    this.formElement = formElement;
    this.gradeID = gradeID;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.formElement.addEventListener('submit', this.handleSubmit);
    this.formElement.addEventListener('reset', this.handleReset);
  }

  onSubmit(createGrade, updateGrade) {
    this.createGrade = createGrade;
    this.updateGrade = updateGrade;
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("hi");

    var formData = new FormData(event.target);
    var name = formData.get('name');
    var course = formData.get('course');
    var grade = formData.get('grade');

    console.log("event target id:", event.target.id);
    if(event.target.id === "update") {
      this.updateGrade(name, course, grade, this.gradeID);
      this.handleReset;
    } else {
      this.createGrade(name, course, grade);
      event.target.reset();
    }
  }

  handleReset() {
    if(event) {
      event.preventDefault();
    } else {
      var allInputs = document.querySelectorAll("input");
      allInputs.forEach(e => e.value = "");
    }
  }

}
