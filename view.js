
//import { APIController } from "./model.js";
import {db} from "./db.mjs";


// export class View{
//     constructor(){
//         this.render_view();
//     }

//     render_view(){
//         render_div.innerHTML = document.querySelector('#main');
//         render_div.innerHTML += `
//             <h1> Welcome to Pomodoro Study Tool! </h1>
//         `;
//         let email = document.querySelector(email-input);
//         let firstName = document.querySelector(firstName-input);
//         let lastName = document.querySelector(lastName-input);
//         db.run(`INSERT INTO db (${email}, ${firstName}, ${lastName})`);
//     }
// }

document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('form');
        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            const data = {
                email: document.getElementById('email').value,
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
            };
            
            fetch('/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => console.log('Success:', data))
            .catch((error) => console.error('Error:', error));
        });
    });

// UI Component
// const UIController = (function() {
//     // constDOMElements = {
//     //   pickGenre: '#select_genre',
//     //   pickPlaylist: '#select_playlist',
//     //   Submitbutton: '#btn_submit',
//     //   songDetail: '#song-detail',
//     //   hfToken: '#hidden-token',
//     //   songList: '.song-list' 
//     // }
//     return{
//       inputField(){
//           return{
//               genre: document.querySelector(DOMElements.pickGenre),
//               playlist: document.querySelector(DOMElements.pickPlaylist),
//               songs: document.querySelector(DOMElements.songList),
//               submit: document.querySelector(DOMElements.Submitbutton),
//               songDetail: document.querySelector(DOMElements.songDetail)
//           }
//       },

      

//       createGenre(text, value){
//           const html = `<option value = "${value}">${text}</option`;
//           document.querySelector(DOMElements.pickGenre).insertAdjustmentHTML(`beforeend`, html);
//       },
//       createPlaylist(text, value){
//           const html = `<option value = "${value}">${text}</option`;
//           document.querySelector(DOMElements.pickPlaylist).insertAdjustmentHTML(`beforeend`, html);

//       },
//       createTrack(id, name){
//           const html = `<option value = "${value}">${text}</option`;
//           document.querySelector(DOMElements.pickPlaylist).insertAdjustmentHTML(`beforeend`, html);
//       },
//       createSongDetail(img, titlr, artist){

//       }

//     }
// })();