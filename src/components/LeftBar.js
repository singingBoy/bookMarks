import React from 'react'
import './leftBar.less'
import {Menu, Icon} from 'antd'
const SubMenu = Menu.SubMenu;

import {randomColor} from '../utils/util'

//测试数据
const testData = [
  {id:'1',name:'react',lists:[{id:'list1',name:'react-dom',url:'http://baidu.com'},{id:'list2',name:'react-router',url:'http://baidu.com'},]},
  {id:'2',name:'react',lists:[{id:'list1',name:'react-dom',url:'http://baidu.com'},{id:'list2',name:'react-router',url:'http://baidu.com'},]},
  {id:'3',name:'react',lists:[{id:'list1',name:'react-dom',url:'http://baidu.com'},{id:'list2',name:'react-router',url:'http://baidu.com'},]},
];

const LeftBar = ({data}) => {
  const handleClick = (e) => {
    console.log('click ', e);
  }

  const title = (
      <span className='flexCenter'>
        <span className='point' style={randomColor()}></span>
        <span>Navigation One</span>
      </span>
  );

  const renderSubMenu=(data)=>{

    return data.map( item => {
      const {id, name, lists} = item;

      const title = (
        <span className='flexCenter'>
          <span className='point' style={randomColor()}></span>
          <span>{name}</span>
        </span>
      );

      return(
        <SubMenu key={id} title={title}>
          {
            lists.map( list => {
               const {id, name, url} = list;
               return(
                  <Menu.Item key={id}>
                    <a target="_blank" href={url}>{name}</a>
                  </Menu.Item>
               )
            })
          }
        </SubMenu>
      )
    })
  }

  return (
    <div className="leftBarContain">
      <Menu
        onClick={handleClick}
        style={{ width: 240 }}
        mode="inline"
      >
        {renderSubMenu(testData)}
      </Menu>
    </div>
  );


};

LeftBar.propTypes = {
};

export default LeftBar;
