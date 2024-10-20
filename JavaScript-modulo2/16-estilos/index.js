// Manipulando estilos diretamente pela propriedade style
function useLightTheme() {
    document.body.classList.remove('is-dark')
    document.body.classList.add('is-light')

  }
  
  function useDarkTheme() {
    document.body.classList.remove('is-light')
    document.body.classList.add('is-dark')
    /*document.body.style.color = '#f1f5f9'
    document.body.style.backgroundColor = '#212529'*/
  }
  
  // Manipulando estilos através das classes utilizadas pelo CSS
  function switchTheme() {
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
  }
  
  // Adicionando os eventos
  document.getElementById('lightBtn').addEventListener('click', useLightTheme)
  document.getElementById('darkBtn').addEventListener('click', useDarkTheme)
  document.getElementById('switchBtn').addEventListener('click', switchTheme)