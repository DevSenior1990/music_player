/* eslint-disable no-console */
import Switch from 'rc-switch'
import React from 'react'
import { hot } from 'react-hot-loader/root'
import swal from 'sweetalert'
import { name, repository, version } from '../package.json'
import ReactJkMusicPlayer from '../src'
import Locale from '../src/config/locale'
import PLAY_MODE from '../src/config/playMode'
import '../src/styles/index.less'
import { createRandomNum } from '../src/utils'
import './example.less'

const audioList1 = [
  {
    name: 'Despacito',
    singer: 'Luis Fonsi',
    cover:
      'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
    musicSrc: 'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
    // support async fetch music src. eg.
    // musicSrc: async () => {
    //   return await fetch('/api')
    // },
  },
  {
    name: 'Dorost Nemisham',
    singer: 'Sirvan Khosravi',
    cover:
      'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
    musicSrc: 'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3',
  },
]

const audioList2 = [
  {
    name: 'Bedtime Stories',
    singer: 'Jay Chou',
    cover:
      'http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg',
    musicSrc:
      'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3',
  },
  {
    name: 'Dorost Nemisham',
    singer: 'Sirvan Khosravi',
    cover:
      'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
    musicSrc: () => {
      return Promise.resolve(
        'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3',
      )
    },
  },
  {
    name: 'Despacito',
    singer: 'Luis Fonsi',
    cover:
      'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
    musicSrc: 'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3'
  },
]

const options = {
  //audio lists model
  audioLists: audioList1,

  //default play index of the audio player  [type `number` default `0`]
  defaultPlayIndex: 0,

  //if you want dynamic change current play audio you can change it [type `number` default `0`]
  // playIndex: 0,

  //color of the music player theme    [ type: 'light' | 'dark' | 'auto'  default `dark` ]
  theme: 'auto',

  // Specifies movement boundaries. Accepted values:
  // - `parent` restricts movement within the node's offsetParent
  //    (nearest node with position relative or absolute), or
  // - a selector, restricts movement within the targeted node
  // - An object with `left, top, right, and bottom` properties.
  //   These indicate how far in each direction the draggable
  //   can be moved.
  // Ref: https://github.com/STRML/react-draggable#draggable-api
  bounds: 'body',

  // Replace a new playlist with the first loaded playlist
  // instead of adding it at the end of it.
  // [type `boolean`, default `false`]
  clearPriorAudioLists: false,

  // Play your new play list right after your new play list is loaded turn false.
  // [type `boolean`, default `false`]
  autoPlayInitLoadPlayList: false,

  //Whether to load audio immediately after the page loads.  [type `Boolean | String`, default `false`]
  //"auto|metadata|none" "true| false"
  preload: false,

  //Whether the player's background displays frosted glass effect  [type `Boolean`, default `false`]
  glassBg: false,

  //The next time you access the player, do you keep the last state  [type `Boolean` default `false`]
  remember: false,

  //The Audio Can be deleted  [type `Boolean`, default `true`]
  remove: true,

  //audio controller initial position    [ type `Object` default '{top:0,left:0}' ]
  defaultPosition: {
    right: 100,
    bottom: 120,
  },

  defaultPlayMode: 'order',

  // if you want dynamic change current play mode you can change it
  // [type`order | orderLoop | singleLoop | shufflePlay`, default `order`]
  // playMode: 'order',

  //audio mode        mini | full          [type `String`  default `mini`]
  mode: 'mini',

  /**
   * [ type `Boolean` default 'false' ]
   * The default audioPlay handle function will be played again after each pause, If you only want to trigger it once, you can set 'true'
   */
  once: false,

  //Whether the audio is played after loading is completed. [type `Boolean` default 'true']
  autoPlay: false,

  //Whether you can switch between two modes, full => mini  or mini => full   [type 'Boolean' default 'true']
  toggleMode: true,

  //audio cover is show of the "mini" mode [type `Boolean` default 'true']
  showMiniModeCover: true,

  //audio playing progress is show of the "mini"  mode
  showMiniProcessBar: false,

  //audio controller is can be drag of the "mini" mode     [type `Boolean` default `true`]
  drag: true,

  //drag the audio progress bar [type `Boolean` default `true`]
  seeked: true,

  //Display chrome media session.  [type `Boolean` default `false`]
  showMediaSession: true,

  //Displays the audio load progress bar.  [type `Boolean` default `true`]
  showProgressLoadBar: true,

  //play button display of the audio player panel   [type `Boolean` default `true`]
  showPlay: true,

  //reload button display of the audio player panel   [type `Boolean` default `true`]
  showReload: true,

  //download button display of the audio player panel   [type `Boolean` default `true`]
  showDownload: true,

  //loop button display of the audio player panel   [type `Boolean` default `true`]
  showPlayMode: true,

  //theme toggle switch  display of the audio player panel   [type `Boolean` default `true`]
  showThemeSwitch: true,

  //lyric display of the audio player panel   [type `Boolean` default `false`]
  showLyric: true,

  //destroy player button display  [type `Boolean` default `false`]
  showDestroy: true,

  //Extensible custom content       [type 'Array' default '-' ]
  extendsContent: null,

  //default volume of the audio player [type `Number` default `1` range `0-1`]
  defaultVolume: 1,

  //playModeText show time [type `Number(ms)` default `700`]
  playModeShowTime: 600,

  //Whether to try playing the next audio when the current audio playback fails [type `Boolean` default `true`]
  loadAudioErrorPlayNext: true,

  // Auto hide the cover photo if no cover photo is available [type `Boolean` default `false`]
  autoHiddenCover: false,

  // Play and pause audio through blank space [type `Boolean` default `false`]
  spaceBar: true,

  // international [type `en_US | zh_CN | Object` default `en_US`]
  locale: Locale.en_US,

  // Enable responsive player, auto toggle desktop and mobile [type `Boolean` default `true`]
  responsive: true,

  /**
   * @description Customer audio title [type `String | Function` default `${name} - ${singer}`]
   * @example
   * audioTitle: (audioInfo) => 'title'
   */

  // audioTitle: 'xxxx',

  //Music is downloaded handle
  onAudioDownload(audioInfo) {
    console.log('audio download', audioInfo)
  },

  //audio play handle
  onAudioPlay(audioInfo) {
    console.log('audio playing', audioInfo)
  },

  //audio pause handle
  onAudioPause(audioInfo) {
    console.log('audio pause', audioInfo)
  },

  //When the user has moved/jumped to a new location in audio
  onAudioSeeked(audioInfo) {
    console.log('audio seeked', audioInfo)
  },

  //When the volume has changed  min = 0.0  max = 1.0
  onAudioVolumeChange(currentVolume) {
    console.log('audio volume change', currentVolume)
  },

  //The single song is ended handle
  onAudioEnded(currentPlayId, audioLists, audioInfo) {
    console.log('audio ended', currentPlayId, audioLists, audioInfo)
  },

  //audio load abort
  onAudioAbort(currentPlayId, audioLists, audioInfo) {
    console.log('audio abort', currentPlayId, audioLists, audioInfo)
  },

  //audio play progress handle
  onAudioProgress(audioInfo) {
    // console.log('audio progress',audioInfo);
  },

  //audio reload handle
  onAudioReload(audioInfo) {
    console.log('audio reload:', audioInfo)
  },

  //audio load failed error handle
  onAudioError(errMsg, currentPlayId, audioLists, audioInfo) {
    console.error(
      'audio load error',
      errMsg,
      currentPlayId,
      audioLists,
      audioInfo,
    )
  },

  //theme change handle
  // onThemeChange(theme) {
  //   console.log('theme change:', theme)
  // },

  onAudioListsChange(currentPlayId, audioLists, audioInfo) {
    console.log('[currentPlayId] audio lists change:', currentPlayId)
    console.log('[audioLists] audio lists change:', audioLists)
    console.log('[audioInfo] audio lists change:', audioInfo)
  },

  onAudioPlayTrackChange(currentPlayId, audioLists, audioInfo) {
    console.log(
      'audio play track change:',
      currentPlayId,
      audioLists,
      audioInfo,
    )
  },

  // onPlayModeChange(playMode) {
  //   console.log('play mode change:', playMode)
  // },

  // onModeChange(mode) {
  //   console.log('mode change:', mode)
  // },

  onAudioListsPanelChange(panelVisible) {
    console.log('audio lists panel visible:', panelVisible)
  },

  onAudioListsDragEnd(fromIndex, endIndex) {
    console.log('audio lists drag end:', fromIndex, endIndex)
  },

  onAudioLyricChange(lineNum, currentLyric) {
    console.log('audio lyric change:', lineNum, currentLyric)
  },

  // custom music player root node
  getContainer() {
    return document.body
  },

  /**
   * @description get origin audio element instance , you can use it do everything
   * @example
   * audio.playbackRate = 1.5  // set play back rate
   * audio.crossOrigin = 'xxx' // config cross origin
   */
  getAudioInstance(audio) {
    console.log('audio instance', audio)
  },

  onBeforeDestroy(currentPlayId, audioLists, audioInfo) {
    console.log('currentPlayId: ', currentPlayId)
    console.log('audioLists: ', audioLists)
    console.log('audioInfo: ', audioInfo)
    return new Promise((resolve, reject) => {
      // your custom validate
      if (window.confirm('Are you confirm destroy the player?')) {
        // if resolve, player destroyed
        resolve()
      } else {
        // if reject, skip.
        reject()
      }
    })
  },

  onDestroyed(currentPlayId, audioLists, audioInfo) {
    console.log('onDestroyed:', currentPlayId, audioLists, audioInfo)
  },

  onCoverClick (mode, audioLists, audioInfo) {
    console.log('onCoverClick: ', mode, audioLists, audioInfo);
  },

  // onPlayIndexChange (playIndex) {
  //   console.log('onPlayIndexChange: ', playIndex);
  // }

  // transform audio info like return a Promise

  /**
   * @return
   *  {
   *    src: 'xxx',
   *    filename: 'xxx',
   *    mimeType: 'xxx'
   *  }
   */
  // onBeforeAudioDownload() {
  //   return Promise.resolve({
  //     src: '1.mp3',
  //   })
  // },

  /**
   * customer download handler
   * eg. a link , or https://www.npmjs.com/package/file-saver
   * @param {*} downloadInfo
   * @example
   *
       customDownloader(downloadInfo) {
        const link = document.createElement('a')
        link.href = downloadInfo.src
        link.download = downloadInfo.filename || 'test'
        document.body.appendChild(link)
        link.click()
      },
   */
  // customDownloader(downloadInfo) {
  //   console.log(downloadInfo.src)
  //   console.log(downloadInfo.filename)
  //   console.log(downloadInfo.mimeType)
  // },
}

class Demo extends React.PureComponent {
  constructor(props) {
    super(props)
    this.audio = {}
  }
  state = {
    unmount: false,
    params: {
      ...options,
      getAudioInstance: (audio) => {
        this.audio = audio
      },
    },
  }
  onAddAudio = () => {
    this.updateParams({
      clearPriorAudioLists: false,
      audioLists: [
        ...this.state.params.audioLists,
        {
          name: "I'm new here",
          singer: 'jack',
          cover: 'http://www.lijinke.cn/music/1387583682387727.jpg',
          musicSrc: `http://www.lijinke.cn/music/${Date.now()}.mp3`,
        },
      ],
    })
  }
  extendsContent = () => {
    this.updateParams({
      extendsContent: (
        <button onClick={() => swal("I'm extends content")}>button</button>
      ),
    })
  }

  onChangeToFirstAudioList = () => {
    this.updateParams({
      clearPriorAudioLists: true,
      audioLists: audioList1,
    })
  }

  onChangeToSecondAudioList = () => {
    this.updateParams({ clearPriorAudioLists: true, audioLists: audioList2 })
  }
  onAutoPlayMode = () => {
    this.updateParams({
      autoPlay: !this.state.params.autoPlay,
    })
  }

  onAutoPlayInitLoadPlayList = () => {
    this.updateParams({
      autoPlayInitLoadPlayList: !this.state.params.autoPlayInitLoadPlayList,
    })
  }

  onClearPriorAudioLists = () => {
    this.updateParams({
      clearPriorAudioLists: !this.state.params.clearPriorAudioLists,
    })
  }

  onShowGlassBg = () => {
    this.onChangeKey('glassBg')
  }
  onDrag = () => {
    this.onChangeKey('drag')
  }
  onToggleMode = () => {
    this.onChangeKey('toggleMode')
  }
  onSeeked = () => {
    this.onChangeKey('seeked')
  }
  onChangeKey = (key) => {
    const data = {
      ...this.state.params,
      [key]: !this.state.params[key],
    }
    if (key === 'light' || key === 'dark') {
      data.theme = key
    }
    if (key === 'full' || key === 'mini') {
      data.mode = key
    }
    if (Object.values(Locale).includes(key)) {
      data.locale = key
    }
    this.setState({ params: data })
  }
  showMiniProcessBar = () => {
    this.onChangeKey('showMiniProcessBar')
  }
  showMiniModeCover = () => {
    this.onChangeKey('showMiniModeCover')
  }
  playModeShowTime = () => {
    this.updateParams({
      playModeShowTime: createRandomNum(200, 2000),
    })
  }
  changePlayIndex = () => {
    this.updateParams({
      playIndex: createRandomNum(0, this.state.params.audioLists.length - 1),
    })
  }
  updateParams = (params) => {
    const data = {
      ...this.state.params,
      ...params,
    }
    this.setState({
      params: data,
    })
  }
  unmountPlayer = () => {
    this.setState({ unmount: true })
  }

  onPlayModeChange = (e) => {
    this.updateParams({ playMode: e.target.value })
  }

  renderCustomUI = () => {
    return (
      <>
        <h2>Custom UI</h2>
        <button onClick={() => this.audio.play()}>play</button>
        <button onClick={() => this.audio.pause()}>pause</button>
        <button onClick={() => this.audio.load()}>reload</button>
        <button onClick={() => (this.audio.currentTime = 40)}>
          change current play time
        </button>
        <button onClick={() => (this.audio.playbackRate = 2)}>
          change play back rate
        </button>
        <button onClick={() => (this.audio.volume = 0.2)}>change volume</button>
        <button onClick={() => this.audio.destroy()}>destroy player</button>
        <button onClick={() => this.audio.appendAudio(1, audioList2)}>append audio</button>
        <button onClick={this.audio.togglePlay}>toggle play</button>
        <button onClick={this.audio.clear}>clear audio lists</button>
        <button onClick={this.audio.playNext}>play next</button>
        <button onClick={this.audio.playPrev}>play prev</button>
        <button onClick={() => this.audio.playByIndex(1)}>play by index</button>
        <button onClick={() => this.audio.updatePlayIndex(1)}>updatePlayIndex</button>
      </>
    )
  }

  render() {
    const { params, unmount } = this.state
    return (
      <>
        <h1 className="title">
          <span className="name">
            <a href={repository.url} target="_blank" rel="noopener noreferrer" title="go to github">
              {name}
            </a>
          </span>
          <span className="version">doc version: {version}</span>
        </h1>
        <p className="version">
          <a
            href="https://badge.fury.io/js/react-jinke-music-playerr"
            title="npm"
          >
            <img
              src="https://img.shields.io/npm/v/react-jinke-music-player.svg?style=flat-square"
              alt="npm version"
            />
          </a>
        </p>
        <h2 className="example-title">
          Drag, Click, or switch to phone mode to try{' '}
          <a
            target="_blank"
            href="https://github.com/lijinke666/react-music-player/blob/master/example/example.js"
          >
            (DEMO SOURCE)
          </a>
        </h2>
        <section className="settings">
          <button onClick={this.onChangeToFirstAudioList}>
            change to first audio list ({audioList1.length})
          </button>
          <button onClick={this.onChangeToSecondAudioList}>
            change to second audio list ({audioList2.length})
          </button>
          <button onClick={this.onAddAudio}>
            + add audio ({params.audioLists.length})
          </button>
          <button onClick={this.extendsContent}>+ add extends content</button>
          <button onClick={this.playModeShowTime}>
            change play mode show time ({params.playModeShowTime} ms)
          </button>
          <button onClick={this.changePlayIndex}>
            change playIndex ({params.playIndex || 0})
          </button>
          <select onChange={this.onPlayModeChange} value={params.playMode}>
            {Object.values(PLAY_MODE).map((playMode) => (
              <option value={playMode} key={playMode}>
                playMode: {playMode}
              </option>
            ))}
          </select>
          <button onClick={this.unmountPlayer}>unmount player</button>
          <br />
          <br />
          <label htmlFor="glassBg">
            <input type="checkbox" id="glassBg" onChange={this.onShowGlassBg} />
            glassBg
          </label>
          <label htmlFor="drag">
            <input
              type="checkbox"
              id="drag"
              checked={params.drag}
              onChange={this.onDrag}
            />
            drag
          </label>
          <label htmlFor="seeked">
            <input
              type="checkbox"
              id="seeked"
              checked={params.seeked}
              onChange={this.onSeeked}
            />
            seeked
          </label>
          <label htmlFor="toggle">
            <input
              type="checkbox"
              id="toggle"
              checked={params.toggleMode}
              onChange={this.onToggleMode}
            />
            toggleMode
          </label>
          <label htmlFor="autoPlay">
            <input
              type="checkbox"
              id="autoPlay"
              checked={params.autoPlay}
              onChange={this.onAutoPlayMode}
            />
            autoPlay
          </label>
          <label htmlFor="clearPriorAudioLists">
            <input
              type="checkbox"
              id="clearPriorAudioLists"
              checked={params.clearPriorAudioLists}
              onChange={this.onClearPriorAudioLists}
            />
            clearPriorAudioLists
          </label>
          <label htmlFor="onAutoPlayInitLoadPlayList">
            <input
              type="checkbox"
              id="onAutoPlayInitLoadPlayList"
              checked={params.autoPlayInitLoadPlayList}
              onChange={this.onAutoPlayInitLoadPlayList}
            />
            autoplayInitLoadPlayList
          </label>
          <label htmlFor="showMiniProcessBar">
            <input
              type="checkbox"
              id="showMiniProcessBar"
              checked={params.showMiniProcessBar}
              onChange={this.showMiniProcessBar}
            />
            showMiniProcessBar
          </label>
          <label htmlFor="showMiniModeCover">
            <input
              type="checkbox"
              id="showMiniModeCover"
              checked={params.showMiniModeCover}
              onChange={this.showMiniModeCover}
            />
            showMiniModeCover
          </label>
          <label htmlFor="showProgressLoadBar">
            <input
              type="checkbox"
              id="showProgressLoadBar"
              checked={params.showProgressLoadBar}
              onChange={() => this.onChangeKey('showProgressLoadBar')}
            />
            showProgressLoadBar
          </label>
          <label htmlFor="showPlay">
            <input
              type="checkbox"
              id="showPlay"
              checked={params.showPlay}
              onChange={() => this.onChangeKey('showPlay')}
            />
            showPlay
          </label>
          <label htmlFor="showReload">
            <input
              type="checkbox"
              id="showReload"
              checked={params.showReload}
              onChange={() => this.onChangeKey('showReload')}
            />
            showReload
          </label>
          <label htmlFor="showDownload">
            <input
              type="checkbox"
              id="showDownload"
              checked={params.showDownload}
              onChange={() => this.onChangeKey('showDownload')}
            />
            showDownload
          </label>
          <label htmlFor="showPlayMode">
            <input
              type="checkbox"
              id="showPlayMode"
              checked={params.showPlayMode}
              onChange={() => this.onChangeKey('showPlayMode')}
            />
            showPlayMode
          </label>
          <label htmlFor="showThemeSwitch">
            <input
              type="checkbox"
              id="showThemeSwitch"
              checked={params.showThemeSwitch}
              onChange={() => this.onChangeKey('showThemeSwitch')}
            />
            showThemeSwitch
          </label>
          <label htmlFor="showLyric">
            <input
              type="checkbox"
              id="showLyric"
              checked={params.showLyric}
              onChange={() => this.onChangeKey('showLyric')}
            />
            showLyric
          </label>
          <label htmlFor="showDestroy">
            <input
              type="checkbox"
              id="showDestroy"
              checked={params.showDestroy}
              onChange={() => this.onChangeKey('showDestroy')}
            />
            showDestroy
          </label>
          <label htmlFor="preload">
            <input
              type="checkbox"
              id="preload"
              checked={params.preload}
              onChange={() => this.onChangeKey('preload')}
            />
            preload
          </label>
          <label htmlFor="remove">
            <input
              type="checkbox"
              id="remove"
              checked={params.remove}
              onChange={() => this.onChangeKey('remove')}
            />
            remove
          </label>
          <label htmlFor="remember">
            <input
              type="checkbox"
              id="remember"
              checked={params.remember}
              onChange={() => this.onChangeKey('remember')}
            />
            remember
          </label>
          <label htmlFor="spaceBar">
            <input
              type="checkbox"
              id="spaceBar"
              checked={params.spaceBar}
              onChange={() => this.onChangeKey('spaceBar')}
            />
            spaceBar
          </label>
          <label htmlFor="responsive">
            <input
              type="checkbox"
              id="responsive"
              checked={params.responsive}
              onChange={() => this.onChangeKey('responsive')}
            />
            responsive
          </label>
          <label htmlFor="autoHiddenCover">
            <input
              type="checkbox"
              id="autoHiddenCover"
              checked={params.autoHiddenCover}
              onChange={() => this.onChangeKey('autoHiddenCover')}
            />
            autoHiddenCover
          </label>
          <div className="toggle">
            theme :{params.theme}
            <Switch
              checkedChildren={'D'}
              unCheckedChildren={'L'}
              checked={params.theme === 'light'}
              onChange={(checked) =>
                this.onChangeKey(checked ? 'light' : 'dark')
              }
            />
            mode :{params.mode}
            <Switch
              checkedChildren={'M'}
              unCheckedChildren={'F'}
              checked={params.mode === 'mini'}
              onChange={(checked) =>
                this.onChangeKey(checked ? 'mini' : 'full')
              }
            />
            language :{params.locale}
            <Switch
              checkedChildren={'zh'}
              unCheckedChildren={'en'}
              checked={params.locale === Locale.zh_CN}
              onChange={(checked) =>
                this.onChangeKey(checked ? Locale.zh_CN : Locale.en_US)
              }
            />
          </div>
          <div>{this.renderCustomUI()}</div>
        </section>
        {unmount ? null : (
          <ReactJkMusicPlayer
            {...params}
            onThemeChange={(theme) => {
              console.log('onThemeChange: ', theme)
              this.updateParams({ theme })
            }}
            onModeChange={(mode) => {
              console.log('onModeChange: ', mode)
              this.updateParams({ mode })
            }}
            onPlayModeChange={(playMode) => {
              console.log('onPlayModeChange: ', playMode)
              this.updateParams({ playMode })
            }}
            onPlayIndexChange={(playIndex) => {
              console.log('onPlayIndexChange: ', playIndex)
              this.updateParams({ playIndex })
            }}
          />
        )}
      </>
    )
  }
}

export default hot(Demo)
