var formEl = document.querySelector('form');
var form = new GradeForm(formEl);

var headerEl = document.querySelector('header');
var header = new PageHeader(headerEl);

var tableEl = document.querySelector("#table-element");
var gradeTable = new GradeTable(tableEl);

var app = new App(gradeTable, header, form);
app.start();
