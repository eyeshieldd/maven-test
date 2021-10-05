import { Menu } from 'antd'
import styled from 'styled-components'

export const Item = styled(Menu.ItemGroup)`
  .ant-menu-item-group-title {
    padding: 20px;
    font-size: 80%;
    font-weight: 700;
    transition: all 0.3s;
  }
  .ant-menu-item-selected {
    background-color: #fff;
  }
  .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal)
    .ant-menu-item-selected {
    background-color: #1890ff;
  }
`
export const Menus = styled(Menu)`
  .ant-menu-item-selected {
    background-color: #46546c !important;
  }
  background-color: #3c4b64 !important;
`
export const Headers = styled.div`
  padding: 0 70px 10px;
`
export const MenuItem = styled(Menu.Item)`
  height: 48px !important;
  &:hover {
    background-color: #321fdb !important;
  }
`
