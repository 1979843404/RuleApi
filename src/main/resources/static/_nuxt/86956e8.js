(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{452:function(e,t,l){"use strict";l.r(t);var o={layout:"layout",head:function(){return{title:"微信配置"}},data:function(){return{key:"",form:{wxAppId:"",wxAppSecret:"",appletsAppid:"",appletsSecret:""}}},beforeDestroy:function(){},created:function(){},mounted:function(){var e=this;localStorage.getItem("webkey")?e.key=localStorage.getItem("webkey"):(e.$message({message:"认证失效！",type:"error"}),e.$router.push({path:"/"})),e.getConfig()},methods:{save:function(){var e=this,t=e.form,data={webkey:e.key,params:JSON.stringify(t)},l=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});e.$axios.$post(e.$api.apiConfigUpdate(),this.qs.stringify(data)).then((function(t){l.close(),1==t.code?(e.$message({message:t.msg,type:"success"}),e.getConfig()):e.$message({message:t.msg,type:"error"})})).catch((function(t){l.close(),console.log(t),e.$message({message:"接口请求异常，请检查网络！",type:"error"})}))},getConfig:function(){var e=this,data={webkey:e.key};e.$axios.$post(e.$api.getApiConfig(),this.qs.stringify(data)).then((function(t){1==t.code&&(e.form.wxAppId=t.data.wxAppId,e.form.wxAppSecret=t.data.wxAppSecret,e.form.appletsAppid=t.data.appletsAppid,e.form.appletsSecret=t.data.appletsSecret)})).catch((function(t){console.log(t),e.$message({message:"接口请求异常，请检查网络！",type:"error"})}))}}},r=l(26),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"page-container"},[t("el-row",{attrs:{gutter:15}},[t("el-col",{attrs:{span:24}},[t("div",{staticClass:"data-box"},[t("div",{staticClass:"page-title"},[t("h4",[e._v("微信配置")]),e._v(" "),t("p",[e._v("在这里配置微信登录和小程序相关信息。")])]),e._v(" "),t("div",{staticClass:"page-form"},[t("el-form",{ref:"form",attrs:{model:e.form,"label-position":"top","label-width":"80px"}},[t("el-form-item",[t("p",{staticClass:"form-label",attrs:{slot:"label"},slot:"label"},[e._v("微信应用ID"),t("span",[e._v("可不填，负责微信APP登录")])]),e._v(" "),t("el-input",{attrs:{placeholder:"请输入wxAppId"},model:{value:e.form.wxAppId,callback:function(t){e.$set(e.form,"wxAppId",t)},expression:"form.wxAppId"}})],1),e._v(" "),t("el-form-item",[t("p",{staticClass:"form-label",attrs:{slot:"label"},slot:"label"},[e._v("微信应用Secret"),t("span",[e._v("可不填，负责微信APP登录")])]),e._v(" "),t("el-input",{attrs:{placeholder:"请输入wxAppSecret"},model:{value:e.form.wxAppSecret,callback:function(t){e.$set(e.form,"wxAppSecret",t)},expression:"form.wxAppSecret"}})],1),e._v(" "),t("el-form-item",[t("p",{staticClass:"form-label",attrs:{slot:"label"},slot:"label"},[e._v("微信小程序APPID"),t("span",[e._v("可不填，负责微信小程序登录")])]),e._v(" "),t("el-input",{attrs:{placeholder:"请输入appletsAppid"},model:{value:e.form.appletsAppid,callback:function(t){e.$set(e.form,"appletsAppid",t)},expression:"form.appletsAppid"}})],1),e._v(" "),t("el-form-item",[t("p",{staticClass:"form-label",attrs:{slot:"label"},slot:"label"},[e._v("微信小程序Secret"),t("span",[e._v("可不填，负责微信小程序登录")])]),e._v(" "),t("el-input",{attrs:{placeholder:"请输入appletsSecret"},model:{value:e.form.appletsSecret,callback:function(t){e.$set(e.form,"appletsSecret",t)},expression:"form.appletsSecret"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.save()}}},[e._v("保存设置")])],1)],1)],1)])])],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);