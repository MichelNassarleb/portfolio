<template>
<div class="full-hom">
    <main id="home" :class="[dark && 'dark-mode']">
        <div :class="[dark && 'dark-mode', 'div1']">
            
            <h1>
                <vue-typer 
  :text='["Hello I am Michel Nassar","I am an ambitious Software Developer!"]'
  :repeat='0'

  :shuffle='false'
  initial-action='typing'
  :pre-type-delay='100'
  :type-delay='100'
  :pre-erase-delay='100'
  :erase-delay='100'
  erase-style='select-all'
  :erase-on-complete='false'
  caret-animation='blink'
 
></vue-typer> </h1>

            <a href="#contact" class="contact-btn">Get in touch</a>
        </div>
        <div class="img">
  <img :src="image" alt="my picture">
  </div>
        
    </main>
    </div>
</template>
<script> 

export default {
    
    data(){
        return{
         image: 'https://i.imgur.com/S0COd3p.jpeg',
        }
    },
    props:['dark'],
    methods:{
       
    }
    
    
}
</script>
<style scoped>

::v-deep .vue-typer{
    margin-right: 3px;

}
.full-hom{

overflow: hidden !important;
height:100vh;
}
main .div1{
    margin-bottom: 50px;
}
main .div1{
    text-align: center;

}
main .img{
    margin-bottom: 50px;
}

::v-deep .vue-typer .custom.char.typed {
    color: #14142b;
     
  }
 ::v-deep .dark-mode .vue-typer .custom.char.typed{
      color: white;
      
  }
.vue-typer {font-size: 40px;
text-align: center;
 
}
::v-deep .vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}
@keyframes rocking {
  0%,100% {transform: rotateZ(-10deg);}
  50%     {transform: rotateZ(10deg);}
}
.vue-typer {
  font-family: Copperplate, 'Copperplate Gothic Light', fantasy;
}

img{ 
    border: none;
border-radius: 50%;
    height: 500px;
    width: 600px;
   

}
 main .img{
    width: 100%;
margin-right: 100px;
margin-left: 100px;

display: flex;
justify-content: center;
align-items: center;

  }
  
  

main{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;

    margin-top: 00px;
max-height: 130vh;
   margin-bottom: 0;
   height:100vh;
   
  

    


} 
main .div1{
    margin-left: 100px;
    color: #14142b;
   font-size: 40px;
    font-family: 'Lato', sans-serif;
   width: 700px;
   margin-right: 30px;

}
main .div1{
    width: 90%;
    margin-top: 150px;
}
.dark-mode a{
    background:#9995b8 ;
}


.dark-mode div{
    color: white;
    background: #14142b;
}
.dark-mode vue-typer{
    color: white;
}
main{
    overflow: hidden;
    
}
main div a{
  padding: 24px 60px;
    border-style: none;
    border-radius: 80px;
transition: color 300ms ease, transform 300ms ease, box-shadow 300ms ease, background-color 300ms ease, -webkit-transform 300ms ease;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    background: #14142b;
    text-decoration: none;
    display: block;
    width: 15vw;
    margin-right: auto;
    margin-left: auto;
 
    
}
main div a:hover{
background-color: #fff;
    box-shadow: 0 4px 20px -5px rgb(20 20 43 / 15%);

     transform: translate3d(0px, -6px, 0.01px);
    color: #14142b;

}
main div h3{
    color:#4e4b66;
    font-size: 24px ;
}

@media only screen and (max-width: 1500px){
    main div a{
    text-decoration: none;
    background-color: #14142b;
    font-size: 18px;
    color: white;
   text-align: center;
    border: none;
    margin-right: auto;
    margin-left: auto;
    padding: 5px;
    border-radius: 30px;
    width: 100px;
      margin-top: 0px;
    display: block;
    
}
   .vue-typer {font-size: 15px;

}
}

@media only screen and (max-width: 1150px){
    .vue-typer {font-size: 15px;

}
.full-hom{
height: 90vh;
overflow: hidden !important;
width: 93vw !important;
margin-bottom: 100px;
}
img{ 
    border: none;
border-radius: 0;
    height: 250px;
    width: 350px;
   margin-right: 10px;
   margin-left: 10px;

}
 main .img{
    
display: flex;
justify-content: center;
align-items: center;
margin-top: 100px;
  }
  main{
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    align-items: center;
        gap: 0;
   

   margin-top: 0px;
   overflow: hidden;
   
} 
main .div1{
    
    color: #14142b;
   font-size: 18px;
    font-family: 'Lato', sans-serif;
   width: 700px;
   margin-right: 30px;
 width: 90%;
    margin-top: 0px;
}
main div a{
    text-decoration: none;
    background-color: #14142b;
    font-size: 18px;
    color: white;
   text-align: center;
    border: none;
    margin-right: auto;
    margin-left: auto;
    padding: 5px;
    border-radius: 30px;
    width: 100px;
      margin-top: 0px;
    display: block;
    
}

.dark-mode{
    background: #14142b;
}
main .div1{
margin-right: 107px;
}
main div a{
     font-size: 10px;
         padding: 12px 30px;
}

}







</style>
