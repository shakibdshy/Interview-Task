// const https = require('https');

// https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (resp) => {

//     let data = '';

//     // parse json data here...

//     console.log(resp);

// });

import fetch from 'node-fetch';

const url = 'https://coderbyte.com/api/challenges/json/json-cleaning'

let info;

async function getUser() {
    try {
        await fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log('before modification:', data)
                info = data
            })
        for (const pro in info) {
            if (info[pro] == "" || info[pro] == '-' || info[pro] == 'N/A') {
                delete info[pro]
            }
            else if (Array.isArray(info[pro])) {

                for (let i = 0; i < info[pro].length; i++) {

                    if (info[pro][i] == "" || info[pro][i] == '-' || info[pro][i] == 'N/A') {
                        info[pro].splice(i, 1);
                        i--
                    }
                }
            }
            else {
                for (const item in info[pro]) {
                    if (info[pro][item] == "" || info[pro][item] == '-' || info[pro][item] == 'N/A') {
                        delete info[pro][item]
                    }

                }

            }

        }


        console.log('after modification:', info);

        console.log('stringified:', JSON.stringify(info))
    }
    catch (err) {
        console.log(err);
    }

}

getUser()