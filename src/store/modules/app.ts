import { getSidebarStatus, getSize, setSidebarStatus, setSize } from '@/utils/cookies'
import { defineStore } from 'pinia'
const useAppStore = defineStore('app',
  {
    state: () => ({
      sidebar: {
        opened: getSidebarStatus() !== 'closed',
        withoutAnimation: false,
        hide: false
      },
      device: 'desktop',
      size: getSize() || 'default'
    }),
    actions: {
      toggleSideBar(withoutAnimation: any) {
        this.sidebar.opened = !this.sidebar.opened
        console.log('---侧边栏显隐---', this.sidebar.opened)
        this.sidebar.withoutAnimation = withoutAnimation
        if (this.sidebar.opened) {
          setSidebarStatus('opened')
        } else {
          setSidebarStatus('closed')
        }
      },
      closeSideBar(withoutAnimation: any) {
        setSidebarStatus('closed')
        this.sidebar.opened = false
        this.sidebar.withoutAnimation = withoutAnimation
      },
      toggleDevice(device: string) {
        this.device = device
      },
      setSize(size: any) {
        this.size = size;
        setSize(size)
      },
      toggleSideBarHide(status: boolean) {
        this.sidebar.hide = status
      }
    },
  })

export default useAppStore