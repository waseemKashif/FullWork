class UI {
    constructor(){
        this.profile = document.querySelector(".profiles");
    }

    showData(user){
         this.profile.innerHTML = '';
        for ( let i in user) {
            
             this.profile.innerHTML += `
        <div class="container mx-auto bg-amber-400 text-lg border-ring-3 border text-center">
            <ul class="list-outside">
            <li class="font-sm "> Id : ${user[i].id}</li>
            <li class="font-sm " > Phone :${user[i].phone}</li>
            <li class="font-sm" > Name : ${user[i].name}</li>
            <li class="font-sm " > Email : ${user[i].email}</li>
            <li class="font-sm " > UserName : ${user[i].username}</li>
            <li class="font-sm "> Website : ${user[i].website}</li>
            
            </ul>
        </div>
        `;
        document.querySelector(".listit").appendChild(this.profile);
            
        };
       
    }
    dispalyPost(user){
        this.profile.innerHTML = '';
        let i=0;
        this.profile.innerHTML = `
        <div class="container mx-auto bg-amber-400  text-base border-ring-3 border">
            <ul class="list-outside">
            <li class="font-sm"> Id : ${user[i].id}</li>
            <li class="font-sm" > Phone :${user[i].phone}</li>
            <li class="font-sm" > Name : ${user[i].name}</li>
            <li class="font-sm" > Email : ${user[i].email}</li>
            <li class="font-sm" > UserName : ${user[i].username}</li>
            <li class="font-sm"> Website : ${user[i].website}</li>
            
            </ul>
        </div>
        `;
         document.querySelector(".listit").appendChild(this.profile);
    }

};
class SearchUser extends UI{

    searching(lisdata){
       document.querySelector(".userText").addEventListener('keyup',(e)=>{
        //  console.log(lisdata);
        // let myarryData = Array.from(lisdata);
    let text = e.target.value;
    text = text.toLowerCase();
   let resulData = lisdata.filter(function(item){
    //    for(let i in item){
        if(e.target.value !== ""){
           if(item.name.toLowerCase().indexOf(text) != -1 || item.username.toLowerCase().indexOf(text) != -1 || item.email.toLowerCase().indexOf(text) != -1 || item.phone.indexOf(text) != -1 || item.website.toLowerCase().indexOf(text) != -1){
             return  item;
           }
        }else{
            console.log("field is empty")
                
        }
    //    }
        
        });
     this.showData(resulData);
        
    });
     
     
 }
}