import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Container } from 'react-bootstrap'
import Budget from '@/components/Budget'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import 'bootstrap/dist/css/bootstrap.min.css'

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header/>
      <div style={{ flex: 1, margin: '20px 0', }}>
        <Container fluid="md">
          <Budget />
        </Container>
      </div>
      <Footer/>
    </div>
  )
}
