import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Breadcrumbs } from './Breadcrumbs';

export const Header = () => {
  
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  let breadcrumbPath = "";

  return (
    <div className='header'>
      <Breadcrumbs/>
    </div>
  )
}
