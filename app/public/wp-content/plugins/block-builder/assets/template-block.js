(()=>{"use strict";const e=window.wp.element,t=window.wp.blocks,l=window.wp.blockEditor,r=window.wp.data,n=window.wp.i18n,o=window.wp.components;function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},i.apply(this,arguments)}const a=t=>{let{color:l}=t;return(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 27 27",color:l,fill:"none"},(0,e.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"currentColor",d:"M0 13.2084C0 20.4107 5.83624 26.2501 13.0347 26.2501C20.2332 26.2501 26.0695 20.4107 26.0695 13.2084C26.0695 6.00609 20.2332 0.166748 13.0347 0.166748C5.83624 0.166748 0 6.00609 0 13.2084ZM9.77554 7.77424H7.60342V18.6426H9.77554V7.77424ZM11.9477 7.77424H18.4641V9.94753H11.9477V7.77424ZM18.4641 12.1208H11.9477V14.2941H18.4641V12.1208ZM11.9477 16.4693H18.4641V18.6426H11.9477V16.4693Z"}))},c=(0,n.__)("Select a template from your library or","block-builder")+" ",s=(0,n.__)("create a new one.","block-builder"),d=t=>{const{withLink:l=!1,instructions:r=!1,...d}=t;let m;return m=r||function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]?(0,e.createElement)("div",null,c,(0,e.createElement)("a",{target:"_blank",href:elementorBlockBuilderConfig.create_new_post_url},s)):c+s}(l),(0,e.createElement)(o.Placeholder,i({icon:(0,e.createElement)(a,{color:"#93003F"}),label:(0,n.__)("Elementor Library","block-builder"),instructions:m},d))},m=t=>{let{ref:l,srcDoc:r,id:n,templateId:i,className:a,iFrameDisplayProp:c}=t;const[s,m]=(0,e.useState)(null),[u,p]=(0,e.useState)(c||!1),[b,_]=(0,e.useState)(1),[w,f]=(0,e.useState)("900px");return(0,e.useEffect)((()=>{""!==r&&null!=s&&s.parentElement&&(s.parentElement.style="height: initial",u&&p(!1))}),[r]),(0,e.createElement)("div",{className:"elementor-preview-wrapper",ref:e=>{m(e)},style:{height:w}},(0,e.createElement)("div",{className:"elementor-cover-container",style:{maxWidth:"100%"}},(0,e.createElement)("div",{id:`elementor-cover-${i}`,className:"elementor-block-preview-cover",style:{transform:`scale(${b})`,display:u?"block":"none"}},(0,e.createElement)("iframe",{src:r,scrolling:"no",node:s,frameBorder:0,style:{opacity:u?1:0},onLoad:()=>setTimeout((()=>(()=>{p(!0);const e=s,t=e.children[0].children[0].children[0],l=e.parentElement;if(t){var r,n,o,i;const e=(null===(r=t.contentDocument)||void 0===r||null===(n=r.body)||void 0===n?void 0:n.offsetWidth)||1440,a=l.offsetWidth/e,c=Math.min((null===(o=t.contentDocument)||void 0===o||null===(i=o.body)||void 0===i?void 0:i.offsetHeight)||900,900)*a+"px";_(a),f(c)}})()),550)}))),(0,e.createElement)("div",{id:`elementor-preview-loader-${i}`,className:"elementor-block-preview-loader",style:{display:u?"none":"block",minHeight:"200px"}},(0,e.createElement)(d,null,(0,e.createElement)(o.Spinner,null))))};(0,t.registerBlockType)("elementor/template",{title:(0,n.__)("Elementor Library","block-builder"),icon:{foreground:"#93003F",src:a},description:(0,n.__)("Add Elementor templates to your Gutenberg content.","block-builder"),category:"common",attributes:{selectedTemplate:{type:"number",default:0},title:{type:"string",default:""},hidePreview:{type:"boolean",default:!1}},edit:(0,r.withSelect)((e=>{const{getEntityRecords:t}=e("core");return{templates:t("postType","elementor_library",{per_page:100})}}))((t=>{const r=React.createRef(),[i,a]=(0,e.useState)(!1);if(!t.templates)return(0,e.createElement)("div",{className:t.className},(0,e.createElement)(d,null,(0,n.__)("Loading...","block-builder")));if(0===t.templates.length)return(0,e.createElement)("div",{className:t.className},(0,e.createElement)(d,null,(0,e.createElement)(o.Button,{isDefault:!0,target:"_blank",href:elementorBlockBuilderConfig.create_new_post_url},(0,n.__)("Create Your First Template","block-builder"))));const c=[{value:0,label:"— "+(0,n.__)("Select a Template","block-builder")+" —"}],s=t.className;let u="",p="";const b=(0,e.createElement)(o.SelectControl,{label:(0,n.__)("Template","block-editor"),value:t.attributes.selectedTemplate,onChange:e=>t.setAttributes({selectedTemplate:parseInt(e)}),options:c});t.templates.length>0&&t.templates.forEach((l=>{c.push({label:l.title.rendered,value:l.id}),t.attributes.selectedTemplate===l.id&&(u=(0,e.createElement)(o.Button,{isDefault:!0,target:"_blank",href:elementorBlockBuilderConfig.edit_url_pattern+l.id},(0,n.__)("Edit Template with Elementor","block-builder")),p=(0,e.createElement)("div",{id:"elementor-template-block-inner-"+l.id},i?(0,e.createElement)(d,{instructions:`\n\t\t\t\t\t\t\t\t${(0,n.__)("Preview is hidden","block-editor")},\n\t\t\t\t\t\t\t\t${(0,n.__)("Selected template:","block-editor")} ${l.title.rendered}.\n\t\t\t\t\t\t\t\t`},(0,e.createElement)(o.Button,{isDefault:!0,onClick:()=>{a((e=>!e))}},(0,n.__)("Show Preview","block-editor"))):(0,e.createElement)(m,{ref:r,srcDoc:elementorBlockBuilderConfig.preview_url_pattern+l.id,id:"elementor-template-"+l.id,templateId:l.id,className:"elementor-block-preview-frame",iFrameDisplay:!1})))})),""===p&&(p=(0,e.createElement)(d,{withLink:!0},b));const _=(0,e.createElement)(l.InspectorControls,{key:"inspector"},(0,e.createElement)(o.PanelBody,{title:(0,n.__)("Settings","block-builder"),initialOpen:!0},b,(0,e.createElement)(o.ToggleControl,{label:(0,n.__)("Hide Preview","block-builder"),help:i?(0,n.__)("Show Preview","block-builder"):(0,n.__)("Hide Preview","block-builder"),checked:i,onChange:()=>{a((e=>!e))}}),(0,e.createElement)("fieldset",null,u)));return(0,e.createElement)("div",{className:s},_,p)})),save:()=>null})})();