"use strict";(self.webpackChunkreactlearning1=self.webpackChunkreactlearning1||[]).push([[469],{6621:function(s,t,e){e.d(t,{D:function(){return p}});var o=e(1413),n=e(5671),r=e(3144),i=e(136),a=e(2882),u=e(2791),l=e(6871),c=e(8687),d=e(184),h=function(s){return{isAuth:s.auth.isAuth}},p=function(s){var t=function(t){(0,i.Z)(u,t);var e=(0,a.Z)(u);function u(){return(0,n.Z)(this,u),e.apply(this,arguments)}return(0,r.Z)(u,[{key:"render",value:function(){return this.props.isAuth?(0,d.jsx)(s,(0,o.Z)({},this.props)):(0,d.jsx)(l.Fg,{to:"/login"})}}]),u}(u.Component);return(0,c.$j)(h)(t)}},3469:function(s,t,e){e.r(t),e.d(t,{default:function(){return J}});var o=e(1413),n=e(5671),r=e(3144),i=e(136),a=e(2882),u=e(2791),l=e(885),c=e(2280),d={descriptionBlock:"ProfileInfo_descriptionBlock__2qJPS",mainPhoto:"ProfileInfo_mainPhoto__mqKK+",contact:"ProfileInfo_contact__c-2Mf"},h=e(3957),p=e(184),f=function(s){var t=(0,u.useState)(!1),e=(0,l.Z)(t,2),o=e[0],n=e[1],r=(0,u.useState)(s.status),i=(0,l.Z)(r,2),a=i[0],c=i[1];(0,u.useEffect)((function(){c(s.status)}),[s.status]);return(0,p.jsxs)("div",{children:[!o&&(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Status:"}),(0,p.jsx)("span",{onDoubleClick:function(){n(!0)},children:s.status||"---"})]}),o&&(0,p.jsx)("div",{children:(0,p.jsx)("input",{onChange:function(s){c(s.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),s.updateStatus(a)},value:a})})]})},x=e(704),j=e(2781),v=(0,x.Z)({form:"edit-profile"})((function(s){var t=s.handleSubmit,e=s.profile,o=s.error;return(0,p.jsxs)("form",{onSubmit:t,children:[(0,p.jsx)("div",{children:(0,p.jsx)("button",{children:"save"})}),o&&(0,p.jsx)("div",{className:d.formSummaryError,children:o}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Full Name"})," ",(0,j.SP)("fullName",[],"fullName",j.II)]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"looking for job"})," ",(0,j.SP)("",[],"lookingForAJob",j.II,{type:"checkbox"})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"My professional skills"}),(0,j.SP)("My professional skills",[],"lookingForAJobDescription",j.gx)]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"About me"}),(0,j.SP)("aboutMe",[],"aboutMe",j.gx)]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Contacts"}),":",Object.keys(e.contacts).map((function(s){return(0,p.jsx)("div",{className:d.contact,children:(0,p.jsxs)("b",{children:[s,":",(0,j.SP)(s,[],"contacts."+s,j.gx)]})},s)}))]})]})})),m=function(s){var t=s.profile,e=s.isOwner,o=s.goToEditMode;return(0,p.jsxs)("div",{children:[e&&(0,p.jsx)("div",{children:(0,p.jsx)("button",{onClick:o,children:"edit"})}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Full Name"})," ",t.fullName]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"looking for job"})," ",t.lookingForAJob?"yes":"no"]}),t.lookingForAJob&&(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"My professional skills"})," ",t.lookingForAJobDescription]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"About me"})," ",t.aboutMe]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Contacts"}),":",Object.keys(t.contacts).map((function(s){return(0,p.jsx)(g,{contactTitle:s,contactValue:t.contacts[s]},s)}))]})]})},g=function(s){var t=s.contactTitle,e=s.contactValue;return(0,p.jsxs)("div",{className:d.contact,children:[(0,p.jsx)("b",{children:t}),":",e]})},b=function(s){var t=(0,u.useState)(!1),e=(0,l.Z)(t,2),o=e[0],n=e[1];if(!s.profile)return(0,p.jsx)(c.Z,{});return(0,p.jsx)("div",{children:(0,p.jsxs)("div",{className:d.descriptionBlock,children:[(0,p.jsx)("img",{src:s.profile.photos.large||h,className:d.mainPhoto}),s.isOwner&&(0,p.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&s.savePhoto(t.target.files[0])}}),o?(0,p.jsx)(v,{initialValues:s.profile,profile:s.profile,onSubmit:function(t){s.saveProfile(t).then((function(){n(!1),console.log(t)}))}}):(0,p.jsx)(m,{profile:s.profile,isOwner:s.isOwner,goToEditMode:function(){n(!0)}}),(0,p.jsx)(f,{status:s.status,updateStatus:s.updateStatus})]})})},P=e(6868),k=e(6139),S=e(5304),y="MyPosts_postsBlock__xPwb5",Z="MyPosts_posts__9E-kw",_="Posts_item__bhrYq",w=function(s){return(0,p.jsxs)("div",{className:_,children:[(0,p.jsx)("img",{src:"https://cspromogame.ru//storage/upload_images/avatars/1299.jpg"}),s.message,(0,p.jsx)("div",{children:(0,p.jsxs)("span",{children:["like ",s.count]})})]})},A=(0,x.Z)({form:"profileAddNewPostForm"})((function(s){return(0,p.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,p.jsx)("div",{children:(0,p.jsx)(k.Z,{name:"newPostText",component:j.gx,validate:[S.l,(0,S.D)(10)],placeholder:"post message"})}),(0,p.jsx)("div",{children:(0,p.jsx)("button",{children:"add post"})})]})})),N=function(s){var t=s.postsData.map((function(s){return(0,p.jsx)(w,{message:s.message,count:s.liKesCount},s.id)}));return(0,p.jsxs)("div",{className:y,children:[(0,p.jsx)("h3",{children:"My post"}),(0,p.jsx)(A,{onSubmit:function(t){s.addPost(t.newPostText)}}),(0,p.jsx)("div",{className:Z,children:t})]})},I=e(8687),M=(0,I.$j)((function(s){return{postsData:s.profilePage.postsData,newPostText:s.profilePage.newPostText}}),(function(s){return{addPost:function(t){s((0,P.Wl)(t))}}}))(N),C=function(s){return(0,p.jsxs)("div",{children:[(0,p.jsx)(b,{profile:s.profile,status:s.status,updateStatus:s.updateStatus,isOwner:s.isOwner,savePhoto:s.savePhoto,saveProfile:s.saveProfile}),(0,p.jsx)(M,{})]})},D=e(6871),F=e(6621),O=e(7781),T=function(s){(0,i.Z)(e,s);var t=(0,a.Z)(e);function e(){return(0,n.Z)(this,e),t.apply(this,arguments)}return(0,r.Z)(e,[{key:"refreshProfile",value:function(){var s=this.props.router.params.userId;s||(s=this.props.AuthorizedUserId)||this.props.history.push("/login"),this.props.getUsersProfile(s),this.props.getStatus(s),console.log(this.props.getStatus(s))}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(s,t,e){this.props.router.params.userId!=s.router.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,p.jsx)(C,(0,o.Z)((0,o.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,isOwner:!this.props.router.params.userId,savePhoto:this.props.savePhoto}))}}]),e}(u.Component);var J=(0,O.qC)((0,I.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,AuthorizedUserId:s.auth.userid,isAuth:s.auth.isAuth}}),{getUsersProfile:P.XG,getStatus:P.lR,updateStatus:P.Nf,savePhoto:P.Ju,saveProfile:P.Ii}),(function(s){return function(t){var e=(0,D.TH)(),n=(0,D.s0)(),r=(0,D.UO)();return(0,p.jsx)(s,(0,o.Z)((0,o.Z)({},t),{},{router:{location:e,navigate:n,params:r}}))}}),F.D)(T)}}]);
//# sourceMappingURL=469.3e38b311.chunk.js.map