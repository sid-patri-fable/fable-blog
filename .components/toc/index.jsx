import React from 'react'
import "./index.css"

const TOC = (props) => {
  return (
    <div className='toc-con'>
      <p className='toc-title'>Table of Contents</p>
      <ul className='toc-list'>
        {props.toc.map((content) => {
          return (
            <li
              style={{
                marginLeft: content.depth * 10
              }}
              className='toc-list-item'
              key={`${content.data.hProperties.id}`}
            >
              <a href={`#${content.data.hProperties.id}`}>{content.value}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TOC
