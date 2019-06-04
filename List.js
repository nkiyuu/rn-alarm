// @flow

import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';

type Alarm = {
  id: string,
  time: string,
};

const alarms: Alarm[] = [
  {
    id: '1',
    time: '08:00',
  },
  {
    id: '2',
    time: '10:00',
  },
  {
    id: '3',
    time: '12:00',
  },
];

type Props = {};

export default class AlarmList extends Component<{}, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View>
        <FlatList
          data={alarms}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item }) => (
            <Text>
              {item.id} -- {item.time}
            </Text>
          )}
        />
      </View>
    );
  }
}
