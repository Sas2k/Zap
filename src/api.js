//imports
import axios from 'axios';
import { stats, errors, response } from "./log.js";
import { parseString } from 'xml2js';
import { createWriteStream } from 'fs'
import * as stream from 'stream';
import { promisify } from 'util';

const finished = promisify(stream.finished);

// The download File Function
export async function downloadFile(fileUrl, outputLocationPath) {
    const writer = createWriteStream(outputLocationPath);
    return axios({
        method: 'get',
        url: fileUrl,
        responseType: 'stream',
    })
    .then(response => {
        response.data.pipe(writer);
        return finished(writer); //this is a Promise
    })
    .catch(error => {
        console.log(error)
    })
}

export class client{
    constructor(){};

    get_url(url, verboose, ContHeader, download){
        if(!ContHeader){
            ContHeader = {}
        } else {
            ContHeader = JSON.parse(ContHeader)
        }
        if(!download){
            if (verboose === true){
                axios
                    .get(url, { headers: ContHeader })
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
                    .get(url, { headers: ContHeader })
                    .then(res => {
                        console.log(stats(`statusCode: ${res.status}`));
                        console.log(response(res.data))
                    })
                    .catch(error => {
                        let data = Object.values(error.response).includes('data');
                        data===true ? console.log(errors(error.response.data)) : console.log(errors('No data to log'));
                        console.log(errors(error.response.status));
                        console.log(errors(error.response.headers));
                        console.log(ContHeader)
                    });
            };
        } else {
            downloadFile(url, download)
        }
    };

    post_url(url, data, type, verboose, ContHeader = false){
        let contentHeader;
        let jdata;
        if(ContHeader != false){
            contentHeader = JSON.parse(ContHeader)
        } else {
            contentHeader = {}
        };
        const post = (urla, jdata, verboosity , contentHeader) => {
            if (verboosity === true){
                axios
                    .post(urla, jdata, { headers: contentHeader })
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
                    .post(url, jdata, { headers: contentHeader })
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
                contentHeader["content-type"] = "application/json"
                jdata = JSON.parse(data)
                post(url, jdata, verboose, contentHeader)
                break;
            
            case "form":
                contentHeader["content-type"] = "multipart/form-data"
                jdata = data;
                axios
                    .postForm(url, jdata, { headers: contentHeader })
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
                contentHeader["content-type"] = "text/plain";
                jdata = data;
                post(url, jdata, verboose, contentHeader)
                break;

            case "xml":
                contentHeader["content-type"] = "application/xml";
                jdata = parseString(data, function (err, result){
                    if(verboose == true){
                        console.log(result)
                    };
                });
                post(url, jdata, verboose, contentHeader)
                break;

            default:
                contentHeader["content-type"] = "application/json"
                jdata = JSON.parse(data)
                post(url, jdata, verboose, contentHeader)
                break;
        }
    };

    delete_url(url, verboose, ContHeader = false){
        if(ContHeader != false){
            var contHeader = JSON.parse(ContHeader)
        } else {
            var contHeader = {};    
        };
        if(verboose == true){
            axios
                .delete(url, { headers: contHeader })
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
                .delete(url, { headers: contHeader })
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

    put_url(url, type, data, verboose, ContHeader = false){
        let contentHeader;
        let jdata;
        if(ContHeader != false){
            contentHeader = JSON.parse(ContHeader)
        } else {
            contentHeader = {}
        };
        const put = (urla, jdata, verboosity , contentHeader) => {
            if (verboosity === true){
                axios
                    .put(urla, jdata, { headers: contentHeader })
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
                    .put(url, jdata, { headers: contentHeader })
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
                contentHeader["content-type"] = "application/json"
                jdata = JSON.parse(data)
                put(url, jdata, verboose, contentHeader)
                break;
            
            case "form":
                contentHeader["content-type"] = "multipart/form-data"
                jdata = data;
                axios
                    .putForm(url, jdata, { headers: contentHeader })
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
                contentHeader["content-type"] = "text/plain";
                jdata = data;
                put(url, jdata, verboose, contentHeader)
                break;

            case "xml":
                contentHeader["content-type"] = "application/xml";
                jdata = parseString(data, function (err, result){
                    if(verboose == true){
                        console.log(result)
                    };
                });
                put(url, jdata, verboose, contentHeader)
                break;

            default:
                contentHeader["content-type"] = "application/json"
                jdata = JSON.parse(data)
                put(url, jdata, verboose, contentHeader)
                break;
        }
    }
};