<template>
    <div class="container-fluid grid-container">
        <div class="row">
            <div class="col filter-buttons">
                <h3>Filter: <span>Meubels</span> <b>|</b> <span>Interieur</span></h3>
            </div>
        </div>
        <div class="row ">
            <div class="col-lg-4 col-md-12 grid-column">
                <div class="card" v-for="(image, index) in images1" :key="index">
                        <img :src="require(`@/assets/portfolio/${image.filename}`)" class="card-img-top" alt="Image">
                        <div class="card-body">
                            <h3 class="card-title">{{ image.title }}</h3>
                        </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-12 grid-column">
                <div class="card" v-for="(image, index) in images2" :key="index">
                        <img :src="require(`@/assets/portfolio/${image.filename}`)" class="card-img-top" alt="Image">
                        <div class="card-body">
                            <h3 class="card-title">{{ image.title }}</h3>
                        </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-12 grid-column">
                <div class="card" v-for="(image, index) in images3" :key="index">
                        <img :src="require(`@/assets/portfolio/${image.filename}`)" class="card-img-top" alt="Image">
                        <div class="card-body">
                            <h3 class="card-title">{{ image.title }}</h3>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Gallery",

    data() {
        return {
            images1: [
                {
                filename: '-1.jpg',
                title: 'Hangend TV meubel - Boxmeer',
                },

                {
                filename: '-2.jpg',
                title: 'Vergadertafel met Matixpoten - Van Bon',
                },
                
                {
                filename: '-3.jpg',
                title: 'Hang/bartafels met stalen onderstel - TC Topspin',
                },
            ],
            images2: [
                {
                filename: '-4.jpg',
                title: 'Boomstam wastafelblad - Van Bon',
                },

                {
                filename: '-6.jpg',
                title: 'Salontafel met stalen onderstel - Boxmeers Tapijthuis',
                },
                {
                filename: '-5.jpg',
                title: 'Garderobekast met boomstamblad - Boxmeer',
                },
            ],
            images3: [
                {
                filename: '-8.jpg',
                title: 'Rustieke Boomstamtafel met stalen poten - Boxmeer',
                },

                {
                filename: '-7.jpg',
                title: 'Vergadertafel met stalen onderstel -Boxmeers Tapijhuis',
                },
                {
                filename: '-9.jpg',
                title: 'Sierkast met ledverlichting - Boxmeer',
                },
            ],
        };
    },

}
</script>

<style lang="scss" scoped>

.grid-container {
    margin: 10rem auto;
    padding: 0;
}

.card {
    margin:  0 0 40px 0;
    border: none;
}


.filter-buttons {
    display: none;
    span {
        font-family: var(--Playfair);
        font-size: 3rem;
        color: var(--gray);
        font-size: 1.25rem;
        text-align: start;
        width: fit-content;

        &:hover {
            color: var(--Green);
            cursor: pointer;
        }
        
    }
    h3 {
        font-family: var(--Playfair);
        font-size: 1.25rem;
        text-align: start;
        width: fit-content;
    }
}

.card-body {
    border: none;
    padding: 0;

    h3 {
    font-size: 1.25rem;
    text-align: start;
    width: fit-content;
  }
}

.card-img-top {
    border-radius: 0px;
    max-height: 895px;
}

.card-title {
    border-left: 3px solid var(--Green);
    padding: 0 0 0 10px;
    margin-top: 10px;

}
// responsive tot 768 pixels
@media (max-width: 768px) {
    
    .grid-container {
            margin: 2rem auto;
        }
}
</style>