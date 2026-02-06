export default class Cancel {
  static title = '取消'
  static type = 'cancel'
  static icon = 'screenshots-icon-cancel'

  constructor({ setContext, emit }: any) {
    emit('onCancel')
    setContext({
      viewer: null,
      action: null,
      stack: [],
      cursor: null,
    })
  }
}
