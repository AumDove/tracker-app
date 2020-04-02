import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import { Context } from '../context/AuthContext';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
	const { state, signin, clearErrorMessage } = useContext(Context);

	return (
		<View style={styles.container}>
			<NavigationEvents onWillBlur={clearErrorMessage} />
			<AuthForm
				headerText='Sign In to Your Account'
				errorMessage={state.errorMessage}
				onSubmit={signin}
				submitButtonText='Sign In'
			/>
			<NavLink
				text="Don't have an account? Sign up instead"
				routeName='Signup'
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	}
});

export default SigninScreen;
