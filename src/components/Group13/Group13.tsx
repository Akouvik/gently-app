import {useStyles, createStyleSheet} from 'styles';
import {View, Text} from 'react-native';
import Frame from 'assets/vectors/Frame.svg';

export interface Group13Props {
  testID?: string,
}

export function Group13(props: Group13Props) {
  const {styles, theme} = useStyles(stylesheet);

  return (
    <View style={styles.root} testID={props.testID}>
      <Frame/>
      <Text style={styles.moveOnFaster} testID="283:10750">
        {`Move-on faster`}
      </Text>
    </View>
  );
}

const stylesheet = createStyleSheet(theme => ({
  root: {
    height: 206,
    padding: 30,
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 40,
    columnGap: 40,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    borderRadius: 40,
    backgroundColor: 'rgba(240, 230, 238, 1)',
  },
  moveOnFaster: {
    alignSelf: 'stretch',
    color: 'rgba(25, 18, 46, 0.7019608020782471)',
    fontFamily: 'Suisse Intl',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: -0.64,
  },
}));

