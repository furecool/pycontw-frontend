(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{464:function(e,t,n){var content=n(579);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("604f4a68",content,!0,{sourceMap:!1})},578:function(e,t,n){"use strict";n(464)},579:function(e,t,n){var c=n(17)((function(i){return i[1]}));c.push([e.i,".checkbox[data-v-f01c747e]{border-color:#c2a53a;color:#c2a53a}.checkbox.checked[data-v-f01c747e]{background:#c2a53a;color:#121023}",""]),c.locals={},e.exports=c},604:function(e,t,n){"use strict";n.r(t);var c=n(75),o=(n(49),n(53),n(47),n(33),{name:"CoreCheckbox",props:{id:{type:String,default:""},label:{type:String,default:""},value:{type:[Array,Boolean],default:function(){return[]}},isChecked:{type:Boolean,default:!1}},methods:{toggleCheckbox:function(){var e=this;if("boolean"==typeof this.value)this.$emit("input",!this.value);else{var t=[];t=this.value.includes(this.id)?Object(c.a)(this.value.filter((function(t){return t!==e.id}))):[].concat(Object(c.a)(this.value),[this.id]),this.$emit("input",Object(c.a)(t))}}}}),r=(n(578),n(6)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"\n        checkbox\n        mt-3\n        ml-2\n        py-2\n        px-3\n        border\n        rounded-lg\n        transition-all\n        cursor-pointer\n        text-xs\n        lg:text-base\n    ",class:{checked:e.isChecked}},[n("input",{staticClass:"hidden",attrs:{id:e.id,type:"checkbox"},domProps:{value:e.id,checked:e.isChecked},on:{change:function(t){return e.toggleCheckbox()}}}),e._v(" "),n("fa",{staticClass:"mr-2 lg:mr-6",attrs:{icon:e.isChecked?["far","check-square"]:["far","square"],"aria-hidden":"true"}}),e._v("\n    "+e._s(e.label)+"\n")],1)}),[],!1,null,"f01c747e",null);t.default=component.exports}}]);