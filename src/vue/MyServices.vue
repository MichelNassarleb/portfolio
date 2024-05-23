<template>
<div class="full-ser">
    <section id="services" :class="[dark && 'dark-serv']">
<h1 class="title">My services</h1>
<div class="container">
    <div v-for='(item,index) in items' :key='index' :class="[dark && 'dark-serv', 'web-serv']">
<font-awesome-icon class="code-icon" :icon="item.icon" />
<div>
    <h1>{{item.title}}</h1>
    <p>{{item.description}}</p>
</div>
</div>
 
  
</div>

    </section>
    </div>
</template>
<script>

export default {
    props:['dark'],
    data(){
        return{
            items:[{icon:'fa-solid fa-code',title:'Website - Mobile Application Development', description:'Second year computer science student with long hours of Udemy, Scrimba and Youtube development courses plus almost 3 years of professional experience '},
            {icon:'fa-solid fa-shield',title:'Cyber Security', description:'Certified Cyber Securitist by Woz Global with knowledge in networking,CIA triad, protocols, firewalls, hash tools, OSI Model etc. '},
            {icon:'fa-solid fa-atom',title:'Physics Teaching', description:'Physics Graduate after long courses of Atoms, Optics, Waves,Quantum Physics, Electrical Physics and Mechanics.'}]

        }
    }
    
}
</script>
<style scoped>
.title{
    margin-top: 0px;
}

.container{
    background: rgb(188, 232, 233,0.3);
    max-width: 1000px;
   display: grid;
   justify-content: center;
   align-items: center;
  border-radius: 40px;
   margin-right: auto;
   margin-left: auto;
   grid-template-columns: 1fr 1fr;
}
.web-serv div p{
    margin-left: 25px;
    line-height: 25px;
}
.full-ser{
    margin-top: 0;
    height: 100vh;

overflow: hidden;
    width: 98vw;
}

.title{
    text-align: center;
    font-size: 60px;
    color: #14142b;
    margin-top: 0px;
}
.dark-serv .title{
    color: white;

}
.web-serv{
    display: flex;
    flex-direction: row;
 overflow: hidden;
    
    margin-bottom: 40px;
    margin-left: 50px;
    height: 200px;
    justify-content: center;
    align-items:center;
    width: 600px;
    margin-right:50px;
    background: white;
    margin-top: 40px;
    border-radius: 20px;
}
.web-serv div h1{
    font-size: 30px;
    color: #26267d;
}
.web-serv div{
    display: flex;
    flex-direction: column;
    color: #777990;
   margin-right: 40px;
   margin-left: 30px;
   
   
}
.web-serv div h1{
    margin-bottom: 0;
}
.code-icon{
    margin-left:50px;
    font-size: 50px;
    background: lightblue;
    border-radius: 20px;
    padding: 10px 10px 10px 15px;
    color: #26267d;
}
section{
    height: 100vh;
}
.dark-serv div h1{
    color: white;

}
.dark-serv{
  background:#14142b;
  border-radius: 0px;
  overflow: hidden;

}

@media only screen and (max-width:1150px){
    .full-ser{
        width: 93vw;
        
        
    }
    .title{
        font-size: 30px;
    }
  .container{
    background: rgb(188, 232, 233,0.3);
    max-width: 800px;
   display: grid;
   width: 800px;
   justify-content: center;
   align-items: center;
  border-radius: 40px;
   margin-right: auto;
   margin-left: auto;
   grid-template-columns: 1fr 1fr;
}
.web-serv div h1{
    font-size: 15px;
    color: #26267d;
}
.web-serv{
    display: flex;
    flex-direction: row;
 text-align: center;
    
    margin-bottom: 40px;
    margin-left: 50px;
    justify-content: center;
    align-items: center;
    width: 400px;
    margin-right:50px;
    
    margin-top: 40px;
    border-radius: 20px;
}
.code-icon{
    
margin-top: 30px;
    margin-left:50px;
    font-size: 50px;
    background: lightblue;
    border-radius: 20px;
    padding: 10px 10px 10px 15px;
    color: #26267d;
    margin-bottom: auto;
    margin-top: auto;
}
}
@media only screen and (max-width:800px){
  .container{
   width: 70vw;
}
.full-ser{
    
    width: 93vw;
    height: 100vh;
    
}
.web-serv{
    display: flex;
    height: 180px;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    width: 130px;
    margin-right:10px;
    flex-direction: column;
    background: white;
    margin-bottom: 0;
    
}
.dark-serv div h1{
    color: white;
   
}
.dark-serv div{
    color: white;
}
.web-serv div{
  display: flex;
    flex-direction: column;
    justify-content: center;
  margin-top: 0;
     height:60%;
     width:129px ;
     font-size: 8px;
     text-align: center;
     margin-right: 0;
  
     
}
.dark-serv{
   background: #14142b;
}
.web-serv div h1{
    font-size:12px ;
    margin-right:0;
    margin-top: 0;

}
.web-serv div p{
    line-height: 10px;
    font-size: 10px;
    margin-left: auto;
}
.web-serv div{
    margin-left: auto;
    margin-right: auto;
}
.code-icon{
    margin-left: 0;
margin-top: 10px;
   
    font-size: 15px;
    background: lightblue;
    border-radius: 10px;
    padding: 7px 5px 5px 7px;
    color: #26267d;
    
    margin-bottom: 0;
    width:30px ;

}
.title{
    font-size: 20px;
}
}

</style>