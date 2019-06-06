// 验证有效方法
export const validFuns = [
  'touchStart',
  'touchMove',
  'touchEnd',
  'touchCancel',
  'multipointStart',
  'multipointEnd',
  'tap',
  'doubleTap',
  'longTap',
  'singleTap',
  'rotate',
  'pinch',
  'pressMove',
  'swipe'
]

export function err (msg) {
  throw new Error(`${msg}`)
}
