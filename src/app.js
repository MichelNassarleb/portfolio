/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


 import Vue from 'vue';
 import App from './App.vue'
 

 
 /* import the fontawesome core */

 

 /* import font awesome icon component */
 import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import VueTyperPlugin from 'vue-typer'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import {faShield} from '@fortawesome/free-solid-svg-icons'
import {faCode} from '@fortawesome/free-solid-svg-icons'
library.add(faShield)
library.add(faCode)
library.add(faLinkedinIn)

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {faAtom} from '@fortawesome/free-solid-svg-icons'
library.add(faAtom)
library.add(faInstagram)
library.add(faGithub)
 /* add icons to the library */

 
 /* add font awesome icon component */
 Vue.use(VueTyperPlugin)
 Vue.component('font-awesome-icon', FontAwesomeIcon)
 library.add(faEnvelope)
 library.add(faXmark)
 library.add(faBars)
 Vue.config.productionTip = false
 

 

 
 /**
  * The following block of code may be used to automatically register your
  * Vue components. It will recursively scan this directory for the Vue
  * components and automatically register them with their "basename".
  *
  * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
  */
 
 // const files = require.context('./', true, /\.vue$/i)
 // files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
 
 
 
 /**
  * Next, we will create a fresh Vue application instance and attach it to
  * the page. Then, you may begin adding components to this application
  * or customize the JavaScript scaffolding to fit your unique needs.
  */
  new Vue({
    el: '#app',
    render: h => h(App)
  })
  
 