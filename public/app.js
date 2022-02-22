const resData= new FakeData();
const ui = new UI;
 document.querySelector(".getMyData").addEventListener("click",function (){
        resData.getData('https://jsonplaceholder.typicode.com/users')
.then(data => {
    ui.showData(data);
    const search = new SearchUser;
    search.searching(data);
 })
.catch(err => console.log(err));
 });

 const myData =[{
        "id" :"11",
     "name" : "waseem",
     "email" : "waseem@gmail.com",
     "username" : "khanBaba",
     "website" :"abc.com",
     "phone" : "0342892782"
 }];

 document.querySelector(".postMyData").addEventListener('click',()=>{
     resData.postData('https://jsonplaceholder.typicode.com/users',myData)
     .then(data => {
        ui.dispalyPost(data);

        
        })
       
     .catch(err => console.log(err));

 });

//  document.querySelector(".userText").addEventListener('keyup',(e)=>{
//             console.log(e.target.value);
//  });

