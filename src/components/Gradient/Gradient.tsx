import {useStyles, createStyleSheet} from 'styles';
import {View} from 'react-native';

export interface GradientProps {
  property1: 'Default',
  testID?: string,
}

export function Gradient(props: GradientProps) {
  const {styles, theme} = useStyles(stylesheet);

  return (
    <View style={styles.root} testID={props.testID}>
      <View style={styles.rectangle1} testID="10:2258"/>
    </View>
  );
}

const stylesheet = createStyleSheet(theme => ({
  root: {
    flexDirection: 'row',
    width: 375,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  rectangle1: {
    width: 375,
    height: 160,
    flexShrink: 0,
  },
}));

