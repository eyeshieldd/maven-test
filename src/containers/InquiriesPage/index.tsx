import Container, { Crumb } from 'components/Container'
import { FC, useMemo } from 'react'
import { Card, Col, Row } from 'antd'
import Form from './Form'

const DetailPage: FC = () => {
  const crumbs: ReadonlyArray<Crumb> = useMemo(() => {
    return [
      { to: '/', label: 'Home' },
      { to: '/Inquiries', label: 'Inquiries' },
      { label: 'Inquiry Create' },
    ]
  }, [])

  return (
    <Container crumbs={crumbs}>
      <Row gutter={[24, 24]} justify="start">
        <Col sm={24} md={8} lg={12}>
          <Card title="Add New Inquiry" bordered={false}>
            <Form />
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default DetailPage
