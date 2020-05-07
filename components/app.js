class App {
  constructor(gradeTable, pageHeader) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
    var average = 0;
    var total = 0;
    for (var index = 0; index < grades.length; index++){
      total += grades[index].grade;
      }
      average = Math.floor(total / grades.length);
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
  }

}
