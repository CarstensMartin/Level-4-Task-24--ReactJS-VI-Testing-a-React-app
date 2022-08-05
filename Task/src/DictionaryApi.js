// Fetch data from API and update
export const getDefinitionFromApi = (search) =>{
    
    return fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${search}?key=${process.env.React_App_Api_Key}`)
    .then(res => res.json())
};