import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { GlobalStyleSheet } from '../../constants/styleSheet'
import { IMAGES } from '../../constants/theme'

const HomeHeader = ({ theme }) => {
    const { colors } = theme;
    const navigation = useNavigation();
  return (
      <View style={[GlobalStyleSheet.flexalingjust, { height: 50 }]}>
          <View>
<Text>Instagram</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                  style={[GlobalStyleSheet.btnicon, { marginRight: 10, backgroundColor: theme.dark ? 'rgba(255,255,255,.1)' : '#EFF3FA'}]}
                  onPress={() => navigation.navigate('createpost')}
              >
                  <Image
                      style={{ width: 16, height: 16, tintColor: theme.dark ? '#fff':'#475A77' }}
                      source={IMAGES.plus}
                  />
              </TouchableOpacity>

              <TouchableOpacity
                  style={[GlobalStyleSheet.btnicon, { marginRight: 10, backgroundColor: theme.dark ? 'rgba(255,255,255,.1)' : '#EFF3FA' }]}
                  onPress={() => navigation.navigate('notification')}
              >
                  <Image
                      style={{ width: 20, height: 20, tintColor: theme.dark ? '#fff' : '#475A77' }}
                      source={IMAGES.bell}
                  />
              </TouchableOpacity>
          </View>
      </View>
  )
}

export default HomeHeader