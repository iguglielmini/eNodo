/* eslint-disable no-underscore-dangle */
import React, {
  useEffect, useContext, useState, useRef, useMemo,
} from 'react';
import {
  View, Text, TouchableOpacity, Animated, Easing, PanResponder,
} from 'react-native';

import CloseIcon from '@assets/svg/close';

import { WHITE } from '@assets/style/colors';
import { ToastContext } from './index';
import styles from './style';

const Toast = () => {
  async function sleep(m) {
    return new Promise(r => setTimeout(() => r(), m));
  }

  const {
    state: {
      title: stateTitle, message: text, type: stateType, duration: time, isVisible, uuid,
    },
    dispatch,
  } = useContext(ToastContext);

  const [appearing, setAppearing] = useState(false);
  const [panResponder, setPanResponder] = useState(null);

  const title = useMemo(() => stateTitle, [appearing]);
  const type = useMemo(() => stateType, [appearing]);

  const action = useRef(null);

  const top = useRef(new Animated.Value(-180)).current;
  const pan = useRef(new Animated.ValueXY()).current;

  async function open(cb) {
    setAppearing(true);

    Animated.timing(
      top,
      {
        toValue: 10,
        easing: Easing.out(Easing.cubic),
        duration: 500,
        useNativeDriver: false,
      },
    ).start(() => cb && cb());
  }

  async function close() {
    Animated.timing(
      top,
      {
        toValue: -180,
        easing: Easing.in(Easing.cubic),
        duration: 300,
        useNativeDriver: false,
      },
    ).start(() => {
      pan.setValue({ x: 0, y: 0 });
      clearTimeout(action.current);
      dispatch({ type: 'REMOVE_TOAST' });
      setAppearing(false);
    });
  }

  useEffect(() => {
    const newPanResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        clearTimeout(action.current);
        pan.setOffset(pan.__getValue());
        pan.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: (e, gestureState) => {
        if (gestureState.dy < 120) {
          Animated.event([
            null, {
              dy: pan.y,
            },
          ])(e, gestureState);
        }
      },
      onPanResponderRelease: (e, { dy }) => {
        if (dy > -10) {
          action.current = setTimeout(() => {
            close();
          }, time);
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            friction: 5,
            useNativeDriver: false,
          }).start();
        } else {
          close();
        }
      },
    });

    setPanResponder(newPanResponder);

    return () => {
      pan.setValue({ x: 0, y: 0 });
    };
  }, []);

  useEffect(() => {
    async function onVisibile() {
      if (isVisible) {
        clearTimeout(action.current);

        if (appearing) {
          close();
          await sleep(400);
        }

        open(() => {
          action.current = setTimeout(() => {
            close();
          }, time);
        });
      } else {
        close();
      }
    }

    onVisibile();

    return () => {
      clearTimeout(action.current);
    };
  }, [isVisible, uuid]);

  const typeStyle = {
    success: styles.success,
    error: styles.error,
    warning: styles.warning,
  };

  if (panResponder && appearing) {
    return (
      <Animated.View style={[styles.container, { transform: [{ translateY: top }] }]}>
        <Animated.View
          {...panResponder.panHandlers}
          style={[
            styles.toast,
            typeStyle[type],
            { transform: pan.getTranslateTransform() },
            styles,
          ]}
        >
          <Text style={styles.title}>
            {title}
          </Text>
          <Text style={styles.text}>
            {text}
          </Text>
          <View style={styles.closeIcon}>
            <TouchableOpacity
              hitSlop={{
                top: 18, bottom: 18, left: 18, right: 18,
              }}
              onPress={() => close()}
            >
              <CloseIcon size={14} fill={WHITE} onPress={() => close()} />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Animated.View>
    );
  }

  return null;
};

export default Toast;
