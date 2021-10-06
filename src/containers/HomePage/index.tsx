import React, { FC, useMemo } from 'react'
import Container, { Crumb } from 'components/Container'
import { Card, Col, Row } from 'antd'
import { Title, Number, Cards1, Cards2, Cards3, Cards4 } from './styled'
import { Line } from 'react-chartjs-2'

const data = {
  labels: [
    '31/01/2021',
    '31/02/2021',
    '31/03/2021',
    '31/05/2021',
    '31/05/2021',
    '31/06/2021',
    '31/07/2021',
    '31/08/2021',
    '31/09/2021',
    '31/10/2021',
    '31/11/2021',
    '31/12/2021',
    '31/12/2022',
    '31/12/2022',
  ],
  datasets: [
    {
      label: 'NAV',
      data: [
        100, 110, 120, 130, 140, 150, 160, 170, 171, 179, 174, 169, 170, 190,
      ],
      fill: true,
      backgroundColor: '#2d8be0',
      borderColor: '#2d8be0',
    },
  ],
}
const options: any = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

const data2 = {
  labels: [
    '31/01/2021-21/01/2021',
    '31/02/2021-21/01/2021',
    '31/03/2021-21/01/2021',
    '31/05/2021-21/01/2021',
    '31/05/2021-21/01/2021',
    '31/06/2021-21/01/2021',
    '31/07/2021-21/01/2021',
    '31/08/2021-21/01/2021',
    '31/09/2021-21/01/2021',
    '31/10/2021-21/01/2021',
    '31/11/202121/01/2021',
    '31/12/2021-21/01/2021',
    '31/12/2022-21/01/2021',
    '31/12/2022-21/01/2021',
  ],
  datasets: [
    {
      label: 'Subsription',
      data: [
        100000, 120000, 100000, 100000, 100000, 100000, 100000, 100000, 100000,
        100000, 100000, 100000, 100000, 1000000,
      ],
      fill: true,
      backgroundColor: 'grey',
      borderColor: 'grey',
    },
    {
      label: 'Redemption',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      fill: true,
      backgroundColor: 'red',
      borderColor: 'red',
    },
  ],
}
const options2: any = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

const HomePage: FC = () => {
  const crumbs: ReadonlyArray<Crumb> = useMemo(() => {
    return [{ to: '/', label: 'Home' }, { label: 'Dashboard' }]
  }, [])

  return (
    <>
      <Container crumbs={crumbs}>
        <Row gutter={[24, 24]} justify="center">
          <Col sm={24} md={8} lg={6}>
            <Cards1>
              <Number>1,997,876.38</Number>
              <br />
              <Title>Balance Fund ($)</Title>
            </Cards1>
          </Col>
          <Col sm={24} md={8} lg={6}>
            <Cards2>
              <Number>10,651.26</Number>
              <br />
              <Title>Balance Unit</Title>
            </Cards2>
          </Col>
          <Col sm={24} md={8} lg={6}>
            <Cards3>
              <Number>87.56</Number>
              <br />
              <Title>ROI(%)</Title>
            </Cards3>
          </Col>
          <Col sm={24} md={8} lg={6}>
            <Cards4>
              <Title>38</Title>
              <br />
              <Number>Total Partners</Number>
            </Cards4>
          </Col>
          <Col sm={24} lg={12}>
            <Card title="1Y Performance" bordered={false}>
              <Line data={data} options={options} />
            </Card>
          </Col>
          <Col sm={24} lg={12}>
            <Card title="Transfers" bordered={false}>
              <Line data={data2} options={options2} />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HomePage
