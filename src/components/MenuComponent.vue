<template>

    <nav class="navbar navbar-dark">
      <a class="navbar-brand" href="#">Mi sitio web</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/pagar">Pagar</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/pagos">Todos los pagos</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/">Inicio</router-link>
        </li>
      </ul>
    </nav>
</template>
  
  <script>
  export default {
    name: 'MyNavbar'
  }
  </script>