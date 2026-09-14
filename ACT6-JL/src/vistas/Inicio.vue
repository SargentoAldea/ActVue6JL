<template>
  <main class="inicio-container">
    
    <header class="hero">
      <h1>TurismoChillán</h1>
      <p>El hogar del Libertador Bernardo O`Higgins</p>
    </header>


    <section class="historiaPiola-section">
      <article class="historiaPiola-content">
        <h2>La Historia de Chillan</h2>
        <p>
            equisde
        </p>
        <p>
            equisde
        </p>
      </article>

      <div class="imagen-placeholder">
        <img src="../assets/NevadoPiola.jpg" alt="Nevados de Chillán" />
      </div>
    </section>

  </main>
</template>

<style scoped>

.inicio-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  text-align: center;
  margin-bottom: 4rem;
}

.hero h1 {
  font-size: 2.5rem;
  color: #2c3e50;
}

.historia-section {
  display: flex;
  gap: 2rem;
  align-items: center;
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
}

.historia-content {
  flex: 1;
}

.historia-content h2 {
  color: #42b883; 
  margin-bottom: 1rem;
}

.imagen-placeholder img {
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
</style>