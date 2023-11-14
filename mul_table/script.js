function calcMulTable() {
  let tableContent = "";
  const num = parseInt(document.getElementById("num").value);

  for (let i = 0; i <= 10; i++) {
    const result = `${num} x ${i} = ${num * i}`;
    console.log(result);
    tableContent += result + "<br>";
  }
  document.getElementById("mulTable").innerHTML = tableContent;
}
