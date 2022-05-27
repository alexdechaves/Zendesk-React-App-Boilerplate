import React, { useState, useEffect, useRef } from 'react'
import zafClient from '../../zafClient'
import { mq, fonts, colors, gradients } from '../style-vars';
import MagnifyGlass from '../svg/magnify-glass';
import TopLogo from './top-logo'


const App = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const inputRef = useRef()
  const iframeRef = useRef()

  useEffect(async () => {
    zafClient.invoke('resize', { height: '100%' })
  }, [])

  const searchDocs = () => {
    setSearchQuery(inputRef.current.value)
    zafClient.invoke('resize', { height: '700px' })
  }

  return (
    <div className="App">
      {!searchQuery ?
        <div>
          <TopLogo />
          <div className="search-bar">
            <input ref={inputRef} placeholder="Search docs..."></input>
            <button className="mag-icon" onClick={searchDocs}><MagnifyGlass /></button>
          </div>
        </div>
        :
        <div>
          <button className="cancel" onClick={() => setSearchQuery()}>Cancel search</button>
          <div className='wrap'>
            <iframe
              ref={iframeRef}
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              src={`https://docs.mux.com?q=${searchQuery}`}>
            </iframe>
          </div>
        </div>
      }
      <style jsx>{`
      .search-bar {
        display: flex;
        margin-bottom: 50px;
      }
      button {
        width: 50px;
        color: rgb(153, 153, 153);
        border: 1px solid rgb(232, 232, 232);
        padding: 4px;
        margin-left: 3px;
        border-radius: 5px;
        cursor: pointer;
        background: rgb(255, 255, 255);
        transition: border 500ms;
      }
      .cancel {
        width: 310px;
        background: ${gradients.pink1};
        color: ${colors.gray27};
        margin: 10px auto;
      }
      .mag-icon {
        color: ${colors.gray60};
        margin-right: 10px;
        padding-top: 3px
      }
      input {
        display: flex;
        width: 80%;
        align-items: center;
        padding: 7px;
        margin: 0 auto;
        color: ${colors.gray60};
        border-radius: 4px;
        border: 1px solid rgb(232, 232, 232);
        font-size: 14px;
        line-height: 20px;
        font-family: ${fonts.main};
        background: white;
        text-align: left;
        transition: border-color 200ms ease; box-shadow 200ms ease,-webkit-box-shadow 200ms ease;
      }
      input:hover, button:hover {
        border: 1px solid ${colors.gray22};
        color: ${colors.gray22};
      }
      input:hover .shortcut-icon,
      input:hover .mag-icon {
        color: ${colors.gray22};
      }
      input:focus {
        border-color: ${colors.gray60};
        outline: none;
        color: ${colors.gray22};
      }
      .wrap {
        width: 320px;
        height: 800px;
        overflow: hidden;
      }
      iframe {
          border: none;
          position: relative;
          width: 130% !important;
          height: 150% !important;
          -webkit-transform: scale(0.75);
          transform: scale(0.75);
          -webkit-transform-origin: 0 0;
          transform-origin: 0 0;
      }
    `}
    </style>
    </div>
    
  )
}

export default App
