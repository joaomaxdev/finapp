import React from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity
} from "react-native";

import { Feather } from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ name }) {
  return (
    <View style={style.container}>
      |<View style={style.content}>
        <Text style={style.username}>{name}</Text>

        <TouchableOpacity activeOpacity={0.9} style={style.buttonUser}>
          <Feather name="user" size={27} color="#FFF"></Feather>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#8000ff',
    paddingTop: statusBarHeight,
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44
  },
  content: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  username: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold'
  },
  buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255,255,255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 44 / 2
  }
})