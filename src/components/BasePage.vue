<script setup>
import {inject} from 'vue'
const emit = defineEmits(['select'])
const bases = inject('bases')

function selectBase(name) {
  bases.value.forEach(x => x.selected=x.name===name)
  emit('select')
}
</script>

<template>
  <ui-image-list>
    <ui-image-item
        v-for="base of bases"
        :key="base.name"
        v-on:click="selectBase(base.name)"
        class="card"
        :class="{glow:bases.find(x=>x.name===base.name).selected}"
        :bg-image="`/${base.image}`"
    >
      <ui-image-text>{{base.name}}</ui-image-text>
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
