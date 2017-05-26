<template>
    <div>logout</div>
</template>
<script>
import authService from '@/services/authService';

export default {
    init() {
        // authService.logout().then(() => {
        //     this.$store.dispatch('logout');
        //     this.$router.replace('/auth/login');
        // });
        this.$store.dispatch('logout');
        this.$router.replace('/auth/login');
    },
    create() {
        console.log('logout');
    },
};
</script>
