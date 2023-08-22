import Link from "next/link";
import { FaHandPointLeft } from "react-icons/fa";

async function getCharacterDetails(id) {
    const res = await fetch(`https://hp-api.onrender.com/api/character/${id}`);

    return res.json();
}

export default async function DetailsPage({ params }) {
  const character = await getCharacterDetails(params.id)
  console.log(character)

 if (!character) {
    return <p>Loading...</p>;
  }
  
  return (
    <div>
    <Link href='/potter'>
      <FaHandPointLeft className='inline pr-2 text-3xl'/>
      <h2> Back </h2>
    </Link>
    {character.length > 0 ? (
        character.map(character => (
            <div key={character.id} className='card my-5'>
            <h2 className="text-center">{character.name}</h2>
            <img src={character.image} height={40} width={70}/>
                <h3>Other Names: {character.alternate_names}</h3>
                <h3>Gender: {character.gender}</h3>
                <h3>House: {character.house}</h3>
                <h3>Species: {character.species}</h3>
                <h3>Ancestry: {character.ancestry}</h3>
                <h3>Hair-Colour: {character.hairColour}</h3>
            </div>
        ))
    ) : (
        <p className="text-center">No Details to Display</p>
    )}
</div>
  );
}
