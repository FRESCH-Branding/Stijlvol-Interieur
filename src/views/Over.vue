<template>
    <Header :title="pagename"/>

<div class="body">
        

    <div class="container intro-container text-center">
        <div class="row justify-content-center">
            <div class="col-12 col-md-8">
                <p>
                    Welkom bij Stijlvol Interieur, waar vakmanschap, duurzaamheid en een persoonlijke aanpak samenkomen om uw interieurdromen werkelijkheid te maken. 
                    Mijn naam is Daan van den Bosch, de trotse eigenaar van Stijlvol Interieur.
                </p>
                <p>
                    Bij Stijlvol Interieur leggen wij de nadruk op vakmanschap en maatwerk. 
                    Wij werken met verschillende soorten hout, al dan niet in combinatie met staal en enkel met duurzame materialen. 
                    Met het oog op detail en kwaliteit en een flinke dosis vakkennis geeft Stijlvol Interieur vorm aan al uw dromen en wensen.
                    Onze specialisatie is het ontwerpen en produceren van op maat gemaakte tafels, kasten, banken en nog veel meer. 
                </p>
                <p>
                    Met een persoonlijke aanpak en een op maat gemaakt ontwerp verzorgd Stijlvol Interieur het gehele proces. 
                    Van een kennismakingsgesprek waar uw wensen vorm gaan krijgen, het tekenen van een ontwerp tot aan de productie en installatie! 
                    Pas wanneer u tevreden bent en al uw wensen tot in de kleinste details zijn vervuld, zijn wij dat ook! 
                    Uw interieur is onze passie, en we nodigen u van harte uit om contact met ons op te nemen via onze contactpagina. 
                </p>
                <RouterBtn class="m-auto">
                        <router-link :to="{ name: 'Contact'}">
                                Laten we samen uw droominterieur realiseren!  
                                <font-awesome-icon class="FA-icon" icon="fa-solid fa-angle-right" />
                            </router-link>
                        </RouterBtn>
            </div>
        </div>
    </div>

    <div class="container-fluid missie-container text-start">
        <div class="row missie-row justify-content-center">
            <div class="col-12 col-md-8">
                <div class="row justify-content-between">
                    <div class="col-12 col-md-6">
                        <h2>Missie & Visie</h2>
                        <p>
                            Bij Stijlvol Interieur hebben we het doel om unieke, duurzame maar vooral Stijlvolle interieurs te creëren. 
                            Het is voor ons belangrijk dat we voldoen aan de wensen en behoefte van onze klanten. 
                            We maken gebruik van hoogwaardige materialen waardoor we altijd de beste kwaliteit kunnen leveren. 
                            Wat Stijlvol Interieur uniek maakt is zijn persoonlijke aanpak, aandacht voor detail en het zorgen voor een plezierige ervaring van onze klanten. 
                        </p>
                        
                        <p>
                            Interieur is natuurlijk voor iedereen anders. 
                            Iemands interieur is niet alleen een ruimte om in te leven of in te werken maar dit is een stukje van iemand zijn/haar persoonlijkheid. 
                            We streven ernaar om onze klanten te helpen bij het creëren van een unieke en comfortabel omgeving waar de wensen en behoefte altijd centraal zullen staan. 
                            De visie van Stijlvol Interieur is om klanten te blijven verassen met onze creativiteit en professionaliteit!                        
                        </p>
                        <RouterBtn>
                            <router-link :to="{ name: 'Contact'}">
                                Contact 
                                <font-awesome-icon class="FA-icon" icon="fa-solid fa-angle-right" />
                            </router-link>
                        </RouterBtn>
                    </div>
                    <div class="col-12 col-md-4 over-column align-self-end">
                        <img src="../assets/afbeeldingen/Daan-Stijlvol-Interieur.jpg" class="img-fluid over-portret" alt="">
                        <!-- <img src="../assets/logo/icon.svg" class="img-fluid over-icoon" alt=""> -->
                        <p>
                            - Daan van den Bosch
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>


    <div class="container CtA-container text-center">
        <div class="row justify-content-center">
            <div class="col-10 col-md-8 Cta-header">
                <h2>Benieuwd naar de mogelijkheden?</h2>
                <p>
                    Ontdek onze indrukwekkende collectie aan voorgaande meesterwerken en laat u inspireren door de prachtige interieurs die we hebben gecreëerd.
                </p>
                <RouterBtn>
                    <router-link :to="{ name: 'Projecten'}">
                        Projecten 
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


export default {
    data () {
        return {
            pagename: 'Stijlvol Interieur'
        }
    },
    components: {
        Header,
        RouterBtn,
    }
}


</script>

<style lang="scss" scoped>

.intro-container {
    margin: 5rem auto;
}

.missie-container {
    margin: 10rem auto;
    padding: 0;
}

.missie-row {
    margin: 0;
    padding: 0;

    .col-6,
    .col-4 {
        margin: 0;
        padding: 0;
    }
}

.over-portret {
    padding: 20px 20px 0 0 ;
    background-image: url(../assets/logo/icon.svg);
    background-repeat: no-repeat;
}

.over-column {
    p {
        font-family: var(--PlayfairB);
        font-size: .75rem;
    }
}

.CtA-container {
    margin: 10rem auto;
    .cta-button {
        margin: auto;
    }
    // position: relative;
}

// responsive tot 768 pixels
@media (max-width: 768px) {
    
    h2 {
        font-size: 2.3rem;
    }
    
    .missie-container,
    .intro-container {
        text-align: center !important;
        margin: 2rem auto;
    }

    .over-column {
        margin-top: 5rem;

    }
    .cta-button {
        margin: auto;
    }
}

</style>