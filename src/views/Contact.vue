<template>
    <Header :title="pagename"/>
</template>

<script>
import Header from '../components/Header';

export default {
    data () {
        return {
            pagename: 'Contact'
        }
    },
    components: {
        Header,
    }
}

</script>

<style lang="scss">

</style>