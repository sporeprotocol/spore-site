import React from 'react';
import { Link } from 'react-router-dom';
import './BreadCrumbs.scss'

interface BreadCrumbsProps {
    parentName: string;
    childName: string;
    parentLink: string;
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ parentName, childName, parentLink }) => {
    return (
        <div className="breadcrumb-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                <path d="M16.5124 6.38263L8.83755 1.05237L1.38721 6.91618C1.73045 6.91618 1.93671 7.06365 2.39279 7.2012C2.84887 7.33874 3.01793 7.21498 3.13179 7.49035C3.38121 8.09353 3.02623 13.0545 3.35226 14.7669H6.89241C6.89241 14.7669 6.89241 12.5526 6.89241 11.4093C6.89241 10.266 7.22636 9.43713 7.22636 9.43713C8.40875 9.27405 11.0146 9.28631 11.0635 9.67772C11.1125 10.0691 11.5479 12.7487 11.5275 14.7669H15.2332M16.5124 6.38263L17.0001 6.72134H15.4617C15.4617 6.72134 15.4617 13.1663 15.7599 14.7669C14.581 14.7669 15.2332 14.7669 15.2332 14.7669M16.5124 6.38263C16.0358 6.26973 15.0475 6.11167 14.9071 6.38263C14.7315 6.72134 15.0576 12.2788 15.2332 14.7669" stroke="#21232B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
                <path d="M6.24983 3C6.78806 3.74214 7.32629 4.48429 7.86451 5.22643C8.70618 6.38698 9.55535 7.56036 10.1876 8.94818C10.2888 9.17033 10.3866 9.40822 10.3986 9.66954C10.4184 10.1004 10.2049 10.4786 10.0008 10.8076C8.63785 13.0043 7.16643 15.0747 5.5999 17" stroke="#21232B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <Link to={parentLink} className="parent-catg mr-3">{parentName}</Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
                <path d="M6.24983 3C6.78806 3.74214 7.32629 4.48429 7.86451 5.22643C8.70618 6.38698 9.55535 7.56036 10.1876 8.94818C10.2888 9.17033 10.3866 9.40822 10.3986 9.66954C10.4184 10.1004 10.2049 10.4786 10.0008 10.8076C8.63785 13.0043 7.16643 15.0747 5.5999 17" stroke="#21232B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p className="child-catg mr-3">{childName}</p>
        </div>
    );
};

export default BreadCrumbs;
