class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeForm = gradeForm;
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError .bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
  }
  handleGetGradesError(error) {
    console.error(error);
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
  getGrades() {
    $.ajax({
      method: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: { "X-Access-Token": "5oM35U7P"},
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
      })
  }
  start(){
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
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
}
