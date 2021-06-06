import React from 'react';
import sidebarData from '../../Data/sidebarData';
import ListDataRecursively from './SidebarItem';


const Sidebar = () => {
    return (

        <div className="sidebar">
            <ul>
                <ListDataRecursively dataArray={sidebarData} indent={0}/>
            </ul>
        </div>

    )
  }

export default Sidebar;