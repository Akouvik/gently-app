import { useMemo } from 'react';
import { useStyles, createStyleSheet } from '../../styles';
import { View, Text } from 'react-native';

export interface BoxProps {
  text: string;
  icon: 'No' | 'Yes';
  selected: 'No' | 'Yes';
  size: '$2Column' | '$1Column';
  testID?: string;
}

export function Box(props: BoxProps) {
  const { styles, theme } = useStyles(stylesheet);

  const _iconNo = props.icon === 'No';
  const _iconYes = props.icon === 'Yes';
  const _selectedNo = props.selected === 'No';
  const _selectedYes = props.selected === 'Yes';
  const _size1Column = props.size === '$1Column';
  const _size2Column = props.size === '$2Column';

  const classes = useMemo(
    () => ({
      root: [
        styles.root,
        _selectedYes &&
          _size2Column &&
          _iconNo &&
          styles.rootSelectedYesSize2ColumnIconNo,
        _selectedNo &&
          _size1Column &&
          _iconNo &&
          styles.rootSelectedNoSize1ColumnIconNo,
        _selectedYes &&
          _size1Column &&
          _iconNo &&
          styles.rootSelectedYesSize1ColumnIconNo,
        _selectedYes &&
          _size1Column &&
          _iconYes &&
          styles.rootSelectedYesSize1ColumnIconYes,
        _selectedNo &&
          _size1Column &&
          _iconYes &&
          styles.rootSelectedNoSize1ColumnIconYes,
      ],
      title: [
        styles.title,
        _selectedYes &&
          _size2Column &&
          _iconNo &&
          styles.titleSelectedYesSize2ColumnIconNo,
        _selectedNo &&
          _size1Column &&
          _iconNo &&
          styles.titleSelectedNoSize1ColumnIconNo,
        _selectedYes &&
          _size1Column &&
          _iconNo &&
          styles.titleSelectedYesSize1ColumnIconNo,
        _selectedYes &&
          _size1Column &&
          _iconYes &&
          styles.titleSelectedYesSize1ColumnIconYes,
        _selectedNo &&
          _size1Column &&
          _iconYes &&
          styles.titleSelectedNoSize1ColumnIconYes,
      ],
      frame38: [
        styles.frame38,
        _selectedYes &&
          _size1Column &&
          _iconYes &&
          styles.frame38SelectedYesSize1ColumnIconYes,
        _selectedNo &&
          _size1Column &&
          _iconYes &&
          styles.frame38SelectedNoSize1ColumnIconYes,
      ],
    }),
    [styles, props.selected, props.size, props.icon]
  );

  const colors = useMemo(
    () => ({
      icons: [
        theme.colors.primaryForeground,
        _selectedYes && _size1Column && _iconYes && undefined,
        _selectedNo && _size1Column && _iconYes && undefined,
      ]
        .filter(Boolean)
        .pop(),
    }),
    [props.selected, props.size, props.icon]
  );

  return (
    <View style={classes.root} testID={props.testID}>
      <Text style={classes.title} testID="9:1659">
        {props.text}
      </Text>
    </View>
  );
}

const stylesheet = createStyleSheet((theme) => ({
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
  rootSelectedYesSize2ColumnIconNo: {
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
  rootSelectedNoSize1ColumnIconNo: {
    width: 162,
    paddingTop: 20,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 20,
  },
  rootSelectedYesSize1ColumnIconNo: {
    width: 162,
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 20,
    flexDirection: 'column',
    alignItems: 'flex-end',
    rowGap: -12,
    columnGap: -12,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  rootSelectedYesSize1ColumnIconYes: {
    width: 335,
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 20,
    flexDirection: 'column',
    alignItems: 'flex-end',
    rowGap: -9,
    columnGap: -9,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  rootSelectedNoSize1ColumnIconYes: {
    width: 335,
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 20,
    flexDirection: 'column',
    rowGap: -9,
    columnGap: -9,
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
  titleSelectedYesSize2ColumnIconNo: {
    flex: 'unset',
    alignSelf: 'stretch',
  },
  titleSelectedYesSize1ColumnIconNo: {
    flex: 'unset',
    alignSelf: 'stretch',
  },
  titleSelectedYesSize1ColumnIconYes: {
    flex: 'unset',
    alignSelf: 'stretch',
  },
  titleSelectedNoSize1ColumnIconYes: {
    flex: 'unset',
    alignSelf: 'stretch',
  },
}));
