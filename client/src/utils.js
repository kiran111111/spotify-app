
export const getHashParams = () =>{
    

 const query = window.location.search.split("&")[0].split("=")[1];

 console.log(query)

 return {token : query}
}