import {useMemo} from 'react';
import {useStyles, createStyleSheet} from 'styles';
import {View, Text} from 'react-native';

export interface BoxInteractiveProps {
  text: string,
  selected: 'No' | 'Yes',
  size: '$2Column',
  testID?: string,
}

export function BoxInteractive(props: BoxInteractiveProps) {
  const {styles, theme} = useStyles(stylesheet);

  const _selectedYes = props.selected === 'Yes';
  const _size2Column = props.size === '$2Column';

  const classes = useMemo(() => ({
    root: [
      styles.root,
      _selectedYes && _size2Column && styles.rootSelectedYesSize2Column,
    ],
    title: [
      styles.title,
      _selectedYes && _size2Column && styles.titleSelectedYesSize2Column,
    ],
  }), [styles, props.selected, props.size]);

  return (
    <View style={classes.root} testID={props.testID}>
      <Text style={classes.title} testID="129:4808">
        {props.text}
      </Text>
    </View>
  );
}

const stylesheet = createStyleSheet(theme => ({
  root: {
    flexDirection: 'row',
    width: 166,
    paddingTop: 32,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 32,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10,
    columnGap: 10,
    borderRadius: 20,
    backgroundColor: theme.colors.pink200,
  },
  rootSelectedYesSize2Column: {
    gap: 'unset',
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 32,
    flexDirection: 'column',
    alignItems: 'flex-end',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  title: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    color: 'rgba(36, 28, 56, 1)',
    textAlign: 'center',
    fontFamily: 'Suisse Intl',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: -0.32,
    textTransform: 'lowercase',
  },
  titleSelectedYesSize2Column: {
    flex: 'unset',
    alignSelf: 'stretch',
  },
}));

