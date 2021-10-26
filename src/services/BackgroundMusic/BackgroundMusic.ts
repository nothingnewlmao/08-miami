const soundFile = require('../../assets/audio/backgroundMusic2.wav');
const impulseFile = require('../../assets/audio/RightGlassTriangle.wav');

class BackgroundMusic {
    private audioPaused: boolean = true;

    context;

    buffer: any;

    impulseBuffer: any;

    source: any;

    destination: any;

    constructor() {
        this.context = new window.AudioContext();

        this.fetchMusic(soundFile.default, this.decodeMainBuffer);
        this.fetchMusic(impulseFile.default, this.decodeImpulseBuffer);
    }

    play(): void {
        this.source = this.context.createBufferSource();

        this.source.buffer = this.buffer;

        this.destination = this.context.destination;

        const convolverNode = this.context.createConvolver();

        convolverNode.buffer = this.impulseBuffer;

        convolverNode.connect(this.destination);
        this.source.connect(convolverNode);

        this.source.start(0);

        this.audioPaused = false;
    }

    stop() {
        this.source.stop(0);

        this.audioPaused = true;
    }

    toggleMusic(): void {
        if (this.audioPaused) {
            this.play();
        } else {
            this.stop();
        }
    }

    fetchMusic(
        url: string | URL,
        decodeCallback: (buffer: AudioBuffer) => void,
    ) {
        const request = new XMLHttpRequest();

        request.open('GET', url, true);
        request.responseType = 'arraybuffer';

        request.onload = () => {
            // декодируем бинарный ответ
            this.context.decodeAudioData(
                request.response,
                decodeCallback.bind(this),
                e => {
                    console.log('Error decoding file', e);
                },
            );
        };
        request.send();
    }

    decodeMainBuffer(buffer: AudioBuffer): void {
        this.buffer = buffer;
    }

    decodeImpulseBuffer(buffer: AudioBuffer): void {
        this.impulseBuffer = buffer;
    }
}

export const backgroundMusic = new BackgroundMusic();
