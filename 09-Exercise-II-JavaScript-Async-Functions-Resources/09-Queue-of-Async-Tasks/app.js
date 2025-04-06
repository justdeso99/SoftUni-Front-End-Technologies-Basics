class AsyncQueue {
    constructor() {
        this.tasks = [];
    }

    addTask(taskFunc) {
        this.tasks.push(taskFunc);
    }

    async processTasks() {
        while(this.tasks.length > 0){
            const currentTaskFunc = this.tasks.shift();

            try{
                const response = await currentTaskFunc()
                console.log('Task was:', response)
            }catch (err){
                console.error('Task was', err);
            }
        }
    }
}

function startQueue() {
    let queue = new AsyncQueue()

    queue.addTask(() => new Promise((resolve, reject) => setTimeout(() => resolve("succsessful"), 1000)))
    queue.addTask(() => new Promise((resolve, reject) => setTimeout(() => resolve("succsessful"), 2000)))
    queue.addTask(() => new Promise((resolve, reject) => setTimeout(() => reject("rejected"), 3000)))
}

startQueue()