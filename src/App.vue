<template>
<div class="full-sec">
    <section :class="[dark ? 'dark' : 'day-mode', 'main-section']">
      
      
     
       <div class="header">
          
      
  
           <div :class="[dark ? 'dark-div' : 'toggle-div']">
            <button class="toggle-btn"  @click="dark=!dark"></button>
        </div>
        <div class="menu-side">
        <font-awesome-icon :class="[opened ? 'menu-icon-true' : 'menu-icon-closed']" icon="fa-solid fa-bars"  @click="sidebar = !sidebar; opened= !opened" />
           <font-awesome-icon icon="fa-solid fa-xmark" :class="[opened ? 'menu-icon-closed' : 'menu-icon-true']" @click="sidebar = !sidebar; opened= !opened"/>
            <side-bar :dark='dark' v-if="sidebar" class="side-bar"/>
            
            </div>
        <nav-header class="navHeader" :dark="dark" />
       
       </div> 
        
       <my-home class="home-sec" :dark="dark"></my-home>
       <my-service :dark="dark" />
       <my-about :dark='dark'/>
       <my-contact :dark='dark'/>
       <my-footer :dark='dark'/>
    </section>
    </div>
</template>

<script>
import MySidebar from './vue/MySidebar.vue'
import MyHome from './vue/MyHome.vue'
  import navHeader from './vue/MyHeader.vue'
  import MyServices from './vue/MyServices.vue'
  import MyAbout from './vue/MyAbout.vue'
   import MyFooter from './vue/MyFooter.vue'
import MyContactVue from './vue/MyContact.vue'
export default {
 
    data(){
        return{
            dark: false,
            sidebar:false,
opened: true,
scrolled: false
        }
    },
    components:{
        'nav-header': navHeader,
        'my-home': MyHome,
        'side-bar': MySidebar,
        'my-service': MyServices,
        'my-about': MyAbout,
        'my-contact': MyContactVue,
        'my-footer': MyFooter
        
    },
    methods:{
       scrollShow(){
           if(window.scrollY > 100){
               this.scrolled = true
           }else{
               this.scrolled = false
           }
           
       }
    },
    created(){
      
    }
   
}
</script>
<style scoped>


.dark .home-sec{
    background: #14142b;
}
.full-sec{
    width: 98vw !important;
    background: white;

}
.full-sec .dark{
    background: #14142b;
}
@media only screen and (max-width: 1150px){
    .full-sec{
        width: 93vw !important;
    }

}


@media only screen and (min-width: 1151px){
    .side-bar{
    display: none;
}}

.dark .none{
    color: #14142b;
    text-align: center;
}
.none{
    color: white;
    text-align: center;
}

.menu-icon-true{
    display: none;
}
.menu-icon-closed{
    display: none;
}



 
@media only screen and (max-width: 1150px){
    
    
    .menu-icon-closed{
        display: none;
    }
    
    .navHeader{
        display: none;
    }
   
    .menu-side{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        gap: 150px;
        width: 150px;
    }
    .menu-icon-true{
        margin-left: 30%;
        display: inline;
cursor: pointer;
        font-size: 30px;
        margin-right: 30px;
       transition: all 0.3s ease;
        
    }
   
    .header{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        margin-right: 20px;
        margin-left: 20px;
         margin-top: 0;
        
        
         width: 93vw;
    }
    .side-bar{
        height: 100px;
        margin-bottom: 0;
        width: 200px;
      font-size: 1;
      margin-right: 300px;
       
    }

  

    
}

.header{
    display: flex;
    justify-content: space-evenly;
    
    width: 98vw;
   
  
}
.main-section{
height: auto;
    border-radius: 20px;

 

}

.dark .home-sec{
  color:  white;
  background: #14142b;
  
}


  

.toggle-div{
    height: 24px;
    width: 50px;
    background: hsl(0, 5%, 78%);
    border: none;
    border-radius: 10px;
    display: flex;
    justify-content: flex-start;
  margin-top: 10px;
}

.toggle-div .toggle-btn{
    border: none;
    height: 24px;
    width: 20px;
      border-radius: 50%;
      cursor: pointer;


}
.dark-div{
    height: 24px;
    width: 50px;
    background: hsl(0, 5%, 78%);
    border: none;
    border-radius: 10px;
    display: flex;
    justify-content: flex-end;
  margin-top: 10px;
}
.dark-div .toggle-btn{
    border: none;
    height: 24px;
    width: 20px;
      border-radius: 50%;
      cursor: pointer;


}
.dark .header .menu-icon-true{
color: white;
}





</style>