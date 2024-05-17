export const fetchData =  () =>{
    let url = `https://api.imgflip.com/get_memes`;
    let take =  fetch(url).then((res) => res.text())
               .then((con) => JSON.parse(con))
   return take
}