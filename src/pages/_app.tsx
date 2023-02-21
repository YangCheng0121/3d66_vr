import '@/styles/globals.scss'
import '@/styles/normalize.scss'
import 'antd/dist/reset.css'
import type { AppProps } from 'next/app'
import { ConfigProvider } from 'antd';

type ThemeData = {
  borderRadius: number;
  colorPrimary: string;
};

export default function App({ Component, pageProps }: AppProps) {
  const defaultData: ThemeData = {
    borderRadius: 6,
    colorPrimary: '#19b955',
  };

  return(
    <ConfigProvider
      theme={{ token: { colorPrimary: defaultData.colorPrimary, borderRadius: defaultData.borderRadius } }}
    >
      <Component {...pageProps} />
    </ConfigProvider>
  )
}
