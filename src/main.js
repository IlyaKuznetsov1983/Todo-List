import PageAuthorizationComponent from "./component/page-authorization.js";
import {PageApplication} from "./component/page-application.js";

const login = new PageAuthorizationComponent('login')

export  const pageApplication = new PageApplication('page-content', login)
console.log(pageApplication)