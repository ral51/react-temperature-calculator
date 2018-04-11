import React from 'react';

export class BoilingVerdict extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		var divStyle = {
			color: this.props.temperature >= 100 ? 'red' : 'green'
		};	
		var content = this.props.temperature >= 100 ?  '' : 'not';

		var node = this.props.temperature >= 100 ? <p style={divStyle}>The water would boil.</p> : <p style={divStyle}>The water would {content} boil.</p>;
		
		return (
			<div>
				{node}
			</div>
		);
	}

}
