import * as Constants from '../../../common/constants/'
import { isIphoneX, scale } from '../../../common/util'
import * as Styles from '../'

const PinKeypadStyle = {
  keypadContainer: {
    width: '100%',
    height: scale(180),
    maxHeight: 300,
    marginBottom: isIphoneX ? scale(28) : 0
  },
  keypadRow: {
    flex: 1,
    flexDirection: 'row'
  },
  keypadColumn: {
    flex: 1,
    borderColor: Constants.ACCENT_MINT,
    borderWidth: 2,
    margin: scale(2),
    borderRadius: 5,
    justifyContent: 'center',
    alignConten: 'center'
  },
  keypadColumnBack: {
    flex: 1,
    margin: scale(2),
    justifyContent: 'center',
    alignConten: 'center'
  },
  keypadColumnBlank: {
    flex: 1,
    margin: scale(2)
  },
  keypadKeys: {
    textAlign: 'center',
    fontSize: scale(14),
    color: Constants.ACCENT_MINT
  },
  keypadKeysBack: {
    textAlign: 'center',
    fontSize: scale(30),
    color: Constants.ACCENT_MINT
  }
}

export { PinKeypadStyle }
