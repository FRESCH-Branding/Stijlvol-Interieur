<template>
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid nav-container">
      <router-link to="/"> 
        <img src="../assets/logo/Logo-kleur.png" alt="Stijlvol Interieur Logo" class="navbar-brand nav-logo">  
      </router-link>

    <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <font-awesome-icon icon="fa-regular fa-compass" size="xl"/>
      <span class="navbar-toggler-icon"></span>
    </button> -->
    
    <!-- <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
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
    </div> -->

    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <font-awesome-icon icon="fa-regular fa-compass" size="xl"/>
      <!-- <span class="navbar-toggler-icon"></span> -->
    </button>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
     
      <div class="offcanvas-header">
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      <div class="offcanvas-body justify-content-end">
        <ul class="navbar-nav">
          <li class="nav-item" data-bs-dismiss="offcanvas">
            <router-link to="/" class="nav-link"> Home </router-link>
          </li>
          <li class="nav-item" data-bs-dismiss="offcanvas">
            <router-link :to="{ name: 'Over'}" class="nav-link"> Over </router-link>
          </li>
          <li class="nav-item" data-bs-dismiss="offcanvas">
            <router-link :to="{ name: 'Projecten'}" class="nav-link"> Projecten </router-link>
          </li>        
          <li class="nav-item" data-bs-dismiss="offcanvas">
            <router-link :to="{ name: 'Contact'}" class="nav-link"> Contact </router-link>
          </li>
        </ul>
      </div>
      
    </div>

  </div>
</nav>


</template>

<script>
export default {
    name: "Navbar",
    methods: {
        onClick() {
          console.log('test')
        },
    },

}
</script>

<style lang="scss">
.navbar {
  margin: 0;
  padding: 0;
  height: 100px;
}

.navbar-toggler {
  border: none ;
  padding: 0;
  
  &:focus {
    border: none;
    box-shadow: none;
  }
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

// responsive tot 768 pixels
@media (max-width: 992px) {  

  .offcanvas-header {
    justify-content: flex-end;
    height: 60px;
    margin: 20px 40px;
    padding: 0;
  }

  .offcanvas-body {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center !important;

    .nav-link {
      color: var(--Gray);
      margin: 0;
      font-size: var(--Titel);
      font-family: var(--PlayfairB); 

      &:hover {
        color: var(--Green);
      }
    }
  }

}
</style>