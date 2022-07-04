import * as React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew'

import {
  useTranslate,
  DashboardMenuItem,
  MenuItemLink,
  MenuProps,
  useSidebarState
} from 'react-admin'

import products from '../products'
import SubMenu from './SubMenu'

type MenuName = 'menuCatalog' | 'menuSales' | 'menuCustomers'

const Menu = ({ dense = false }: MenuProps) => {
  const [state, setState] = useState({
    menuCatalog: true,
    menuSales: true,
    menuCustomers: true
  })
  const translate = useTranslate()
  const [open] = useSidebarState()

  const handleToggle = (menu: MenuName) => {
    setState(state => ({ ...state, [menu]: !state[menu] }))
  }

  return (
    <Box
      sx={{
        width: open ? 200 : 50,
        marginTop: 1,
        marginBottom: 1,
        transition: theme =>
          theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
          })
      }}
    >
      <DashboardMenuItem />
      <SubMenu
        handleToggle={() => handleToggle('menuCatalog')}
        isOpen={state.menuCatalog}
        name="Image"
        icon={<products.icon />}
        dense={dense}
      >
        <MenuItemLink
          to="/files"
          state={{ _scrollToTop: true }}
          primaryText={translate('Product', {
            smart_count: 3
          })}
          leftIcon={<products.icon />}
          dense={dense}
        />
        <MenuItemLink
          to="/tags"
          state={{ _scrollToTop: true }}
          primaryText={translate('Tag', {
            smart_count: 2
          })}
          leftIcon={<AccessibilityNewIcon />}
          dense={dense}
        />
      </SubMenu>
    </Box>
  )
}

export default Menu
