APIController = (function() {
    const clientId = 'cb9546ca89e545669cb57ec1c0f23a95';
    const clientSecret = '1f3b695233124e78a96eccbf73c1a3ae';

    const _getToken = async () => {

        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        return data.access_token;
    }
    
    const _getGenres = async (token) => {

        const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        return data.categories.items;
    }

    const _getPlaylistByGenre = async (token, genreId) => {

        const limit = 10;
        
        const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        return data.playlists.items;
    }

    const _getTracks = async (token, tracksEndPoint) => {

        const limit = 10;

        const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        return data.items;
    }

    const _getTrack = async (token, trackEndPoint) => {

        const result = await fetch(`${trackEndPoint}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        return data;
    }

    return {
        getToken() {
            return _getToken();
        },
        getGenres(token) {
            return _getGenres(token);
        },
        getPlaylistByGenre(token, genreId) {
            return _getPlaylistByGenre(token, genreId);
        },
        getTracks(token, tracksEndPoint) {
            return _getTracks(token, tracksEndPoint);
        },
        getTrack(token, trackEndPoint) {
            return _getTrack(token, trackEndPoint);
        }
    }
})();



UIController = (function() {


    const DOMElements = {
        selectGenre: '#select_genre',
        selectPlaylist: '#select_playlist',
        buttonSubmit: '#btn_submit',
        divSongDetail: '#song-detail',
        hfToken: '#hidden_token',
        divSonglist: '.song-list'
    }
    return {


        inputField() {
            return {
                genre: document.querySelector(DOMElements.selectGenre),
                playlist: document.querySelector(DOMElements.selectPlaylist),
                tracks: document.querySelector(DOMElements.divSonglist),
                submit: document.querySelector(DOMElements.buttonSubmit),
                songDetail: document.querySelector(DOMElements.divSongDetail)
            }
        },

        createGenre(text, value) {
            const html = `<option value="${value}">${text}</option>`;
            document.querySelector(DOMElements.selectGenre).insertAdjacentHTML('beforeend', html);
        }, 

        createPlaylist(text, value) {
            const html = `
                <option value="${value}" style="margin-bottom: 5px;">
                ${text}
                </option>`;
            document.querySelector(DOMElements.selectPlaylist).insertAdjacentHTML('beforeend', html);
        },


        createTrack(id, name) {
            const html = `
<div style="text-align: center;">
        <a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${id}" style="display: inline-block; margin-right: 10px; color: black; font-size: 18px;">
            ${name}
        </a>
    </div>`;
            document.querySelector(DOMElements.divSonglist).insertAdjacentHTML('beforeend', html);
        },

        // need method to create the song detail
        createTrackDetail(img, title, artist) {

            const detailDiv = document.querySelector(DOMElements.divSongDetail);
            // any time user clicks a new song, we need to clear out the song detail div
            detailDiv.innerHTML = '';
const html = `
<div style="display: flex; justify-content: center;">
  <div class="song-item" style="display: flex; align-items: center; margin-bottom: 20px;">
    <div class="image" style="margin-right: 20px;">
      <img src="${img}" alt="" style="width: 250px; height: 250px;">
    </div>
    <div class="info" style="flex: 1;">
      <div class="Genre">
        <label for="Genre" class="form-label" style="margin: 0; font-weight: light;">${title}:</label>
      </div>
      <div class="Artist">
        <label for="artist" class="form-label" style="margin: 0; font-weight: light;">By ${artist}:</label>
      </div>
    </div>
  </div>
</div>
`;

            detailDiv.insertAdjacentHTML('beforeend', html)
        },

        resetTrackDetail() {
            this.inputField().songDetail.innerHTML = '';
        },

        resetTracks() {
            this.inputField().tracks.innerHTML = '';
            this.resetTrackDetail();
        },

        resetPlaylist() {
            this.inputField().playlist.innerHTML = '';
            this.resetTracks();
        },
        
        storeToken(value) {
            document.querySelector(DOMElements.hfToken).value = value;
        },

        getStoredToken() {
            return {
                token: document.querySelector(DOMElements.hfToken).value
            }
        }
    }

})();

APPController = (function(UICtrl, APICtrl) {


    const DOMInputs = UICtrl.inputField();
 
    const loadGenres = async () => {

        const token = await APICtrl.getToken();           

        UICtrl.storeToken(token);

        const genres = await APICtrl.getGenres(token);

        genres.forEach(element => UICtrl.createGenre(element.name, element.id));
    }


    DOMInputs.genre.addEventListener('change', async () => {

        UICtrl.resetPlaylist();

        const token = UICtrl.getStoredToken().token;        

        const genreSelect = UICtrl.inputField().genre;       

        const genreId = genreSelect.options[genreSelect.selectedIndex].value;             

        const playlist = await APICtrl.getPlaylistByGenre(token, genreId);       

        playlist.forEach(p => UICtrl.createPlaylist(p.name, p.tracks.href));
    });
     

   
    DOMInputs.submit.addEventListener('click', async (e) => {

        e.preventDefault();

        UICtrl.resetTracks();

        const token = UICtrl.getStoredToken().token;        

        const playlistSelect = UICtrl.inputField().playlist;

        const tracksEndPoint = playlistSelect.options[playlistSelect.selectedIndex].value;

        const tracks = await APICtrl.getTracks(token, tracksEndPoint);

        tracks.forEach(el => UICtrl.createTrack(el.track.href, el.track.name))
        
    });

    DOMInputs.tracks.addEventListener('click', async (e) => {
        e.preventDefault();
        UICtrl.resetTrackDetail();
        const token = UICtrl.getStoredToken().token;
        const trackEndpoint = e.target.id;
        const track = await APICtrl.getTrack(token, trackEndpoint);
        UICtrl.createTrackDetail(track.album.images[2].url, track.name, track.artists[0].name);
    });    

    return {
        init() {
            console.log('App is starting');
            loadGenres();
        }
    }

})(UIController, APIController);

APPController.init();