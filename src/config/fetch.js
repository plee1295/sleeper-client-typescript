"use strict";
exports.__esModule = true;
var fetch = require('node-fetch');
function fetchData(url) {
    return fetch(url)
        .then(function (res) { return res.json(); })
        .then(function (data) { return data; });
}
exports["default"] = fetchData;
