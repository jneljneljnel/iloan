import React , { Component } from 'react';
import FileItem from './fileItem';

const styles = { display: 'flex','font-size': 0, flexWrap: 'wrap', margin: '-10px 0 0 -10px'}
const inputStyles  = {	width: '0.1px',
	height: '0.1px',
	opacity: '0',
	overflow: 'hidden',
	position: 'absolute',
	zIndex: '-1'
}

const labelStyles  = {	fontSize: '1.25em',
	padding:'10px',
	fontWeight: 700,
	color:'white',
	backgroundColor: 'black',
	display: 'inline-block'
}

const toggleButtonStyles  = {	fontSize: '1.25em',
	padding:'10px',
	fontWeight: 700,
	color:'blue',
	backgroundColor: 'white',
	display: 'inline-block',
	position: 'absolute',
	top:'0',
	right:'0'
}

//^Styles
//////////////////////////////////////////////////////


class FileList extends Component {
	constructor(props) {
	  super(props);
	  this.state = { 
	  		files: [],
	  		tileView: true

	  };
	  this.handleFileUpload = this.handleFileUpload.bind(this);
	  this.toggleView = this.toggleView.bind(this);
	}

	handleFileUpload (event) {
	    let filesArray = this.state.files;
	    event.target.files[0].path = URL.createObjectURL(event.target.files[0]); 
	    filesArray.push(event.target.files[0]);
	    this.setState({files:filesArray});  
   }

   toggleView(){
   		let currentView = this.state.tileView;
   		console.log(!currentView);
   		this.setState({tileView:!currentView});  
   }

   // removeFile(key){
   // 	let filesArray = this.state.files
   // 	filesArray.filter(file => file.key != key )
   // }

  render() {
    return (
    	
    <div>
    	<button style={toggleButtonStyles} onClick={this.toggleView}><img height='50px' width='50px' src={this.state.tileView ? require('../assets/tile.png') :  require('../assets/list.png')}/></button>	     	
      <div>
      	<input type='file' name='file' id='file' onChange={this.handleFileUpload} style={inputStyles}/>
      	<label for="file" style={labelStyles}>Choose a file.</label>
      </div>
		  {
	      	this.state.files.map( (file, i) => { 
	      		return < FileItem 
	      					key={i}
	      					path={file.path}
	      					name={file.name}
	      					size ={file.size}
	      					type ={file.type}
	      					view ={this.state.tileView} />
	      	})
	      }
      <div>
		<h2>
			Total size: {
		   Object.keys(this.state.files).reduce((a, b) => {
		  	return  a + this.state.files[b].size
		  }, 0) }
		</h2>
      </div>
    </div> 
   );
  }
}

export default FileList;