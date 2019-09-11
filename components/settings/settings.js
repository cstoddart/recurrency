import React, { Component } from 'react';
import { TouchableOpacity, AsyncStorage } from 'react-native';

import {
	PageContainer,
	BottomNavigation,
	TopNavigation,
	PageContent,
	Text,
} from '../ui';
import {
	SettingsSectionHeader,
} from './settingsStyles';

export class Settings extends Component {
	logout = () => {
		AsyncStorage.removeItem('userId');
		this.props.history.push('/login');
	};

  render() {
    return (
			<PageContainer>
				<TopNavigation pageTitle="Settings" currentPath={this.props.history.location.pathname} />
				<PageContent>
					<SettingsSectionHeader>Linked Accounts</SettingsSectionHeader>
					<TouchableOpacity onPress={this.logout} underlayColor><Text>Logout</Text></TouchableOpacity>
				</PageContent>
				<BottomNavigation currentPath={this.props.history.location.pathname} />
			</PageContainer>
		);
  }
}
