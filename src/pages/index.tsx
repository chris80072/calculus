import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Container } from 'react-bootstrap'
import Budget from '@/components/Budget'
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
    <Container fluid="md">
      <Budget />
    </Container>
  )
}
