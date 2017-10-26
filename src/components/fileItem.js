import React from 'react';

const FileItem = (props) => {

const styles = {
  display: 'inline-block',
  background: 'rgba(0, 43, 255, 0.1)',
  margin: '10px 0 0 10px',
  padding: '5px',
  flexGrow: '1',
  textOverflow: 'ellipsis',
  width: 'calc(100% * (1/4) - 15px - 7px)'
}

const listStyles = {
  display: 'block',
  background: 'rgba(0, 43, 255, 0.1)',
  margin: '10px 0 0 10px',
  padding: '5px',
  flexGrow: '1',
  textOverflow: 'ellipsis',
  width:'100%'
}
const buttonStyles = {
    float: 'right',
    margin: ' 5px',
    padding: '0px 5px 2px 6px',
}

const imgStyle = {
    padding: '5px',
}

const h2Styles = {
    whiteSpace: 'nowrap',
    overflow:'hidden'
}
//^Styles
//////////////////////////////////////////////////////

const remove = e => {
  e.target.parentNode.style.display = 'none';
}

  return(
    <div style={props.view ? styles : listStyles}>
      <button style={buttonStyles} onClick={remove}>x</button>
      <img style={imgStyle} src={props.type =='image/jpeg' || 'image/png'? props.path : require('../assets/file.png')} width="50" height='50' />
      <h2 style={h2Styles}>{props.name}</h2>
      <h4>{props.type}</h4>
      <h4>{props.size}</h4>
    </div>
    )
}

export default FileItem