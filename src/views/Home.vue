<template>
  <div class="container-fluid home-header-container">
    <div class="row home-background align-items-end">
      <div class="col go-down-button text-end" @click="scroll">
          <font-awesome-icon icon="fa-solid fa-angles-down" class="go-down-icon"/>
      </div>
    </div>
  </div>

  <div class="container quote-container text-center" id="quote">
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
      <div class="col-5 col-md-2">
        <RouterBtn>
          <router-link :to="{ name: 'Projecten'}">
             Projecten 
             <font-awesome-icon class="FA-icon" icon="fa-solid fa-angle-right" />
            </router-link>
        </RouterBtn>
      </div>
      <div class="col-5 col-md-2">
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
    <div class="row expertise-row justify-content-center">
      <div class="col-10 col-md-4 img-col meubels">
        <img src="../assets/portfolio/38-Stijlvol-Interieur.jpg" class="img-fluid expertise-img" alt="">
        <router-link :to="{ name: 'Projecten'}" class="expertise-link"> 
          <h3>Meubels</h3>
        </router-link>
      </div>

      <div class="col-10 col-md-4 img-col interieur">
        <img src="../assets/portfolio/2-Stijlvol-Interieur.png" class="img-fluid expertise-img" alt="">
        <router-link :to="{ name: 'Projecten'}" class="expertise-link"> 
          <h3>Interieur</h3>
        </router-link>
      </div>
    </div>
  </div>

  <div class="container over-container text-start">
    <div class="row over-row">
      <div class="col-10 col-md-5 over-col">
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

  <Carousel/>

  <div class="container CtA-container text-center">
    <div class="row justify-content-center">
      <div class="col-10 col-md-8 Cta-header">
        <h2>Benieuwd naar de mogelijkheden?</h2>
        <p>
          Wil je jouw droominterieur werkelijkheid laten worden? Neem vandaag nog contact op met Stijlvol Interieur en laat ons jouw wensen tot leven brengen.
        </p>
        <RouterBtn>
          <router-link :to="{ name: 'Contact'}" class="expertise-link">
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
import Carousel from '../components/Carousel';

export default {
  components: {
    Carousel,
    RouterBtn
  },
  data () {
    return {
    }
  },
  methods: {
  scroll() {
    const element = document.getElementById("quote");
    element.scrollIntoView({ behavior: "smooth", block: "center" });
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

.go-down-button {
  color: var(--White);
  margin: 0;
  padding: 0;
  cursor: pointer;

  .go-down-icon{
    height: 20px;
    width: 20px;
    border: 3px solid white;
    border-radius: 30px;
    padding: 10px;
    margin: 20px;
  }
}


.quote-container,
.CtA-container {
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

.expertise-row {
  margin: 0;
}

.img-col {
  padding: 0;

  h3 {
    border-left: 3px solid var(--Green);
    padding-left: 10px;
    margin: 10px 0;
    font-size: 1.25rem;
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
  height: 88vh;
  width: 650px;
}

.expertise-link {
  text-decoration: none;
  color: var(--Gray);

  &:hover {
    color: var(--Green);
  }
}

.over-container {
  margin: 10rem auto;
}

.over-row {
  justify-content: start;
}

.over-col {
  padding: 0 12px;

}

// responsive tot 768 pixels
@media (max-width: 768px) {
  .home-background {
    height: calc(95vh - 140px);
  }

  .go-down-button {
    text-align: center !important;

  .go-down-icon{
    height: 15px;
    width: 15px;
    border: 2px solid white;
    border-radius: 30px;
    padding: 10px;
    margin: 20px;
  }
}

  .meubels {
    padding: 10px 0;
  }
  .interieur {
    padding: 10px 0;
  }

  .expertise-img {
    height: auto;
    width: 650px;
  }
  
  h2 {
    font-size: 2.3rem;
  }
  
  .over-row {
    justify-content: center;
  } 

  .over-col {
    padding: 0;
  }
}
  

</style>