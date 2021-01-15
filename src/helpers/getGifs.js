export const getGifs = async (category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=gxSBBQybox8uoMKOSKDr9d0zSDXtwu6X`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img =>{
        return {
            id: img.id,
            tittle: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}