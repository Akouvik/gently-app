import {useMemo} from 'react';
import {useStyles, createStyleSheet} from 'styles';
import {View} from 'react-native';

export interface Component2Props {
  property1: 'Idea3' | 'Idea4',
  testID?: string,
}

export function Component2(props: Component2Props) {
  const {styles, theme} = useStyles(stylesheet);

  const _property1Idea4 = props.property1 === 'Idea4';

  const classes = useMemo(() => ({
    root: [
      styles.root,
      _property1Idea4 && styles.rootProperty1Idea4,
    ],
  }), [styles, props.property1]);

  return (
    <View style={classes.root} testID={props.testID}>
    </View>
  );
}

const stylesheet = createStyleSheet(theme => ({
  root: {
    width: 375,
    height: 812,
    flexShrink: 0,
    backgroundColor: 'rgba(236, 223, 233, 1)',
  },
}));

