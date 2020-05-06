class App {
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    console.log(grades)
  }
  constructor() {
    this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess.bind(this);
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
