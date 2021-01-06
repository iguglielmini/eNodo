import { AppRegistry, Text, TextInput } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

/*
 * Disabling font scaling to avoid layout problems
 * You may comment these 4 lines above if a proper accessibility fix is made.
 */
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;


AppRegistry.registerComponent(appName, () => App);
