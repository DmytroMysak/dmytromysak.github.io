import{x as c,B as v,J as u,R as r,T as a}from"./index-CmuCMgBa.js";const i=c({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(t,{slots:o}){const e=v(),n=u(()=>"q-td"+(t.autoWidth===!0?" q-table--col-auto-width":"")+(t.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(t.props===void 0)return r("td",{class:n.value},a(o.default));const d=e.vnode.key,s=(t.props.colsMap!==void 0?t.props.colsMap[d]:null)||t.props.col;if(s===void 0)return;const{row:l}=t.props;return r("td",{class:n.value+s.__tdClass(l),style:s.__tdStyle(l)},a(o.default))}}}),h=c({name:"QTr",props:{props:Object,noHover:Boolean},setup(t,{slots:o}){const e=u(()=>"q-tr"+(t.props===void 0||t.props.header===!0?"":" "+t.props.__trClass)+(t.noHover===!0?" q-tr--no-hover":""));return()=>r("tr",{class:e.value},a(o.default))}});export{h as Q,i as a};
