(this["webpackJsonpdad-jokes-app"]=this["webpackJsonpdad-jokes-app"]||[]).push([[0],{22:function(e,t,n){e.exports=n(50)},27:function(e,t,n){},28:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},29:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(9),o=n.n(s),i=(n(27),n(4)),c=n(5),u=n(7),l=n(6),m=(n(28),n(29),n(2)),d=n.n(m),h=n(11),p=n(8),j=n(3),k=n(21),f=n.n(k),v=(n(48),n(10)),g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={rating:0,emojiIndex:4,emojis:["\ud83d\ude21","\ud83d\ude24","\ud83d\ude20","\ud83d\ude41","\ud83d\ude10","\ud83d\ude42","\ud83d\ude0a","\ud83d\ude00","\ud83d\ude01","\ud83d\ude03","\ud83d\ude04","\ud83d\ude06","\ud83d\ude02","\ud83e\udd23"]},a.increaseRating=a.increaseRating.bind(Object(j.a)(a)),a.decreaseRating=a.decreaseRating.bind(Object(j.a)(a)),a}return Object(c.a)(n,[{key:"increaseRating",value:function(){console.log(this.state.emojis.length),this.state.emojiIndex<this.state.emojis.length-1&&this.setState((function(e){return{rating:e.rating+1,emojiIndex:e.emojiIndex+1}}))}},{key:"decreaseRating",value:function(){this.state.emojiIndex>0&&this.setState((function(e){return{rating:e.rating-1,emojiIndex:e.emojiIndex-1}}))}},{key:"render",value:function(){var e="",t=this.state.rating;return e=t>0&&t<=3?"black":t>3&&t<=6?"blue":t>6?"green":"red",console.log(e),r.a.createElement("div",{className:"joke-box"},r.a.createElement("div",{className:"rating-container"},r.a.createElement("div",{className:"arrow-up",onClick:this.increaseRating},r.a.createElement("i",{className:"fas fa-arrow-up"})),r.a.createElement("div",{className:"rating",style:{borderColor:e}},r.a.createElement(v.AnimateOnChange,{durationOut:450},this.state.rating)),r.a.createElement("div",{className:"arrow-down",onClick:this.decreaseRating},r.a.createElement("i",{className:"fas fa-arrow-down"}))),r.a.createElement("div",{className:"joke"},this.props.joke),r.a.createElement("div",{className:"emoji"},r.a.createElement(v.AnimateOnChange,{durationOut:450},this.state.emojis[this.state.emojiIndex])))}}]),n}(r.a.Component),b=(n(49),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={jokes:[]},a.handleNewJokes=a.handleNewJokes.bind(Object(j.a)(a)),a}return Object(c.a)(n,[{key:"handleNewJokes",value:function(){var e=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,this.getJokes();case 3:n=e.sent,console.log(n),this.setState((function(e){return{jokes:[].concat(Object(h.a)(e.jokes),Object(h.a)(n))}}));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getJokes",value:function(){var e=Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],n=d.a.mark((function e(){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://icanhazdadjoke.com/",e.next=3,f.a.get("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}});case 3:n=e.sent,a=n.data,(0===t.length||t.length>0&&t.map((function(e){return e.id!==a.id})))&&t.push({id:a.id,content:a.joke});case 6:case"end":return e.stop()}}),e)}));case 2:if(!(t.length<this.props.numJokesToGet)){e.next=6;break}return e.delegateYield(n(),"t0",4);case 4:e.next=2;break;case 6:return e.abrupt("return",t);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getJokes();case 2:t=e.sent,this.setState({jokes:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.jokes.map((function(e){return r.a.createElement(g,{key:e.id,joke:e.content})}));return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"new-jokes-container"},r.a.createElement("h1",null,"Dad Jokes"),r.a.createElement("p",{className:"joke-emoji"},"\ud83d\ude02"),r.a.createElement("button",{onClick:this.handleNewJokes,className:"new-jokes-btn"},"New Jokes")),r.a.createElement("div",{className:"jokes-container"},e)))}}]),n}(r.a.Component));b.defaultProps={numJokesToGet:10};var w=b,O=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(w,null)}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.fde1b415.chunk.js.map