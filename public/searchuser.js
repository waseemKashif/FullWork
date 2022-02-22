class SearchUser{
    
    getUser(userText){
        document.querySelector(".userText").addEventListener('keyup',(e)=>{
            console.log(e.target.value);
        })
    }
}