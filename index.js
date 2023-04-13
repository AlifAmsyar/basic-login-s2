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


function login(reqUsername, reqPassword){
    let matchUser = dbUsers.find(
        x => x.username == reqUsername
    )
    if (!matchUser) return "User Not Found!"
    if (matchUser.password == reqPassword)
    {
        return matchUser
    }else
   {
        return "Invalid Password"
    }
}


    function register(a, b, c, d) {
        dbUsers.push({
            username: a,
            password: b,
            name: c,
            email: d
        })
}


//try login
console.log(login("amsyar","123"))             //cout
console.log(login("meon","98765"))
console.log(login("utem","password"))

register("Hawari","4563","Wari","Hawari@gmail.com")
console.log(login("Hawari","4563"))