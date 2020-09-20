!function(){function e(e,t){for(var i=0;i<t.length;i++){var c=t[i];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function t(t,i,c){return i&&e(t.prototype,i),c&&e(t,c),t}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{UTEa:function(e,c,r){"use strict";r.r(c),r.d(c,"TimerPickerModule",(function(){return K}));var n,b,o,m,a=r("ofXK"),s=r("3Pt+"),u=r("Wp6s"),d=r("kmnG"),p=r("zkoq"),l=r("NFeN"),h=r("qFsG"),O=r("wZkO"),f=r("tyNb"),N=r("psLn"),g=r("fXoL"),v=((n=function e(){i(this,e)}).\u0275fac=function(e){return new(e||n)},n.\u0275cmp=g.Db({type:n,selectors:[["app-timer-picker-api"]],decls:101,vars:0,consts:[[1,"table-api-documentation"],[1,"api-description"]],template:function(e,t){1&e&&(g.Ob(0,"h2"),g.vc(1,"Components"),g.Nb(),g.Ob(2,"h3"),g.vc(3,"MccTimerPicker"),g.Nb(),g.Ob(4,"p"),g.vc(5,"This is the main class of the component."),g.Nb(),g.Ob(6,"h4"),g.vc(7,"Inputs"),g.Nb(),g.Ob(8,"table",0),g.Ob(9,"thead"),g.Ob(10,"tr"),g.Ob(11,"th"),g.vc(12,"Name"),g.Nb(),g.Ob(13,"th"),g.vc(14,"Description"),g.Nb(),g.Nb(),g.Nb(),g.Ob(15,"tbody"),g.Ob(16,"tr"),g.Ob(17,"td"),g.Ob(18,"code"),g.vc(19,"hideButtons: boolean"),g.Nb(),g.Nb(),g.Ob(20,"td",1),g.vc(21,"Hide the buttons (confirm/cancel)"),g.Nb(),g.Nb(),g.Ob(22,"tr"),g.Ob(23,"td"),g.Ob(24,"code"),g.vc(25,"mccTimerPickerFormat: MccTimerPickerFormat"),g.Nb(),g.Nb(),g.Ob(26,"td",1),g.vc(27,"Define the format that timer-picker will output the selected time (default: 12)"),g.Nb(),g.Nb(),g.Ob(28,"tr"),g.Ob(29,"td"),g.Ob(30,"code"),g.vc(31,"mccTimerPickerMin: string"),g.Nb(),g.Nb(),g.Ob(32,"td",1),g.vc(33,"Define the minimum allowed time (default: 00:00 am, accepts both formats)"),g.Nb(),g.Nb(),g.Ob(34,"tr"),g.Ob(35,"td"),g.Ob(36,"code"),g.vc(37,"mccTimerPickerMax: string"),g.Nb(),g.Nb(),g.Ob(38,"td",1),g.vc(39,"Define the maximum allowed time (default: 12:00 pm, accepts both formats)"),g.Nb(),g.Nb(),g.Ob(40,"tr"),g.Ob(41,"td"),g.Ob(42,"code"),g.vc(43,"btnCancel: string"),g.Nb(),g.Nb(),g.Ob(44,"td",1),g.vc(45,"Cancel button text (default: Cancel)"),g.Nb(),g.Nb(),g.Ob(46,"tr"),g.Ob(47,"td"),g.Ob(48,"code"),g.vc(49,"btnConfirm: string"),g.Nb(),g.Nb(),g.Ob(50,"td",1),g.vc(51,"Confirm button text (default: Confirm)"),g.Nb(),g.Nb(),g.Nb(),g.Nb(),g.Ob(52,"h4"),g.vc(53,"Outputs"),g.Nb(),g.Ob(54,"table",0),g.Ob(55,"thead"),g.Ob(56,"tr"),g.Ob(57,"th"),g.vc(58,"Name"),g.Nb(),g.Ob(59,"th"),g.vc(60,"Description"),g.Nb(),g.Nb(),g.Nb(),g.Ob(61,"tbody"),g.Ob(62,"tr"),g.Ob(63,"td"),g.Ob(64,"code"),g.vc(65,"selected: string"),g.Nb(),g.Nb(),g.Ob(66,"td",1),g.vc(67,"Output the selected timer"),g.Nb(),g.Nb(),g.Nb(),g.Nb(),g.Kb(68,"hr"),g.Ob(69,"h2"),g.vc(70,"Directives"),g.Nb(),g.Ob(71,"h3"),g.vc(72,"MccTimerPickerOriginDirective"),g.Nb(),g.Ob(73,"p"),g.vc(74,"This directive is used on the trigger component. If we associate the directive an input text, when the input is focused the timer picker will open on the screen"),g.Nb(),g.Ob(75,"h3"),g.vc(76,"MccConnectedTimerPickerDirective"),g.Nb(),g.Ob(77,"p"),g.vc(78,"Directive used on the "),g.Ob(79,"code"),g.vc(80,"MccTimerPickerComponent"),g.Nb(),g.vc(81," to connect to an element ( "),g.Ob(82,"code"),g.vc(83,"MccTimerPickerOriginDirective"),g.Nb(),g.vc(84,")"),g.Nb(),g.Ob(85,"h4"),g.vc(86,"Inputs"),g.Nb(),g.Ob(87,"table",0),g.Ob(88,"thead"),g.Ob(89,"tr"),g.Ob(90,"th"),g.vc(91,"Name"),g.Nb(),g.Ob(92,"th"),g.vc(93,"Description"),g.Nb(),g.Nb(),g.Nb(),g.Ob(94,"tbody"),g.Ob(95,"tr"),g.Ob(96,"td"),g.Ob(97,"code"),g.vc(98,"mccConnectedTimerPickerOrigin: MccTimerPickerOriginDirective"),g.Nb(),g.Nb(),g.Ob(99,"td",1),g.vc(100,"Element that timer picker has to connect"),g.Nb(),g.Nb(),g.Nb(),g.Nb())},encapsulation:2,changeDetection:0}),n),k=r("3dsp"),P=r("2Vo4"),T=((m=function(){function e(t,c){var r=this;i(this,e),this.elementRef=t,this.renderer=c,this.change=new P.a(""),this.hasFocus=new P.a(!1),c.listen(t.nativeElement,"focus",(function(){return r.hasFocus.next(!0)}))}return t(e,[{key:"writeValue",value:function(e){this.renderer.setProperty(this.elementRef.nativeElement,"value",e),this.change.next(e),this.propagateChanges&&this.propagateChanges(e)}},{key:"writeValueFromTimerPicker",value:function(e){this.renderer.setProperty(this.elementRef.nativeElement,"value",e),this.propagateChanges(e)}},{key:"writeValueFromKeyup",value:function(e){this.change.next(e),this.propagateChanges(e)}},{key:"registerOnChange",value:function(e){this.propagateChanges=e}},{key:"registerOnTouched",value:function(e){}},{key:"setDisabledState",value:function(e){this.renderer.setProperty(this.elementRef.nativeElement,"disabled",e)}}]),e}()).\u0275fac=function(e){return new(e||m)(g.Jb(g.l),g.Jb(g.E))},m.\u0275dir=g.Eb({type:m,selectors:[["","mccTimerPickerOrigin",""],["","mcc-timer-picker-origin",""]],outputs:{change:"change",hasFocus:"hasFocus"},exportAs:["mccTimerPickerOrigin"],features:[g.yb([{provide:s.o,useExisting:Object(g.T)((function(){return m})),multi:!0}])]}),m),y=((o=function(){function e(t,c){i(this,e),this.timerPicker=t,this.changeDetectorRef=c,this.timerPicker.connected=!0}return t(e,[{key:"ngAfterViewInit",value:function(){this._timerPickerSub||(this.timerPicker.trigger=this.origin,this._attachTimerPicker())}},{key:"ngOnDestroy",value:function(){this._originFocus&&!this._originFocus.closed&&this._originFocus.unsubscribe(),this._timerPickerSub&&!this._timerPickerSub.closed&&this._timerPickerSub.unsubscribe()}},{key:"_attachTimerPicker",value:function(){var e=this;this._originFocus=this.origin.hasFocus.subscribe((function(t){e.timerPicker.focus="hour",e.timerPicker.isOpen=t,e.changeDetectorRef.detectChanges()})),this._timerPickerSub=this.timerPicker.selected.subscribe((function(t){return e.origin.writeValueFromTimerPicker(t)}))}}]),e}()).\u0275fac=function(e){return new(e||o)(g.Jb(k.a),g.Jb(g.h))},o.\u0275dir=g.Eb({type:o,selectors:[["","mccConnectedTimerPicker",""],["","mcc-connected-timer-picker",""]],inputs:{origin:["mccConnectedTimerPickerOrigin","origin"]},exportAs:["mccConnectedTimerPicker"]}),o),C=((b=function(){function e(t){i(this,e),this.formBuilder=t}return t(e,[{key:"ngOnInit",value:function(){this.form=this.formBuilder.group({timer:[""]})}},{key:"onSubmit",value:function(e){var t=e.value,i=e.valid;console.log(i,t)}}]),e}()).\u0275fac=function(e){return new(e||b)(g.Jb(s.f))},b.\u0275cmp=g.Db({type:b,selectors:[["app-timer-picker-examples"]],decls:46,vars:10,consts:[["novalidate","",3,"formGroup","ngSubmit"],["mccConnectedTimerPicker","",3,"mccConnectedTimerPickerOrigin"],["matInput","","mccTimerPickerOrigin","","placeholder","Timer","formControlName","timer"],["inputTrigger","mccTimerPickerOrigin"],["mccConnectedTimerPicker","","mccTimerPickerMin","09:45","mccTimerPickerMax","20:30",3,"mccConnectedTimerPickerOrigin"],["minMaxInputTrigger","mccTimerPickerOrigin"],["mccConnectedTimerPicker","",3,"mccConnectedTimerPickerOrigin","mccTimerPickerFormat"],["formatTrigger","mccTimerPickerOrigin"],["mccConnectedTimerPicker","",3,"mccConnectedTimerPickerOrigin","hideButtons"],["buttonTrigger","mccTimerPickerOrigin"]],template:function(e,t){if(1&e&&(g.Ob(0,"mat-card"),g.Ob(1,"mat-card-header"),g.Ob(2,"mat-card-title"),g.vc(3," Connect with an input "),g.Nb(),g.Nb(),g.Ob(4,"mat-card-content"),g.Ob(5,"form",0),g.Vb("ngSubmit",(function(){return t.onSubmit(t.form)})),g.Ob(6,"mat-form-field"),g.Kb(7,"mcc-timer-picker",1),g.Kb(8,"input",2,3),g.Nb(),g.Nb(),g.Nb(),g.Nb(),g.Ob(10,"mat-card"),g.Ob(11,"mat-card-header"),g.Ob(12,"mat-card-title"),g.vc(13," Use custom range "),g.Nb(),g.Nb(),g.Ob(14,"mat-card-content"),g.Ob(15,"form",0),g.Vb("ngSubmit",(function(){return t.onSubmit(t.form)})),g.Ob(16,"mat-form-field"),g.Kb(17,"mcc-timer-picker",4),g.Kb(18,"input",2,5),g.Nb(),g.Nb(),g.Nb(),g.Nb(),g.Ob(20,"mat-card"),g.Ob(21,"mat-card-header"),g.Ob(22,"mat-card-title"),g.vc(23," Convert value to 24h "),g.Nb(),g.Nb(),g.Ob(24,"mat-card-content"),g.Ob(25,"form",0),g.Vb("ngSubmit",(function(){return t.onSubmit(t.form)})),g.Ob(26,"mat-form-field"),g.Kb(27,"mcc-timer-picker",6),g.Kb(28,"input",2,7),g.Nb(),g.Nb(),g.Nb(),g.Nb(),g.Ob(30,"mat-card"),g.Ob(31,"mat-card-header"),g.Ob(32,"mat-card-title"),g.vc(33," Hide buttons "),g.Nb(),g.Nb(),g.Ob(34,"mat-card-content"),g.Ob(35,"form",0),g.Vb("ngSubmit",(function(){return t.onSubmit(t.form)})),g.Ob(36,"mat-form-field"),g.Kb(37,"mcc-timer-picker",8),g.Kb(38,"input",2,9),g.Nb(),g.Nb(),g.Nb(),g.Nb(),g.Ob(40,"mat-card"),g.Ob(41,"mat-card-header"),g.Ob(42,"mat-card-title"),g.vc(43," Opened component "),g.Nb(),g.Nb(),g.Ob(44,"mat-card-content"),g.Kb(45,"mcc-timer-picker"),g.Nb(),g.Nb()),2&e){var i=g.jc(9),c=g.jc(19),r=g.jc(29),n=g.jc(39);g.zb(5),g.ec("formGroup",t.form),g.zb(2),g.ec("mccConnectedTimerPickerOrigin",i),g.zb(8),g.ec("formGroup",t.form),g.zb(2),g.ec("mccConnectedTimerPickerOrigin",c),g.zb(8),g.ec("formGroup",t.form),g.zb(2),g.ec("mccConnectedTimerPickerOrigin",r)("mccTimerPickerFormat","24"),g.zb(8),g.ec("formGroup",t.form),g.zb(2),g.ec("mccConnectedTimerPickerOrigin",n)("hideButtons",!0)}},directives:[u.a,u.c,u.e,u.b,s.E,s.r,s.j,d.b,k.a,y,h.a,s.c,T,s.q,s.i],encapsulation:2,changeDetection:0}),b);function w(e,t){1&e&&g.vc(0," Overview ")}function x(e,t){1&e&&g.vc(0," API ")}function D(e,t){1&e&&g.vc(0," Examples ")}var M,S,F=[{path:"",component:(M=function(){function e(t){i(this,e),this.formBuilder=t}return t(e,[{key:"ngOnInit",value:function(){this.form=this.formBuilder.group({timer:[""]})}},{key:"onSubmit",value:function(e){var t=e.value,i=e.valid;console.log(i,t)}}]),e}(),M.\u0275fac=function(e){return new(e||M)(g.Jb(s.f))},M.\u0275cmp=g.Db({type:M,selectors:[["app-timer-picker"]],decls:42,vars:4,consts:[[1,"page-title"],[1,"page-subtitle"],["mat-tab-label",""],["cols","4","rowHeight","70px"],["colspan","3"],["href","https://github.com/tiaguinho/material-community-components/tree/master/src/lib/timer-picker","target","_blank"],["src","https://tiaguinho.github.io/material-community-components/demo-app/assets/img/source-code.png","alt","Source Code",1,"source-code"],[1,"code-snippet"],[1,"lang-typescript"],[1,"hljs-variable"],[1,"hljs-attribute"],["label","Examples"]],template:function(e,t){1&e&&(g.Ob(0,"h1",0),g.Ob(1,"mat-icon"),g.vc(2,"timer"),g.Nb(),g.vc(3," Timer Picker\n"),g.Nb(),g.Ob(4,"p",1),g.vc(5,"Some examples of how to use the "),g.Ob(6,"span"),g.vc(7,"mcc-timer-picker"),g.Nb(),g.vc(8," component"),g.Nb(),g.Ob(9,"mat-tab-group"),g.Ob(10,"mat-tab"),g.tc(11,w,1,0,"ng-template",2),g.Ob(12,"mat-grid-list",3),g.Ob(13,"mat-grid-tile",4),g.Ob(14,"h2"),g.vc(15,"MccTimerPicker"),g.Nb(),g.Nb(),g.Ob(16,"mat-grid-tile"),g.Ob(17,"a",5),g.Kb(18,"img",6),g.Nb(),g.Nb(),g.Nb(),g.Ob(19,"p"),g.vc(20,"This is a implementation of timer picker for material design."),g.Nb(),g.Ob(21,"p"),g.vc(22,"To use this component, just import the module from "),g.Ob(23,"code"),g.vc(24,"material-community-component"),g.Nb(),g.vc(25," package."),g.Nb(),g.Ob(26,"pre",7),g.Ob(27,"code",8),g.vc(28),g.Ob(29,"span",9),g.vc(30,"@NgModule"),g.Nb(),g.vc(31),g.Ob(32,"span",10),g.vc(33,"imports"),g.Nb(),g.vc(34),g.Nb(),g.vc(35,"\n"),g.Nb(),g.Nb(),g.Ob(36,"mat-tab"),g.tc(37,x,1,0,"ng-template",2),g.Kb(38,"app-timer-picker-api"),g.Nb(),g.Ob(39,"mat-tab",11),g.tc(40,D,1,0,"ng-template",2),g.Kb(41,"app-timer-picker-examples"),g.Nb(),g.Nb()),2&e&&(g.zb(28),g.yc("  import ","{"," MccTimerPickerModule ","}"," from 'material-community-components';\n\n  "),g.zb(3),g.xc("(","{","\n    ...\n    "),g.zb(3),g.xc(": [\n      MccTimerPickerModule\n    ]\n    ...\n  ","}",")\n  "))},directives:[l.a,O.b,O.a,O.c,p.a,p.c,v,C],styles:[".mat-grid-list{border-bottom:1px solid #dadada}  .mat-grid-tile:first-child .mat-figure{justify-content:flex-start;align-items:flex-start}  .mat-grid-tile:first-child .mat-figure h2{border:0}.source-code[_ngcontent-%COMP%]{height:35px}"],changeDetection:0}),M)}],K=((S=function e(){i(this,e)}).\u0275mod=g.Hb({type:S}),S.\u0275inj=g.Gb({factory:function(e){return new(e||S)},imports:[[a.c,f.d.forChild(F),s.y,u.d,h.b,d.d,l.b,p.b,O.d,N.e]]}),S)}}])}();