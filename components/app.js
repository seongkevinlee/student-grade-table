class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeForm = gradeForm;
    this.createGrade = this.createGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError .bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.handleChangeGradeError = this.handleChangeGradeError.bind(this);
    this.handleChangeGradeSuccess = this.handleChangeGradeSuccess.bind(this);
  }
  start(){
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade, this.changeGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade);
    this.gradeTable.onUpdateClick(this.updateForm);

  }
  getGrades() {
    $.ajax({
      method: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: { "X-Access-Token": "5oM35U7P"},
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
      })
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
    var total = 0;
    for (var index = 0 ; index < grades.length ; index++){
      total += grades[index].grade;
      }
    var average = Math.floor(total / grades.length);
    this.pageHeader.updateAverage(average);
  }
  handleGetGradesError(error) {
    console.error(error);
  }

  createGrade(name, course, grade) {
    console.log(name, course, grade);
    $.ajax({
      method: "POST",
      url: "https://sgt.lfzprototypes.com/api/grades",
      data: {
        "name" : name,
        "course" : course,
        "grade" : grade
      },
      headers: { "X-Access-Token": "5oM35U7P" },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    })
  }

  handleCreateGradeError(error) {
    console.error(error);
  }

  handleCreateGradeSuccess() {
    this.getGrades();
  }

  deleteGrade(id) {
    console.log(id);
    $.ajax({
      method: "DELETE",
      url: "https://sgt.lfzprototypes.com/api/grades/" + id,
      data: "none",
      headers: { "X-Access-Token": "5oM35U7P" },
      success: this.handleDeleteGradeSuccess,
      error: this.handleDeleteGradeError
    })
  }

  handleDeleteGradeError(error) {
    console.error(error);
  }

  handleDeleteGradeSuccess() {
    console.log(this.getGrades);
    this.getGrades();
  }

  updateForm(data) {
    var name = document.getElementById("input-name");
    var course = document.getElementById("input-course");
    var grade = document.getElementById("input-grade");
    name.value = data.name;
    course.value = data.course;
    grade.value = data.grade;
    this.gradeForm.gradeID = data.id;
    var button = document.querySelector(".submit-button");
    button.textContent = "Update";
    button.setAttribute("id", "update");
  }

  changeGrade(grade) {
    $.ajax({
      method: "PATCH",
      url: "https://sgt.lfzprototypes.com/api/grades",
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
      headers: { "X-Access-Token": "5oM35U7P" },
      success: this.handleChangeGradeSuccess,
      error: this.handleChangeGradeError
    })
  }
  handleChangeGradeSuccess() {
    this.getGrades();

  }
  handleChangeGradeError(error) {
    console.error(error);
  }
}
