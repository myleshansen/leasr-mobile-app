import React, { Component } from 'react';
import { View, Text, Stylesheet } from 'react-native'

import { SearchBar } from 'react-native-elements';

export default class MapSearchBar extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
        lightTheme
        round
        containerStyle={{backgroundColor: 'transparent', borderTopColor: 'transparent', borderBottomColor: 'transparent'}}
      />
    );
  }
}

