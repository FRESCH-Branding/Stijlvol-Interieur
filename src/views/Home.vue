<template>
  <div class="container-fluid home-header-container">
    <div class="row home-background align-items-end">
      <div class="col">
      </div>
    </div>
  </div>

    <section>
      <div class="container quote-container">
        <div class="row justify-content-center align-items-center">
          <div class="col">
            <div class="card">
              <div class="card-body">

              <div>
                <img src="../assets/logo/icon.svg" alt="Stijlvol Interieur Icon" width="60">
              </div>

              <figure>
                  <p>
                      <span class="lead">
                        <h2 class="m-3">Uit hout gesneden vakmanschap</h2>
                        Kwaliteit voor elke ruimte, persoonlijk op maat gemaakt tot in detail.
                        <br>
                        Uw wens is onze missie!
                      </span>
                  </p>
              </figure>

              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
        <div class="col-2">
          <div class="cta-button">
            <router-link :to="{ name: 'Projecten'}"> Projecten <font-awesome-icon class="FA-icon" icon="fa-solid fa-angle-right" /></router-link>
          </div>
        </div>
        <div class="col-2">
          <div class="cta-button">
            <router-link :to="{ name: 'Contact'}"> Contact <font-awesome-icon class="FA-icon" icon="fa-solid fa-angle-right" /></router-link>
          </div>
        </div>
      </div>
      </div>
    </section>


</template>

<script>

export default {
  components: {
    }
}
</script>

<style lang="scss" scoped>
.home-header-container {
  margin: 0;
  padding: 0;
}

.home-background {
  margin: 0 40px 40px;
  padding: 0;
  background-image: url(../assets/portfolio/8-Stijlvol-Interieur.jpg);
  background-position: bottom;
  background-size: cover;

  width: calc(100vw - 80px);
  height: calc(100vh - 140px);
}

.quote-container {
  padding: 3rem;
}

.card {
  border: none;
}

.card-body {
  margin: 0;
  padding: 0;
}

.cta-button {
  width: fit-content;
  padding: 0 10px;
  margin: auto;
  font-family: var(--Regular);
  font-size: var(--Body);
  border-left: 3px solid var(--Green);
  
  a {
    text-decoration: none;
    color: var(--Gray);
    line-height: 20px;

    &:hover {
      svg {
        padding-left: 15px;
      }
      font-family: var(--Semi);
    }
  }
}

.FA-icon {
  vertical-align: middle;
  padding: 0 6px;
}

</style>