<template>
    <div class="wrapper">
        <router-view />
    </div>
</template>

<script>
// import Loading from './Loading';
// import VuexTest from './VuexTest';
import RouterView from './RouterView';

export default {
    components: {
        // VuexTest,
        RouterView,
    },
};
</script>

<style lang="scss">
html {
    overflow-x: hidden;
}

body {
    margin: 0;
}
</style>
