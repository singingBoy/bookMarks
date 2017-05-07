import React from 'react'
import {Icon} from 'antd'

import {randomColor} from '../utils/util'
import './Main.less'


const Main = ({data}) => {
 
  const renderList=()=>{
  	const data = [];
  	for(let i=0; i<13; i++){
  		data.push({label:`我的书签${i}`, url:`https://www.baidu.com/`});
  	}

  	return data.map( (item, index) => (
  		<li key={index}>
			<a href={item.url} target='_blank'>{item.label}</a>  		
  		</li>
  	))
  }

  return (
    <div className="mainContain">
      <h1 className='title'>我的书签</h1>
      <div className='list'>
      	<ul>
      		{renderList()}
      	</ul>
      </div>
    </div>
  );

};

Main.propTypes = {
};

export default Main;
