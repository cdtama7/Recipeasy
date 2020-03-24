(this.webpackJsonprecipe=this.webpackJsonprecipe||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},109:function(e,t,a){},118:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},127:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(27),c=a.n(s),l=a(144),i=a(143),o=a(140),u=a(7),m=a(8),d=a(10),p=a(9),h=a(11),f=a(134),g=a(135),b=a(25),v=a(131),E=(a(73),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={text:""},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(b.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault(),a.setState({text:""}),console.log("we submitted"),a.props.addItem(a.state.text)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"input"},r.a.createElement("label",{htmlFor:"formGroupExampleInput"},"Add a new item:"),r.a.createElement("input",{value:this.state.text,name:"text",onChange:this.handleInputChange,type:"text",className:"form-control",id:"formGroupExampleInput",placeholder:"Whats in your fridge?"}),r.a.createElement("br",null),r.a.createElement(v.a,{variant:"primary",onClick:this.handleFormSubmit,type:"submit"},"Add to Fridge")))}}]),t}(n.Component)),y=a(139),O=a(132),k=(a(74),function(e){var t=function(t){var a=t.target.getAttribute("data-item-id");e.deleteItem(a)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"fridge-header"},"Your Fridge:"),e.list.map((function(e){return r.a.createElement(y.a,{key:e._id},r.a.createElement(O.a,null,e.name,r.a.createElement("button",{type:"button",className:"ml-2 mb-1 close","data-dismiss":"toast","aria-label":"Close",onClick:t},r.a.createElement("span",{"aria-hidden":"true","data-item-id":e._id}," \xd7"))))})))}),j=a(133);a(84);var S=function(){return r.a.createElement("div",null,r.a.createElement(j.a,{className:"btn btn-primary btn-lg btn-block",to:"/recipes"},"Find Recipes"))},N=a(6),w=a.n(N),I=function(e){return w.a.get("/api/items/forUser/"+e)},C=function(e){return w.a.delete("/api/items/"+e)},x=function(e){return w.a.post("/api/items",e)},A=function(e,t){return w.a.get("/api/favs/forUserByRecipeId/"+e+"/"+t)},R=function(e,t){return w.a.delete("/api/favs/deleteForUserByRecipeId/"+e+"/"+t)},F=function(e){return w.a.post("/api/favs",e)},_=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={list:[]},a.addItem=function(e){x({name:e,userId:a.props.user.sub}).then((function(e){return a.loadItems()})).catch((function(e){return console.log(e)}))},a.deleteItem=function(e){C(e).then((function(e){return a.loadItems()})).catch((function(e){return console.log(e)}))},a.loadItems=function(){I(a.props.user.sub).then((function(e){console.log(e),a.setState({list:e.data})})).catch((function(e){return console.log(e)}))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.loadItems()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,r.a.createElement(g.a,{md:6},r.a.createElement(E,{addItem:this.addItem})),r.a.createElement(g.a,{md:6},r.a.createElement(k,{list:this.state.list,deleteItem:this.deleteItem}))),r.a.createElement("br",null),r.a.createElement(S,null))}}]),t}(n.Component),T=a(21);a(101).config();var L=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_AUTH0_CLIENT_ID:"suuZ9Z1ij6gl0ArYMyf9LpK5jRflKT2g",REACT_APP_AUTH0_DOMAIN:"firuzaa8.auth0.com"}).SPOONACULAR_API_KEY,D=function(e){return w.a.get("/spoonacular/recipes/findByIngredients?ingredients="+e+"&limitLicense=true&ignorePantry=false&ranking=2&number=5&apiKey="+L)},P=function(e){return w.a.get("/spoonacular/recipes/findByIngredients?ingredients="+e+"&limitLicense=true&ignorePantry=false&ranking=2&number=20&apiKey="+L)},U=function(e){return w.a.get("/spoonacular/recipes/informationBulk?ids="+e+"&apiKey="+L)},B=function(e,t){return w.a.get("/spoonacular/recipes/"+e+"/analyzedInstructions?apiKey="+L)};var W=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Choose your diet"),r.a.createElement("div",{className:"btn-group btn-group-toggle","data-toggle":"buttons"},r.a.createElement("label",{className:"btn btn-secondary active",onClick:e.handleNormalClick},r.a.createElement("input",{type:"radio",name:"options",id:"normalSearchToggle",defaultChecked:!0})," Normal"),r.a.createElement("label",{className:"btn btn-secondary",onClick:e.handleGlutenFreeClick},r.a.createElement("input",{type:"radio",name:"options",id:"glutenFreeSearchToggle"})," Gluten Free"),r.a.createElement("label",{className:"btn btn-secondary",onClick:e.handleVeganClick},r.a.createElement("input",{type:"radio",name:"options",id:"veganSearchToggle"})," Vegan"),r.a.createElement("label",{className:"btn btn-secondary",onClick:e.handleVegetarianClick},r.a.createElement("input",{type:"radio",name:"options",id:"vegetarianSearchToggle"})," Vegetarian")),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",onClick:e.handleFormSubmit,className:"btn btn-success"},"Search"))},K=a(141),V=(a(104),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={id:a.props.id,stepNums:[],stepText:[],active:!1},a.getAndShowInstructions=function(){console.log(a.state.id),B(a.state.id).then((function(e){console.log(e),a.setState({active:!0}),e.data[0].steps.map((function(e){return a.setState({stepNums:[].concat(Object(T.a)(a.state.stepNums),[e.number])}),a.setState({stepText:[].concat(Object(T.a)(a.state.stepText),[e.step])})}))})).catch((function(e){return a.setState({error:e.message})}))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("button",{type:"submit",className:this.state.active?"inactive":"active",id:"get-instructions",onClick:this.getAndShowInstructions},"Get Instructions"),r.a.createElement(K.a,{className:this.state.active?"active":"inactive",id:"instructions"},r.a.createElement(K.a.Header,null,this.props.title),r.a.createElement(K.a.Body,null,this.state.stepNums.map((function(t,a){return r.a.createElement("div",null,t,".",r.a.createElement("p",null,e.state.stepText[a]))})))))}}]),t}(n.Component)),G=(a(105),a(126)),J=G.Octicon,M=G.heart,H=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={fav:!1},a.componentDidMount=function(){A(a.props.userId,a.props.recipe.id).then((function(e){a.setState({fav:0!==e.data.length}),console.log(e)})),console.log(a.props.recipe)},a.getBtnClass=function(){return a.state.fav?"btn btn-lg btn-block btn-danger":"btn btn-lg btn-block btn-primary"},a.handleClick=function(e){a.state.fav?R(a.props.userId,a.props.recipe.id).then((function(){a.setState({fav:!1})})):F({recipeId:a.props.recipe.id,recipe:a.props.recipe,userId:a.props.userId}).then((function(){a.setState({fav:!0})}))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return console.log("recipe id: "+this.props.recipe.id+" is fav: "+this.state.fav),r.a.createElement("div",null,r.a.createElement("button",{className:this.getBtnClass(),onClick:this.handleClick},r.a.createElement(J,{icon:M})))}}]),t}(n.Component),q=a(14),z=a.n(q),Y=a(19),Z=a(62),Q=a.n(Z),X=Object(n.createContext)(),$=function(){return Object(n.useContext)(X)},ee=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={auth0Client:null,isLoading:!0,isAuthenticated:!1,user:null},a.config={domain:"firuzaa8.auth0.com",client_id:"suuZ9Z1ij6gl0ArYMyf9LpK5jRflKT2g",redirect_uri:window.location.origin},a.initializeAuth0=Object(Y.a)(z.a.mark((function e(){var t,n,r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q()(a.config);case 2:if(t=e.sent,a.setState({auth0Client:t}),!window.location.search.includes("code=")){e.next=6;break}return e.abrupt("return",a.handleRedirectCallback());case 6:return e.next=8,t.isAuthenticated();case 8:if(!(n=e.sent)){e.next=15;break}return e.next=12,t.getUser();case 12:e.t0=e.sent,e.next=16;break;case 15:e.t0=null;case 16:r=e.t0,a.setState({isLoading:!1,isAuthenticated:n,user:r});case 18:case"end":return e.stop()}}),e)}))),a.handleRedirectCallback=Object(Y.a)(z.a.mark((function e(){var t;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({isLoading:!0}),e.next=3,a.state.auth0Client.handleRedirectCallback();case 3:return e.next=5,a.state.auth0Client.getUser();case 5:t=e.sent,a.setState({user:t,isAuthenticated:!0,isLoading:!1});case 7:case"end":return e.stop()}}),e)}))),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.initializeAuth0(),console.log(this.config)}},{key:"render",value:function(){var e=this.state,t=e.auth0Client,a=e.isLoading,n=e.isAuthenticated,s=e.user,c=this.props.children,l={isLoading:a,isAuthenticated:n,user:s,loginWithRedirect:function(){return t.loginWithRedirect.apply(t,arguments)},getTokenSilently:function(){return t.getTokenSilently.apply(t,arguments)},getIdTokenClaims:function(){return t.getIdTokenClaims.apply(t,arguments)},logout:function(){return t.logout.apply(t,arguments)}};return r.a.createElement(X.Provider,{value:l},c)}}]),t}(n.Component);var te=function(e){var t=$().user;return"normal"===e.diet?r.a.createElement("div",{className:"container-fluid"},e.results.map((function(e,a){return r.a.createElement("div",{key:"search result 1"+a,className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card mb-3",style:{maxWidth:"540px"}},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("img",{src:e.image,className:"card-img",alt:"..."}),r.a.createElement("br",null),r.a.createElement(H,{recipe:e,userId:t.sub})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{alt:"recipe"}," ",e.title," "),r.a.createElement("ul",{className:"list-group search-results"},"Ingredients",e.missedIngredients.map((function(e,t){return r.a.createElement("li",{key:"".concat(e.id,"__").concat(t),className:"list-group-item"},r.a.createElement("p",{alt:"ingredient"}," ",e.original," "))})),e.usedIngredients.map((function(e,t){return r.a.createElement("li",{key:"".concat(e.id,"__").concat(t),className:"list-group-item"},r.a.createElement("p",{alt:"ingredient"}," ",e.original," "))})))))))),r.a.createElement(V,{title:e.title,id:e.id}))}))):r.a.createElement("div",{className:"container-fluid"},e.specialResults.map((function(e,a){return r.a.createElement("div",{key:a,className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card mb-3",style:{maxWidth:"540px"}},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("img",{src:e.image,className:"card-img",alt:"..."}),r.a.createElement("br",null),r.a.createElement(H,{recipe:e,userId:t.sub})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{alt:"recipe"}," ",e.title," "),r.a.createElement("ul",{className:"list-group search-results"},"Ingredients",e.extendedIngredients.map((function(e,t){return r.a.createElement("li",{key:"".concat(e.id,"__").concat(t),className:"list-group-item"},r.a.createElement("p",{alt:"ingredient"}," ",e.original," "))})))))))),r.a.createElement(V,{title:e.title,id:e.id}))})))};a(109);var ae=function(e){return r.a.createElement("div",Object.assign({className:"container"},e))},ne=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={diet:"",results:[],ingredients:[],fridge:[],list:[],specialIDs:[],specialIndexes:[],specialResults:[]},a.handleNormalClick=function(){a.setState({results:[]}),a.setState({diet:"normal"}),console.log(a.state.diet)},a.handleGlutenFreeClick=function(){a.setState({specialResults:[]}),a.setState({diet:"gluten free"}),console.log(a.state.diet)},a.handleVeganClick=function(){a.setState({specialResults:[]}),a.setState({diet:"vegan"}),console.log(a.state.diet)},a.handleVegetarianClick=function(){a.setState({specialResults:[]}),a.setState({diet:"vegetarian"}),console.log(a.state.diet)},a.handleFormSubmit=function(e){e.preventDefault(),a.setState({results:[]}),"normal"===a.state.diet?D(a.state.fridge).then((function(e){if("error"===e.data.status)throw new Error;a.setState({results:e.data}),console.log(a.state.results)})).catch((function(e){return a.setState({error:e.message})})):P(a.state.fridge).then((function(e){if("error"===e.data.status)throw new Error;a.setState({specialResults:[]}),a.setState({specialIDs:[]}),e.data.map((function(e){return a.setState({specialIDs:[].concat(Object(T.a)(a.state.specialIDs),[e.id])})})),console.log(a.state.specialIDs),U(a.state.specialIDs).then((function(e){if("error"===e.data.status)throw new Error;switch(a.state.diet){case"vegetarian":a.setState({specialIndexes:[]}),e.data.map((function(e,t){!0===e.vegetarian&&a.setState({specialIndexes:[].concat(Object(T.a)(a.state.specialIndexes),[t])})}));break;case"vegan":a.setState({specialIndexes:[]}),e.data.map((function(e,t){!0===e.vegan&&a.setState({specialIndexes:[].concat(Object(T.a)(a.state.specialIndexes),[t])})}));break;case"gluten free":a.setState({specialIndexes:[]}),e.data.map((function(e,t){!0===e.glutenFree&&a.setState({specialIndexes:[].concat(Object(T.a)(a.state.specialIndexes),[t])})}))}console.log(e.data);for(var t=0;t<5;t++)console.log(e.data[a.state.specialIndexes[t]]),a.setState({specialResults:[].concat(Object(T.a)(a.state.specialResults),[e.data[a.state.specialIndexes[t]]])})})),console.log(a.state.specialIDs).catch((function(e){return a.setState({error:e.message})}))})).catch((function(e){return a.setState({error:e.message})}))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;I(this.props.user.sub).then((function(t){return e.setState({fridge:t.data.map((function(e){return e.name}))})})).then((function(){return console.log(e.state.fridge)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ae,{style:{minHeight:"80%"}},r.a.createElement("h1",{className:"text-center"},"Recipe Search"),r.a.createElement(W,{handleNormalClick:this.handleNormalClick,handleGlutenFreeClick:this.handleGlutenFreeClick,handleVeganClick:this.handleVeganClick,handleVegetarianClick:this.handleVegetarianClick,handleFormSubmit:this.handleFormSubmit}),r.a.createElement(te,{results:this.state.results,specialResults:this.state.specialResults,diet:this.state.diet})))}}]),t}(n.Component),re=a(26),se=a(18),ce=a.n(se),le=a(29),ie=function(e){var t=e.name,a=e.label,n=e.error,s=Object(le.a)(e,["name","label","error"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",Object.assign({},s,{name:t,id:t,className:"form-control"})),n&&r.a.createElement("div",{className:"alert alert-danger"},n))},oe=function(e){var t=e.name,a=e.label,n=e.options,s=e.error,c=Object(le.a)(e,["name","label","options","error"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("select",Object.assign({name:t,id:t},c,{className:"form-control"}),r.a.createElement("option",{value:""}),n.map((function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.name)}))),s&&r.a.createElement("div",{className:"alert alert-danger"},s))},ue=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={data:{},errors:{}},a.validate=function(){var e=ce.a.validate(a.state.data,a.schema,{abortEarly:!1}).error;if(!e)return null;var t={},n=!0,r=!1,s=void 0;try{for(var c,l=e.details[Symbol.iterator]();!(n=(c=l.next()).done);n=!0){var i=c.value;t[i.path[0]]=i.message}}catch(o){r=!0,s=o}finally{try{n||null==l.return||l.return()}finally{if(r)throw s}}return t},a.validateProperty=function(e){var t=e.name,n=e.value,r=Object(b.a)({},t,n),s=Object(b.a)({},t,a.schema[t]),c=ce.a.validate(r,s).error;return c?c.details[0].message:null},a.handleSubmit=function(e){e.preventDefault();var t=a.validate();a.setState({errors:t||{}}),t||a.doSubmit()},a.handleChange=function(e){var t=e.currentTarget,n=Object(re.a)({},a.state.errors),r=a.validateProperty(t);r?n[t.name]=r:delete n[t.name];var s=Object(re.a)({},a.state.data);s[t.name]=t.value,a.setState({data:s,errors:n})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"renderButton",value:function(e){return r.a.createElement("button",{disabled:this.validate(),className:"btn btn-primary"},e)}},{key:"renderSelect",value:function(e,t,a){var n=this.state,s=n.data,c=n.errors;return r.a.createElement(oe,{name:e,value:s[e],label:t,options:a,onChange:this.handleChange,error:c[e]})}},{key:"renderInput",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",n=this.state,s=n.data,c=n.errors;return r.a.createElement(ie,{type:a,name:e,value:s[e],label:t,onChange:this.handleChange,error:c[e]})}}]),t}(n.Component);var me={init:function(){},log:function(e){console.error(e)}},de=a(63);w.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||(me.log(e),de.toast.error("An unexpected error occurrred.")),Promise.reject(e)}));var pe={get:w.a.get,post:w.a.post,put:w.a.put,delete:w.a.delete,setJwt:function(e){w.a.defaults.headers.common["x-auth-token"]=e}},he=a(37),fe=he.a+"/users";function ge(e){return pe.post(fe,{email:e.username,password:e.password,name:e.name})}var be=a(64),ve=a.n(be),Ee=he.a+"/auth";function ye(){return(ye=Object(Y.a)(z.a.mark((function e(t,a){var n,r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe.post(Ee,{email:t,password:a});case 2:n=e.sent,r=n.data,localStorage.setItem("token",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Oe(){return localStorage.getItem("token")}pe.setJwt(Oe());var ke={login:function(e,t){return ye.apply(this,arguments)},loginWithJwt:function(e){localStorage.setItem("token",e)},logout:function(){localStorage.removeItem("token")},getCurrentUser:function(){try{var e=localStorage.getItem("token");return ve()(e)}catch(t){return null}},getJwt:Oe},je=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={data:{username:"",password:"",name:""},errors:{}},a.schema={username:ce.a.string().required().email().label("Username"),password:ce.a.string().required().min(5).label("Password"),name:ce.a.string().required().label("Name")},a.doSubmit=Object(Y.a)(z.a.mark((function e(){var t,n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ge(a.state.data);case 3:t=e.sent,ke.loginWithJwt(t.headers["x-auth-token"]),window.location="/",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0.response&&400===e.t0.response.status&&((n=Object(re.a)({},a.state.errors)).username=e.t0.response.data,a.setState({errors:n}));case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Register"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("username","Username"),this.renderInput("password","Password","password"),this.renderInput("name","Name"),this.renderButton("Register")))}}]),t}(ue),Se=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){ke.logout(),window.location="/"}},{key:"render",value:function(){return null}}]),t}(n.Component),Ne=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={data:{username:"",password:""},errors:{}},a.schema={username:ce.a.string().required().label("Username"),password:ce.a.string().required().min(5).label("Password")},a.doSubmit=Object(Y.a)(z.a.mark((function e(){var t,n,r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=a.state.data,e.next=4,ke.login(t.username,t.password);case 4:n=a.props.location.state,window.location=n?n.from.pathname:"/",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0.response&&400===e.t0.response.status&&((r=Object(re.a)({},a.state.errors)).username=e.t0.response.data,a.setState({errors:r}));case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return ke.getCurrentUser()?r.a.createElement(o.a,{to:"/fridge"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("username","Username"),this.renderInput("password","Password","password"),this.renderButton("Login")))}}]),t}(ue),we=(a(118),a(65)),Ie=a.n(we);var Ce=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null),r.a.createElement("footer",{className:"footer"},r.a.createElement("img",{src:Ie.a,alt:"logo"})))},xe=function(){return r.a.createElement("h1",null,"Not Found")},Ae=a(137),Re=a(138),Fe=function(){var e=$(),t=e.isLoading,a=e.user,n=e.loginWithRedirect,s=e.logout;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ae.a,{bg:"light",expand:"lg"},r.a.createElement(Ae.a.Brand,{href:"#home"},"Welcome to RecipEasy"),r.a.createElement(Re.a,{className:"mr-auto"}),r.a.createElement(Re.a,{className:"ml-auto"},!t&&!a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Re.a.Link,{onClick:n},"Login")),!t&&a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Ae.a.Text,null,a.name),r.a.createElement(Re.a.Link,{onClick:function(){return s({returnTo:window.location.origin})}},"Logout")))))},_e=function(e){e.path;var t=e.component,a=e.render,n=Object(le.a)(e,["path","component","render"]),s=$().isAuthenticated;return r.a.createElement(i.a,Object.assign({},n,{render:function(e){return s?t?r.a.createElement(t,e):a(e):r.a.createElement(o.a,{to:{pathname:"/",state:{from:e.location}}})}}))},Te=a(136);a(121);var Le=function(){var e=$().isAuthenticated;return r.a.createElement(r.a.Fragment,null,e&&r.a.createElement(o.a,{to:"/fridge"}),!e&&r.a.createElement(Te.a,{className:"jumb"},r.a.createElement("h1",{className:"header"},r.a.createElement("span",{className:"one"},"RecipEasy   "),"     is a tool that is designed to provide recipes on demand. With ",r.a.createElement("span",{className:"two"},"three easy steps"),"   , you will get closer to ",r.a.createElement("span",{className:"two"},"simple life.")),r.a.createElement("br",null),r.a.createElement("h2",{className:"text"},"Step 1. ",r.a.createElement("span",{className:"two"},"Login")," or ",r.a.createElement("span",{className:"two"},"Create")," an account if you are vising us the first time."),r.a.createElement("br",null),r.a.createElement("h2",{className:"text"},"Step 2. Review your ",r.a.createElement("span",{className:"two"},'"fridge"')," and update it to include all of the produce you might have at home."),r.a.createElement("br",null),r.a.createElement("h2",{className:"text"},"Step 3. ",r.a.createElement("span",{className:"two"},"Find recipes")," that match your ingridients.")))};a(122);var De=function(){var e=$().user;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Fe,null),r.a.createElement("main",{class:"container"},r.a.createElement(l.a,null,r.a.createElement(i.a,{path:"/register",component:je}),r.a.createElement(i.a,{path:"/login",component:Ne}),r.a.createElement(i.a,{path:"/logout",component:Se}),r.a.createElement(_e,{path:"/fridge",render:function(t){return r.a.createElement(_,Object.assign({},t,{user:e}))}}),r.a.createElement(_e,{path:"/recipes",render:function(t){return r.a.createElement(ne,Object.assign({},t,{user:e}))}}),r.a.createElement(i.a,{path:"/not-found",component:xe}),r.a.createElement(i.a,{path:"/",component:Le}),r.a.createElement(o.a,{to:"/not-found"}))),r.a.createElement(Ce,null))},Pe=a(142);a(123),a(124),a(125);c.a.render(r.a.createElement(ee,null,r.a.createElement(Pe.a,null,r.a.createElement(De,null))),document.getElementById("root"))},37:function(e){e.exports=JSON.parse('{"a":"http://localhost:3900/api"}')},65:function(e,t,a){e.exports=a.p+"static/media/logo.d3c910d3.png"},68:function(e,t,a){e.exports=a(127)},73:function(e,t,a){},74:function(e,t,a){},84:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.aa71d060.chunk.js.map