<template>
  <footer>
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-12 col-md-6 logo-col text-start">
          <img src="../assets/logo/Logo-payoff-wit.png" alt="Stijlvol Interieur Logo" class="img-fluid footer-logo">  
        </div>
        <div class="col-12 col-md-6">
          <div class="row">
            <div class="col-12 col-md-4 menu-col">
              <div class="footer-headers">Navigatie</div>
              <ul class="footer-menu">
                <li class="footer-item">
                  <router-link to="/" class="footer-link"> Home </router-link>
                </li>
                <li class="footer-item">
                  <router-link :to="{ name: 'Over'}" class="footer-link"> Over </router-link>
                </li>
                <li class="footer-item">
                  <router-link :to="{ name: 'Projecten'}" class="footer-link"> Projecten </router-link>
                </li>        
                <li class="footer-item">
                  <router-link :to="{ name: 'Contact'}" class="footer-link"> Contact </router-link>
                </li>
              </ul>
            </div>
            <div class="col-12 col-md-4 menu-col">
              <div class="footer-headers">Contact</div>
              <ul class="footer-menu">
                <li class="footer-item">
                  <a 
                  class="footer-link"
                  href="tel:+31630275956" 
                  title="Telefoon" 
                  target="_blank">
                  06 30 27 59 56
                </a>
                </li>
                <li class="footer-item">
                  <a
                  class="footer-link"
                  href="mailto:info@stijlvolinterieur.nl"
                  title="E-mail"
                  target="_blank"
                >
                  info@stijlvolinterieur.nl
                </a>
                </li>
              </ul>
            </div>
            <div class="col-12 col-md-4 menu-col">
              <div class="footer-headers">Volgen</div>
              <ul class="footer-menu">
                <li class="footer-item">
                <a 
                class="footer-link"
                href="https://www.instagram.com/stijlvol_interieur_/"
                target="_blank"
                >
                  Instagram
                </a>  
                </li>
                <li class="footer-item">
                  <a 
                  class="footer-link"
                  href="https://www.facebook.com/profile.php?id=100081932402018"
                  target="_blank"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row copywrite-row text-start">
        <div class="col-12 col-md  copywrite-col">          
          <a href="https://freschbranding.nl/" target="_blank"
              >FRESCH BRANDING 
          </a>
            | alle rechten voorbehouden ©
        </div>
        <div class="col-12 col-md copywrite-col text-end">          
          <router-link :to="{ name: ''}" class="footer-link"> Privacy </router-link>
            | 
          <router-link :to="{ name: ''}" class="footer-link"> Algemeen </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
    name: "Footer"

}
</script>

<style lang="scss">
footer {
  background-color: var(--Gray);
  background-image: url(../assets/logo/footer-background.svg);
  background-size: cover;
  background-position: center;
  margin: 40px;
}

.footer-logo {
  margin: 40px;
  width: 15vw;
  display: flex;
}

.footer-headers {
  color: var(--White);
  font-size: 1.5rem;
  font-family: var(--Medium);
  text-align: left;
  margin-bottom: 10px;
}

.footer-menu,
.footer-item {
  margin: 0;
  padding: 0;
  text-align: left;
}
.footer-link {
  padding: 0;
  margin: 1px;
  font-family: var(--Light);
  font-size: var(--Body);
  color: var(--White);
  text-decoration: none;

  &:hover {
    color: var(--Green);
  } 

}

.copywrite-row,
.copywrite-col {
  color: var(--White);
  font-size: 0.75rem;
  text-transform: uppercase;
  padding: 5px 15px;
}

.copywrite-col a {
  color: var(--White);
  font-size: 0.75rem;
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    color: var(--Green);
  }
}

// responsive tot 768 pixels
@media (max-width: 768px) {

  .footer-logo {
    width: 50vw;
    margin: 40px auto;
  }

  .footer-headers {
    text-align: center;
    margin: 10px 0;
  }

  .footer-menu,
  .footer-item {
    text-align: center;
  }

  .copywrite-row {
    padding-top: 40px;
  }

  .copywrite-col {
    text-align: center !important;
  }

}
</style>