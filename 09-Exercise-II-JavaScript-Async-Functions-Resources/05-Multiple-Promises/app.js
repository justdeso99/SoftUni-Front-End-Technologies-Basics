async function multiplePromises() {
      const response = await Promise.allSettled( [
            new Promise((resolve, reject) => {
                  setTimeout(() => {
                        resolve("Ate pizza - promise kept")
                  }, 1000);
            }),

            new Promise((resolve, reject) => {
                  setTimeout(() => {
                        resolve("Ate chips - promise kept")
                  }, 2000);
            }),

            new Promise((resolve, reject) => {
                  setTimeout(() => {
                        reject("Didn't eat my vegatables - promise not kept")
                  }, 3000);
            }),
      ])

      console.log(response);
}

multiplePromises();