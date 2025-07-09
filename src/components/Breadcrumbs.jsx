import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import arrow from './../assets/arrow-right.svg'
import { ChevronLeft } from 'lucide-react';

export const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);
    let breadcrumbPath = "";
    const navigate = useNavigate();

    const pathObj = {
      'tests': 'тесты',
      '5': 'тест 5',
      '50': 'тест 50',
      '100': 'тест 100',
      'wordslist': 'список слов',
      'a2': 'тест a2',
      'adverb': 'тест adverb',
    }
  
    return (
      <div className="breadcrumbs">
        <Link style={{marginRight: '12px'}}>
          <button 
            className="btn-m" style={{height: '40px', width: '40px', padding: '0px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
            onClick={() => navigate(-1)}
          >
              <ChevronLeft className='size-5'/>
          </button>
        </Link>
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
