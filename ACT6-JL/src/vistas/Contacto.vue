<script setup>
import { ref } from 'vue'

const formulario = ref({
  nombre: '',
  email: '',
  mensaje: ''
})

const mensajeEnviado = ref(false)


function enviarContacto() {
  console.log("Datos a enviar:", formulario.value)
  
  mensajeEnviado.value = true
  
  formulario.value = {
    nombre: '',
    email: '',
    mensaje: ''
  }
  
  setTimeout(() => {
    mensajeEnviado.value = false
  }, 3000)
}
</script>

<template>
  <div class="container">
    <h1>Contáctanos</h1>
    <p class="subtitle">¿Tienes dudas sobre nuestros tours? Escríbenos.</p>

    <form @submit.prevent="enviarContacto" class="formulario-contacto">
      
      <div class="campo">
        <label for="nombre">Nombre completo:</label>
        <input 
          id="nombre" 
          type="text" 
          v-model="formulario.nombre" 
          placeholder="Ej: Ana Pérez" 
          required 
        />
      </div>

      <div class="campo">
        <label for="email">Correo electrónico:</label>
        <input 
          id="email" 
          type="email" 
          v-model="formulario.email" 
          placeholder="ejemplo@correo.com" 
          required 
        />
      </div>

      <div class="campo">
        <label for="mensaje">Tu mensaje:</label>
        <textarea 
          id="mensaje" 
          v-model="formulario.mensaje" 
          placeholder="Escribe aquí tu consulta..." 
          rows="4" 
          required
        ></textarea>
      </div>

      <button type="submit" class="btn-enviar">Enviar Mensaje</button>
      
      <p v-if="mensajeEnviado" class="alerta-exito">
        ¡Gracias por escribirnos! Te responderemos pronto.
      </p>
      
    </form>
  </div>
</template>

<style scoped>

.container {
  max-width: 500px;
  margin: 30px auto;
  padding: 30px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 5px;
}

.subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 25px;
}

.formulario-contacto {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.campo {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

label {
  font-weight: bold;
  color: #333;
  font-size: 0.9rem;
}

input, textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-family: inherit;
  font-size: 1rem;
}


input:focus, textarea:focus {
  outline: none;
  border-color: #42b983; 
  box-shadow: 0 0 5px rgba(66, 185, 131, 0.3);
}

.btn-enviar {
  margin-top: 10px;
  padding: 12px;
  border: none;
  border-radius: 6px;
  background-color: #42b983;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.btn-enviar:hover {
  background-color: #36996b;
}

.alerta-exito {
  margin-top: 15px;
  padding: 10px;
  background-color: #e8f5e9;
  color: #2e7d32;
  border-radius: 6px;
  text-align: center;
  font-weight: bold;
}
</style>