Vue.use(VueStorage,{namespace:"pro__",name:"ls",storage:"local"});var URLPrefix={namespace:"pro__",api_url:"https://www.haopintui.net/api/plugin/business",times:"",url_sign:"",token:""};function parseParams(data){try{var tempArr=[];for(var i in data){var key=encodeURIComponent(i),value=encodeURIComponent(data[i]);tempArr.push(key+"="+value)}return tempArr.join("&")}catch(err){return""}}function getUrlSearch(url,name){var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)","i"),r=url.slice(url.indexOf("?")+1).match(reg);if(null!=r)try{return decodeURIComponent(r[2])}catch(_e){return null}return null}var ajaxGet=function(url,data,successfun,errorfun){var temp_errorfun=function(xhr,type){};errorfun&&(temp_errorfun=errorfun),$.ajax({type:"GET",url:0===url.indexOf("http")?url:URLPrefix.api_url+url,data:Object.assign(data,{times:URLPrefix.times,url_sign:URLPrefix.url_sign,member_token:URLPrefix.token}),dataType:"json",timeout:3e4,success:successfun,error:temp_errorfun,xhrFields:{withCredentials:!0}})},ajaxPost=function(url,data,successfun,errorfun){var temp_errorfun=function(xhr,type){};errorfun&&(temp_errorfun=errorfun),$.ajax({type:"POST",url:0===url.indexOf("http")?url:URLPrefix.api_url+url,data:Object.assign(data,{times:URLPrefix.times,url_sign:URLPrefix.url_sign,member_token:URLPrefix.token}),dataType:"json",timeout:3e4,success:successfun,error:temp_errorfun,xhrFields:{withCredentials:!0}})},ajaxGetJsonp=function(url,data,successfun,errorfun){var temp_errorfun=function(xhr,type){};errorfun&&(temp_errorfun=errorfun),$.ajax({type:"GET",url:url,data:data,dataType:"jsonp",timeout:3e4,success:successfun,error:temp_errorfun,xhrFields:{withCredentials:!0}})},config={_url:"",urls:"/",getUrl:function(str){var reg=new RegExp("(https?|ftp|file|http)://[-A-Za-z0-9+&@@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@@#/%=~_|]","ig"),r=str.match(reg);return null!=r?r:null},getVideoUrl:function(str){var reg=new RegExp("(https?|ftp|file|http)://[-A-Za-z0-9+&@@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@@#/%=~_|]+.mp4","ig"),r=str.match(reg);return null!=r?r:null},ImgSizeFun:function(Arr,strArr){for(var i=0;i<strArr.length;i++)Arr[i]=strArr[i]+config.ImgSize;return Arr},addPlugin:function(){$body=$("body"),$body.prepend('        <div class="content-wrap">            <div class="header navs">                <h1></h1>                <ul>                    <li><a target="_blank" href="https://www.haopintui.net/online.html">                        <i class="icon i-2"></i>联系客服</a></li>                    <li><a target="_blank" href="https://www.haopintui.net"><i class="icon i-3"></i>前往官网</a></li>                </ul>            </div>            <div class="setting-wrap">                <div class="title">申请理由</div>                <div class="shortcut">                    <p><textarea name="applyReason" placeholder="申请理由最多200个字符（100个汉字）..." id="applyReason"></textarea></p>                    <p style="display:none"><a class="hpt_btn">保存</a></p>                </div>            </div>            <div class="setting-wrap">                <div class="title">插件功能设置</div>                <div class="menu">                    <div class="menu-wrap">                        <span>查佣金优惠券，推广数据</span><input class="mui-switch mui-switch-anim" type="checkbox" data-key="tools_commission" >                    </div>                    <div class="menu-wrap">                        <span>转二合一</span><input class="mui-switch mui-switch-anim" type="checkbox" data-key="tools_coupon" >                    </div>                    <div class="menu-wrap">                        <span>查店铺联系方式</span><input class="mui-switch mui-switch-anim" type="checkbox" data-key="tools_shop" >                    </div>                    <div class="menu-wrap">                        <span>查放单平台</span><input class="mui-switch mui-switch-anim" type="checkbox" data-key="tools_platform" >                    </div>                    <div class="menu-wrap">                        <span>一键复制 导购文案</span><input class="mui-switch mui-switch-anim" type="checkbox" data-key="tools_wenan" >                    </div>                    <div class="menu-wrap">                        <span>一键前往 淘宝联盟转链</span><input class="mui-switch mui-switch-anim" type="checkbox" data-key="tools_lianmeng" >                    </div>                </div>                <div class="shortcut">                    <p>快捷键：</p>                    <p>1、显示和隐藏插件：<input type="text" class="mui-key" maxlength="1" data-key="keyPlugin"></p>                </div>            </div>        </div>        ')},expand:function(){$body=$("body"),$body.css("padding-top","38px"),$plugin=$("#hpt-plugin"),$plugin.css("top","0px"),$plugin.css("left","0px"),$plugin.css("width","100%"),$plugin.css("min-width","1200px")},contract:function(){$body=$("body"),$body.css("padding-top","0px"),$plugin=$("#hpt-plugin"),$plugin.css("top","80px"),$plugin.css("left","0px"),$plugin.css("width","80px"),$plugin.css("border-top","1px solid rgb(229, 229, 229)"),$plugin.css("border-right","1px solid rgb(229, 229, 229)"),$plugin.css("min-width","80px")},initPlugin:function(){chrome.storage.local.get("plugin_status",function(result){1==result.plugin_status?config.contract():config.expand()})}};config.addPlugin(),$(".mui-switch").change(function(){$this=$(this);var $k=$this.data("key");"tools_commission"==$k?$this.is(":checked")?chrome.storage.local.set({tools_commission:"true"},function(){}):chrome.storage.local.set({tools_commission:"false"},function(){}):"tools_coupon"==$k?$this.is(":checked")?chrome.storage.local.set({tools_coupon:"true"},function(){}):chrome.storage.local.set({tools_coupon:"false"},function(){}):"tools_shop"==$k?$this.is(":checked")?chrome.storage.local.set({tools_shop:"true"},function(){}):chrome.storage.local.set({tools_shop:"false"},function(){}):"tools_platform"==$k?$this.is(":checked")?chrome.storage.local.set({tools_platform:"true"},function(){}):chrome.storage.local.set({tools_platform:"false"},function(){}):"tools_wenan"==$k?$this.is(":checked")?chrome.storage.local.set({tools_wenan:"true"},function(){}):chrome.storage.local.set({tools_wenan:"false"},function(){}):"tools_lianmeng"==$k&&($this.is(":checked")?chrome.storage.local.set({tools_lianmeng:"true"},function(){}):chrome.storage.local.set({tools_lianmeng:"false"},function(){}))}),$(".mui-key").on("keyup paste",function(event){var $k=$(this).attr("data-key"),keyCode=event.keyCode;if(!/^[a-zA-Z]+$/.test($(this).val()))return $(this).val(""),!1;(65<=keyCode&&keyCode<=90||97<=keyCode&&keyCode<=122)&&"keyPlugin"==$k&&chrome.storage.local.set({keyPlugin:keyCode},function(){})}),$("#applyReason").on("keyup paste",function(){$(this).val()&&chrome.storage.local.set({applyReason:$(this).val()},function(){})}),chrome.storage.local.get(null,function(result){$(".mui-switch").each(function(){$this=$(this),$k=$this.data("key"),$this.attr("checked","true"==result[$k])}),$(".mui-key").each(function(){$this=$(this),$k=$this.data("key"),result[$k]&&$this.val(String.fromCharCode(result[$k]))}),result.applyReason?$("#applyReason").val(result.applyReason):$("#applyReason").val("好品推金冠联盟成员申请推广计划，望贵店通过，祝合作愉快！谢谢"),console.log(result)});var link=document.createElement("link");link.href="https://static.youdanhui.com/css/popup.css",link.type="text/css",link.rel="stylesheet",document.getElementsByTagName("head")[0].appendChild(link);