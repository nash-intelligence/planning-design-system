import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-BtAIu6q6.js";import{d as n,i as r,o as i,p as a,t as o}from"./axis-BOiZinAd.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";function c(e){let[t,o]=(0,l.useState)(null),s=(e,t)=>o({area:e,screen:t}),c=t??{area:`Home`,screen:`Overview`};return(0,u.jsx)(a,{navigation:{activeArea:c.area,activeScreen:c.screen,areas:i,audience:e.audience,onNavigate:s},children:t?(0,u.jsx)(n,{activeArea:t.area,activeScreen:t.screen,areas:i,audience:e.audience,onExit:()=>o(null),onNavigate:s}):(0,u.jsx)(r,{...e,onOpenScreen:s})})}var l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{l=t(),o(),u=s(),d={title:`Axis Experiences/Experience Atlas`,component:r,parameters:{layout:`fullscreen`,docs:{description:{component:`Exploratory, source-owned map of the canonical Nash Axis product areas and screen families. Coverage labels describe Storybook design maturity, not deployed product availability.`}}},render:e=>(0,u.jsx)(c,{...e})},f={args:{audience:`customer-admin`,initialFilter:`all`}},p={args:{audience:`customer-admin`,initialFilter:`reference`}},m={args:{audience:`customer-admin`,initialFilter:`designed`}},h={args:{audience:`customer-admin`,initialFilter:`restricted`}},g={args:{audience:`operator`,compact:!0,initialFilter:`all`}},_={args:{audience:`customer-admin`,initialQuery:`satellite teleportation`}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    audience: 'customer-admin',
    initialFilter: 'all'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    audience: 'customer-admin',
    initialFilter: 'reference'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    audience: 'customer-admin',
    initialFilter: 'designed'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    audience: 'customer-admin',
    initialFilter: 'restricted'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    audience: 'operator',
    compact: true,
    initialFilter: 'all'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    audience: 'customer-admin',
    initialQuery: 'satellite teleportation'
  }
}`,..._.parameters?.docs?.source}}},v=[`CompleteCatalogue`,`ReferenceDesigns`,`DesignedSystem`,`RestrictedOperatorArea`,`CompactCatalogue`,`EmptySearch`]})))()}y();export{g as CompactCatalogue,f as CompleteCatalogue,m as DesignedSystem,_ as EmptySearch,p as ReferenceDesigns,h as RestrictedOperatorArea,v as __namedExportsOrder,d as default};