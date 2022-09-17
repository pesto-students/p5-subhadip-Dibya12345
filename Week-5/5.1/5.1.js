const API = "https://pokeapi.co/api/v2/pokemon/?limit=5"

function doTask1(res){
	return res.json();
}
async function doTask2(url) {
	try {
		const fetch_url = await fetch(url);
		const response = await doTask1(fetch_url);
		return response;
	} catch (err) {
		console.log("ERROR 404: Entered the wrong url");
	}
}
async function doTask3(my_response){
	try{
  	const response = await doTask2(my_response)
    console.log("success my request", response)
    return response;
  } catch(err){
    console.log("ERROR 404: You didn't catch them")
  }
}
doTask3(API);