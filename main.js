var headerEl = document.querySelector('header');
var header = new PageHeader(headerEl);

var tableEl = document.querySelector("#table-element");
var gradeTable = new GradeTable(tableEl);
var app = new App (gradeTable, header);

app.start();
