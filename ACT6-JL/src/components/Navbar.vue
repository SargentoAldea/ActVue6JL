<template>
  <nav class="navbar">
    <ul class="nav-links">
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/Gastronomia">Gastronomia</router-link></li>
      <li><router-link to="/Turimo">Turismo</router-link></li>
      <li><router-link to="/Contacto">Contacto</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #2c3e50;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;
}

.nav-links a {
  color: #ecf0f1;
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
}

.nav-links a:hover {
  color: #42b983;
}

.nav-links a.router-link-active {
  color: #42b983;
  border-bottom: 2px solid #42b983;
}
</style>