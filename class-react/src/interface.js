// HomePage.js
import React from 'react';
import './styles.css'; // Import CSS file if needed

function Interface() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Home Page</title>
      <link rel="stylesheet" type="text/css" href="styles.css" />
      <a href="registration.html">Registration</a>
      <a href="index.html">Home</a>
      <a href="pomodoro.html">Pomodoro</a>
      <p>Pomodoro</p>
      <div className="pomodoro-container">
        <progress id="progress-bar" value={0} />
        <div className="progress-bar" />
        <div className="timer">
          <div className="all-buttons" id="buttons">
            <button
              data-mode="pomodoro"
              className="button active mode-button"
              id="pomodoro-start"
            >
              Pomodoro
            </button>
            <button
              data-mode="shortBreak"
              className="button mode-button"
              id="short-break-start"
            >
              Short break
            </button>
            <button
              data-mode="longBreak"
              className="button mode-button"
              id="long-break-start"
            >
              Long break
            </button>
          </div>
          <div className="clock" id="clock-rep">
            <span id="minutes">25</span>
            <span className="separator">:</span>
            <span id="seconds">00</span>
          </div>
          <button className="start-button" data-action="start" id="start-timer-btn">
            Start
          </button>
        </div>
      </div>
      <div className="spotify-container">
        <form action="">
          <input type="hidden" id="hidden_token" />
          <label htmlFor="Genre" className="form-label col-sm-2">
            Genre:
          </label>
          <select name="" id="select_genre" className="form-control">
            <option>Select...</option>
          </select>
          <label htmlFor="Genre" className="form-label">
            Playlists:
          </label>
          <select name="" id="select_playlist" className="form-control">
            <option>Select...</option>
          </select>
        </form>
        <div className="form-group">
          <button type="submit" id="btn_submit" className="btn btn-success">
            Search
          </button>
        </div>
      </div>
      <div className="row">
        <div className="list-group song-list"></div>
        <div id="song-detail" />
      </div>
    </>
  );
}

export default Interface;
