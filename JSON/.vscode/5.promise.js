function withdraw(balance,amount){
    return new Promise(function(resolve,reject)  {
        if(amount<=balance){
            resolve(balance-amount)
        }else{
            reject("Insufficient Balance");
        }
    })
    //above function returning promise
}

//handling function result promise using then catch

withdraw(5000,3000)
.then(result=> console.log("remaining balance", result))
.catch(error=> console.log(error))

withdraw(5000,8000)
.then(result=> console.log("remaining balance", result))
.catch(error=> console.log("Error Occured", error))

