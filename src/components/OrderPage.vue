<script setup>
import {computed, inject} from "vue";

const bases = inject('bases')
const sauces = inject('sauces')
const toppings = inject('toppings')

let base = computed(()=>bases.value.find(b=>b.selected))
let sauce = computed(()=>sauces.value.find(s=>s.selected))

</script>
<template>
  <h2>
    Bodem
  </h2>
  <p>
    {{base?.name}}
  </p>
  <h2>
    Saus
  </h2>
  <p>{{ sauce?.name }}</p>
  <h2>Toppings</h2>
  <p>
  <ul>
    <li v-for="topping of toppings.filter(t=>t.selected)">{{topping.name}}</li>
  </ul>
  </p>
</template>


<style scoped>

</style>
