import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
//Layout
import MainLayout from './components/main-layout';
import SearchLayout from './components/search-layout';
//Pages
import Home from './components/home';
import UserList from './components/user-list';
import WidgetList from './components/widget-list';
import UserProfile from './components/user-profile';
export default (
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={Home} />
            <Route path="users">
                <Route component={SearchLayout} >
                    <IndexRoute component={UserList} />
                </Route>
                <Route path=":userId" component={UserProfile} />
            </Route>
            <Route path="widgets">
                <Route component={SearchLayout} >
                <IndexRoute component={WidgetList} />
            </Route>
            </Route>
        </Route>
    </Router>
)


// import React from 'react';
// import {Router, Route, browserHistory, IndexRoute} from 'react-router';
//
//
//
// //Layouts
//
// import MainLayout from './components/main-layout';
// import SearchLayout from '.components/search-layout';
//
// //Pages
//
// import Home from './components/home';
// import UserList from './components/user-list';
// import WidgetList from './components/widget-list';
// import UserProfile from './components/user-profile';
//
//
// export default (
//   <Router history={BrowserHistory}>
//     <Route component={MainLayout}>
//       <Route path="/" component={Home} />
//
//       <Route path="/users" >
//         <Route component={SearchLayout}>
//           <IdexRoute component={UserList} />
//         </Route>
//         <Route path=":userId" component={UserProfile}></Route>
//       </Route>
//
//
//       <Route path="/widgets">
//         <Route component={SearchLayout}>
//           <IndexRoute component={Widget} />
//         </Route>
//       </Route>
//
//
//   </Route>
//   </Router>
// )
