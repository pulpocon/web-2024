import{d as i,o as n,H as o,R as e,U as a,V as s}from"./entry.fdcf3b8c.js";const t={class:"organizer"},c=["alt","src"],l={class:"organizer__name"},_={class:"organizer__position"},g={class:"organizer__social"},d={key:0,class:"organizer__social-link"},h=["href"],z=e("i",{class:"fab fa-twitter"},null,-1),m=[z],u={key:1,class:"organizer__social-link"},f=["href"],k=e("i",{class:"fab fa-linkedin"},null,-1),y=[k],B=i({__name:"OrganizerPerson",props:{organizer:{type:Object,required:!0}},setup(r){return(b,w)=>(n(),o("article",t,[e("header",null,[e("img",{alt:r.organizer.name,src:r.organizer.image,class:"organizer__image"},null,8,c),e("h2",l,a(r.organizer.name),1)]),e("h3",_,a(r.organizer.position),1),e("ul",g,[r.organizer.social.twitter?(n(),o("li",d,[e("a",{href:r.organizer.social.twitter,rel:"noopener noreferrer",target:"_blank"},m,8,h)])):s("",!0),r.organizer.social.linkedin?(n(),o("li",u,[e("a",{href:r.organizer.social.linkedin,rel:"noopener noreferrer",target:"_blank"},y,8,f)])):s("",!0)])]))}});export{B as _};