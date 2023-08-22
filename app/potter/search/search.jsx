import { NextResponse } from "next/server";

async function getCharacters() {
  const res = await fetch('https://hp-api.onrender.com/api/characters')

  return res.json()
}

export default async function SearchList(request) {
  const characters = await getCharacters()
  
  const { searchParams } = new URL(request.url)
  const query = searchParams.get(query)

  const filteredResults = characters.filter((character) => {
    return (
      character.house.toLowerCase().includes(query.toLowerCase()) ||
      character.name.toLowerCase().includes(query.toLowerCase())
    );
  });

  return NextResponse.json(filteredResults)
}