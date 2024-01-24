import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom';

const TOC = (props) => {
  return (
    <div className='toc-con'>
      <p className='toc-title'>Table of Contents</p>
      <ul className='toc-list'>
        {props.toc?.map((content) => {
          return (
            <li
              style={{
                marginLeft: content.depth * 10
              }}
              className='toc-list-item'
              key={`${content.data.hProperties.id}`}
            >
              <Link href={`#${content.data.hProperties.id}`}>{content.value}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TOC
