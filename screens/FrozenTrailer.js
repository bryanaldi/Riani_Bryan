import React, {Component} from 'react';
import {WebView} from 'react-native';

export default class FrozenTrailer extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://www.youtube.com/watch?v=bwzLiQZDw2I&t=25s'}}
        style={{marginTop: 20}}
      />
    );
  }
}