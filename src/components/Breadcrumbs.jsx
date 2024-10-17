import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import arrow from './../assets/arrow-right.svg'

export const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);
    let breadcrumbPath = "";
  
    return (
      <div className="breadcrumbs">
        <Link 
            to="/"
            style={{ textDecoration: 'none' }}
        >
            <p style={{fontWeight: '800', color: '#1C29A0'}}>1000WORDS</p>
        </Link>
        {pathnames.map((name, index) => {
          breadcrumbPath += `/${name}`;
          const isLast = index === pathnames.length - 1;
      
            return isLast 
              ? (
              <div className="breadcrumbs-item" key={breadcrumbPath}>
                <img src={arrow}/>
                <p>{name}</p>
              </div>
            ) : (
              <div className="breadcrumbs-item" key={breadcrumbPath}>
                <img src={arrow}/>
                {" "}
                <Link 
                    to={breadcrumbPath}
                >
                    <p>{name}</p>
                </Link>
              </div>
            );
          }
          )}
      </div>
    )
}
