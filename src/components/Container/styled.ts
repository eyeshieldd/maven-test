import { Layout, Typography, Menu } from 'antd'
import styled from 'styled-components'

export const Span = styled.span`
  margin-left: 35px;
  color: #7f7f8a;
`

export const Headers = styled.div`
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
`
export const StyledTitle = styled(Typography.Title)`
  font-size: 20px !important;
  color: #fff !important;
  width: 200px;
  text-align: center;

  @media only screen and (min-width: 992px) {
    margin-bottom: 0 !important;
    text-align: left;
  }
`

export const MenuItem = styled(Menu.Item)`
  &:hover {
    background-color: #321fdb !important;
  }
`
export const Head = styled(Layout.Header)`
  padding-left: 30px;
  background-color: #fff;
  border-bottom: 1px solid #d8dbe0;
  width: 100%;
`
export const WrapperCrumbs = styled(Layout.Header)`
  padding-left: 30px;
  background-color: #fff;
  border-bottom: 1px solid #d8dbe0;
  height: 50px;
  padding-top: 13px;
`
export const Contents = styled(Layout.Content)`
  margin: 150px 16px 0;
`
export const Siders = styled(Layout.Sider)`
  background-color: #303c50;
`
export const Footers = styled(Layout.Footer)`
  text-align: left;
  border-top: 1px solid #d8dbe0;
  margin-top: 30px;
`
export const Wrapper = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
`
