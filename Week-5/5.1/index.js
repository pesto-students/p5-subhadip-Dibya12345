const API = "https://pokeapi.co/api/v2/pokemon/?limit=5"

function jsonConverter(res){
	return res.json();
}
async function getData(url) {
	try {
		const result = await fetch(url);
		if (result.status !== 200) {
			throw new Error('API Error',{cause:{status: result.status, message: "Error"}});
		}
		const response = await result.json();
		return response;
	} catch (err) {
		throw err;
	}
}
async function pokemonRequest(url){
	try{
  	const response = await getData(url)
    console.log("success my request", response)
    return response;
  } catch(err){
    console.log(err.message, err.cause)
  }
}
pokemonRequest(API);