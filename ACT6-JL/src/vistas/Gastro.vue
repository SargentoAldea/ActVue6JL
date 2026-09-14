<script setup>
import { ref } from 'vue'
import moldePiola from '../components/moldePiola.vue'

const platos = ref([
  { 
    id: 1, 
    titulo: 'Curanto al Hoyo', 
    descripcion: 'Preparación ancestral que mezcla mariscos, carnes y papas cocinados bajo tierra con piedras calientes.', 
    imagen: '🥘', 
    etiqueta: 'Zona Sur' 
  },
  { 
    id: 2, 
    titulo: 'Pastel de Choclo', 
    descripcion: 'Clásico del campo preparado con pasta de maíz tierno, pino de carne, pollo y aceitunas.', 
    imagen: '🌽', 
    etiqueta: 'Zona Central' 
  },
  { 
    id: 3, 
    titulo: 'Empanadas de Pino', 
    descripcion: 'Masa horneada rellena de carne picada, cebolla, huevo duro y especias. Imperdible.', 
    imagen: '🥟', 
    etiqueta: 'Tradicional' 
  }
])
</script>

<template>
  <div class="vista-contenedor">
    <header class="cabecera">
      <h1>Gastronomía Local</h1>
      <p>Descubre los sabores que definen nuestra identidad culinaria.</p>
    </header>
    <moldePiola :items="platos" />
  </div>
</template>

<style scoped>
.vista-contenedor {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
}
.cabecera {
  margin-bottom: 3rem;
  text-align: center;
}
.cabecera h1 { color: #2c3e50; font-size: 2.5rem; margin-bottom: 0.5rem; }
.cabecera p { color: #666; font-size: 1.2rem; }
</style>