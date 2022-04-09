<template>
    <div id="contact" :class="[dark && 'dark-serv', 'full-sec']">
         <h1>Contact Me</h1>
            <div class="container">
               
        <form @submit.prevent="sendEmail">
       
          <input 
            type="text" 
            v-model="name"
            name="name"
            placeholder="Your Name"
            required
          >
          
          <input 
            type="email" 
            v-model="email"
            name="email"
            placeholder="Your Email"
            required
            >
        
          <textarea 
            name="message"
            v-model="message"
            cols="30" rows="5"
            placeholder="Message"
            required>
          </textarea>
          
        <button>Send</button>
        </form>
       
    </div>
<h1 v-if="sent" class="sent-message">Message has been sent!</h1>
    </div>
</template>
    <script>
    import emailjs from 'emailjs-com';
    export default {
         name: 'ContactUs',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      sent: false

    }
  },
  props:['dark'],
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_zs59fpq', 'template_dn1sf48', e.target,
        'DOtKX7JUdDjHeouH-', {
        name:this.name,
          email: this.email,
          message: this.message
        })
 this.sent= true
      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
      
    },
  }
    }
    </script>
    <style scoped>
    .full-sec{
        width: 98vw;
        height: 90vh;
        
        display: flex;
        flex-direction: column;;
       justify-content: center;
       align-items: center;   
       border: 1px solid #a9a9c6;
       border-right: none;
       border-left: none;}

    .full-sec h1{
        font-size: 50px;
    }
    .container form{
       
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
  
    }
    .container form label{
        color: #14142b;
        font-size: 40px;
    }
    .container form input{
        height: 50px;
        border-radius: 10px;
        margin-bottom: 30px;
        width: 30vw;
    }
    .container form button{
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
   
  
  margin-left: auto;
  margin-right: auto;
  width: 15vw;
  

    }
    .container form button:hover{
          background-color: #fff;
    box-shadow: 0 4px 20px -5px rgb(20 20 43 / 15%);
      transform: translate3d(0px, -6px, 0.01px);
 cursor: pointer;
    color: #14142b;
    }
    .container form textarea{
        margin-bottom: 30px;
        width: 30vw;
        border-radius: 10px;
    }
    .sent-message{
      font-size: 30px !important;
      margin-right: auto;
      margin-top: auto;

    }
    @media only screen and (max-width: 800px){
        .container form{
            width: 93vw;
           
        }
        .container form input{
            width: 90vw;
         
        }
           .container form textarea{
            width: 90vw;

        }
        .sent-message{
          font-size: 15px;
        }
        .container form input::placeholder{
          text-align: center;
        }
          .container form textarea::placeholder{
         display: flex;
        text-align: center;
       
        }
        .full-sec{
            margin-top: 10vh;
            width: 93vw;
             flex-direction: column;;
       justify-content: flex-start;
       align-items: flex-start;
       overflow: hidden; 
        }
     .full-sec h1{
         font-size: 20px;
         margin-left: auto;
         margin-right: auto;
     }
     .container form button{
font-size: 10px;
         padding: 12px 30px;
         width: 30vw;
     }
    }
    .dark-serv h1{
        color: white;
    }
 .dark-serv form button{
     background: #777990;
     
 }
    </style>