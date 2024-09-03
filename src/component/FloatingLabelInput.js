import React, { useState, useRef,useCallback  } from 'react';
import { View, TextInput, Animated, StyleSheet } from 'react-native';

const FloatingLabelInput = ({ label, value, onChangeText, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedIsFocused = useRef(new Animated.Value(value ? 1 : 0)).current;

  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback(() => setIsFocused(false), []);

  React.useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: (isFocused || value.length > 0) ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value, animatedIsFocused]);

  const labelStyle = {
    position: 'absolute',
    left: 16,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 0],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: ['#aaa', '#000'],
    }),
    zIndex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 4,
  };

  const borderColor = isFocused ? '#FFD700' : '#ddd';

  return (
    <View style={styles.inputContainer}>
      <Animated.Text style={labelStyle}>
        {label}
      </Animated.Text>
      <TextInput
        style={[styles.input, { borderColor }]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={onChangeText}
        value={value}
        {...props}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
    position: 'relative',
  },
  input: {
    height: 56,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: Platform.OS === 'ios' ? 16 : 8,
  },
});

export default FloatingLabelInput;