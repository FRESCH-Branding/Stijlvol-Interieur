<template>
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
</template>

<script>
import Flickity from 'vue-flickity'

export default {
    name: "Carousel",

    components: {
        Flickity,
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

<style lang="scss">
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