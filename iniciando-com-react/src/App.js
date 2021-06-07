import React from 'react';

//function ComponenteFuncional() {
 // return (
  //  <h1>Hello</h1>
  //)
//}

/*
class App extends React.Component {

  state = {
    nome: ""
  }

  modificarNome = (event) => {
    this.setState({
      nome: event.target.value
    })
  }

  criaComboBox = () => {
    const opcoes = [ "Fulano", "Ciclano" ]
    const comboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option> )

    return (
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

  componentDidMount() {
    console.log(`Executou o componentDidMount`)
  }

  render() {
    console.log(`Executou o render`)
    const MeuComboBox = () => this.criaComboBox()

    return (
      //<React.Fragment>
      <>
        <input type="text" value={this.state.nome} onChange={this.modificarNome}  />
        <h1>Hello {this.state.nome}</h1>
        <h1>Hello {this.props.nome} sua idade é: {this.props.idade} anos</h1>
        <MeuComboBox />
      </> 
      //</React.Fragment>
      )
  }
}
*/

function App(props) {

  const modificarNome = event => {
    console.log(event.target.value)
  }

  const criaComboBox = () => {
    const opcoes = [ "Fulano", "Ciclano" ]
    const comboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option> )

    return (
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }
    const MeuComboBox = () => criaComboBox()

    return (
      //<React.Fragment>
      <>
        <input className="texto-centralizado" type="text" value={props.nome} onChange={modificarNome}  />
        <h1>Hello {props.nome} sua idade é: {props.idade} anos</h1>
        <MeuComboBox />
      </> 
      //</React.Fragment>
      )
  
}

export default App;