export default class Parseur {

  generer() {
    debugger;
    const selectDateMatch = document.querySelector('.blocDate select')
    const date = selectDateMatch.options[selectDateMatch.value-1].text
    const matchs = document.querySelectorAll('.ligne')
    const codeMatchGenere = []

    //utiliser reduce sur tab de div pour créer a chaque fois le code a génerer
    matchs.forEach((match) => { 
      const codeMatch = [...(match.children)].reduce((codeGenerePrecedent, match) => {
        if(match instanceof HTMLInputElement) {
          console.log('input')
          debugger;
          return `${codeGenerePrecedent} inputValue ${match.value}`
        }
        else if(match instanceof HTMLSelectElement) {
          console.log('select')
          debugger;
          return `${codeGenerePrecedent} selectValue ${match.options[match.selectedIndex].text}`
        }
        return codeGenerePrecedent
      }, '')
      codeMatchGenere.push(codeMatch)
    })
    debugger;
    
    const codeGenerer = `
    <p>${date}</p>
    <table>
      <tbody>
        <tr>
          <td>Equipe</td>
          <td>Score</td>
          <td>Equipe</td>
        </tr>
      </tbody>
    </table>
    `
  }
  
}