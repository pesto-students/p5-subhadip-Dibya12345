const API = "https://pokeapi.co/api/v2/pokemon/?limit=5"

function jsonConverter(res){
	return res.json();
}
async function returnResponse(url) {
	try {
		const fetch_url = await fetch(url);
		const response = await jsonConverter(fetch_url);
		return response;
	} catch (err) {
		console.log("ERROR 404: Entered the wrong url");
	}
}
async function pokemonRequest(my_response){
	try{
  	const response = await returnResponse(my_response)
    console.log("success my request", response)
    return response;
  } catch(err){
    console.log("ERROR 404: You didn't catch them")
  }
}
pokemonRequest(API);