export class VideoLoad {
  constructor(videoSelectors) {
    this._videoElement = document.querySelector(videoSelectors.videoSelector);
    this._videoButtonSelector = document.querySelector(videoSelectors.videoButtonSelector);
  }

  _activateVideo() {
    console.log(this._videoElement);
    this._videoElement.classList.add('video-history__video_is-played');
    this._videoElement.autoplay = true;
    this._videoElement.load();
  }

  setEventListener() {
    this._videoButtonSelector.addEventListener('click', () => this._activateVideo());
  }
}