// Generated by CoffeeScript 1.6.3
(function(){var e,t;t=require("underscore");e=function(){function e(e){this}e.prototype.store={};e.prototype.add=function(e,t){var n;try{this.store[e]=t;this.store[e].step="start";return this.store[e]}catch(r){n=r;throw new Error("Could not add task.",n)}};e.prototype.list=function(){return this.store};e.prototype.remove=function(e){return delete this.store[e]};e.prototype.clear=function(){this.store={};return this};e.prototype.get=function(e){return this.store[e]};e.prototype.count=function(){var e,n,r,i;e=0;i=this.store;for(n in i){r=i[n];e+=t.keys(r).length}return e};return e}();module.exports=e}).call(this);