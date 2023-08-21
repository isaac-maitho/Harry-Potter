import Link from 'next/link'
import React from 'react'


async function getCharacters() {
    const res = await fetch('https://hp-api.onrender.com/api/characters')

    return res.json()
}

export default async function CharacterList() {
    const characters = await getCharacters()
    return (
      <>
      <Link href='/potter/details'>
          {characters.map((character)=>(
              <div key={character.id} className='card my-5'>
                <h3>{character.name}</h3>
                <h3>{character.yearOfBirth}</h3>
              </div>
          ))}
          {characters.length === 0 &&(
              <p className="text-center">No characters to display</p>
          )}
      </Link>
     
      </>
    )
  }
  
  