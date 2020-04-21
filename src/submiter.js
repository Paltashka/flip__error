const fetch = require("isomorphic-fetch");
var request = require('request');
const https = require("https");
const crutch = 'https://cors-anywhere.herokuapp.com/';

const host = window.location.hostname;
const port = (window.location.port!=="")?`:${window.location.port}/`:'/';
const protocol = window.location.protocol;
export const _url = window._url||`${protocol}//${host}${port}`;

export function submit(path,data={},_method='GET') {
    let agent = new https.Agent({rejectUnauthorized: false});

    let options = {
        method:(_method!=='GET')?'POST':'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    };

    if(_method!=='GET'){
        options.body = JSON.stringify({...data,_method});
    }
    const url = `${crutch}${path.includes('http')?path:_url+path}`;
    // const url = `${path.includes('http')?path:_url+path}`;

    if(url.includes('https')){
        options.agent=agent;
    }

    return fetch(url,options).then(d=>d.json());
}

export function getAsset(path) {
    let agent = new https.Agent({rejectUnauthorized: false});

    let options = {
        method:'GET',
    };

    const url = path.includes('http')?path:_url+path;
    if(url.includes('https')){
        options.agent=agent;
    }

    return fetch(url,options).then(d=>d.body());
}

export const getImage = (url)=>{
    const chunks=[];
    return new Promise((ok,rej)=>{
        request(url,  (err, message, response)=> {
           if(err){
               rej(err)
           }else{
               let data = Buffer.concat(chunks).toString('base64');
               data = `data:${'image/jpeg'};base64,`+data;
               ok(data);
           }
        })
            .on('data', function (chunk) {
                chunks.push(chunk);
            }) .on('end', function (chunk) {
            })
            .on('response', function (response) {

            });
    })
};