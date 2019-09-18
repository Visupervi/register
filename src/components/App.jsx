import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import router from '../router/Router';
class App extends Component {
  constructor(props){
    super(props);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
  }
  render() {
    return(
      <Router>
        <div className={"app"}>
          {
            router.map((router,key)=>{
              if(router.exact){
                return <Route
                  key={key}
                  exact={router.exact}
                  path={router.path}
                  render={()=>{
                    document.title=router.meta.title;
                    return <router.componentName/>
                  }}
                  // component={router.componentName}
                />
              //     render={props => (
                //                             //主要是为了传递嵌套路由到子组件
                //                             //类似于 <User {...props} routes={routes} />
                //                             <componentName {...props} routes={routes} />
                //                           )}
              }else{
                return <Route
                  key={key}
                  path={router.path}
                  render={() => {
                    document.title = router.meta.title;
                    return <router.componentName/>
                  }}
                />
              }
            })
          }
        </div>
      </Router>
    )
  }
}
export default App
