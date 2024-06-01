import {useStyles, createStyleSheet} from 'styles';
import {View, Text} from 'react-native';
import {LogoIcon} from 'components/LogoIcon';

export interface LogoFullProps {
  testID?: string,
}

export function LogoFull(props: LogoFullProps) {
  const {styles, theme} = useStyles(stylesheet);

  return (
    <View style={styles.root} testID={props.testID}>
      <LogoIcon testID="22:3176"/>
      <Text style={styles.title} testID="22:3182">
        {`gently`}
      </Text>
    </View>
  );
}

const stylesheet = createStyleSheet(theme => ({
  root: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    rowGap: 6,
    columnGap: 6,
  },
  title: {
    color: 'rgba(25, 18, 46, 1)',
    textAlign: 'center',
    fontFamily: 'Suisse Intl',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: -0.32,
  },
}));

