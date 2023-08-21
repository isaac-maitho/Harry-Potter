import React from 'react'

async function getCharactersDetails() {
    const res = await fetch('https://hp-api.onrender.com/api/characters')

    return res.json()
}

export default async function CharacterDetails() {
    const characters = await getCharactersDetails()

  return (
    <>
         {characters.map((character)=>(
              <div key={character.id} className='card my-5'>
              <h3>Name: {character.name}</h3>
                <h3>Other Names: {character.alternate_names}</h3>
                <h3>Species: {character.species}</h3>
                <h3>House: {character.house}</h3>
                <h3>Ancestry: {character.ancestry}</h3>
                <h3>Hair: {character.hairColour}</h3>
              </div>
          ))}
          {characters.length === 0 &&(
              <p className="text-center">No characters to display</p>
          )}
    </>
  )
}
