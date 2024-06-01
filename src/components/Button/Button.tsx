import {useMemo} from 'react';
import {useStyles, createStyleSheet} from 'styles';
import {View, Text} from 'react-native';

export interface ButtonProps {
  state: 'Default' | 'Disabled',
  showIcons?: boolean,
  testID?: string,
}

export function Button(props: ButtonProps) {
  const {styles, theme} = useStyles(stylesheet);

  const _stateDisabled = props.state === 'Disabled' || props.disabled;

  const classes = useMemo(() => ({
    root: [
      styles.root,
      _stateDisabled && styles.rootStateDisabled,
    ],
    action: [
      styles.action,
      _stateDisabled && styles.actionStateDisabled,
    ],
  }), [styles, props.state]);

  return (
    <View style={classes.root} testID={props.testID}>
      <Text style={classes.action} testID="10:1752">
        {`action`}
      </Text>
    </View>
  );
}

const stylesheet = createStyleSheet(theme => ({
  root: {
    flexDirection: 'row',
    width: 258,
    paddingTop: 16,
    paddingLeft: 67,
    paddingRight: 67,
    paddingBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 4,
    columnGap: 4,
    borderRadius: 20,
    backgroundColor: 'rgba(36, 28, 56, 1)',
  },
  action: {
    color: 'rgba(252, 237, 249, 1)',
    textAlign: 'center',
    fontFamily: 'Suisse Intl',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: -0.32,
  },
  actionStateDisabled: {
    opacity: 0.4,
  },
}));

