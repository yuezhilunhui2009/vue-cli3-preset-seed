<template>
    <div>page_simple</div>
</template>

<script>
export default {
    name: "",
    components: {},
    props: {},
    data () {
    return {};
    },
    computed: {},
    watch: {},
    methods: {},
    beforeCreate () {
        // now --> data observer --> event / watcher
    },
    created () {
        // data observer --> event / watcher --> now --> compile template
    },
    beforeMount () {
        // compile template --> now --> mounted
    },
    mounted () {
        // vm.$el ready
    },
    beforeUpdate () {
        // when data change
    },
    updated () {
        //
    },
    beforeDestroy () {
        //
    },
    destroyed () {
        //
    }
};
</script>

<style>
/* 全局样式 */
@import '~normalize.css/normalize.css'
</style>

<style lang="less" scoped>
/* 局部样式 */
</style>
