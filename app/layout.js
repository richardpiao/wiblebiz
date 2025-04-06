import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ReduxProvider from './ReduxProvider'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import './globals.css'

export const metadata = {
  title: '서비스 도입 FAQ | 기아 비즈(Kia Biz) - 친환경 모빌리티 서비스',
  description:
    '기아 비즈는 기업을 위한 친환경 모빌리티 서비스로 차량부터 전용 App/Web까지 업무차량 토탈 솔루션을 제공합니다.',
  // icons: {
  //   icon: "/favicon.ico",
  // },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <NavBar />
          <ReduxProvider>{children}</ReduxProvider>
          <ScrollToTopButton />
          <Footer />
        </div>
      </body>
    </html>
  )
}
