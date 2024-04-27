
//import { APIController } from "./model.js";
//import {db} from "../db.mjs";
//alert("Welcome to our website");

let port = 3000;
let host = 'localhost';

document.addEventListener("DOMContentLoaded", function(){
    const postBtn = document.getElementById("post")
    const successEl = document.getElementById("success-msg")
    const emailEl = document.querySelector("input[email = 'email']")
    const firstNameEl = document.querySelector("input[firstName = 'firstName']")
    const lastNameEl = document.querySelector("input[lastName = 'lastName']")

    // const getAllBtn = document.getElementById("get-all")
    // const getOneBtn = document.getElementById("get-one")

    const message_ = {
        message: "Test message"
        //Created_Data = new Data()
    }

   // alert(message_);
    postBtn.onclick = async function(){
        //alert("Clicked");
        message_.email = emailEl.value;
        message_.firstName = firstNameEl.value;
        message_.lastName = lastNameEl.value;
        console.log("Message before sending to the server: " + message_);
        await fetch('http://' + host + ":" + port + '/registration', {
            //fetch("api/Registration", {
            //await fetch('/registration', {
            method: "POST",
            body: JSON.stringify(message_),
            headers: {
                "content-type" : "application/json"
            }
        })

        // let fetch_result = await fetch('http://' + host + ":" + port + path, {
        // method: 'POST',
        // body: JSON.stringify(data),
        // headers: {
        //     'Content-Type': 'application/json'
        //}
    //});
        // alert(JSON.stringify(sampleObject))
        // .then(res => {
        //     if (!res.ok) {
        //         throw new Error('Network response was not ok');
        //     }
        //     return res.json();
        // })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            //data.json();
            successEl.innerHTML += data.Message;
            
        }).catch(err => {
            console.log("the error from post request: ", err)
            successEl.innerHTML += "Something went wrong. Try again";
        })
        //const data = await response.json();
        // console.log("Bye World");
        // alert("Bye");
    }
    //alert(JSON.stringify(message_));
})



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

// document.addEventListener('DOMContentLoaded', function () {
//         const form = document.querySelector('form');
//         form.addEventListener('submit', async function (e) {
//             e.preventDefault();
//             const data = {
//                 email: document.getElementById('email').value,
//                 firstName: document.getElementById('firstName').value,
//                 lastName: document.getElementById('lastName').value,
//             };
//             
//             fetch('/submit-form', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(data),
//             })
//             .then(response => response.json())
//             .then(data => console.log('Success:', data))
//             .catch((error) => console.error('Error:', error));
//         });
//     });

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