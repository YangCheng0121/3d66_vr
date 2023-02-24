import '@/styles/globals.scss'
import '@/styles/normalize.scss'
import type { AppProps } from 'next/app'
import { ConfigProvider } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
});


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
