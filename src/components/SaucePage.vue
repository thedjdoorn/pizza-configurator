<script setup>

import {inject} from "vue";
const emit = defineEmits(['select'])
const sauces = inject('sauces')

function setSauce(name){
  sauces.value.forEach(x => x.selected=x.name===name)
  emit('select')

}

</script>

<template>
  <ui-image-list>
    <ui-image-item
        v-for="sauce of sauces"
        :key="sauce.name"
        v-on:click="setSauce(sauce.name)"
        class="card"
        :class="{glow:sauces.find(x => sauce.name === x.name).selected}"
        :bg-image="`/${sauce.image}`"
    >
      <ui-image-text>{{sauce.name}}</ui-image-text>
    </ui-image-item>
  </ui-image-list>

</template>

<style scoped>

.card {
  border: 2px solid #b2b7c2;
  border-radius: 5px;
  padding: 1%;
  margin: 3%;
  font-size: 22px;
  -webkit-transition: box-shadow linear .3s;
  transition: box-shadow linear .3s;
}
.card.glow {
  box-shadow: 0 0 20px #A5C882;
}
</style>
