import kinveyEnvironment from '@/config.js';

const makeAuth = (type) => {
    return type === 'Basic'
        ? 'Basic ' + btoa(kinveyEnvironment.appKey + ':' + kinveyEnvironment.appSecret)
        : 'Kinvey ' + sessionStorage.getItem('token');
}

const makeHeaders = (type, httpMethod, data) => {
    const headers = {
        method: httpMethod,
        headers: {
            'Authorization': makeAuth(type),
            'Content-Type': 'application/json'
        }
    };

    if (httpMethod === 'POST' || httpMethod === 'PUT') {
        headers.body = JSON.stringify(data);
    }

    return headers;
}

const get = (endpoint, module, type) => {
    const headers = makeHeaders(type, 'GET');
    const url = `${kinveyEnvironment.baseUrl}${module}/${kinveyEnvironment.appKey}/${endpoint}`;

    return fetch(url, headers);
};

const post = (endpoint, module, type, data) => {
    const headers = makeHeaders(type, 'POST', data);
    const url = `${kinveyEnvironment.baseUrl}${module}/${kinveyEnvironment.appKey}/${endpoint}`;

    return fetch(url, headers);
};

const put = (endpoint, module, type, data) => {
    const headers = makeHeaders(type, 'PUT', data);
    const url = `${kinveyEnvironment.baseUrl}${module}/${kinveyEnvironment.appKey}/${endpoint}`;

    return fetch(url, headers);
};

const del = (endpoint, module, type) => {
    const headers = makeHeaders(type, 'DELETE');
    const url = `${kinveyEnvironment.baseUrl}${module}/${kinveyEnvironment.appKey}/${endpoint}`;

    return fetch(url, headers);
};

export default {
    get,
    post,
    del,
    put,
}
