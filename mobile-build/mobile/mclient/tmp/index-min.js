(function(){var f=function(){this.init.apply(this,arguments)};f.prototype={init:function(a){this.platform=this.getRequestParam(window.location.search,"client_type")||"ios";this.bridgeName=a||"trip_android_bridge";this.bridge=window[this.bridgeName];"ios"===this.platform&&this.buildProxy()},buildProxy:function(){var a=document.querySelector("#J_MClientProxy");a||(a=$('<iframe id="J_MClientProxy" class="hidden" style="width:0;height:0;opacity:0;display:none;" src="native://"></iframe>'),$("body").append(a),
this.mClientProxy=a)},pushBack:function(a,b){var c="native://"+a+"?data=",e,d;for(d in b)b.hasOwnProperty(d)&&"function"===typeof b[d]&&(e="M_Client_Callbacks_"+a+"_"+(new Date).getTime()+"_"+parseInt(1E6*Math.random()),window[e]=function(a,b){return function(){a.apply(this,arguments);delete window[b]}}(b[d],e),b[d]=e);"android"===this.platform?this.bridge&&this.bridge[a]&&this.bridge[a](JSON.stringify(b)):(c+=encodeURIComponent(JSON.stringify(b)),this.mClientProxy.attr("src",c))},getRequestParam:function(a,
b){var c=a.match(RegExp("[?&]"+b+"=([^&]*)(&?)","i"));return c?c[1]:c}};this.M_Client=f}).call(this);
