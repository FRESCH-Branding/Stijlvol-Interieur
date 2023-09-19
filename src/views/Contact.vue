<template>
    <Header :title="pagename"/>

    <div class="body">   

        <div class="container quote-container text-center">
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
                                        <h2 class="m-3">Vragen over het interieur van je dromen?</h2>
                                            Jouw droominterieur is binnen handbereik, dus aarzel niet!
                                            <br>
                                            Neem contact op en zie hoe wij jouw dromen tot leven wekken.
                                    </span>
                                </p>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-10 col-md-3 contact-button">
                    <RouterBtn>
                        <a href="tel:+31630275956">
                            06 - 30 27 59 56
                        </a>
                    </RouterBtn>
                </div>
                <div class="col-10 col-md-3 contact-button">
                    <RouterBtn>
                        <a href="mailto:info@stijlvolinterieur.nl" target="_blank">
                            info@stijlvolinterieur.nl
                        </a>
                        <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" id="icon" />
                    </RouterBtn>
                </div>
            </div>  
        </div>

        <div class="container-fluid form-container">
            <div class="row form-row justify-content-center">
                <div class="col-12 col-md-8 form-col">
                    <h2>Stuur ons een berichtje</h2>
                    <Mail/>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Header from '../components/Header';
import Mail from '../components/Mail';
import RouterBtn from '../components/RouterBtn';


export default {
    data () {
        return {
            pagename: 'Contact'
        }
    },
    components: {
        Header,
        RouterBtn,
        Mail
    }
}

</script>

<style lang="scss" scoped>
.form-container,
.quote-container {
    margin: 10rem auto;
    padding: 0;
}

.card {
  border: none;
}

.card-body {
  margin: 0;
  padding: 0;
}

.cta-button {
    padding: 5px 15px;
    margin: auto;
    display: flex;
    align-items: center;
    a {
        font-size: 1.25rem;
    }
}

#icon {
    margin: 0 7px;
}

.form-row, 
.form-col {
    margin: 0;
    padding: 0;

    h2 {
        font-family: var(--Playfair);
        font-size: 2rem;
        color: var(--Gray);
    }
}

// responsive tot 768 pixels
@media (max-width: 768px) {

    h2 {
        font-size: 2.3rem;
    }

    .quote-container,
    .form-container {
        margin: 5rem auto;
    }
    
    .contact-button {
        margin: 0.5rem 0;
    }

}
</style>