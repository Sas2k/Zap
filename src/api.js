//imports
import axios from 'axios';
import { stats, errors, response } from "./log.js";

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
                    console.log(errors(error.response.data));
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
                    console.log(errors(error.response.data));
                    console.log(errors(error.response.status));
                    console.log(errors(error.response.headers));
                });
        };
    };

    post_url(url, data, type, verboose){
        let contentHeader;
        let jdata;
        switch (type) {
            case "json":
                contentHeader = {"content-type": "application/json"}
                jdata = JSON.parse(data)
                break;
            
            case "form":
                contentHeader = {"content-type": "multipart/form-data"}
                break;

            case "text":
                contentHeader = {"content-type": "text/plain"};
                break;

            case "xml":
                contentHeader = {"content-type": "application/xml"};
                break;

            default:
                contentHeader = {"content-type": "application/json"}
                jdata = JSON.parse(data)
                break;
        }

        if (verboose === true){
            axios
                .post(url, jdata, { contentHeader })
                .then(res => {
                    console.log(stats(`statusCode: ${res.status}`));
                    console.log(response(res));
                })
                .catch(error => {
                    cconsole.log(errors(error.response.data));
                    console.log(errors(error.response.status));
                    console.log(errors(error.response.headers));
                });
        } else {
            axios
                .post(url, jdata, { contentHeader })
                .then(res => {
                    console.log(stats(`statusCode: ${res.status}`));
                    console.log(response(res.data))
                })
                .catch(error => {
                    console.log(errors(error.response.data));
                    console.log(errors(error.response.status));
                    console.log(errors(error.response.headers));
                })
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
                    console.log(errors(error.response.data));
                    console.log(errors(error.response.status));
                    console.log(errors(error.response.headers));
                });
        } else {
            axios
                .delete(url)
                .then(res => {
                    console.log(stats(`statusCode: ${res.status}`));
                    console.log(response(res.data))
                })
                .catch(error => {
                    console.log(errors(error.response.data));
                    console.log(errors(error.response.status));
                    console.log(errors(error.response.headers));
                });
        }
    };
};