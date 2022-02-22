class FakeData{
    
    //Get request 
  async  getData(url){
       const resposeData= await fetch(url);
       const data = await resposeData.json();
       return data;
        // .then(function(response){
        //     return response.json();
        // })
        // .then(function(data){
        //     console.log(data);
        // })
        // .catch(err => console.log(err));
    }

    //Post request
   async postData(url,data){
      const resData= await  fetch(url,{
            method:'POST',
            headers : {
                'content-type' :'application/json'
            },
            body : JSON.stringify(data)
        });
        const finaldata = await resData.json();
        return finaldata;
    }
}