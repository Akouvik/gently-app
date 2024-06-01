import {useStyles, createStyleSheet} from 'styles';
import {View, Text} from 'react-native';
import {$4ElementsGridElementsLinesHorizontal} from 'components/$4ElementsGridElementsLinesHorizontal';
import {$4ElementsGridElementsLinesHorizontal} from 'components/$4ElementsGridElementsLinesHorizontal';
import {$4ElementsHoverElementsDot} from 'components/$4ElementsHoverElementsDot';
import {$4ElementsHoverElementsTooltipTop} from 'components/$4ElementsHoverElementsTooltipTop';
import Vector49 from 'assets/vectors/Vector49.svg';

export interface $1GridXYAxis2WeeksProps {
  testID?: string,
}

export function $1GridXYAxis2Weeks(props: $1GridXYAxis2WeeksProps) {
  const {styles, theme} = useStyles(stylesheet);

  return (
    <View style={styles.root} testID={props.testID}>
      <View style={styles.verticalLines} testID="1402:166">
        <View style={styles.row} testID="1402:167">
          <View style={styles.row2} testID="1402:168">
            <View style={styles.container} testID="1402:169"/>
            <Text style={styles.number} testID="1402:171">
              {`06/25`}
            </Text>
          </View>
        </View>
        <$4ElementsGridElementsLinesHorizontal testID="1402:172"/>
        <$4ElementsGridElementsLinesHorizontal testID="1402:173"/>
        <$4ElementsGridElementsLinesHorizontal testID="1402:174"/>
        <$4ElementsGridElementsLinesHorizontal testID="1402:175"/>
        <$4ElementsGridElementsLinesHorizontal testID="1402:176"/>
        <$4ElementsGridElementsLinesHorizontal testID="1402:177"/>
        <$4ElementsGridElementsLinesHorizontal testID="1402:178"/>
        <$4ElementsGridElementsLinesHorizontal testID="1402:179"/>
        <$4ElementsGridElementsLinesHorizontal testID="1402:180"/>
      </View>
      <View style={styles.horizontalLines} testID="1402:181">
        <$4ElementsGridElementsLinesHorizontal testID="1402:182"/>
        <$4ElementsGridElementsLinesHorizontal testID="1402:183"/>
        <$4ElementsGridElementsLinesHorizontal testID="1402:184"/>
        <$4ElementsGridElementsLinesHorizontal testID="1402:185"/>
        <Vector49/>
      </View>
      <$4ElementsHoverElementsDot testID="1402:187"/>
      <$4ElementsHoverElementsDot testID="1402:188"/>
      <$4ElementsHoverElementsDot testID="1402:189"/>
      <$4ElementsHoverElementsDot testID="1402:190"/>
      <$4ElementsHoverElementsTooltipTop testID="1402:191"/>
      <$4ElementsHoverElementsTooltipTop testID="1402:192"/>
      <$4ElementsHoverElementsTooltipTop testID="1402:193"/>
    </View>
  );
}

const stylesheet = createStyleSheet(theme => ({
  root: {
    width: 925,
    height: 384,
  },
  container: {
    width: 66,
    height: 382.57999,
    flexShrink: 0,
  },
  number: {
    width: 52,
    color: 'rgba(71, 74, 77, 1)',
    fontFamily: 'Inter',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
  },
  verticalLines: {
    flexDirection: 'row',
    height: 407,
    paddingRight: 264,
    alignItems: 'flex-start',
    flexShrink: 0,
  },
  row: {
    width: 66,
    height: 407,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row2: {
    width: 66,
    height: 407,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    rowGap: 4.42,
    columnGap: 4.42,
    flexShrink: 0,
  },
  horizontalLines: {
    width: 692,
    height: 384,
    flexShrink: 0,
  },
}));

