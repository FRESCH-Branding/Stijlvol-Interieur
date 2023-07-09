<template>
    <Header :title="pagename"/>
</template>

<script>
import Header from '../components/Header';

export default {
    data () {
        return {
            pagename: 'Projecten'
        }
    },
    components: {
        Header,
    }
}

</script>

<style lang="scss">

</style>