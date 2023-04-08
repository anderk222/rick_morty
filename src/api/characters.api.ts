
export const URL_API = 'https://rickandmortyapi.com';


export async function getAllCharacters(arg : filter): Promise<Response> {


  const response = await fetch(`${URL_API}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: grahpBuilder(arg)})
  });

  return response;

};

export async function getCharacter(id: string) {

  const response = await fetch(`${URL_API}/api/character/${id}`);

  return response;

};

function grahpBuilder(arg : filter){

  return `
  query {
      characters
      (page : ${arg.page || '1'} ${(arg.name) ? `,filter : {name : "${arg.name}"}` : '' } ){
        results  {
          id,
          name,
          image
      }
        ,
        info {
          count
          pages
          next
          prev
        }
      }
      
    }
  `;
}

type filter = {

  page? : string | null ,
  name? : string | null

}