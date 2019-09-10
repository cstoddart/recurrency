import React, { Component } from 'react';
import { Text, TouchableOpacity, AsyncStorage } from 'react-native';

export class Settings extends Component {
	logout = () => {
		AsyncStorage.removeItem('userId');
		this.props.history.push('/login');
	};

  render() {
    return (
			<>
				<Text>Settings</Text>
				<TouchableOpacity onPress={this.logout}><Text>Logout</Text></TouchableOpacity>
			</>
		);
  }
}
