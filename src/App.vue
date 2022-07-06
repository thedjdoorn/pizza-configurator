<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Toppingspage from './components/ToppingsPage.vue'
import SaucePage from './components/SaucePage.vue'
import BasePage from './components/BasePage.vue'
import OrderPage from "./components/OrderPage.vue";
import {ref, provide} from "vue";

let bases = ref([
  {name:"Normaal", image:"base-regular.jpg", selected:false},
  {name:"Bloemkool", image:"base-cauliflower.jpg", selected: false}
])
provide('bases', bases)

let sauces = ref([
  {name:"Tomaat", image:"sauce-tomato.jpg", selected: false},
  {name:"Crème", image:"sauce-cream.jpg", selected: false}
])
provide('sauces', sauces)

let toppings = ref([
  {name:"Mozzarella", image:"mozzarella.jpg", selected: false},
  {name:"Chorizo", image:"chorizo.jpg", selected: false},
  {name:"Verse Tomaat", image:"fresh_tomato.jpg", selected: false},
  {name:"Gorgonzola", image:"gorgonzola.jpg", selected: false},
  {name:"Ham", image:"ham.jpg", selected: false},
  {name:"Jalapeño", image:"jalapeno.jpg", selected: false},
  {name:"Ananas", image:"pineapple.jpg", selected: false},
  {name:"Salami", image:"salami.jpg", selected: false},
])
provide('toppings', toppings)

let active = ref(0);
</script>

<template>
  <h1>Pizza App</h1>
  <ui-tab-bar v-model="active">
    <ui-tab>Bodem</ui-tab>
    <ui-tab>Saus</ui-tab>
    <ui-tab>Toppings</ui-tab>
    <ui-tab>Bestelling</ui-tab>
  </ui-tab-bar>
  <div class="container">
    <ui-panels v-model="active">
      <ui-panel><BasePage v-on:select="active = 1"/></ui-panel>
      <ui-panel>
        <SaucePage v-on:select="active = 2"/>
      </ui-panel>
      <ui-panel>
        <Toppingspage/>
      </ui-panel>
      <ui-panel><OrderPage/></ui-panel>
    </ui-panels>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #556F3B;
  margin-top: 60px;
}
.container {
  padding: 5%;
}
</style>
