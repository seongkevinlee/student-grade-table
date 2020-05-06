class App {
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades)
  }
  constructor(gradeTable) {
    this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
  }
  getGrades() {
    $.ajax({
      url: "https://sgt.lfzprototypes.com/api/grades",
      method: "GET",
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
      })
  }
  start(){
    this.getGrades;
  }

}
