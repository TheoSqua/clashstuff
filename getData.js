//import * as rp from 'request-promise';
let rp = require('request-promise');

class getData {
    getClan(clan) {

        clan = encodeURIComponent(clan);
        let respArr = [];

        var options = {
            method: 'GET',
            uri: `https://api.clashroyale.com/v1/clans/${clan}/members`,
            'auth': {
                'bearer': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjU3NzI0N2NhLTllYmUtNDk1MS1iNzFjLWRkNzRjZDRjNTI2MyIsImlhdCI6MTU0OTU4NzE1NCwic3ViIjoiZGV2ZWxvcGVyLzg3Mzg5YmU0LTRlODEtZjkyYy0zNmUyLTZjN2E2NTI0YjJkNyIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxMDguMjA5LjkxLjIxMiJdLCJ0eXBlIjoiY2xpZW50In1dfQ.84i-P3EJEptXgjQxxOCI43Sr9PoC1aYNAkbFHY-d37on7iC0T5kUmNafvwsJ4rSIx_gYrws9FBtmsEczxxVrHw'
            },
            json: true // Automatically stringifies the body to JSON
        };

        return rp(options)
            .then(function (parsedBody) {

                parsedBody.items.forEach((item)=>{
                    console.log('...')
                    respArr.push(item.tag);
                  });
                  console.log(respArr.length);

                  console.log('RETURNING...')
                  return respArr;
                //return parsedBody.
                // POST succeeded...
            })
            .catch(function (err) {
                console.log(err.message);
                // POST failed...
            });
    }

    getPlayer(player) {
        player = encodeURIComponent(player);
        var options = {
            method: 'GET',
            uri: `https://api.clashroyale.com/v1/players/${player}`,
            'auth': {
                'bearer': ''
            },
            json: true // Automatically stringifies the body to JSON
        };
       return rp(options)
            .then(function (parsedBody) {

                return {"name": parsedBody.name, "wins": (parsedBody.wins/(parsedBody.wins + parsedBody.losses)).toFixed(3)};
                // POST succeeded...
            })
            .catch(function (err) {
                console.log('NO WORKS', err.message);
                // POST failed...
            });
    }

}


module.exports = getData;