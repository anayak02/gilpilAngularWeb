(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"0fO1":function(a,t,r){"use strict";r.r(t),t.default=""},hgKn:function(a,t,r){"use strict";r.r(t);var s=r("mrSG"),e=r("fXoL"),d=r("ofXK"),i=r("tyNb");let n=class{constructor(){}ngOnInit(){}};n=Object(s.b)([Object(e.Component)({selector:"app-basic-cards",template:Object(s.c)(r("w5v0")).default,styles:[Object(s.c)(r("0fO1")).default]})],n);const l=[{path:"",component:n}];let c=class{};c=Object(s.b)([Object(e.NgModule)({imports:[i.f.forChild(l)],exports:[i.f]})],c);var o=r("ebz3");r.d(t,"BasicCardsModule",(function(){return p}));let p=class{};p=Object(s.b)([Object(e.NgModule)({imports:[d.CommonModule,c,o.a],declarations:[n]})],p)},w5v0:function(a,t,r){"use strict";r.r(t),t.default='<div class="row">\r\n  <div class="col-md-6 col-xl-4">\r\n    <h5>Body Content</h5>\r\n    <hr>\r\n    <app-card [hidHeader]="true">\r\n      This is some text within a card body.\r\n    </app-card>\r\n  </div>\r\n  <div class="col-md-6 col-xl-4">\r\n    <h5>Titles, Text, and Links</h5>\r\n    <hr>\r\n    <app-card [hidHeader]="true">\r\n      <h5 class="card-title">Card title</h5>\r\n      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>\r\n      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\r\n      <a href="javascript:" class="card-link">Card link</a>\r\n      <a href="javascript:" class="card-link">Another link</a>\r\n    </app-card>\r\n  </div>\r\n  <div class="col-md-6 col-xl-4">\r\n    <h5>Header and Footer</h5>\r\n    <hr>\r\n    <app-card cardTitle="Featured" [options]="false">\r\n      <h5 class="card-title">Special title treatment</h5>\r\n      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>\r\n      <a href="javascript:" class="btn btn-primary">Go somewhere</a>\r\n    </app-card>\r\n  </div>\r\n  <div class="col-xl-12">\r\n    <div class="row">\r\n      <div class="col-sm-4">\r\n        <h5>Left Align</h5>\r\n        <hr>\r\n        <app-card [hidHeader]="true">\r\n          <h5 class="card-title">Special title treatment</h5>\r\n          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>\r\n          <a href="javascript:" class="btn btn-primary">Go somewhere</a>\r\n        </app-card>\r\n      </div>\r\n      <div class="col-sm-4">\r\n        <h5>Center Align</h5>\r\n        <hr>\r\n        <app-card [hidHeader]="true" cardClass="text-center">\r\n          <h5 class="card-title">Special title treatment</h5>\r\n          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>\r\n          <a href="javascript:" class="btn btn-primary">Go somewhere</a>\r\n        </app-card>\r\n      </div>\r\n      <div class="col-sm-4">\r\n        <h5>Right Align</h5>\r\n        <hr>\r\n        <app-card [hidHeader]="true" cardClass="text-right">\r\n          <h5 class="card-title">Special title treatment</h5>\r\n          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>\r\n          <a href="javascript:" class="btn btn-primary">Go somewhere</a>\r\n        </app-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class="col-md-6 col-xl-4">\r\n    <h5>Image Caps</h5>\r\n    <hr>\r\n    <div class="marge-card mb-3">\r\n      <app-card [hidHeader]="true" cardClass="mb-0" blockClass="p-0">\r\n        <img class="card-img-top" src="assets/images/slider/img-slide-3.jpg" alt="Card image cap" />\r\n      </app-card>\r\n      <app-card [hidHeader]="true" blockClass="m-t-15">\r\n        <h5 class="card-title">Card title</h5>\r\n        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\r\n      </app-card>\r\n    </div>\r\n  </div>\r\n  <div class="col-md-6 col-xl-4">\r\n    <h5>Image Caps [ Bottom ]</h5>\r\n    <hr>\r\n    <div class="marge-card mb-3">\r\n      <app-card [hidHeader]="true" cardClass="mb-0">\r\n        <h5 class="card-title">Card title</h5>\r\n        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\r\n      </app-card>\r\n      <app-card [hidHeader]="true" blockClass="m-t-15 p-0">\r\n        <img class="card-img-top" src="assets/images/slider/img-slide-3.jpg" alt="Card image cap" />\r\n      </app-card>\r\n    </div>\r\n  </div>\r\n  <div class="col-md-6 col-xl-4">\r\n    <h5>Image Overlays</h5>\r\n    <hr>\r\n    <app-card [hidHeader]="true" cardClass="bg-dark text-white" blockClass="p-0">\r\n      <img class="card-img" src="assets/images/slider/img-slide-7.jpg" alt="Card image">\r\n      <div class="card-img-overlay">\r\n        <h5 class="card-title text-white">Card title</h5>\r\n        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n        <p class="card-text">Last updated 3 mins ago</p>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n\r\n  <div class="col-xl-12">\r\n    <h5 class="mt-4">Card Styles</h5>\r\n    <hr>\r\n    <div class="row">\r\n      <div class="col-sm-4">\r\n        <div class="card text-white bg-primary ">\r\n          <div class="card-header">Header</div>\r\n          <div class="card-body">\r\n            <h5 class="card-title text-white">Primary card title</h5>\r\n            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="col-sm-4">\r\n        <div class="card text-white bg-secondary ">\r\n          <div class="card-header">Header</div>\r\n          <div class="card-body">\r\n            <h5 class="card-title text-white">Secondary card title</h5>\r\n            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="col-sm-4">\r\n        <div class="card text-white bg-success ">\r\n          <div class="card-header">Header</div>\r\n          <div class="card-body">\r\n            <h5 class="card-title text-white">Success card title</h5>\r\n            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="col-sm-4">\r\n        <div class="card text-white bg-danger ">\r\n          <div class="card-header">Header</div>\r\n          <div class="card-body">\r\n            <h5 class="card-title text-white">Danger card title</h5>\r\n            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="col-sm-4">\r\n        <div class="card text-white bg-warning ">\r\n          <div class="card-header">Header</div>\r\n          <div class="card-body">\r\n            <h5 class="card-title text-white">Warning card title</h5>\r\n            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="col-sm-4">\r\n        <div class="card text-white bg-info ">\r\n          <div class="card-header">Header</div>\r\n          <div class="card-body">\r\n            <h5 class="card-title text-white">Info card title</h5>\r\n            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="col-sm-4">\r\n        <div class="card bg-light ">\r\n          <div class="card-header">Header</div>\r\n          <div class="card-body">\r\n            <h5 class="card-title">Light card title</h5>\r\n            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="col-sm-4">\r\n        <div class="card text-white bg-dark ">\r\n          <div class="card-header">Header</div>\r\n          <div class="card-body">\r\n            <h5 class="card-title text-white">Dark card title</h5>\r\n            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class="col-xl-12">\r\n    <h5>Card Groups</h5>\r\n    <hr>\r\n    <div class="card-group">\r\n      <div class="card">\r\n        <img class="card-img-top" src="assets/images/slider/img-slide-4.jpg" alt="Card image cap">\r\n        <div class="card-body">\r\n          <h5 class="card-title">Card title</h5>\r\n          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n        </div>\r\n        <div class="card-footer">\r\n          <small class="text-muted">Last updated 3 mins ago</small>\r\n        </div>\r\n      </div>\r\n      <div class="card">\r\n        <img class="card-img-top" src="assets/images/slider/img-slide-2.jpg" alt="Card image cap">\r\n        <div class="card-body">\r\n          <h5 class="card-title">Card title</h5>\r\n          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>\r\n        </div>\r\n        <div class="card-footer">\r\n          <small class="text-muted">Last updated 3 mins ago</small>\r\n        </div>\r\n      </div>\r\n      <div class="card">\r\n        <img class="card-img-top" src="assets/images/slider/img-slide-1.jpg" alt="Card image cap">\r\n        <div class="card-body">\r\n          <h5 class="card-title">Card title</h5>\r\n          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\r\n        </div>\r\n        <div class="card-footer">\r\n          <small class="text-muted">Last updated 3 mins ago</small>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class="col-xl-12">\r\n    <h5 class="mt-4">Card Decks</h5>\r\n    <hr>\r\n    <div class="card-deck">\r\n      <div class="card">\r\n        <img class="card-img-top" src="assets/images/slider/img-slide-4.jpg" alt="Card image cap">\r\n        <div class="card-body">\r\n          <h5 class="card-title">Card title</h5>\r\n          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n        </div>\r\n        <div class="card-footer">\r\n          <small class="text-muted">Last updated 3 mins ago</small>\r\n        </div>\r\n      </div>\r\n      <div class="card">\r\n        <img class="card-img-top" src="assets/images/slider/img-slide-2.jpg" alt="Card image cap">\r\n        <div class="card-body">\r\n          <h5 class="card-title">Card title</h5>\r\n          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>\r\n        </div>\r\n        <div class="card-footer">\r\n          <small class="text-muted">Last updated 3 mins ago</small>\r\n        </div>\r\n      </div>\r\n      <div class="card">\r\n        <img class="card-img-top" src="assets/images/slider/img-slide-1.jpg" alt="Card image cap">\r\n        <div class="card-body">\r\n          <h5 class="card-title">Card title</h5>\r\n          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\r\n        </div>\r\n        <div class="card-footer">\r\n          <small class="text-muted">Last updated 3 mins ago</small>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class="col-xl-12">\r\n    <h5 class="mt-4">Card Columns</h5>\r\n    <hr>\r\n    <div class="card-columns">\r\n      <div class="card">\r\n        <img class="card-img-top" src="assets/images/slider/img-slide-1.jpg" alt="Card image cap">\r\n        <div class="card-body">\r\n          <h5 class="card-title">Card title that wraps to a new line</h5>\r\n          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n          <button class="btn btn-primary">View More</button>\r\n          <button class="btn btn-danger">Delete</button>\r\n        </div>\r\n      </div>\r\n      <div class="card">\r\n        <blockquote class="blockquote mb-0 card-body">\r\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n          <footer class="blockquote-footer">\r\n            <small class="text-muted">Someone famous in <cite title="Source Title">Source Title</cite></small>\r\n          </footer>\r\n        </blockquote>\r\n      </div>\r\n      <div class="card">\r\n        <img class="card-img-top" src="assets/images/slider/img-slide-3.jpg" alt="Card image cap">\r\n        <div class="card-body">\r\n          <h5 class="card-title">Card title</h5>\r\n          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>\r\n          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\r\n        </div>\r\n      </div>\r\n      <div class="card bg-c-blue text-white text-center">\r\n        <div class="card-body">\r\n          <blockquote class="blockquote mb-0">\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>\r\n            <footer class="blockquote-footer text-white">\r\n              <small>Someone famous in <cite title="Source Title">Source Title</cite></small>\r\n            </footer>\r\n          </blockquote>\r\n        </div>\r\n      </div>\r\n      <div class="card text-center">\r\n        <div class="card-body">\r\n          <h5 class="card-title">Card title</h5>\r\n          <p class="card-text">This card has a regular title and short paragraphy of text below it.</p>\r\n          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\r\n        </div>\r\n      </div>\r\n      <div class="card">\r\n        <img class="card-img" src="assets/images/slider/img-slide-2.jpg" alt="Card image">\r\n      </div>\r\n      <div class="card text-right">\r\n        <div class="card-body">\r\n          <blockquote class="blockquote mb-0">\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n            <footer class="blockquote-footer">\r\n              <small class="text-muted">Someone famous in <cite title="Source Title">Source Title</cite></small>\r\n            </footer>\r\n          </blockquote>\r\n        </div>\r\n      </div>\r\n      <div class="card">\r\n        <div class="card-body">\r\n          <h5 class="card-title">Card title</h5>\r\n          <p class="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>\r\n          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n'}}]);