/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { AppConfig } from './app/store/config';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppConfig);
