<script setup>
import {inject} from 'vue'
const toppings = inject('toppings')

function toggleTopping(name){
  toppings.value.find(x=>x.name === name).selected = !toppings.value.find(x=>x.name === name).selected
}

</script>

<template>
  <ui-image-list>
    <ui-image-item
        v-for="topping of toppings"
        :key="topping.name"
        v-on:click="toggleTopping(topping.name)"
        class="card"
        :class="{glow:toppings.find(x=>x.name === topping.name).selected}"
        :bg-image="`/${topping.image}`"
    >
      <ui-image-text>{{topping.name}}</ui-image-text>
    </ui-image-item>
  </ui-image-list>

</template>

<style scoped>
.card {
  border: 2px solid #b2b7c2;
  padding: 1%;
  margin: 3% !important;
  font-size: 22px;
  -webkit-transition: box-shadow linear .3s;
  transition: box-shadow linear .3s;
}
.card.glow {
  box-shadow: 0 0 20px #A5C882;
}
</style>
