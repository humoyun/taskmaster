class vPlyr {
  constructor(container, options) {
    this.element = options.element;
    this.playClass = options.playClass || "play";
    this.muteClass = options.muteClass || "mute";
    // Derived
    this.video = container;
  }

  togglePlay() {
    if (this.video.paused) this.video.play();
    else this.video.pause();
  }

  on(event, callback) {
    this.video.addEventListener(event, callback);
  }

  off(event, callback) {
    this.video.removeEventListener(event, callback);
  }
}

export default vPlyr;
