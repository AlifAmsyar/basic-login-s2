let dbUsers =[
    {
        username:"amsyar",
        password:"123",
        name:"syar",
        email:"syar@utem.edu.my"
    },
    {
        username:"mael",
        password:"456",
        name:"mael",
        email:"mael@utem.edu.my"
    },
    {
        username:"aizat",
        password:"789",
        name:"aizat",
        email:"aizat@utem.edu.my"
    }
]

function login(reqUsername, reqPassword)
{
    let matchUser = dbUsers.find(
       user => user.username == reqUsername
    )
    console.log(matchUser)
}


//function login(reqUsername, reqPassword){
//    let matchUser = dbUsers.find(
//        x => x.username == reqUsername
//    )
//    if (!matchUser) return "User Not Found!"
//    if (matchUser.password == reqPassword)
//    {
//        return matchUser
//    }else
//   {
//        return "Invalid Password"
//    }
//}

//try login
login("mael","456")