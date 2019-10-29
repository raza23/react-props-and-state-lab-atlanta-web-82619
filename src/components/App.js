import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleChangeType = (e) => {
    
    this.setState({filters: {type: e.target.value}})
  }

  getPets = () => { 
    let baseURL = '/api/pets'
    let newurl
    if (this.state.filters.type === 'all') {
      newurl = baseURL
    } else {
      newurl = baseURL + '?type=' + this.state.filters.type
    }
    debugger
    fetch(newurl).then(res => res.json()).then(pets => this.setState({pets: pets}))

   }

   onAdoptPet = (id) => {
     const pets = this.state.pets.map( pet => {
       return pet.id === id? {...pet, isAdopted: true} : pet ;
     })
     this.setState({pets})
   }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onFindPetsClick = {this.getPets} onChangeType={e => this.handleChangeType(e)}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
