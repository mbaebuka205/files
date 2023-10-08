// import moment from "moment"

// let num = 1
// console.log(`bring in cup ${num++}`)
// console.log(`bring in cup ${num++}`)
// console.log(`bring in cup ${num++}`)
// cup(1000)
// console.log(`bring in cup ${num++}`)
// console.log(`bring in cup ${num++}`)

// function cup (guessTime:number) {
//     console.log()
//     console.log("Waiting for joan...!")
  
//     let time = new Date().getTime();
//     let delayTime = time + guessTime;

//   setTimeout(()=>{
//     while(new Date().getTime() < delayTime){
//         // console.log("start processing")
//     }
//     console.log("start process excecuted at :", moment(time).format("LTS"));
//     console.log("end process excecuted at :", moment(delayTime).format("LTS"));
//     console.log( "This whole process took", (delayTime - time)/1000 , "seconds" )
//   }) 
// }

 





// const check = (cb: any): void=>{
//     setTimeout(()=>{
//         return cb(null, "ebuk");
//     }, 0)
// };

// console.log(
//     check((res:any)=>{
        // console.log(`viewing ${nme}'s data`);
        // if(res === "ebuka"){
            //     throw new Error
            // }else{
                //     console.log(res);
                
                // }
                
//                 console.log(res);
//     })
// );
// let nme :string = "Isaac";




// const promise = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     if(WebTransportDatagramDuplexStream){
//         resolve("A promise kept")
//       } else {
//         reject("A promise failed")
//       }
//   })
// });
// promise.then((res)=>{
//     console.log(`${res} with ${myName}`)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("clean up code")
// });
// let myName:string  = "isaac"




// const promise  = Promise.resolve("this is a promise kept")
// const promiseFailed  = Promise.reject("this is a promise failed")




// const promise = new Promise((resolve, reject)=>{
//        setTimeout(()=>{
//         if(n > p){
//             resolve("A promise kept")
//           } else {
//             reject("A promise failed")
//           }
//       });
//    })
//       promise.then((res)=>{
//             console.log(`${res} therefore ${n} is greater than ${p}`)
//         }).catch((err)=>{
//             console.log(err)
//         }).finally(()=>{
//             console.log("clean up code")
//         });
// let n:number  = 2
// let p:number = 1      




// import PromptSync from "prompt-sync"
// const prompt = PromptSync()

// const promise  = new Promise ((resolve, reject)=>{
//     const numb:number  = Math.floor(Math.random()*10);
//     const guessNumb = parseInt(prompt("what your Number: "))
//     if(guessNumb === numb) {
//         console.log();
//         resolve("Promise is kept")
//     }else{
//         console.log();
//         reject("Promise is not kept, the correct number is  "  + numb)
//     }
// })
// promise.then((res) =>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })



// const makeRequest = (time:number) =>{
//     return new Promise((resolve, reject)=>{
//         return setTimeout(() =>{
//             resolve(`it takes ${time / 1000} sec to return this result...`)
//         }, time)
//     })
// }

// makeRequest(2000).then((res) =>{
//     console.log();
//     console.log(res)
// })

// Promise.race([
//     makeRequest(2000),
//     makeRequest(1000),
//     makeRequest(9000),
//     makeRequest(200),
//     makeRequest(700),
// ]).then((res)=>{
//     console.log(res)
// })


// let userEmail:string;
// let userPassword:string;

// const makeRequest = () =>{
//     return new Promise((resolve, reject)=>{
//         const email = prompt("Enter your Email: ");
//         const password = prompt("Enter your password: ");
        
//         userEmail = email
//         userPassword = password

//         return setTimeout(() =>{
//           console.log();
//           if(userEmail === "peter@test.com" && userPassword === "1995"){
//             console.log();
//             resolve(`${userEmail.split("@")[0]}`)
//           } else {
//             console.log();
//             reject("Authentication failed")
//           }
//         }, 1000)
//     })
// }

// const landingPage = (res:any) =>{
//     console.log(`welcome ${res}, to our landing page`)
// }

// // makeRequest()
// //  .then((res)=>{
// //      landingPage(res)
// // }).catch((err)=>{
// //     console.log(err)
// // })


// const myWebApp = async () =>{
//    const val = await makeRequest()
//    const result = landingPage(val)
//    console.log(result)
// }

// console.log(myWebApp())



// let userName:string;
// let userEmail:string;
// let userPassword:string;

// const request = () =>{
//     return new Promise((resolve, reject)=>{
//      const name  = prompt("Enter Your name Please : ")
//      const email  = prompt("Enter Your email Please : ")
//      const password  = prompt("Enter Your password Please : ")

//      userName = name;
//      userEmail = email;
//      userPassword = password;

//      return setTimeout(()=>{
//         if(userName === "Isaac" && userEmail === "isaac@gmail.com" && userPassword === "19193"){
//             console.log()
//             resolve(`${name} `)
//         } else {
//             console.log()
//             reject("Authentication Failed")
//         }
//      }, 0)
//     })
// }

// const landing = (res:any) =>{
//     console.log(`${res} welcome to our landing page`)
// }
// // request()
// // .then((res)=>{
// //     landing(res)
// // }).catch((err)=>{
// //     console.log(err)
// // })

// const myWeb = async () =>{
//   let rls = await request()
//   let result = landing(rls)
//   console.log(result)
// }

// console.log(myWeb())


let myGame ="with four trials " 

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

// game().then((res)=>{
//    console.log(res)

// }).catch((err)=>{
//    console.log(err)
// })


/////////    NEW PRACTISE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// import moment from "moment"

// let num = 1
// console.log(`bring in cup ${num++}`)
// console.log(`bring in cup ${num++}`)
// console.log(`bring in cup ${num++}`)
// cup(5000)
// console.log(`bring in cup ${num++}`)
// console.log(`bring in cup ${num++}`)

// function cup (guessTime:number) {
//     console.log()
//     console.log("Waiting for joan...!")
  
//     let time = new Date().getTime();
//     let delayTime = time + guessTime;

//   setTimeout(()=>{
//     while(new Date().getTime() < delayTime){
//         // console.log("start processing")
//     }
//     console.log("start process excecuted at :", moment(time).format("LTS"));
//     console.log("end process excecuted at :", moment(delayTime).format("LTS"));
//     console.log( "This whole process took", (delayTime - time)/1000 , "seconds" )
//   }) 
// }



//  console.log("start process executed at", moment(time).format("LTS"))
    //  console.log("end process executed at", moment(delayTime).format("LTS"))
    //  console.log("the whole process took", (delayTime - time)/1000)


import moment from "moment"

// let num:number = 1

// console.log(`bring in cup ${num++}`)
// console.log(`bring in cup ${num++}`)
// console.log(`bring in cup ${num++}`)
// cup(9000)
// console.log(`bring in cup ${num++}`)
// console.log(`bring in cup ${num++}`)


// function cup(guess:number){
//    console.log()
//    console.log("waiting for joan...!")

//    let time = new Date().getTime()
//    let delay = time + guess
    
//    let loadingAnime = ''

//    let loader = setInterval(()=>{
//     loadingAnime = 'Loading[▪▪▪▪▪▪▪▪▪]/'
//     process.stdout.clearLine(0);
//     process.stdout.cursorTo(1);
//     process.stdout.write(`${loadingAnime}`)
//    }, 500)
   
//    setTimeout(()=>{
//      clearInterval(loader)
//      console.log()
//      console.log("start process", moment(time).format("LTS"))
//      console.log("process ended at", moment(delay).format("LTS"))
//      console.log("the whole process took", (delay - time)/1000,"sec" )
//    }, guess)
// }


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

// Game.then((res)=>{
//     console.log(res)
// })