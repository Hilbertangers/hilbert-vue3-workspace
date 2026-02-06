export default class Undo {
  static title = '撤销'
  static type = 'undo'
  static icon = 'screenshots-icon-undo'

  constructor({ el, viewer, ctx, context, setContext, emit }: any) {
    const findPriority = (stack: any[]) => {
      let index = -1
      const priority = stack.reduce(
        (p, c, i) => {
          if (!c.history.length || p.history[0].undoPriority > c.history[0].undoPriority) {
            return p
          } else {
            index = i
            return c
          }
        },
        { history: [{ undoPriority: -1 }] }
      )
      return { priority, index }
    }

    let { action, stack, actionRef } = context
    const { priority, index } = findPriority(stack)

    if (priority.history[0].undoPriority >= 0) {
      priority.history.shift()

      if (priority.undoCB) {
        priority.undoCB(priority, action, actionRef, { el, viewer, ctx, context, setContext, emit })
      }

      if (!priority.history.length) {
        stack.splice(index, 1)
        if (!stack.length && !action.$textarea) {
          action = null
          setContext({ action: null, cursor: 'grab' })
        }
      }

      // 更新stackVersion以触发重绘
      setContext({ stackVersion: Date.now() })
    }

    setContext({ editPointers: [] })
    return action
  }
}
