//import * as rp from 'request-promise';
let getData = require('./getData.js');
let d = new getData();
let _ = require('lodash');
let dots = "";


let startBatch = async function () {
    try {
        let respArr = [];
        let arr = await d.getClan("#YLGVCQ");

        console.log('ARR IS:', arr);

        for (i = 0; i < arr.length; i++) {
            dots+=".";
            let player = await d.getPlayer(arr[i]);
            console.log('running' + dots);
            respArr.push(player);
        }

        respArr = _.orderBy(respArr, ['wins'],['desc']);

        console.log('ARRRR', respArr);
    } catch (e) {
        console.log('ERRR', e);
    }

}

startBatch();


