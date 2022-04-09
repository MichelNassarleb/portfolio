<template>
    <nav :class="[dark ? 'dark-mode' : 'day-mode']">
        
        
     <ul >
         <li v-for='(item, index) in items' :key='index'><a :href="item.target"
>{{item.name}}</a></li>
         
     </ul>
<a class="btn" href="#contact"><font-awesome-icon icon="fa-regular fa-envelope" class="env-icon"/>Contact Me</a>
    </nav>
</template>
<script>
export default {
    data(){return {
        items:[{name:'Home', target:'#home'},
         {name:'Services',target:'#services'},
        {name:'About', target:'#about'},
    
 
       
        ],
        
    }
    },
    props:['dark']
  
}

</script>
<style scoped>
nav{
    height: 30px;
    
}
.btn:hover{
color: aquamarine;
}
nav a{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
 margin-bottom: 15px;
    
  
 
}
nav ul li a:hover{
    color: aquamarine;
}

.day-mode{
    margin-top: 100px;
  display: flex;
    justify-content: flex-end;
    
    flex-direction: column;
}
.day-mode ul{
    display: flex;
    flex-direction: column;
    
}
.day-mode ul li{
    list-style: none;
    
    
} 

.day-mode ul li a{
    color: black;
    text-decoration: none;
    margin-right:30px;
        font-size: 24px;
   font-family: Tahoma, Geneva, sans-serif;
font-size: 24px;
letter-spacing: 0.8px;

font-weight: normal;


font-variant: normal;
text-transform: none;
    
}
.env-icon{
    margin-left: 35px;
    font-size: 30px;
    
}
.day-mode a{
     color: black;
    text-decoration: none;
    margin-right:50px;
     
        font-size: 24px;
    line-height: 1em;
   font-family: Tahoma, Geneva, sans-serif;
font-size: 24px;
letter-spacing: 0.8px;

font-weight: normal;


font-variant: normal;
text-transform: none;
    
}
.dark-mode{
    
  display: flex;
  flex-direction: column;
    justify-content: flex-end;
    margin-top: 100px;
    
    
}
.dark-mode ul{
    display: flex;
     flex-direction: column;
    justify-content: flex-end;

}
.dark-mode ul li{
    list-style: none;
    
    
} 

.dark-mode ul li a{
    color: white;
    
    text-decoration: none;
    margin-right:0px;
        font-size: 12px;
   font-family: Tahoma, Geneva, sans-serif;
font-size: 24px;
letter-spacing: 0.8px;

font-weight: normal;


font-variant: normal;
text-transform: none;
    
}
.dark-mode a{
     color: white;
    text-decoration: none;
    margin-right:50px;
     
        font-size: 24px;
    line-height: 1em;
   font-family: Tahoma, Geneva, sans-serif;
font-size: 24px;
letter-spacing: 0.8px;

font-weight: normal;


font-variant: normal;
text-transform: none;
    
}
@media only screen and (max-width:1150px){
    nav ul li a{
    
    text-decoration: none;
    margin-right:250px;
        font-size: 10px;
   font-family: Tahoma, Geneva, sans-serif;

letter-spacing: 0.3px;

font-weight: normal;
margin-left: 150px;

font-variant: normal;
text-transform: none;
    
}nav{
    margin-right: 10px;
}
nav a{
     
    text-decoration: none;
    margin-right:150px;
    margin-left: 150px;
     
        font-size: 19px;
    
   font-family: Tahoma, Geneva, sans-serif;
letter-spacing: 0.3px;

font-weight: normal;


font-variant: normal;
text-transform: none;
    
}
}

</style>