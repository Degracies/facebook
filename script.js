const database =[ 
    {
    username: "david",
    password: "D@v1"
    },{
    username: "lola",
    password: "gr234"
    },{
    username: "peace",
    password: 1234
    }
    ]; 

const button = document.getElementById("submit");
const create = document.getElementsByClassName("create");

    button.addEventListener("click",logIn);
    function logIn(){
                let user = document.getElementById("number").value;
                let pass = document.getElementById("password").value;
        
                for (var i = 0; i < database.length; i++) {
                    console.log(user, i)
                    console.log(database[i].username)
                    console.log(pass, i)
                    console.log(database[i].password)
                if (user===database[i].username && pass==database[i].password) {
                alert("Welcome!!!")  
                return 
                } else {
                console.log("wrong username or password.")    
                }
        
                 if (user==="" || pass==="") {
                console.log("Nothing")
                return
                }
            }};
