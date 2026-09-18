const stylesheet = `

@font-face {
    font-family: 'Audiowide';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('fonts/Audiowide-Regular.woff2') format('woff2');
}

/* Now playing title: heading face */
.react-jinke-music-player-main .music-player-panel .panel-content .player-content .audio-title {
    font-family: 'Audiowide', sans-serif;
}

/* Icon hover: hot pink */
.react-jinke-music-player-main svg:active, .react-jinke-music-player-main svg:hover {
    color: #ff2e97
}

/* Progress bar: electric cyan */
.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-handle, .react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-track {
    background-color: #00f0ff
}

/* Volume bar: neon purple */
.sound-operation .rc-slider-handle, .sound-operation .rc-slider-track {
    background-color: #b967ff !important
}

.sound-operation .rc-slider-handle:active {
    box-shadow: 0 0 8px #b967ff !important
}

/* Scrollbar: muted purple */
.react-jinke-music-player-main ::-webkit-scrollbar-thumb {
    background-color: #4a3a6b;
}

.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-handle:active {
    box-shadow: 0 0 8px #00f0ff
}

/* Now playing icon: hot pink */
.react-jinke-music-player-main .audio-item.playing svg {
    color: #ff2e97
}

/* Now playing artist: hot pink */
.react-jinke-music-player-main .audio-item.playing .player-singer {
    color: #ff2e97 !important
}

/* Loading spinner: sunset orange */
.react-jinke-music-player-main .loading svg {
    color: #ff8b3d !important
}

.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-handle {
    border: hidden;
    box-shadow: 0 0 8px rgba(255, 46, 151, 0.6);
}

.rc-slider-rail, .rc-slider-track {
    height: 6px;
}

.rc-slider {
    padding: 3px 0;
}

.sound-operation > div:nth-child(4) {
    transform: translateX(-50%) translateY(5%) !important;
}

.sound-operation {
    padding: 4px 0;
}

/* Player panel background */
.react-jinke-music-player-main .music-player-panel {
    background-color: #1a0b2e;
    color: #f4eaff;
    box-shadow: 0 0 16px rgba(185, 103, 255, 0.35);
}

/* Song title in player: light foreground */
.react-jinke-music-player-main .music-player-panel .panel-content .player-content .audio-title {
    color: #f4eaff;
}

/* Duration/time text: cyan */
.react-jinke-music-player-main .music-player-panel .panel-content .player-content .duration, .react-jinke-music-player-main .music-player-panel .panel-content .player-content .current-time {
    color: #00f0ff
}

/* Audio list panel */
.audio-lists-panel {
    background-color: #1a0b2e;
    bottom: 6.25rem;
    box-shadow: 0 0 16px rgba(185, 103, 255, 0.35);
}

.audio-lists-panel-content .audio-item.playing {
    background-color: transparent;
}

.audio-lists-panel-content .audio-item:nth-child(2n+1) {
    background-color: transparent;
}

/* Playlist hover: muted purple */
.audio-lists-panel-content .audio-item:active,
.audio-lists-panel-content .audio-item:hover {
    background-color: #2d1b4e;
}

.audio-lists-panel-header {
    border-bottom: 1px solid rgba(255, 46, 151, 0.25);
    box-shadow: none;
}

/* Playlist header text: sunset orange */
.audio-lists-panel-header-title {
    color: #ff8b3d;
}

.react-jinke-music-player-main .music-player-panel .panel-content .player-content .audio-lists-btn {
    background-color: transparent;
    box-shadow: none;
}

.audio-lists-panel-content .audio-item {
    line-height: 32px;
}

.react-jinke-music-player-main .music-player-panel .panel-content .img-content {
    box-shadow: 0 0 16px rgba(0, 240, 255, 0.35);
}

/* Lyrics: cyan */
.react-jinke-music-player-main .music-player-lyric {
    color: #00f0ff;
    -webkit-text-stroke: 0.5px #1a0b2e;
    font-weight: bolder;
}

/* Lyric button active: cyan */
.react-jinke-music-player-main .lyric-btn-active, .react-jinke-music-player-main .lyric-btn-active svg {
    color: #00f0ff !important;
}

/* Playlist now playing: hot pink */
.audio-lists-panel-content .audio-item.playing, .audio-lists-panel-content .audio-item.playing svg {
    color: #ff2e97
}

/* Playlist hover icons: hot pink */
.audio-lists-panel-content .audio-item:active .group:not(.player-delete) svg, .audio-lists-panel-content .audio-item:hover .group:not(.player-delete) svg {
    color: #ff2e97
}

.audio-lists-panel-content .audio-item .player-icons {
    scale: 75%;
}

/* Mobile */

.react-jinke-music-player-mobile-cover {
    border: none;
    box-shadow: 0 0 16px rgba(185, 103, 255, 0.45);
}

.react-jinke-music-player .music-player-controller {
    border: none;
    box-shadow: 0 0 16px rgba(185, 103, 255, 0.35);
    color: #b967ff;
}

.react-jinke-music-player .music-player-controller .music-player-controller-setting {
    color: rgba(185, 103, 255, 0.3);
}

/* Mobile progress: cyan */
.react-jinke-music-player-mobile-progress .rc-slider-handle, .react-jinke-music-player-mobile-progress .rc-slider-track {
    background-color: #00f0ff;
}

.react-jinke-music-player-mobile-progress .rc-slider-handle {
    border: none;
}
`

export default stylesheet
