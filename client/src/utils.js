
export const getHashParams = () =>{
    
   const access_token = window.location.hash && window.location.hash.split("&")[0].split("=")[1];
   const refresh_token = window.location.hash && window.location.hash.split("&")[1].split("=")[1];
   return {access_token,refresh_token};

}



// format millisconds to MM:SS format

export const formatDurationForHumans = (millis) =>{
  const minutes = Math.floor(millis/60000);
  const seconds = Math.floor((millis%60000)/1000);
  console.log(seconds)
}

formatDurationForHumans(231270)