window.onload= function(){
const activities = document.getElementById('selectElement');
let array=[];
const body=document.querySelector('body');
let btn=document.createElement('button');
btn.id="btn";
btn.innerText="Add this Activity to my list";
activities.addEventListener('change', function() {
 let x=activities.value;
   if(x=="education"){
    fetch('http://www.boredapi.com/api/activity?type=education')
    .then(function(response) {
      return response.json()})
      .then(function (json) { 
        console.log(json) 
        let activity=json.activity;
        let participants=json.participants;
      const body=document.querySelector('body');
      const div =document.createElement("div")
      div.id="api";
      const edu1=document.createElement("p") 
      const edu2=document.createElement("p")
      edu1.innerText="Activity to do: "+"\n"+activity;
      edu2.innerText="Number of participants needed: "+ participants;
      body.append(div)
      div.append(edu1)
      div.append(edu2)
      array.push(activity)
      
    }) 
   
   }
   else if(x=="music"){
    fetch('http://www.boredapi.com/api/activity?type=music')
        .then(function(response) {
          return response.json()})
          .then(function (json) { 
            console.log(json) 
          let activity=json.activity;
          let participants=json.participants;
          const div=document.getElementById("api")
          const mus1=document.createElement("p") 
          const mus2=document.createElement("p")
          mus1.innerText="Activity to do: "+"\n"+activity;
          mus2.innerText="Number of participants needed: "+participants;
          div.innerHTML="";
          div.append(mus1)
          div.append(mus2)
          array.push(activity)
        })}
else if(x=="recreational"){
    fetch('http://www.boredapi.com/api/activity?type=recreational')
        .then(function(response) {
          return response.json()})
          .then(function (json) { 
            console.log(json) 
            let activity=json.activity;
            let participants=json.participants;
          const div=document.getElementById("api")
          const rea1=document.createElement("p") 
          const rea2=document.createElement("p")
          rea1.innerText="Activity to do: "+"\n"+activity;
          rea2.innerText="Number of participants needed: "+participants;
          div.innerHTML="";
          div.append(rea1)
          div.append(rea2)
          array.push(activity)
    })
}

else if(x=="cooking"){
    fetch('http://www.boredapi.com/api/activity?type=cooking')
        .then(function(response) {
          return response.json()})
          .then(function (json) { 
            console.log(json) 
            let activity=json.activity;
            let participants=json.participants;
            const div=document.getElementById("api")
          const coo1=document.createElement("p") 
          const coo2=document.createElement("p")
          coo1.innerText="Activity to do: "+"\n"+activity;
          coo2.innerText="Number of participants needed: "+participants;
          div.innerHTML="";
          div.append(coo1)
          div.append(coo2)
          array.push(activity)
    }) 
}
else if(x=="diy"){
    fetch('http://www.boredapi.com/api/activity?type=diy')
        .then(function(response) {
          return response.json()})
          .then(function (json) { 
            console.log(json) 
            let activity=json.activity;
            let participants=json.participants;
          const div=document.getElementById("api")
          const diy1=document.createElement("p") 
          const diy2=document.createElement("p")
          diy1.innerText="Activity to do: "+"\n"+activity;
          diy2.innerText="Number of participants needed: "+participants;
          div.innerHTML="";
          div.append(diy1)
          div.append(diy2)
          array.push(activity)
    })}
else if(x=="busywork"){
    fetch('http://www.boredapi.com/api/activity?type=busywork')
        .then(function(response) {
          return response.json()})
          .then(function (json) { 
            console.log(json) 
            let activity=json.activity;
            let participants=json.participants;
          const div=document.getElementById("api")
          const bus1=document.createElement("p") 
          const bus2=document.createElement("p")
          bus1.innerText="Activity to do: "+"\n"+activity;
          bus2.innerText="Number of participants needed: "+participants;
          div.innerHTML="";
          div.append(bus1)
          div.append(bus2)
          array.push(activity)
    })  
}
/*SET THE ITEMS*/
body.append(btn);
btn.addEventListener('click',function(){
  localStorage.setItem("array",JSON.stringify(array));
  });


});

}