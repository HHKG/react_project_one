import {lazy} from 'react';

export default path => lazy(()=>import(`../pages/${path}`)) 

