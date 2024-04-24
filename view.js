
import { APIController } from "./model.js";


export class View{
    constructor(){
        this.render_view();
    }

    render_view(){
        render_div.innerHTML = `<div></div>`;
        render_div.innerHTML += `
            <h1> Welcome to Pomodoro Study Tool ! </h1>
        `;



    }




}

// UI Component
const UIController = (function() {
    constDOMElements = {
      pickGenre: '#select_genre',
      pickPlaylist: '#select_playlist',
      Submitbutton: '#btn_submit',
      songDetail: '#song-detail',
      hfToken: '#hidden-token',
      songList: '.song-list' 
    }
    return{
      inputField(){
          return{
              genre: document.querySelector(DOMElements.pickGenre),
              playlist: document.querySelector(DOMElements.pickPlaylist),
              songs: document.querySelector(DOMElements.songList),
              submit: document.querySelector(DOMElements.Submitbutton),
              songDetail: document.querySelector(DOMElements.songDetail)
          }
      },

      

      createGenre(text, value){
          const html = `<option value = "${value}">${text}</option`;
          document.querySelector(DOMElements.pickGenre).insertAdjustmentHTML(`beforeend`, html);
      },
      createPlaylist(text, value){
          const html = `<option value = "${value}">${text}</option`;
          document.querySelector(DOMElements.pickPlaylist).insertAdjustmentHTML(`beforeend`, html);

      },
      createTrack(id, name){
          const html = `<option value = "${value}">${text}</option`;
          document.querySelector(DOMElements.pickPlaylist).insertAdjustmentHTML(`beforeend`, html);
      },
      createSongDetail(img, titlr, artist){

      }

    }
})();