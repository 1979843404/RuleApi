(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{465:function(e,t,l){"use strict";l.r(t);var o={layout:"layout",head:function(){return{title:"用户参数设置"}},data:function(){return{key:"",form:{scale:"",clock:"",clockPoints:"",vipPrice:"",vipDay:"",vipDiscount:"",isEmail:"0",isInvite:!1,webinfoAvatar:"",rebateLevel:"0",rebateNum:"",rebateProportion:""},isPro:0}},beforeDestroy:function(){},created:function(){},mounted:function(){var e=this;e.isPro=e.$api.isPro(),localStorage.getItem("webkey")?e.key=localStorage.getItem("webkey"):(e.$message({message:"认证失效！",type:"error"}),e.$router.push({path:"/"})),e.getConfig()},methods:{save:function(){var e=this,t=e.form;e.form.isInvite,t.isInvite;var l=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),data={webkey:e.key,params:JSON.stringify(t)};e.$axios.$post(e.$api.apiConfigUpdate(),this.qs.stringify(data)).then((function(t){l.close(),1==t.code?(e.$message({message:t.msg,type:"success"}),e.getConfig()):e.$message({message:t.msg,type:"error"})})).catch((function(t){l.close(),console.log(t),e.$message({message:"接口请求异常，请检查网络！",type:"error"})}))},getConfig:function(){var e=this,data={webkey:e.key};e.$axios.$post(e.$api.getApiConfig(),this.qs.stringify(data)).then((function(t){1==t.code&&(e.form.scale=t.data.scale,e.form.clock=t.data.clock,e.form.clockPoints=t.data.clockPoints,e.form.vipPrice=t.data.vipPrice,e.form.vipDay=t.data.vipDay,e.form.vipDiscount=t.data.vipDiscount,e.form.webinfoAvatar=t.data.webinfoAvatar,t.data.isEmail&&(e.form.isEmail=t.data.isEmail+""),e.isPro>0&&(t.data.rebateLevel&&(e.form.rebateLevel=t.data.rebateLevel+""),e.form.rebateNum=t.data.rebateNum,e.form.rebateProportion=t.data.rebateProportion),1==t.data.isInvite?e.form.isInvite=!0:e.form.isInvite=!1)})).catch((function(t){console.log(t),e.$message({message:"接口请求异常，请检查网络！",type:"error"})}))}}},r=l(26),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"page-container"},[t("el-row",{attrs:{gutter:15}},[t("el-col",{attrs:{span:24}},[t("div",{staticClass:"data-box"},[t("div",{staticClass:"page-title"},[t("h4",[e._v("用户参数设置")]),e._v(" "),t("p",[e._v("在这里设置配置用户金币体系，VIP等资产相关功能")])]),e._v(" "),t("div",{staticClass:"page-form"},[t("el-form",{ref:"form",attrs:{model:e.form,"label-position":"top","label-width":"80px"}},[t("el-form-item",[t("p",{staticClass:"form-label",attrs:{slot:"label"},slot:"label"},[e._v("金币充值比例"),t("span",[e._v("必须为整数，一元钱等于多少金币")])]),e._v(" "),t("el-input",{attrs:{type:"number",placeholder:"请输入金币充值比例"},model:{value:e.form.scale,callback:function(t){e.$set(e.form,"scale",t)},expression:"form.scale"}})],1),e._v(" "),t("el-form-item",[t("p",{staticClass:"form-label",attrs:{slot:"label"},slot:"label"},[e._v("签到最高赠送金币"),t("span",[e._v("随机赠送，必须为整数，小于1则不赠送金币")])]),e._v(" "),t("el-input",{attrs:{type:"number",placeholder:"请输入签到最高赠送金币"},model:{value:e.form.clock,callback:function(t){e.$set(e.form,"clock",t)},expression:"form.clock"}})],1),e._v(" "),t("el-form-item",[t("p",{staticClass:"form-label",attrs:{slot:"label"},slot:"label"},[e._v("签到最高赠送积分"),t("span",[e._v("固定赠送，必须为整数，小于1则不赠送积分")])]),e._v(" "),t("el-input",{attrs:{type:"number",placeholder:"请输入签到最高赠送积分"},model:{value:e.form.clockPoints,callback:function(t){e.$set(e.form,"clockPoints",t)},expression:"form.clockPoints"}})],1),e._v(" "),t("el-form-item",[t("p",{staticClass:"form-label",attrs:{slot:"label"},slot:"label"},[e._v("一天VIP价格"),t("span",[e._v("必须为整数，仅用于按天购买接口")])]),e._v(" "),t("el-input",{attrs:{type:"number",placeholder:"请输入一天VIP价格"},model:{value:e.form.vipPrice,callback:function(t){e.$set(e.form,"vipPrice",t)},expression:"form.vipPrice"}})],1),e._v(" "),t("el-form-item",[t("p",{staticClass:"form-label",attrs:{slot:"label"},slot:"label"},[e._v("多少天VIP等于永久"),t("span",[e._v("必须为整数，当用户购买VIP时间超过指定天数时，将变为永久VIP")])]),e._v(" "),t("el-input",{attrs:{type:"number",placeholder:"请输入多少天VIP等于永久"},model:{value:e.form.vipDay,callback:function(t){e.$set(e.form,"vipDay",t)},expression:"form.vipDay"}})],1),e._v(" "),t("el-form-item",[t("p",{staticClass:"form-label",attrs:{slot:"label"},slot:"label"},[e._v("VIP折扣"),t("span",[e._v("商品价格乘以该折扣，为0.0则免费购买商品，为1.0则为原价购买。注意，商品可单独设置折扣，权重高于此设置。")])]),e._v(" "),t("el-input",{attrs:{placeholder:"请输入VIP折扣"},model:{value:e.form.vipDiscount,callback:function(t){e.$set(e.form,"vipDiscount",t)},expression:"form.vipDiscount"}})],1),e._v(" "),t("el-form-item",[t("p",{staticClass:"form-label",attrs:{slot:"label"},slot:"label"},[e._v("邮箱发信等级")]),e._v(" "),t("el-select",{attrs:{placeholder:"请选择评论审核等级"},model:{value:e.form.isEmail,callback:function(t){e.$set(e.form,"isEmail",t)},expression:"form.isEmail"}},[t("el-option",{attrs:{label:"关闭邮箱功能",value:"0"}}),e._v(" "),t("el-option",{attrs:{label:"用户邮箱发信",value:"1"}}),e._v(" "),t("el-option",{attrs:{label:"全局邮箱发信",value:"2"}})],1)],1),e._v(" "),t("el-form-item",[t("p",{staticClass:"form-label",attrs:{slot:"label"},slot:"label"},[e._v("是否开启邀请注册"),t("span",{staticClass:"text-gray"},[e._v("开启后，注册将必须填写邀请码。")])]),e._v(" "),t("el-switch",{model:{value:e.form.isInvite,callback:function(t){e.$set(e.form,"isInvite",t)},expression:"form.isInvite"}})],1),e._v(" "),t("el-form-item",[t("p",{staticClass:"form-label",attrs:{slot:"label"},slot:"label"},[e._v("头像源avatar"),t("span",[e._v("公共头像库的源")])]),e._v(" "),t("el-input",{attrs:{placeholder:"请输入公共头像库的源"},model:{value:e.form.webinfoAvatar,callback:function(t){e.$set(e.form,"webinfoAvatar",t)},expression:"form.webinfoAvatar"}})],1),e._v(" "),e.isPro>0?[t("el-form-item",[t("p",{staticClass:"form-label",attrs:{slot:"label"},slot:"label"},[e._v("返利模式")]),e._v(" "),t("el-select",{attrs:{placeholder:"请选择评论审核等级"},model:{value:e.form.rebateLevel,callback:function(t){e.$set(e.form,"rebateLevel",t)},expression:"form.rebateLevel"}},[t("el-option",{attrs:{label:"不返利",value:"0"}}),e._v(" "),t("el-option",{attrs:{label:"固定返利",value:"1"}}),e._v(" "),t("el-option",{attrs:{label:"分成返利",value:"2"}}),e._v(" "),t("el-option",{attrs:{label:"全局返利",value:"3"}})],1)],1),e._v(" "),t("el-form-item",[t("p",{staticClass:"form-label",attrs:{slot:"label"},slot:"label"},[e._v("固定返利数量"),t("span",[e._v("邀请注册奖励货币数量，为负数则扣除货币")])]),e._v(" "),t("el-input",{attrs:{placeholder:"请输入固定返利模式时返利数量"},model:{value:e.form.rebateNum,callback:function(t){e.$set(e.form,"rebateNum",t)},expression:"form.rebateNum"}})],1),e._v(" "),t("el-form-item",[t("p",{staticClass:"form-label",attrs:{slot:"label"},slot:"label"},[e._v("分成返利百分比"),t("span",[e._v("单位%")])]),e._v(" "),t("el-input",{attrs:{placeholder:"请输入分成返利百分比"},model:{value:e.form.rebateProportion,callback:function(t){e.$set(e.form,"rebateProportion",t)},expression:"form.rebateProportion"}})],1)]:e._e(),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.save()}}},[e._v("保存设置")])],1)],2)],1)])])],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);