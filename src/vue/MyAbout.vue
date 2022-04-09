<template>
    <section id="about" :class="[dark && 'dark-sec', 'full-about']">
        <div class="img-sec">
<img :src="codeimage" alt="Coding" >
</div>
<div  class="text-sec">
<h3 >About me</h3>
<p>Results-driven computer science student from the Lebanese Univeristy
passionate about developing user-friendly website applications.A Coding Addict!. Excellent
problem-solving skills and ability to perform well in a team. Seeking to help
you develop your websites,secure your networks, as well as grow and
develop his own skills as a coder and as cyber securitist</p>
<a href="https://download1337.mediafire.com/poe8z5nj1lrg/g9lqanqyveom6xa/CV.pdf" download="Michel Nassar CV">Download full resume.</a>
</div>
    </section>
</template>
<script>
export default {
    data(){
        return{
            codeimage: 'https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
    },
    props:['dark']
    
}
</script>
<style scoped>
.dark-sec{
    color: white;
    background: #14142b;
}
.dark-sec .text-sec h3{
    color: white;
}
.dark-sec .text-sec p{
    color: white;
}
.dark-sec .text-sec a{
    background: #777990;
}
.full-about{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 98vw !important;
 

  height: 100vh !important;
}
img{
  border-radius: 20px;
height: 600px;
width: 700px;

}
.text-sec{
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 40%;
    margin-left: 4%;
    height: 40vh;
}
.text-sec h3{
    
    margin-bottom: 16px;
    color: #14142b;
    font-size: 42px;
    line-height: 1.38em;
    font-weight: 700;
        font-family: Satoshi, sans-serif;
            margin-bottom: 24px;

}
.text-sec p{
       font-family: Satoshi, sans-serif;
    color: #777990;
    font-size: 18px;
    line-height: 1.777em;
    font-weight: 500;
 
}
.text-sec a:hover{
    background-color: #fff;
    box-shadow: 0 4px 20px -5px rgb(20 20 43 / 15%);
      transform: translate3d(0px, -6px, 0.01px);
 
    color: #14142b;
   
}
.text-sec a{
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
}
@media only screen and (max-width:1150px){
    .full-about{
        width: 93vw !important;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        height: 100vh;
        overflow: hidden !important;
    }
    img{
        height: 250px;
    width: 330px;
    margin-right: 10px;
    margin-left: 10px;
    }
    .text-sec h3{
        font-size: 14px;
        

        
    }
    
    .text-sec p{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        width: 93vw;
        margin-bottom: 60px;
        height: 22vh;
        
    }
    .text-sec{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 60vh;
        width: 93vw;
    }
    .text-sec a{
        font-size: 10px;
         padding: 12px 30px;
    }
    
}

</style>