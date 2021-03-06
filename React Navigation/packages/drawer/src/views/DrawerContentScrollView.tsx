import * as React from 'react';
import {
  ScrollView,
  StyleSheet,
  ScrollViewProps,
  I18nManager,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import DrawerPositionContext from '../utils/DrawerPositionContext';

type Props = ScrollViewProps & {
  children: React.ReactNode;
};

export default function DrawerContentScrollView({
  contentContainerStyle,
  style,
  children,
  ...rest
}: Props) {
  const drawerPosition = React.useContext(DrawerPositionContext);
  const insets = useSafeAreaInsets();

  const isRight = I18nManager.isRTL
    ? drawerPosition === 'left'
    : drawerPosition === 'right';

  return (
    <ScrollView
      {...rest}
      contentContainerStyle={[
        {
          paddingTop: insets.top + 4,
          paddingStart: !isRight ? insets.left : 0,
          paddingEnd: isRight ? insets.right : 0,
        },
        contentContainerStyle,
      ]}
      style={[styles.container, style]}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
