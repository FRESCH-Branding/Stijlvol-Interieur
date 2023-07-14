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
                title: 'Image name',
                },

                {
                filename: '-2.jpg',
                title: 'Image name',
                },
                
                {
                filename: '-3.jpg',
                title: 'Image name',
                },
            ],
            images2: [
                {
                filename: '-4.jpg',
                title: 'Image name',
                },

                {
                filename: '-6.jpg',
                title: 'Image name',
                },
                {
                filename: '-5.jpg',
                title: 'Image name',
                },
            ],
            images3: [
                {
                filename: '-8.jpg',
                title: 'Image name',
                },

                {
                filename: '-7.jpg',
                title: 'Image name',
                },
                {
                filename: '-9.jpg',
                title: 'Image name',
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
</style>