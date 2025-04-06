async function simplePromiseAsync() {
    await new Promise(resolve => setTimeout(resolve, 2000))
}