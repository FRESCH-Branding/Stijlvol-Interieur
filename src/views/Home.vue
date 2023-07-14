<template>
  <div class="container-fluid home-header-container">
    <div class="row home-background align-items-end">
      <div class="col">
      </div>
    </div>
  </div>

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
        <RouterBtn>
          <router-link :to="{ name: 'Projecten'}">
             Projecten 
             <font-awesome-icon class="FA-icon" icon="fa-solid fa-angle-right" />
            </router-link>
        </RouterBtn>
      </div>
      <div class="col-2">
        <RouterBtn>
          <router-link :to="{ name: 'Contact'}">
             Contact 
             <font-awesome-icon class="FA-icon" icon="fa-solid fa-angle-right" />
            </router-link>
        </RouterBtn>
      </div>
    </div>
  </div>

  <div class="container-fluid expertise-container">
    <div class="row row-test justify-content-center">
      <div class="col-4 img-col meubels">
        <img src="../assets/portfolio/38-Stijlvol-Interieur.jpg" class="img-fluid expertise-img" alt="">
        <h3>Meubels</h3>
      </div>

      <div class="col-4 img-col interieur">
        <img src="../assets/portfolio/2-Stijlvol-Interieur.png" class="img-fluid expertise-img" alt="">
        <h3>Interieur</h3>
      </div>
    </div>
  </div>

  <div class="container over-container text-start">
    <div class="row">
      <div class="col-5">
        <h2>Stijlvol Interieur</h2>
        <p>
          Stijlvol interieur is een meubel en interieur bouw onderneming die zich gespecialiseerd heeft in het ontwerpen en produceren van interieur. Hierbij gebruikt Stijlvol Interieur alle soorten hout, al dan niet in combinatie met staal, en enkel duurzame producten. Met het oog op detail en kwaliteit, een flinke dosis vakkennis en het vakmanschap geeft Stijlvol Interieur vorm aan alle dromen en wensen van de klant.
        </p>
        <RouterBtn>
          <router-link :to="{ name: 'Over'}"> 
            Lees meer 
            <font-awesome-icon class="FA-icon" icon="fa-solid fa-angle-right" />
          </router-link>
        </RouterBtn>
      </div>
    </div>
  </div>

<div class="container projecten-container">
  <div class="row justify-content-center">
    <div class="col">
       <flickity  class="flickity" ref="flickity" :options="flickityOptions">
        <div class="carousel-cell">
          <img src="../assets/portfolio/1-Stijlvol-Interieur.png" class="img-fluid" alt="">
        </div>
        <div class="carousel-cell">
          <img src="../assets/portfolio/1-Stijlvol-Interieur.png" class="img-fluid" alt="">
        </div>
        <div class="carousel-cell">
          <img src="../assets/portfolio/1-Stijlvol-Interieur.png" class="img-fluid" alt="">
        </div>
        <div class="carousel-cell">
          <img src="../assets/portfolio/1-Stijlvol-Interieur.png" class="img-fluid" alt="">
        </div>
        <div class="carousel-cell">
          <img src="../assets/portfolio/1-Stijlvol-Interieur.png" class="img-fluid" alt="">
        </div>
      </flickity>
      <button class="carousel-button prev" @click="prev">
        <font-awesome-icon icon="fa-solid fa-angle-left" />
      </button>
      <button class="carousel-button next" @click="next">
        <font-awesome-icon icon="fa-solid fa-angle-right" />
      </button>
    </div>
  </div>
</div>

  <div class="container CtA-container">
    <div class="row justify-content-center">
      <div class="col-8">
        <h2>Benieuwd naar de mogelijkheden?</h2>
        <p>
          Wil je jouw droominterieur werkelijkheid laten worden? Neem vandaag nog contact op met Stijlvol Interieur en laat ons jouw wensen tot leven brengen.
        </p>
        <RouterBtn>
          <router-link :to="{ name: 'Contact'}">
             Contact 
             <font-awesome-icon class="FA-icon" icon="fa-solid fa-angle-right" />
            </router-link>
        </RouterBtn>
      </div>
    </div>
  </div>

</template>

<script>
import RouterBtn from '../components/RouterBtn';
import Flickity from 'vue-flickity'

export default {
  components: {
    Flickity,
    RouterBtn
  },
  data () {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        freeScroll: false,
        autoPlay: 5000,
      }
    }
  },
  methods: {
    next() {
      this.$refs.flickity.next()
    },
    prev() {
      this.$refs.flickity.previous()
    },
  },
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

.quote-container,
.CtA-container,
.projecten-container {
  margin: 10rem auto;

  .cta-button {
    margin: auto;
  }
}

.card {
  border: none;
}

.card-body {
  margin: 0;
  padding: 0;
}

.expertise-container {
  padding: 0;

  h2 {
    border-top: 3px solid var(--Green);
    margin-top: 30px;
  }
}

.img-col {
  padding: 0;

  h3 {
    font-size: 1.25rem;
    margin: 5px 0;
    text-align: start;
    width: fit-content;
  }
}

.meubels {
  padding-right: 20px;
}
.interieur {
  padding-left: 20px;
}

.expertise-img {
  height: 900px;
  width: 650px;
}

.over-container {
  margin: 10rem auto;
}

.carousel-cell {
  width: 100%;
  height: 35vw;
  margin-right: 1rem;
}

.carousel-button {
  border: none;
  margin: 10px 0;
  padding: 0 10px;
  line-height: 2rem;
  position: relative;
  background: transparent;

}
.next {
  border-right: 3px solid var(--Green);
  float: right;
}
.prev {
  border-left: 3px solid var(--Green);
  float: left;
} 


.flickity-page-dots .dot {
    background: #077132;
}

</style>