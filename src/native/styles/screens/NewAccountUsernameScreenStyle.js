import * as Styles from '../'
import * as Colors from '../../../common/constants/Colors'

const NewAccountUsernameScreenStyle = {
  screen: { ...Styles.ScreenStyle },
  header: { ...Styles.HeaderContainerStyle, backgroundColor: Colors.PRIMARY },
  pageContainer: Styles.PageContainerWithHeaderStyle,
  nextButton: {
    upStyle: Styles.PrimaryButtonUpStyle,
    upTextStyle: Styles.PrimaryButtonUpTextStyle,
    downTextStyle: Styles.PrimaryButtonUpTextStyle,
    downStyle: Styles.PrimaryButtonDownStyle
  },
  inputBox: {
    container: Styles.InputStyles.container,
    inputStyle: {...Styles.InputStyles.inputStyle, width: '100%'}
  }
}

export { NewAccountUsernameScreenStyle }
