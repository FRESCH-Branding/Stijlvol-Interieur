<template>
    <Header :title="pagename"/>
    <Button>          
        <router-link :to="{ name: 'Contact'}"> Contact </router-link>
    </Button>
</template>

<script>
import Header from '../components/Header';
import Button from '../components/Button';

export default {
    data () {
        return {
            pagename: 'Projecten'
        }
    },
    components: {
        Header,
        Button
    }
}

</script>

<style lang="scss">

</style>