class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
    this.deleteGrade = null;
  }
  updateGrades(grades) {
    var tbody = this.tableElement.querySelector('tbody');
    tbody.textContent = "";
    console.log(this.deleteGrade);
    console.log('grades:', grades);
    var totalGrades = grades.map(element => this.renderGradeRow(element, this.deleteGrade))
    console.log('total grades:', totalGrades);
    totalGrades.forEach(e => tbody.append(e));

    var noGrades = document.getElementById("no-grades");
    if(grades.length === 0) {
      console.log('noGrades:', noGrades);
      noGrades.classList.remove("d-none");
    } else {
      console.log('noGrades:', noGrades);
      noGrades.className = "d-none";
    }
    // for(var index = 0 ; index < grades.length ; index++) {
    //   var row = document.createElement('tr');
    //   var name = document.createElement('td');
    //   var course = document.createElement('td');
    //   var grade = document.createElement('td');
    //   name.textContent = grades[index].name;
    //   course.textContent = grades[index].course;
    //   grade.textContent = grades[index].grade;
    //   row.append(name, course, grade);
    //   tbody.append(row);
    // }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade) {
    this.data = data;

    var tableRow = document.createElement('tr');
    var name = document.createElement('td');
    var course = document.createElement('td');
    var grade = document.createElement('td');
    var operations = document.createElement('td');
    var deleteButton = document.createElement('button');

    name.textContent = data.name;
    course.textContent = data.course;
    grade.textContent = data.grade;
    deleteButton.textContent = "DELETE";
    deleteButton.className = "btn btn-danger btn-text";
    deleteButton.addEventListener("click", function(){
      deleteGrade(data.id);
    })
    operations.append(deleteButton);
    tableRow.append(name, course, grade, operations);
    return tableRow;
  }
}
