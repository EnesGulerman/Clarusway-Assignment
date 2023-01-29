var array = [
  ["C1234", "John", "Doe", "London", "Full-Stack"],
  ["C2345", "Jane", "Doe", "London", "Data-Science"],
  ["C2346", "Mary", "Ann", "Paris", "AWS-Devops"],
  ["C2347", "Adam", "Smith", "Texas", "AWS-Devops"],
  ["C2444", "Micheal", "Great", "Arizona", "Full-Stack"],
  ["C2555", "William", "Cash", "Manchester", "Data-Science"],
  ["C2455", "Patrick", "Jane", "Madrid", "Full-Stack"],
];

for (var i = 0; i < array.length; i++) {
  var newRow = table.insertRow(table.length);
  for (var j = 0; j < array[i].length; j++) {
    var cell = newRow.insertCell(j);

    cell.innerHTML = array[i][j];
  }
}
