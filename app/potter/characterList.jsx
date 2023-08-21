import Link from 'next/link'


async function getCharacters() {
    const res = await fetch('https://hp-api.onrender.com/api/characters')

    return res.json()
}


export default async function CharacterList() {
   const characters = await getCharacters()
    
    return (
      <div>
            {characters.length > 0 ? (
                characters.map(character => (
                    <div key={character.id} className='card my-5'>
                        <Link href={`/potter/${character.id}`}>
                                <h3>Name: {character.name}</h3>
                                <h3>Date of Birth: {character.dateOfBirth}</h3>
                        </Link>
                    </div>
                ))
            ) : (
                <p className="text-center">No characters to display</p>
            )}
        </div>
    )
  }
  
  