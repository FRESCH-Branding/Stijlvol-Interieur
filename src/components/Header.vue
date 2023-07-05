<template>
    <div class="container-fluid header-container ">
        <div class="row header-row align-items-end justify-content-center">
            <div v-show="$route.path==='/over'" class="col-12 slogan">
              Uit hout gesneden
              <br/>
              vakmanschap!
            </div>
            <div class="col-8 pagina-titel">
                {{ title }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    props: ['title'],
    methods: {

    }
}
</script>

<style lang="scss">
.header-container {
    margin: 0;
    padding: 0;
}

.header-row {
    margin: 0 40px 40px 40px;
    min-height: 250px;
    background-image: url("../assets/Header.jpg");
    background-position: center;
}

.pagina-titel {
    background-color: var(--White);
    color: var(--Gray);
    font-size: var(--Titel);
    font-family: var(--PlayfairB);
    line-height: 100px;
}

.slogan {
    display: block;
    transform: skew(0deg, -5deg);
    padding: 15vh;
    color: var(--White);
    
    font-family: var(--Semi);
    font-size: var(--Kopje);
    margin: 100px 0;
    padding: 0;
}

</style>