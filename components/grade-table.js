class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    var tbody = this.tableElement.querySelector('tbody');
    tbody.textContent = "";
    for(var index = 0 ; index < grades.length ; index++) {
      var row = document.createElement('tr');
      var name = document.createElement('td');
      var course = document.createElement('td');
      var grade = document.createElement('td');
      name.textContent = grades[index].name;
      course.textContent = grades[index].course;
      grade.textContent = grades[index].grade;
      row.append(name, course, grade);
      tbody.append(row);
    }
  }
}
