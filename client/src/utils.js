
export const getHashParams = () =>{
    
   const access_token = window.location.hash && window.location.hash.split("&")[0].split("=")[1];
   const refresh_token = window.location.hash && window.location.hash.split("&")[1].split("=")[1];
   return {access_token,refresh_token};

}