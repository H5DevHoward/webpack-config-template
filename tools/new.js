const fs = require('fs');

const NAME = process.argv[2]; // component's NAME

function generateVueComponent() {
    const component =
`<template>
    <div class="${NAME}">
        ${NAME}
    </div>
</template>

<script>
export default {

};
</script>

<style scoped>
</style>`;

    if (fs.existsSync(`dev/components/${NAME}.vue`)) {
        console.log(`========== ${NAME}.vue component exist ==========`);
    } else {
        fs.writeFileSync(`dev/components/${NAME}.vue`, component);
    }
}

if (fs.existsSync('dev/components')) {
    console.log('========== components folder exist ==========');
} else {
    fs.mkdirSync('dev/components');
}

generateVueComponent();
