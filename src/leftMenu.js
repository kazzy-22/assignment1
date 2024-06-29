import React, {useState} from 'react';
import { Menu } from 'antd';
import './leftMenu.scss';
const LeftMenu = () =>{
    const items = [
        {
          key: '1',
          label: 'Configurations',
          children: [
            {
              key: 'a1',
              label: 'Templates',
            }
          ],
        },
        {
          key: '2',
          label: 'Document Prep',
          children: [
            {
              key: 'b1',
              label: 'Products',
            },
            {
              key: 'b2',
              label: 'Applications',
            },
            {
              key: 'b3',
              label: 'Sequences',
            },
          ],
        },
      ];
return(
    <div className='left-menu-container'>
        <Menu
    //   onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['a1']}
      defaultOpenKeys={['1']}
      mode="inline"
      items={items}
    />
    </div>
)
}

export default LeftMenu;