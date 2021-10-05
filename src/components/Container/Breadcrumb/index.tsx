import React, { FC } from 'react'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'

export interface Crumb {
  readonly to?: string
  readonly label: string
}
export interface Props {
  readonly crumbs: ReadonlyArray<Crumb>
}
const Menu: FC<Props> = ({ crumbs }: Props) => {
  return (
    <>
      <Breadcrumb>
        {crumbs.map(({ to, label }, index) => (
          <Breadcrumb.Item key={index}>
            {to ? (
              <Link to={to} style={{ color: 'blue' }}>
                {label}
              </Link>
            ) : (
              <span style={{ color: '#8a93a2' }}>{label}</span>
            )}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </>
  )
}

export default Menu
