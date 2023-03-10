import '@/styles/globals.scss'
import '@/styles/normalize.scss'
import type {AppProps} from 'next/app'
import {ConfigProvider} from 'antd';

type ThemeData = {
  borderRadius: number;
  colorPrimary: string;
};

export default function App({Component, pageProps}: AppProps) {
  const defaultData: ThemeData = {
    borderRadius: 6,
    colorPrimary: '#3F4A69',
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: defaultData.colorPrimary,
          borderRadius: defaultData.borderRadius,
        },
      }}
    >
      <Component {...pageProps} />
    </ConfigProvider>
  )
}
