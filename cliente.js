function formulario () {
  var nome = document.querySelector('#nome')
  var idade = document.querySelector('#idade')
  var curso = document.querySelector('#curso')
  var resposta = document.querySelector('#hh2')
  var valor1 = String (nome.value)
  var valor2 = String (idade.value)
  var valor3 = String (curso.value)
  resposta.innerHTML = `seu nome é: <strong>${valor1}</strong> <br> sua idade é: <strong>${valor2}</strong>  <br> seu curso é : <strong>${valor3}</strong>`
}
