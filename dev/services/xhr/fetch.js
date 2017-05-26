import {findIndex} from 'lodash';

const rootPath = 'http://localhost:8081/api'; // 后端 API 根路径

const xhr = ({
    method = 'get',
    url,
    body = null,
}) => {
    console.log(body);

    return fetch(url, { // rootPath + url
        method,
        // body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
        // credentials: 'same-origin', // to automatically send cookies for the current domain
    }).then(response => {
        console.log(
            // response,
            response.status // => number 100–599
            // response.statusText, // => String
            // response.headers, // => Headers
            // response.url // => String
        );

        return response.json();

        // if (response.ok) {
        //     return response.json().then(json => {
        //         console.log('parsed json', json);
        //         Promise.resolve(json);
        //     })
        //     .catch(error =>
        //         Promise.reject(Error(`Invalid JSON: ${error.message}`))
        //     );
        // }
        //
        // if (response.status === 404) {
        //     return Promise.reject(Error(`Page not found: ${url}`));
        // }
        //
        // return Promise.reject(Error(`HTTP error: ${response.status}`));
    })
    .then(json => {
        const index = findIndex(json, body);

        let userData;

        if (index !== -1) {
            userData = {
                user: json[index],
                token: new Date().getTime(),
            };
            Promise.resolve(userData);
        } else {
            Promise.reject(Error('not found user'));
        }

        // const userData = {
        //     user: json.user,
        //     token: json.token,
        // };
        // Promise.resolve(userData);

        return userData;
    })
    .catch(error =>
        Promise.reject(Error(error.message))
    );
};

export default xhr;
