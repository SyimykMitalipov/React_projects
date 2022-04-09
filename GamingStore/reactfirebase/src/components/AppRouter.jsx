// import React from 'react';
// import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts';
// import { Route } from 'react-router-dom';
// import Redirect
// import { privateRoutes } from './routes';
// import { publicRoutes } from './routes';
// const Approuter = () => {
//     const user = false
//     return  user ? 
    
//         (
//             <Switch>
//                 {
//                     privateRoutes.map(({path , Component}) => 
//                          <Route path={path} compoent={Component} exact={true} />
//                     )
//                 }
//                 <Redirect to={CHAT_ROUTE} />
//             </Switch>
//         )
//         :
//         (
//             <Switch>
//                  {
//                     publicRoutes.map(({path , Component}) => 
//                          <Route path={path} compoent={Component} exact={true} />
//                     )
//                 }
//                 <Redirect to={LOGIN_ROUTE} />
//             </Switch>
//         )
// }

// export default Approuter;
