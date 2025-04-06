async function asyncGenerator(generatorFunc) {
    const generator = generatorFunc();
    let result = generator.next();

    while(!result.done) {
        try{
            const response = await result.value
            console.log('Generator was:', response);
            
        } catch (err) {
            console.error('Error:', err);
        }

        result = generator.next();
    }
}

function* startAsyncGenerator() {
    yield new Promise ((resolve, reject) => resolve('Success 1!'))
    yield new Promise ((resolve, reject) => resolve('Success 2!'))
    yield new Promise ((resolve, reject) => reject('Failure 1!'))
}

asyncGenerator(startAsyncGenerator)