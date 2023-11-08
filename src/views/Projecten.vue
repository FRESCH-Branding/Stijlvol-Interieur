<template>
    <Header :title="pagename"/>

    <div class="body">

        <Gallery/>

    </div>

    <div class="container CtA-container text-center">
        <div class="row justify-content-center">
            <div class="col-10 col-md-8">
                <h2>Benieuwd naar de mogelijkheden?</h2>
                <p>
                Wilt u uw droominterieur werkelijkheid laten worden? Neem vandaag nog contact op met Stijlvol Interieur en laat ons jouw wensen tot leven brengen.
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
import Header from '../components/Header';
import RouterBtn from '../components/RouterBtn';
import Gallery from '../components/Gallery';

export default {
    data () {
        return {
            pagename: 'Projecten',
        }
    },
    components: {
        RouterBtn,
        Header,
        Gallery
    }
}

</script>

<style lang="scss" scoped>
.CtA-container {
  margin: 10rem auto;

  .cta-button {
    margin: auto;
  }
}

// responsive tot 768 pixels
@media (max-width: 768px) {
    h2 {
        font-size: 2.3rem;
    }
}
</style>