<template>
    <Header :title="pagename"/>

<div class="body">
        

    <div class="container intro-container text-center">
        <div class="row justify-content-center">
            <div class="col-12 col-md-8">
                <p>
                    Stijlvol interieur is een meubel en interieur bouw onderneming die zich gespecialiseerd heeft in het ontwerpen en produceren van interieur. 
                    Hierbij gebruikt Stijlvol Interieur alle soorten hout, al dan niet in combinatie met staal, en enkel duurzame producten. Met het oog op detail en kwaliteit, 
                    een flinke dosis vakkennis en het vakmanschap geeft Stijlvol Interieur vorm aan alle dromen en wensen van de klant.
                </p>
                <p>
                    Met een persoonlijke aanpak en een op maat gemaakt ontwerp verzorgt Stijlvol Interieur het gehele proces, van ontwerp, productie tot aan de installatie. 
                    Pas wanneer de wensen van de klant tot in de detail zijn afgewerkt en de wensen zijn voldaan is de klus klaar.
                </p>
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
                            Bij Stijlvol Interieur zijn we toegewijd aan het creëren van unieke, duurzame en stijlvolle interieurs die voldoen aan de specifieke wensen en behoeften van onze klanten. We maken gebruik van hoogwaardige materialen en ons vakmanschap om tijdloze stukken te creëren die een leven lang meegaan. Onze persoonlijke aanpak en aandacht voor detail zorgen voor een naadloze en plezierige ervaring voor onze klanten, van begin tot eind.
                        </p>
                        
                        <p>
                            Wij geloven dat een interieur niet alleen een ruimte is om in te wonen of werken, maar een reflectie van iemands persoonlijkheid en levensstijl. We streven ernaar om onze klanten te helpen bij het creëren van een unieke en comfortabele omgeving die zowel functioneel als esthetisch aantrekkelijk is. Onze visie is om onze klanten te blijven verrassen met onze creativiteit en expertise, terwijl we blijven innoveren en gebruik maken van duurzame materialen.
                        </p>
                        <RouterBtn>
                            <router-link :to="{ name: 'Contact'}">
                                Contact 
                                <font-awesome-icon class="FA-icon" icon="fa-solid fa-angle-right" />
                            </router-link>
                        </RouterBtn>
                    </div>
                    <div class="col-12 col-md-4 over-column align-self-end">
                        <img src="../assets/daan-portret-2.jpg" class="img-fluid over-portret" alt="">
                        <!-- <img src="../assets/logo/icon.svg" class="img-fluid over-icoon" alt=""> -->
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
                    Ontdek onze indrukwekkende collectie aan voorgaande meesterwerken en laat je inspireren door de prachtige interieurs die we hebben gecreëerd.
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