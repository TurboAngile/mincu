import mincuCore from 'mincu-core'
import { NavConfig } from 'mincu-core'
import type { StatusBarStyle } from 'react-native'
import { backPress } from './back-press'
import { toast } from './toast'

export class UIModule {
  static Instance() {
    return new UIModule()
  }

  toast = toast

  backPress = backPress

  setBarStyle(style: StatusBarStyle) {
    mincuCore.call('StatusBar', 'setBarStyle', [style])
  }

  handleShowHeader(value: boolean): Promise<boolean> {
    return new Promise((resolve) => {
      mincuCore.call('Webview', 'handleShowHeader', [value], (res) => {
        resolve(res.data)
      })
    })
  }

  toScreen(config: NavConfig) {
    mincuCore.call('Webview', 'toScreen', [config])
  }

  exit() {
    mincuCore.call('Webview', 'exitWebView', null, () => {
      console.log('退出微应用')
    })
  }
}

export default UIModule.Instance()
