/**
 * @author Visupervi
 * @date 2019/9/16 20:10
 * @name 对路由进行封装，实现类似于vue的路由
 * @param
 * @return
 */
import Register from "../components/RegisterComponent/register";
import Agreement from "../components/AgreementComponent/agreement";
let router = [
  {
    path:"/",
    componentName:Register,
    exact:true,
    meta:{
      title:"注册",
      keepalive:true
    },
    children:[
      {
        path: "/agreement",
        componentName: Agreement,
        meta: {
          title: "阅读通知",
          keepalive: true
        }
      }
    ]
  },
];
export default router;