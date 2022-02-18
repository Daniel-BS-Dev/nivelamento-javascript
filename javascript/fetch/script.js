const cep = "01001000";

async function getJsonResponse(url) {
  const response = await fetch(url);
  const jsonBody = await response.json();
  return jsonBody;
}

async function showCepData(cep){
  const url = `https://viacep.com.br/ws/${cep}/json/`; // get
  const json = await getJsonResponse(url);
  console.log(json);
}

showCepData(cep)


console.log("A");
console.log("B");