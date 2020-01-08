import React from "react";
import PropTypes from "prop-types";
import { NavLink as RouteNavLink } from "react-router-dom";
import { NavItem, NavLink } from "shards-react";

const SidebarNavItem = ({ item }) => (
  <NavItem className={item.class}>
    <NavLink id="chave" tag={RouteNavLink} to={item.to}>
      {item.htmlBefore && (
        <div
          className="d-inline-block item-icon-wrapper"
          dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
        />
      )}
      {item.title && 
        <span>
            {item.title.toUpperCase()}
        </span>}
      {item.htmlAfter && (
        <div
          className="d-inline-block item-icon-wrapper"
          dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
        />
      )}
    </NavLink>
      {
        item.class == 'sidebar-gerenciamento' &&
          <div class="teste">
            <ul>
              <a href="#"><li>Usuários</li></a>
              <a href="#"><li>Adicionar Usuário</li></a>
              <a href="#"><li>Link 3</li></a>
              <a href="#"><li>Link 4</li></a>
            </ul>  
          </div>
      }
  </NavItem>
);



SidebarNavItem.propTypes = {
  /**
   * The item object.
   */
  item: PropTypes.object
};

export default SidebarNavItem;
