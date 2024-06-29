import React, {useState} from 'react';
import { Button, Form, DatePicker, Select } from 'antd';
import './template.scss';
const Template = () =>{
    return(
        <div className="template-container">
            <div className='template-header'>
                <h4>Templates</h4>
                <Button type='primary'>+ Create Template</Button>
            </div>
            <div className='filter'>
            <Form.Item label="Start Date">
  <DatePicker format="YYYY-MM-DD" />
</Form.Item>
<Form.Item  label="End Date">
  <DatePicker format="YYYY-MM-DD" />
</Form.Item>
<Form.Item label="Region">
  <Select>
    <Select.Option>USA</Select.Option>
    <Select.Option>INDIA</Select.Option>
  </Select>
</Form.Item>
<Form.Item>
<Button type='primary'><i class="fa-solid fa-magnifying-glass"></i> Search</Button>
</Form.Item>

            </div>
        </div>
    )
}
export default Template