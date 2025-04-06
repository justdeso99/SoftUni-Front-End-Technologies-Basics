async function retryPromise(promiseFunc, retries = 3) {
  let attempsFailed = 0;

  while(attempsFailed < retries){
    try {
      const result = await promiseFunc();
      console.log(result);
      return;
    } catch (err) {
      attempsFailed++;

      console.log(`Failed attemp #${attempsFailed}`)

      if(attempsFailed === 3){
        console.log(err);
        
      }
    }
  }
}

function createRandomPromise() {
  const randomDecimal = Math.random();

  return new Promise((resolve, reject) => {

    if(randomDecimal >= 0.7){
      resolve("Success!")
    } else {
      reject("Failure!")
    }

  })

}

retryPromise(createRandomPromise)