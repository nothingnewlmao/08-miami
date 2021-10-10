const soundfile = require('../../assets/audio/backgroundMusic2.wav');

class BackgroundMusic {
    audio: HTMLAudioElement;

    private audioPaused: boolean = true;

    constructor() {
        this.audio = new Audio(soundfile.default);
        this.audio.loop = true;
        this.audio.crossOrigin = 'anonymous';
    }

    toggleMusic(): void {
        if (this.audioPaused) {
            this.play();
        } else {
            this.pause();
        }
    }

    play(): void {
        this.audio.currentTime = 0;
        this.audio.play();
        this.audioPaused = false;
    }

    pause(): void {
        this.audio.pause();
        this.audioPaused = true;
    }
}

export const backgroundMusic = new BackgroundMusic();
