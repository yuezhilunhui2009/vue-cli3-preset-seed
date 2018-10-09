<template>
    <div>CompsA</div>
</template>

<script>
export default {
    name: "",
    components: {},
    props: {},
    data () {
        return {}
    },
    computed: {},
    watch: {},
    methods: {},
    beforeCreate () {
        // [server / client] now --> data observer --> event / watcher ready
    },
    created () {
        // [server / client] event / watcher ready --> now --> compile template
    },
    beforeMount () {
        // [client] compile template --> now --> mounted
    },
    mounted () {
        // [client] DOM ready
    },
    beforeUpdate () {
        // [client] mounted --> when data change --> now --> virtual DOM updated
    },
    updated () {
        // [client] virtual DOM updated --> now
    },
    beforeDestroy () {
        // [client] mounted --> now --> teardown event / watcher ready / child components
    },
    destroyed () {
        // [client] teardown event / watcher ready / child components --> now
    }
}
</script>

<style lang="less" scoped>
</style>
