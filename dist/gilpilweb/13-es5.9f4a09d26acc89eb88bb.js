function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"22Yr":function(t,e,n){"use strict";n.r(e),e.default=""},"8o83":function(t,e,n){"use strict";n.r(e);var s=n("mrSG"),r=n("fXoL"),a=n("ofXK"),o=n("tyNb"),i=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),c=[{path:"",component:i=Object(s.b)([Object(r.Component)({selector:"app-auth-signin-v2",template:Object(s.c)(n("gq35")).default,styles:[Object(s.c)(n("22Yr")).default]})],i)}],l=function t(){_classCallCheck(this,t)};l=Object(s.b)([Object(r.NgModule)({imports:[o.f.forChild(c)],exports:[o.f]})],l),n.d(e,"AuthSigninV2Module",(function(){return u}));var u=function t(){_classCallCheck(this,t)};u=Object(s.b)([Object(r.NgModule)({declarations:[i],imports:[a.CommonModule,l]})],u)},gq35:function(t,e,n){"use strict";n.r(e),e.default='<div class="auth-wrapper align-items-stretch aut-bg-img">\r\n  <div class="flex-grow-1">\r\n    <div class="h-100 d-md-flex align-items-center auth-side-img">\r\n      <div class="col-sm-10 auth-content w-auto">\r\n        <img src="assets/images/auth/auth-logo.png" alt="" class="img-fluid">\r\n        <h1 class="text-white my-4">Welcome Back!</h1>\r\n        <h4 class="text-white font-weight-normal">Signin to your account and get explore the Able Pro Angular 9+ Free Dashboard Template.<br/>Do not forget to play with live customizer</h4>\r\n      </div>\r\n    </div>\r\n    <div class="auth-side-form">\r\n      <div class=" auth-content">\r\n        <img src="assets/images/auth/auth-logo-dark.png" alt="" class="img-fluid mb-4 d-block d-xl-none d-lg-none">\r\n        <h3 class="mb-4 f-w-400">Signin</h3>\r\n        <div class="input-group mb-3">\r\n          <input type="email" class="form-control" placeholder="Email address">\r\n        </div>\r\n        <div class="input-group mb-4">\r\n          <input type="password" class="form-control" placeholder="Password">\r\n        </div>\r\n        <div class="custom-control custom-checkbox text-left mb-4 mt-2">\r\n          <input type="checkbox" class="custom-control-input" id="customCheck1">\r\n          <label class="custom-control-label" for="customCheck1">Save credentials.</label>\r\n        </div>\r\n        <button class="btn btn-block btn-primary mb-0">Signin</button>\r\n        <div class="text-center">\r\n          <div class="saprator my-4"><span>OR</span></div>\r\n          <button class="btn text-white bg-facebook mb-2 mr-2  wid-40 px-0 hei-40 rounded-circle"><i class="fab fa-facebook-f"></i></button>\r\n          <button class="btn text-white bg-googleplus mb-2 mr-2 wid-40 px-0 hei-40 rounded-circle"><i class="fab fa-google-plus-g"></i></button>\r\n          <button class="btn text-white bg-twitter mb-2  wid-40 px-0 hei-40 rounded-circle"><i class="fab fa-twitter"></i></button>\r\n          <p class="mb-2 text-muted">Forgot password? <a [routerLink]="[\'/auth/reset-password-v2\']" class="f-w-400">Reset</a></p>\r\n          <p class="mb-0 text-muted">Don\u2019t have an account? <a [routerLink]="[\'/auth/signup-v2\']" class="f-w-400">Signup</a></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n'}}]);