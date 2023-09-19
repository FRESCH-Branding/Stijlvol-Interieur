<template>
    <div class="container carousel-container">
        <div class="row justify-content-center">
            <div class="col">
                <flickity  class="flickity" ref="flickity" :options="flickityOptions">
                    <div class="carousel-cell" v-for="(image, index) in images" :key="index">
                        <div class="image-container">
                            <img :src="require(`@/assets/projecten/${image.filename}`)" class="img-fluid test" alt="Image">
                        </div>
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
            },
            images: [
                {filename: '3.1-Stijlvol-Interieur.jpg'},
                {filename: '4.1-Stijlvol-Interieur.jpg'},
                {filename: '6.1-Stijlvol-Interieur.jpg'},
                {filename: '8.1-Stijlvol-Interieur.jpg'},
                {filename: '7.1-Stijlvol-Interieur.jpg'},
                {filename: '2.1-Stijlvol-Interieur.jpg'},
            ],
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
.carousel-container {
    margin: 10rem auto;
}

.carousel-cell {
  width: 100%;
  height: 40vw;
  margin-right: 1rem; 
display: flex;
align-items: end;
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



// responsive tot 768 pixels
@media (max-width: 768px) {

    .carousel-cell {
        height: 60vw;
    }
}
</style>