import 'react-native';
import React from 'react';
// import App from '../src/App/App.tsx';
import App from './App'
import 'jasmine';
import TestRenderer from 'react-test-renderer';

it('renders correctly', () => {
  TestRenderer.create(<App />);
});
