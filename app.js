class Channel extends React.Component{

	onClick(){
		console.log('clicked: ' + this.props.name);
	}

	render(){
		return(
			<li onClick={this.onClick.bind(this)}>{this.props.name}</li>
		)
	}
}

ReactDOM.render(<Channel name='hardware store'/>, document.getElementById('app'));
