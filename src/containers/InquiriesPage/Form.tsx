import { FC } from 'react'
import { DatePicker, Form, Input, Select, Button } from 'antd'
import { Buttons } from './styled'

const Forms: FC = () => {
  return (
    <>
      <Form layout="vertical">
        <Form.Item
          style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
          label="Inquiry Date"
        >
          <DatePicker />
        </Form.Item>
        <Form.Item label="Complete Name">
          <Input />
        </Form.Item>
        <Form.Item label="Id Number">
          <Input />
        </Form.Item>
        <Form.Item label="Address">
          <Input />
        </Form.Item>
        <Form.Item label="Bank Account Number">
          <Input />
        </Form.Item>
        <Form.Item label="Bank Name">
          <Input />
        </Form.Item>
        <Form.Item label="Bank Branch">
          <Input />
        </Form.Item>
        <Form.Item label="Bank Switch Code">
          <Input />
        </Form.Item>
        <Form.Item label="Phone Number">
          <Input />
        </Form.Item>
        <Form.Item label="Email">
          <Input />
        </Form.Item>
        <Form.Item label="Currency">
          <Select placeholder="--PLEASE SELECT--">
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Deposit Amount">
          <Input />
        </Form.Item>
        <Form.Item label="Maturity Option">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="KTP Image">
          <input type="file" name="file" id="file" />
        </Form.Item>
        <Buttons type="primary">Create New Inqury</Buttons>
        <Button type="primary" danger>
          Reset
        </Button>
      </Form>
    </>
  )
}

export default Forms
