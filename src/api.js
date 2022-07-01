//imports
import axios from 'axios';
import { stats, errors, response } from "./log.js";
import { parseString } from 'xml2js';

export class client{
    constructor(){};

    get_url(url, verboose){
        if (verboose === true){
            axios
                .get(url)
                .then(res => {
                    console.log(stats(`statusCode: ${res.status}`));
                    console.log(response(res));
                })
                .catch(error => {
                    let data = Object.values(error.response).includes('data');
                    data===true ? console.log(errors(error.response.data)) : console.log(errors('No data to log'));
                    console.log(errors(error.response.status));
                    console.log(errors(error.response.headers));
                });
        } else{
            axios
                .get(url)
                .then(res => {
                    console.log(stats(`statusCode: ${res.status}`));
                    console.log(response(res.data))
                })
                .catch(error => {
                    let data = Object.values(error.response).includes('data');
                    data===true ? console.log(errors(error.response.data)) : console.log(errors('No data to log'));
                    console.log(errors(error.response.status));
                    console.log(errors(error.response.headers));
                });
        };
    };

    post_url(url, data, type, verboose){
        let contentHeader;
        let jdata;
        const post = (urla, jdata, verboosity , contentHeader) => {
            if (verboosity === true){
                axios
                    .post(urla, jdata, { contentHeader })
                    .then(res => {
                        console.log(stats(`statusCode: ${res.status}`));
                        console.log(response(res));
                    })
                    .catch(error => {
                        let data = Object.values(error.response).includes('data');
                        data===true ? console.log(errors(error.response.data)) : console.log(errors('No data to log'));
                        console.log(errors(error.response.status));
                        console.log(errors(error.response.headers));
                    });
            } else {
                axios
                    .post(url, jdata, { contentHeader })
                    .then(res => {
                        console.log(stats(`statusCode: ${res.status}`));
                        console.log(response(res.data));
                    })
                    .catch(error => {
                        let data = Object.values(error.response).includes('data');
                        data===true ? console.log(errors(error.response.data)) : console.log(errors('No data to log'));
                        console.log(errors(error.response.status));
                        console.log(errors(error.response.headers));
                    })
            }
        };
        switch (type) {
            case "json":
                contentHeader = {"content-type": "application/json"}
                jdata = JSON.parse(data)
                post(url, jdata, verboose, contentHeader)
                break;
            
            case "form":
                contentHeader = {"content-type": "multipart/form-data"}
                jdata = data;
                axios
                    .postForm(url, jdata, { contentHeader })
                    .then(res =>{
                        if (verboose === true){
                            console.log(stats(res.status))
                            console.log(response(res));
                        } else {
                            console.log(stats(res.status))
                            console.log(response(res.data));
                        }
                    })
                    .catch(error => {
                        let data = Object.values(error.response).includes('data');
                        data===true ? console.log(errors(error.response.data)) : console.log(errors('No data to log'));
                        console.log(errors(error.response.status));
                        console.log(errors(error.response.headers));
                    });

                break;

            case "text":
                contentHeader = {"content-type": "text/plain"};
                jdata = data;
                post(url, jdata, verboose, contentHeader)
                break;

            case "xml":
                contentHeader = {"content-type": "application/xml"};
                jdata = parseString(data, function (err, result){
                    if(verboose == true){
                        console.log(result)
                    };
                });
                post(url, jdata, verboose, contentHeader)
                break;

            default:
                contentHeader = {"content-type": "application/json"}
                jdata = JSON.parse(data)
                post(url, jdata, verboose, contentHeader)
                break;
        }
    };

    delete_url(url, verboose){
        if(verboose == true){
            axios
                .delete(url)
                .then(res => {
                    console.log(stats(`statusCode: ${res.status}`));
                    console.log(response(res));
                })
                .catch(error => {
                    let data = Object.values(error.response).includes('data');
                    data===true ? console.log(errors(error.response.data)) : console.log(errors('No data to log'));
                    console.log(errors(error.response.status));
                    console.log(errors(error.response.headers));
                });
        } else {
            axios
                .delete(url)
                .then(res => {
                    console.log(stats(`statusCode: ${res.status}`));
                    console.log(response(res.data));
                })
                .catch(error => {
                    let data = Object.values(error.response).includes('data');
                    data===true ? console.log(errors(error.response.data)) : console.log(errors('No data to log'));
                    console.log(errors(error.response.status));
                    console.log(errors(error.response.headers));
                });
        }
    };

    put_url(url, type, data, verboose){
        let contentHeader;
        let jdata;
        const put = (urla, jdata, verboosity , contentHeader) => {
            if (verboosity === true){
                axios
                    .put(urla, jdata, { contentHeader })
                    .then(res => {
                        console.log(stats(`statusCode: ${res.status}`));
                        console.log(response(res));
                    })
                    .catch(error => {
                        let data = Object.values(error.response).includes('data');
                        data===true ? console.log(errors(error.response.data)) : console.log(errors('No data to log'));
                        console.log(errors(error.response.status));
                        console.log(errors(error.response.headers));
                    });
            } else {
                axios
                    .put(url, jdata, { contentHeader })
                    .then(res => {
                        console.log(stats(`statusCode: ${res.status}`));
                        console.log(response(res.data))
                    })
                    .catch(error => {
                        let data = Object.values(error.response).includes('data');
                        data===true ? console.log(errors(error.response.data)) : console.log(errors('No data to log'));
                        console.log(errors(error.response.status));
                        console.log(errors(error.response.headers));
                    })
            }
        };
        switch (type) {
            case "json":
                contentHeader = {"content-type": "application/json"}
                jdata = JSON.parse(data)
                put(url, jdata, verboose, contentHeader)
                break;
            
            case "form":
                contentHeader = {"content-type": "multipart/form-data"}
                jdata = data;
                axios
                    .putForm(url, jdata, { contentHeader })
                    .then(res =>{
                        if (verboose === true){
                            console.log(stats(res.status))
                            console.log(response(res))
                        } else {
                            console.log(stats(res.status))
                            console.log(response(res.data))
                        }
                    })
                    .catch(error => {
                        let data = Object.values(error.response).includes('data');
                        data===true ? console.log(errors(error.response.data)) : console.log(errors('No data to log'));
                        console.log(errors(error.response.status));
                        console.log(errors(error.response.headers));
                    });

                break;

            case "text":
                contentHeader = {"content-type": "text/plain"};
                jdata = data;
                put(url, jdata, verboose, contentHeader)
                break;

            case "xml":
                contentHeader = {"content-type": "application/xml"};
                jdata = parseString(data, function (err, result){
                    if(verboose == true){
                        console.log(result)
                    };
                });
                put(url, jdata, verboose, contentHeader)
                break;

            default:
                contentHeader = {"content-type": "application/json"}
                jdata = JSON.parse(data)
                put(url, jdata, verboose, contentHeader)
                break;
        }
    }
};