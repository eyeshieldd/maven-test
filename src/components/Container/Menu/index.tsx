import React, { FC } from 'react'
import { Headers, Item, MenuItem, Menus } from './styled'
import { Link } from 'react-router-dom'

import {
  DashboardOutlined,
  LineChartOutlined,
  SwapOutlined,
  DollarCircleOutlined,
  CalendarOutlined,
  ContactsOutlined,
} from '@ant-design/icons'

const Menu: FC = () => {
  return (
    <>
      <Headers>
        <img
          src="https://pngimg.com/uploads/netflix/netflix_PNG11.png"
          alt="news"
          width={110}
          height={50}
        />
      </Headers>

      <Menus mode="inline" theme="dark" defaultSelectedKeys={['1']}>
        <MenuItem key="1" icon={<DashboardOutlined />}>
          <Link to="/">Dashboard</Link>
        </MenuItem>
        <Item key="g1" title="PREMIER INDEX ALPHA">
          <MenuItem key="2" icon={<LineChartOutlined />}>
            Update NAV
          </MenuItem>
          <MenuItem key="3" icon={<SwapOutlined />}>
            Transfers
          </MenuItem>
          <MenuItem key="4" icon={<DollarCircleOutlined />}>
            Fund
          </MenuItem>
          <MenuItem key="5" icon={<CalendarOutlined />}>
            Maturity Date
          </MenuItem>
        </Item>
        <Item key="g2" title="PERFORMANCE FEE">
          <MenuItem key="6" icon={<DollarCircleOutlined />}>
            Subscription
          </MenuItem>
          <MenuItem key="7" icon={<DollarCircleOutlined />}>
            Expacted Performance Fee
          </MenuItem>
          <MenuItem key="8" icon={<DollarCircleOutlined />}>
            Actual Performance Fee
          </MenuItem>
        </Item>
        <Item key="g3" title="INQUIRY">
          <MenuItem key="9" icon={<ContactsOutlined />}>
            <Link to="/inquiris">New Client</Link>
          </MenuItem>
          <MenuItem key="10" icon={<ContactsOutlined />}>
            Existing Client
          </MenuItem>
        </Item>
      </Menus>
    </>
  )
}

export default Menu
