import React from "react"
import CloseBtn from "react-icons/lib/md/close"
import NotContent from "react-icons/lib/md/library-music"
import PlayIcon from "react-icons/lib/md/play-arrow"
import PauseIcon from "react-icons/lib/md/pause"
import classNames from "classnames"

const AudioListsPanel = ({ 
    audioLists, 
    visible, 
    notContentText, 
    onCancel
 }) => (
    <div
      className={classNames("audio-lists-panel", { "show": visible })} key="audio-list-panel"
    >
      <div className="audio-lists-panel-header">
        <h2 className="title">
          <span>播放列表/</span>
          <span className="num" key="num">{audioLists.length}</span>
          <span className="close-btn" onClick={onCancel}><CloseBtn /></span>
        </h2>
      </div>
      <div 
        className={classNames("audio-lists-panel-content",{"no-content":audioLists.length < 1}) } 
        key="audio-lists-panel-content"
      >
        {
          audioLists.length >= 1
            ? <ul>
                {
                    audioLists.map((audio,i)=>{
                        return (
                            <li className="audio-item" key={i}>
                                <span className="group player-status" key="player-status"><PlayIcon/></span>
                                <span className="group player-name">消愁</span>
                                <span className="group player-time">02:89</span>     
                            </li>
                        )
                    })
                }
            </ul>
            : <div>
              <span><NotContent /></span>
              <span className="no-data" key="no-data">{notContentText}</span>
            </div>
        }
      </div>
    </div>
  )

  export default AudioListsPanel