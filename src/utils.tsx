const BASE_API = "https://pokeapi.co/api/v2/pokemon/";
export const getPokemonData = async (name: string) => {
  try {
    const data = await fetch(
      `${BASE_API}${name}`
    );
    if (!data.ok) throw new Error(`HTTP error! Status: ${data.status}`);
    const jsonifiedData = await data.json();
    return { data:jsonifiedData }
  } catch (error) {
    console.log(error);
    return { error };
  }
};
