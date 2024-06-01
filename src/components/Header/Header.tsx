import {useMemo} from 'react';
import {useStyles, createStyleSheet} from 'styles';
import {View, Text} from 'react-native';
import {ProgressBar} from 'components/ProgressBar';
import {Icons} from 'components/Icons';
import {LogoFull} from 'components/LogoFull';

export interface HeaderProps {
  page: 'Onboarding' | 'Main',
  showProgressBar?: boolean,
  showBack?: boolean,
  showLogo?: boolean,
  showSkip?: boolean,
  testID?: string,
}

export function Header(props: HeaderProps) {
  const {styles, theme} = useStyles(stylesheet);

  const _pageMain = props.page === 'Main';

  const classes = useMemo(() => ({
    root: [
      styles.root,
      _pageMain && styles.rootPageMain,
    ],
    skip: [
      styles.skip,
      _pageMain && styles.skipPageMain,
    ],
  }), [styles, props.page]);

  return (
    <View style={classes.root} testID={props.testID}>
      {props.showLogo && 
        <LogoFull testID="22:2579"/>
      }
      <Icons size="$24" type="back" testID="22:2997"/>
      {props.showSkip && 
        <Text style={classes.skip} testID="10:2188">
          {`skip`}
        </Text>
      }
      {props.showProgressBar && 
        <ProgressBar testID="22:1990"/>
      }
    </View>
  );
}

const stylesheet = createStyleSheet(theme => ({
  root: {
    width: 375,
    height: 56,
    flexShrink: 0,
  },
  skip: {
    color: 'rgba(36, 28, 56, 0.501960813999176)',
    textAlign: 'right',
    fontFamily: 'Suisse Intl',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: -0.32,
  },
}));

