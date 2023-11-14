import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.css'

interface BreadcrumbsProps{
    selectedCategory?: string;
}

function Breadcrumbs({selectedCategory}: BreadcrumbsProps) {
 const location = useLocation();
 const pathnames = location.pathname.split('/').filter((x) => x);

 return (
    <div className="breadcrumb">
     <Link to="/">Home</Link>
     {pathnames.map((name, index) => {
       const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
       const isLast = index === pathnames.length - 1;
       return isLast ? (
         <span key={name}>{name}</span>
       ) : (
        <>
        {index !== 0 && <span>/</span>}
        <Link key={name} to={routeTo}>{name}</Link>
      </>
       );
    })}
   {selectedCategory && <span>/ {selectedCategory}</span>}
    </div>
   );
};

export default Breadcrumbs;