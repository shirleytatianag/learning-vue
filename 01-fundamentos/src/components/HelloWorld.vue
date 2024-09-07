<script setup>

import { ref, computed, watch } from 'vue'


// Definir una variable usando ref()
const newMessage = ref('Este es un mensaje renderizado desde una variable')

// Computed Property
const uppercaseMessage = computed(() => {
  return newMessage.value.toUpperCase()
});

function greetings(){
  console.log('entre');
  
};

watch(newMessage, (newValue, oldValue) => {
  console.log(`El mensaje cambió de "${oldValue}" a "${newValue}"`)
})

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <!-- Renderizar la variable newMessage -->
    <h1 class="green">{{ newMessage }}</h1>
    <!-- Renderizar el valor computado -->
    <h2 @click="greetings">{{ uppercaseMessage }}</h2>
    <h3>
      You’ve successfully created a project with 
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">{{msg}} 3</a>.
    </h3>
    <button @click="newMessage = 'Mensaje actualizado'">Actualizar Mensaje</button>

  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
