//imports
import axios from 'axios';

export class client{
    constructor(){};

    get_url(url, verboose){
        if (verboose === true){
            axios
                .get(url)
                .then(res => {
                    console.log(`statusCode: ${res.status}`);
                    console.log(res);
                })
                .catch(error => {
                    console.error(error);
                });
        } else{
            axios
                .get(url)
                .then(res => {
                    console.log(`statusCode: ${res.status}`)
                    console.log(res.data)
                })
                .catch(error => {
                    console.log(error);
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
                    console.log(`statusCode: ${res.status}`)
                    console.log(res)
                })
                .catch(error => {
                    console.log(error);
                })
        } else {
            axios
                .post(url, jdata, { contentHeader })
                .then(res => {
                    console.log(`statusCode: ${res.status}`)
                    console.log(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    };

    delete_url(url, verboose){
        if(verboose == true){
            axios
                .delete(url)
                .then(res => {
                    console.log(`statusCode: ${res.status}`)
                    console.log(res)
                })
                .catch(error => {
                    console.log(error)
                });
        } else {
            axios
                .delete(url)
                .then(res => {
                    console.log(`statusCode: ${res.status}`)
                    console.log(res.data)
                })
                .catch(error => {
                    console.log(error)
                });
        }
    };
};