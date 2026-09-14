<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="grid-contenedor">
    <article v-for="item in items" :key="item.id" class="tarjeta">
      
      <div class="imagen-placeholder">
        <span class="emoji">{{ item.imagen }}</span>
      </div>
      
      <div class="contenido">
        <span class="etiqueta" v-if="item.etiqueta">{{ item.etiqueta }}</span>
        <h3>{{ item.titulo }}</h3>
        <p>{{ item.descripcion }}</p>
      </div>

    </article>
  </div>
</template>

<style scoped>
.grid-contenedor {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  padding: 1rem 0;
}

.tarjeta {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.2s ease;
  border: 1px solid #eee;
}

.tarjeta:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.1);
}

.imagen-placeholder {
  height: 160px;
  background-color: #f0f4f8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
}

.contenido {
  padding: 1.5rem;
}

.etiqueta {
  display: inline-block;
  background-color: #e3f2fd;
  color: #1976d2;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  margin-bottom: 0.5rem;
}

h3 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
}

p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
}
</style>