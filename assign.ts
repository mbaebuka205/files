import moment from "moment"
const Game = new Promise((resolve)=>{
    let Number:number = 1
    console.log(`bring in cup ${Number++}`)
    console.log(`bring in cup ${Number++}`)
    console.log(`bring in cup ${Number++}`)
    console.log(`bring in cup ${Number++}`)
    cups(3000)
    console.log(`bring in cup ${Number++}`)
    console.log(`bring in cup ${Number++}`)

    function cups(guess:number){
        console.log()
        console.log("waiting for joan...!")
        
        let time = new Date().getTime()
        let delay = time + guess
        let loading = ""
        const loader = setInterval(()=>{
            loading = " Loading[▪▪▪▪▪▪▪▪▪]/"
            process.stdout.clearLine(0)
            process.stdout.cursorTo(0)
            process.stdout.write(`${loading}`)
        },500) 
        
        setTimeout(()=>{
            clearInterval(loader)
            console.log()
            console.log("starting process", moment(time).format("LTS"))
            console.log("ending process", moment(delay).format("LTS"))
            console.log("the whole process took", (delay - time)/1000,"sec")
        },guess)
    }
})

const fnsh = async () =>{
    await Game 
}
console.log(fnsh());



import PromptSync from "prompt-sync"
const prompt = PromptSync()

const game = () =>{
    return new Promise((resolve, reject)=>{
        
        const Y:string = "yes"
        const N:string = "no" 
        const name:string = prompt("please input your name :")
        const ans:string = prompt(`${name} welcome to our guess game, input "yes" to proceed or "no" to opt out :`)
            if (ans.toLocaleLowerCase() === Y ){

                let numbOfTrials:number = 4
                while(numbOfTrials > 0) {

                const numbe:number = Math.floor(Math.random()* 11)
                const guessNo = parseInt(prompt(`Input a number from (0 to 10), You only have ${numbOfTrials--} trials : `))
                if (guessNo === numbe){
                    resolve("You guessed right Hurray!!")
                }
                else{
                    console.log(`You guessed wrong the write guess is ${numbe} `)
                if(numbOfTrials === 0){
                    console.log("U've used all trials")   }
                }
             }     
            } else if (ans.toLocaleLowerCase() === N ) {
                reject("Thanks good bye")
            }else{
                console.log("Invalid Input")
                game()
            } })
}

const Dgame = async () => {
    await game()
}
console.log(Dgame())