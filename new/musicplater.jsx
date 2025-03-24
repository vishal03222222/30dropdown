import React, { Component, createRef } from "react";
import "../App.css";
import thumb_icon from "../assets/468-thumbnail.png";
import Song_icon from "../assets/song2.mp3";

export default class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      progress: 0,
    };
    this.audioRef = createRef();
    this.progressRef = createRef();
  }

  componentDidMount() {
    const song = this.audioRef.current;

    song.addEventListener("timeupdate", this.updateProgress);

    if (song) {
      song.addEventListener("loadedmetadata", this.setMaxProgress);
    }
  }

  componentWillUnmount() {
    const song = this.audioRef.current;

    song.removeEventListener("timeupdate", this.updateProgress);
    song.removeEventListener("loadedmetadata", this.setMaxProgress);
  }

  updateProgress = () => {
    const song = this.audioRef.current;
    this.setState({ progress: song.currentTime });
  };

  setMaxProgress = () => {
    const song = this.audioRef.current;
    if (song) {
      this.progressRef.current.max = song.duration;
    }
  };

  togglePlayPause = () => {
    const song = this.audioRef.current;

    if (this.state.isPlaying) {
      song.pause();
    } else {
      song.play();
    }
    this.setState((prevState) => ({
      isPlaying: !prevState.isPlaying,
    }));
  };

  handleProgressChange = (e) => {
    const song = this.audioRef.current;
    song.currentTime = e.target.value;
    if (!this.state.isPlaying) {
      song.play();
      this.setState({ isPlaying: true });
    }
  };

  render() {
    return (
      <div className="container5">
        <div className="music-player">
          <nav>
            <div className="circle">
              <i className="fa-solid fa-angle-left"></i>
            </div>
            <div className="circle">
              <i className="fa-solid fa-bars"></i>
            </div>
          </nav>
          <img src={thumb_icon} className="song-img" alt="Song Thumbnail" />
          <h1>Despacito</h1>
          <p>Lusi Fonsi Ft. Puerto Rican</p>
          <audio ref={this.audioRef}>
            <source src={Song_icon} type="audio/mp3" />
          </audio>
          <input
            type="range"
            value={this.state.progress}
            onChange={this.handleProgressChange}
            id="progress"
            ref={this.progressRef}
          />
          <div className="control">
            <div>
              <i className="fa-solid fa-backward"></i>
            </div>
            <div onClick={this.togglePlayPause}>
              <i
                className={`fa-solid ${
                  this.state.isPlaying ? "fa-pause" : "fa-play"
                }`}
                id="ctrlIcon"
              ></i>
            </div>
            <div>
              <i className="fa-solid fa-forward"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}