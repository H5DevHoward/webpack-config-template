const fs = require('fs');

const NAME = process.argv[2]; // component's NAME
let html, js, component;

// parse insert name
function camelToLine() {
    const line = NAME.replace(/([A-Z])/g, '-$1').toLowerCase();
    const tmp = line.split('');

    if (tmp[0] === '-') {
        tmp.shift();

        return tmp.join('');
    }

    return line;
}

// init vue template function
function initVueTemplate() {
    html =
`<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta charset="UTF-8" />
    <meta name="viewport" content="initial-scale=1.0001, minimum-scale=1.0001, maximum-scale=1.0001, user-scalable=no" />
    <meta name="format-detection" content="telephone=no" />
    <title>Demo</title>
</head>

<body>
    <div id="root">
        <app></app>
    </div>

    <script src="main.js"></script>
</body>

</html>`;

    js =
`import 'babel-polyfill';
import Vue from 'vue';
import App from 'COMPONENT/App';

const app = new Vue({
    components: {
        App,
    },
}).$mount('#root');
`;

    const app =
`<template>
    <div class="wrapper">
        <${camelToLine()} />
    </div>
</template>

<script>
import ${NAME} from './${NAME}';

export default {
    components: {
        ${NAME},
    },
};
</script>
`;

    component =
`<template>
    <div class="${NAME}">
        ${NAME}
    </div>
</template>

<script>
export default {

};
</script>

<style lang="css" scoped>
</style>
`;

    if (fs.existsSync('dev/components/App.vue')) {
        console.log('========== App.vue component exist ==========');
    } else {
        fs.writeFileSync('dev/components/App.vue', app);
    }
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

initVueTemplate();

if (fs.existsSync('dev/index.html')) {
    console.log('========== index.html file exist ==========');
} else {
    fs.writeFileSync('dev/index.html', html);
}
if (fs.existsSync('dev/index.js')) {
    console.log('========== index.js file exist ==========');
} else {
    fs.writeFileSync('dev/index.js', js);
}
