
import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="rgba(135, 192, 233, 1)">
        <CDBSidebarHeader  prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" >
           
          </a>
        
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book">Courses</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="hand-holding-heart">Advices</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="question">Questions/answers</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Contact laureat</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="share">Sharing experiences</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter icon="user" style={{ textAlign: 'center' , color:"white"}}>
          <hr />
          <NavLink className="text-decoration-none "  style={{ textAlign: 'center' , color:"white"}} exact to="/logout" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="angle-right" size="lg">logout</CDBSidebarMenuItem>
            </NavLink>
        
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;