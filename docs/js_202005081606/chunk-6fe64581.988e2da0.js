(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fe64581"],{"1faa":function(e,t,a){"use strict";var n=a("a3f4"),i=a.n(n);i.a},"4f7f":function(e,t,a){"use strict";var n=a("c26b"),i=a("b39a"),o="Set";e.exports=a("e0b8")(o,(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return n.def(i(this,o),e=0===e?0:e,e)}},n)},"561e":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"role-management"},[a("PageTitle",{attrs:{options:e.pageTitleOptions}},[a("Button",{directives:[{name:"show",rawName:"v-show",value:2===e.currnetPage,expression:"currnetPage === 2"}],attrs:{slot:"setting",type:"success"},on:{click:e.back},slot:"setting"},[e._v("返回上一级")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:1===e.currnetPage,expression:"currnetPage === 1"}],staticClass:"role-management-page1"},[a("PageTable",{attrs:{options:e.pageTableOptions}})],1),2===e.currnetPage?a("div",{staticClass:"role-management-page2"},[a("PageForm",{ref:"pageFormRefs",attrs:{options:e.pageFormOptions}})],1):e._e()],1)},i=[],o=(a("5df3"),a("4f7f"),a("75fc")),s=(a("ac6a"),a("7f7f"),a("a00a")),r=(a("28e6"),a("73a6")),l={name:"roleManagement",mixins:[r["a"]],data:function(){this.$createElement;var e=this;return{currnetPage:1,pageTitleOptions:{name:""},pageTableOptions:{loading:!1,requestList:this.requestList,header:[{title:"名称",key:"name",align:"center"},{title:"描述",key:"description",align:"center"},{title:"操作",key:"operates",align:"center",render:function(t,a){var n=a.row;return t("PageTableTool",{attrs:{options:[{id:"del",name:"删除",permission:!1,click:e.handleDel.bind(e,n)},{id:"edit",name:"编辑",permission:!1,click:e.handleEdit.bind(e,n)}]}})}}],data:[]},pageFormOptions:{modalForm:!0,labelWidth:100,config:[{id:"name",type:"input",name:"登入账号",options:{value:"",clearable:!0}},{id:"description",type:"input",name:"描述",options:{value:"",clearable:!0}},{id:"seq",type:"input",name:"排序值",options:{value:"",clearable:!0}},{id:"customMenu",type:"customRender",name:"菜单&操作",customRender:function(t){return t("Tree",{ref:"menuTreeRefs",attrs:{data:e.menuTreeData,"show-checkbox":!0},on:{"on-toggle-expand":e.expandFn}})}},{id:"customButton",type:"customRender",name:"",customRender:function(t){return t("div",{class:"role-management-bts"},[t("Button",{attrs:{type:"primary",loading:e.submitLoading},on:{click:e.submit}},["提交"])])}}],rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}],description:[{required:!0,message:"请输入描述",trigger:"blur"}],seq:[{required:!0,message:"请输入排序值",trigger:"blur"}]}},menuTreeData:[],submitLoading:!1,currentRow:{}}},mounted:function(){this.requestList({groupDesk:0},s["b"].getRoleList)},methods:{handleDel:function(e){var t=this;this.$Modal.confirm({title:"提示",content:"您确定要删除".concat(e.name,"数据吗?"),onOk:function(){t.$http.post(s["b"].deleteRoleById,{roleIds:[e.id]}).then((function(e){t.tips(),t.requestList()}))}})},handleEdit:function(e){var t=this;this.currnetPage=2,this.currentRow=Object.assign({},e);var a=this.pageFormOptions.config;a.forEach((function(t){t.options&&(t.options.value=e[t.id]+"")})),this.pageFormOptions=Object.assign({},this.pageFormOptions,{config:a}),this.$http.post(s["b"].getRoleInfoById,{id:e.id,groupDesk:0}).then((function(e){t.createMenuList(e.data.role)}))},createMenuList:function(e){var t=function e(t,a){t.forEach((function(t){if(t.children){var n=[];e(t.children,n),a.push({id:t.id,title:t.label,parentId:t.parentId,children:n})}else a.push({id:t.id,title:t.label,checked:1===t.checkStatus,parentId:t.parentId})}))},a=[];t(e,a),this.menuTreeData=[].concat(a)},expandFn:function(e){"0"!==e.parentId&&this.$nextTick((function(){var t=document.querySelector(".tree-pl-"+e.id),a=t&&t.closest(".ivu-tree-children");a&&(a.style.display="none")}))},submit:function(){var e=this,t=this.$refs.pageFormRefs;t.$refs.form.validate((function(a){if(a){e.submitLoading=!0;var n=t.$refs.menuTreeRefs.getCheckedNodes().map((function(e){return e.id})),i=t.$refs.menuTreeRefs.getCheckedAndIndeterminateNodes().map((function(e){return e.id}));t.model.seq=+t.model.seq;var r=Object.assign({id:e.currentRow.id},t.model,{resourceIdList:Object(o["a"])(new Set(i,n))});e.$http.post(s["b"].updateRole,r).then((function(t){e.tips(),e.back(),e.requestList()})).finally((function(){e.submitLoading=!1}))}}))},reset:function(){},back:function(){this.currnetPage=1,this.currentRow={}}}},c=l,u=c,p=(a("1faa"),a("2877")),d=Object(p["a"])(u,n,i,!1,null,null,null);t["default"]=d.exports},"73a6":function(e,t,a){"use strict";var n=a("75fc");t["a"]={data:function(){return{requestUrl:""}},methods:{pageFormSearchBtnCallback:function(){var e=this;return new Promise((function(t,a){e.changeTablePagination({page:1}),e.requestList().finally((function(){return t()}))}))},pageFormResetBtnCallback:function(){var e=this;return new Promise((function(t,a){e.$refs.pageFormRefs.resetData(),e.changeTablePagination({page:1}),e.requestList().finally((function(){return t()}))}))},createTableData:function(e){try{this.beforCreateTableCallback?this.beforCreateTableCallback(e):(this.pageTableOptions.data=Object(n["a"])(e.list),this.pageTableOptions.pagination&&(this.pageTableOptions.pagination.total=e.totalCount)),this.pageLoading(!1)}catch(t){this.pageTableOptions&&(this.pageTableOptions.data=[]),this.pageLoading(!1)}},pageLoading:function(e){this.pageTableOptions&&(this.pageTableOptions.loading=e)},requestList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;return a&&(this.requestUrl=a),new Promise((function(a){var n=e.$refs.pageFormRefs?_.pickBy(e.$refs.pageFormRefs.getData(),(function(e){return""!==e})):{},i=e.pageTableOptions&&e.pageTableOptions.pagination?{page:e.pageTableOptions.pagination.page,pageSize:e.pageTableOptions.pagination.pageSize}:{},o=e.handlerExtraParams?e.handlerExtraParams():{};t=Object.assign({},n,i,t,o),e.pageLoading(!0),e.beforRequestCallback&&e.beforRequestCallback(),e.pageTableOptions&&(e.pageTableOptions.data=[]),e.$http.post(e.requestUrl,t).then((function(t){var n=t.data;e.handlerTableData?e.handlerTableData(n):e.createTableData(n.page),a()})).finally((function(){a(),e.pageLoading(!1)}))}))},add:function(){this.$refs.pageModalFormRefs.resetData(),this.pageModalOptions.show=!0},okPageModal:function(){var e=this,t=this.$refs.pageModalFormRefs;t.$refs.form.validate((function(a){if(a){var n=t.getData();e.pageModalOptions.btnLoading=!0;var i=e.handlerModalData?e.handlerModalData(n):n;e.$http.post(e.modalRequestUrl,i).then((function(t){e.pageModalOptions.show=!1,e.tips("操作成功"),e.okPageModalSuccess?e.okPageModalSuccess():e.requestList()})).finally((function(){e.pageModalOptions.btnLoading=!1}))}}))},cancelPageModal:function(){this.pageModalOptions.show=!1},changeTablePagination:function(e){this.pageTableOptions&&this.pageTableOptions.pagination&&(this.pageTableOptions.pagination=Object.assign({},this.pageTableOptions.pagination,e))},tips:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"成功";this.$Notice[t]({title:a,desc:e})},modalConfirm:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"您确定要删除该条数据吗？",n=this;this.$Modal.confirm({title:"提示",content:a,onOk:function(){n.pageLoading(!0),this.$http.post(e,t).then((function(e){0===e.data.code&&(n.tips("删除成功"),n.requestList())})).finally((function(){n.pageLoading(!1)}))},onCancel:function(){}})}}}},a3f4:function(e,t,a){}}]);