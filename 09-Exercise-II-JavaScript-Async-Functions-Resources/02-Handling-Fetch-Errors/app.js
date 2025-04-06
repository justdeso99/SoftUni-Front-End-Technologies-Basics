async function fetchDataWithErrorHandling() {
    try{
        const response = await fetch('https://swapi.dev/api/people/1');
        const data = await response.json();
        
        if (!response.ok){
            throw new Error('Something went wrong')
        }

        console.log(data);

    } catch(err) {
        console.error(err.message)
    }
}