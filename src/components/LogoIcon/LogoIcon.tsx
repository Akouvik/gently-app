import {useStyles, createStyleSheet} from 'styles';
import {View} from 'react-native';
import Idea3 from 'assets/vectors/Idea3.svg';

export interface LogoIconProps {
  testID?: string,
}

export function LogoIcon(props: LogoIconProps) {
  const {styles, theme} = useStyles(stylesheet);

  return (
    <View style={styles.root} testID={props.testID}>
      <Idea3/>
    </View>
  );
}

const stylesheet = createStyleSheet(theme => ({
  root: {
    flexDirection: 'row',
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5.289,
    backgroundColor: 'rgba(150, 124, 223, 1)',
  },
}));

