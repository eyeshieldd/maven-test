import { FC, useMemo } from 'react'
import Container, { Crumb } from 'components/Container'
import { BackTop, Card, Col, Row } from 'antd'
import { UpButton, Cards1, Cards2, Cards3, Cards4 } from './styled'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import datachart from './data.json'
import datacharts from './datachart.json'

const HomePage: FC = () => {
  const crumbs: ReadonlyArray<Crumb> = useMemo(() => {
    return [{ to: '/', label: 'Home' }, { label: 'Dashboard' }]
  }, [])

  return (
    <>
      <Container crumbs={crumbs}>
        <BackTop>
          <UpButton>UP</UpButton>
        </BackTop>
        <Row gutter={[24, 24]} justify="center">
          <Col sm={24} md={8} lg={6}>
            <Cards1>
              <span style={{ fontSize: 18, fontWeight: 600 }}>
                1,997,876.38
              </span>
              <br />
              <span style={{ fontSize: 14 }}>Balance Fund ($)</span>
            </Cards1>
          </Col>
          <Col sm={24} md={8} lg={6}>
            <Cards2>
              <span style={{ fontSize: 18, fontWeight: 600 }}>10,651.26</span>
              <br />
              <span style={{ fontSize: 14 }}>Balance Unit</span>
            </Cards2>
          </Col>
          <Col sm={24} md={8} lg={6}>
            <Cards3>
              <span style={{ fontSize: 18, fontWeight: 600 }}>87.56</span>
              <br />
              <span style={{ fontSize: 14 }}>ROI(%)</span>
            </Cards3>
          </Col>
          <Col sm={24} md={8} lg={6}>
            <Cards4>
              <span style={{ fontSize: 18, fontWeight: 600 }}>38</span>
              <br />
              <span style={{ fontSize: 14 }}>Total Partners</span>
            </Cards4>
          </Col>
          <Col sm={24} lg={12}>
            <Card title="1Y Performance" bordered={false}>
              <AreaChart
                width={450}
                height={250}
                data={datacharts}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis dataKey="amt" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="amt"
                  stroke="#8884d8"
                  fill="#2e8de4"
                  activeDot={{ r: 13 }}
                />
              </AreaChart>
            </Card>
          </Col>
          <Col sm={24} lg={12}>
            <Card title="Transfers" bordered={false}>
              <AreaChart
                width={450}
                height={250}
                data={datachart}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="4 8" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#8884d8"
                  fill="red"
                  activeDot={{ r: 16 }}
                />
                <Area
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  fill="black"
                />
              </AreaChart>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HomePage
