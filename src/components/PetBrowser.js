import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const petcards = this.props.pets.map(pet => pet(
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet}/>
    ))
    return <div className="ui cards">{petcards}</div>
  }
}

export default PetBrowser
