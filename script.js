function age() {

  debugger;
  var d1 = document.getElementById('date').value;
  var m1 = document.getElementById('mes').value;
  var y1 = document.getElementById('ano').value;

  var date = new Date()
  var d2 = date.getDate()
  var m2 = date.getMonth()
  var y2 = date.getFullYear()
  var month = [31,28,31,30,31,30,31,31,30,31,30,31]

  debugger;
  if(d1 > d2){
    d2 = d2 + month[m2 - 1];
    m2 = m2 -1;
  }
  if(m1 > m2){
    m2 = m2 + 12;
    y2 = y2 -1;
  }

  debugger;
  var d = d2 - d1;
  var m = m2 - m1;
  var y = y2 - y1
  console.log(d1)
  console.log(m1)
  console.log(y1)
  document.getElementById('age').innerHTML = "Sua Idade é " + y + "Anos " + d +" dias";
}

function ageChange(){
  var d1 = document.getElementById('date').value;
  console.log(d1)
}