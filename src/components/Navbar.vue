<template>
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid nav-container">
      <router-link to="/"> 
        <img src="../assets/logo/Logo-kleur.png" alt="Stijlvol Interieur Logo" class="navbar-brand nav-logo">  
      </router-link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <!-- <font-awesome-icon icon="fa-regular fa-compass" size="xl"/> -->
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link"> Home </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Over'}" class="nav-link"> Over </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Projecten'}" class="nav-link"> Projecten </router-link>
        </li>        
        <li class="nav-item">
          <router-link :to="{ name: 'Contact'}" class="nav-link"> Contact </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: "Navbar"

}
</script>

<style lang="scss">
.navbar {
  margin: 0;
  padding: 0;
  height: 100px;
}

.navbar-toggler {
  border: none;
}

.nav-container {
  margin: 20px 40px;
  padding: 0;
}

.nav-logo {
  height: 60px;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin: 0;
  padding: 0;
}
.nav-link {
  font-family: var(--Medium);
  font-size: 1.3rem;
  padding: 0;
  margin: 0 0 0 30px;
  color: var(--Gray);

  &:hover {
    color: var(--Green);
  } 

}
</style>