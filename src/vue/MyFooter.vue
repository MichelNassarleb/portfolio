<template>
    <div :class="[dark && 'dark-mode','full-sec']">
        <div class="icons">
            <div v-for="(icon,index) in icons" :key='index'>
            <a  :href="icon.url">
        <font-awesome-icon class="icon" :icon="icon.icon" />
 </a>
 </div>
  </div>
  <div class="text">
      <small>Made by Michel Nassar.</small>
  </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            icons:[{icon:'fa-brands fa-instagram', url:'https://instagram.com/callmemich_pls?igshid=YmMyMTA2M2Y='}, 
            {icon:"fa-brands fa-linkedin-in",url:'https://www.linkedin.com/in/michel-nassar-36401b215/'},
             {icon:"fa-brands fa-github", url:'https://github.com/MichelNassarleb/MichelNassarleb'}]
            
        
    }
    
},
props:['dark']
}
</script>
<style scoped>
.full-sec{
height: 10vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 98vw;

}
.icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 25px;
    margin-bottom: 10px;
    width: 50vw;

    
}
.icons div a .icon{
color: #14142b;
margin-right: 20px;
}
.text{display: flex;
justify-content: center;
 color: #14142b;   
    width: 50vw
}
.dark-mode .icons div a .icon{
    color: white;
}
.dark-mode .text{
    color: white;
}
@media only screen and (max-width:800px){
    .text{
        font-size: 8px;
        width: 50vw;
    }
    .icons div {
     
      display: flex;
        justify-content: center;
        align-items: center;
    width: 7vw;
    }
    .icons div a .icon{
        font-size: 13px;
     
        width: 5vw;
      margin-right: 0;
    }

}
</style>