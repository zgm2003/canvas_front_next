import type { ThemeConfig } from 'antd'

export const appTheme = {
  token: {
    colorPrimary: '#087f73',
    colorInfo: '#2f6f9f',
    colorSuccess: '#267a57',
    colorWarning: '#a86418',
    colorError: '#c94f3d',
    colorText: '#1b2024',
    colorTextSecondary: '#626c73',
    colorBgBase: '#f5f7f8',
    colorBgContainer: '#ffffff',
    colorBorder: '#d7dde0',
    borderRadius: 6,
    fontFamily: '"Segoe UI Variable", "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif',
    controlHeight: 40,
  },
  components: {
    Button: {
      borderRadius: 6,
      controlHeight: 40,
    },
    Card: {
      borderRadiusLG: 8,
    },
    Drawer: {
      borderRadiusLG: 8,
    },
    Modal: {
      borderRadiusLG: 8,
    },
  },
} satisfies ThemeConfig
