import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';

const TrackForm = () => {
	const {
		state: { name, recording, locations },
		startRecording,
		stopRecording,
		changeName
	} = useContext(LocationContext);

	console.log(locations.length);

	return (
		<>
			<Spacer>
				<Input
					value={name}
					onChangeText={changeName}
					placeholder='Enter Track Name'
				/>
			</Spacer>
			<Spacer />
			{recording ? (
				<Button title='STOP' onPress={stopRecording} />
			) : (
				<Button title='Start Recording' onPress={startRecording} />
			)}
		</>
	);
};

const styles = StyleSheet.create({});

export default TrackForm;
