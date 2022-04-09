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
    height: 40px;

   

}
.btn:hover{
    color: aquamarine;
}
nav a{
    display: flex;
    
   
 
}
nav ul li a:hover{
    color: aquamarine;
}

.day-mode{
    
  display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.day-mode ul{
    display: flex;
    
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
    margin-right: 10px;
    font-size: 30px;
    margin-left: 150px;
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
    justify-content: space-evenly;
    align-items: center;
}
.dark-mode ul{
    display: flex;
    
}
.dark-mode ul li{
    list-style: none;
    
    
} 

.dark-mode ul li a{
    color: white;
    
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
</style>