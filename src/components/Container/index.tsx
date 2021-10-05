import { Layout } from 'antd'
import React, { FC, ReactNode, useState, useCallback } from 'react'
import {
  Span,
  Head,
  WrapperCrumbs,
  Wrapper,
  Contents,
  Siders,
  Footers,
} from './styled'
import Menu from './Menu'
import Breadcrumbs from './Breadcrumb'
import { MenuOutlined } from '@ant-design/icons'

export interface Crumb {
  readonly to?: string
  readonly label: string
}

export interface Props {
  readonly children: ReactNode
  readonly crumbs: ReadonlyArray<Crumb>
}

const Container: FC<Props> = ({ children, crumbs }: Props) => {
  const [side, setSide] = useState<boolean>(false)
  const toggle = useCallback(() => setSide(!side), [side, setSide])
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Siders
        trigger={null}
        collapsible
        collapsed={side}
        width={256}
        collapsedWidth={0}
      >
        <Menu />
      </Siders>
      <Layout>
        <Wrapper>
          <Head>
            {React.createElement(MenuOutlined, {
              onClick: toggle,
              style: { color: '#9f9fa7', fontSize: 20 },
            })}
            <Span>Dashboard</Span>
            <Span>Users</Span>
            <Span>Settings</Span>
          </Head>
          <WrapperCrumbs>
            <Breadcrumbs crumbs={crumbs} />
          </WrapperCrumbs>
        </Wrapper>
        <Contents>{children}</Contents>
        <Footers>
          <span>RAVTEL @ 2021 </span>
          <span style={{ marginLeft: 110 }}>ebab246</span>
        </Footers>
      </Layout>
    </Layout>
  )
}

export default Container
