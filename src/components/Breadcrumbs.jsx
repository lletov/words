import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import arrow from './../assets/arrow-right.svg'

export const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);
    let breadcrumbPath = "";

    const pathObj = {
      'tests': 'тесты',
      '50': 'тест 50',
      '100': 'тест 100',
      'wordslist': 'список слов'
    }
  
    return (
      <div className="breadcrumbs">
        <Link 
            to="/"
            style={{ textDecoration: 'none' }}
        >
            <p style={{color: '#c1c1c1'}}>главная</p>
        </Link >
        {pathnames.map((name, index) => {
          breadcrumbPath += `/${name}`;
          const isLast = index === pathnames.length - 1;
      
            return isLast 
              ? (
              <div className="breadcrumbs-item" key={breadcrumbPath}>
                <img src={arrow}/>
                <p>{pathObj[name]}</p>
              </div>
            ) : (
              <div className="breadcrumbs-item" key={breadcrumbPath}>
                <img src={arrow}/>
                {" "}
                <Link 
                    to={breadcrumbPath}
                    style={{ textDecoration: 'none' }}
                >
                    <p>{pathObj[name]}</p>
                </Link>
              </div>
            );
          }
          )}
      </div>
    )
}
