"use strict";(self.webpackChunkapp_titi_frontend=self.webpackChunkapp_titi_frontend||[]).push([[2419],{82419:(G,C,n)=>{n.r(C),n.d(C,{SwapModule:()=>nt});var w=n(69808),$=n(93075),M=n(71787),I=n(11730),q=n(98538),U=n.n(q),m=n(28321),u=n(17489),v=n(48634),t=n(5e3),R=n(65707),j=n(57610),N=n(32681),D=n(63874),J=n(22313),Y=n(48966),Q=n(53405),W=n(74696),H=n(31657),f=n(67322),x=n(77531),a=n(47423),T=n(92134),h=n(81125),y=n(4834),g=n(26688),V=n(87238),z=n(11523),K=n(75303);function l(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"button",41),t.NdJ("click",function(){return t.CHM(e),t.oxw().onSwap()}),t._uU(1),t.qZA()}if(2&r){const e=t.oxw();t.Q6J("disabled",!e.outputValue||0>=e.outputValue||e.inputValue>(e.isBuyingTiUSD?e.token1Balance:e.token0Balance)||e.isLoading),t.xp6(1),t.Oqu(e.isLoading?"waiting...":"Swap")}}function d(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"button",41),t.NdJ("click",function(){return t.CHM(e),t.oxw().onApprove()}),t._uU(1),t.qZA()}if(2&r){const e=t.oxw();t.Q6J("disabled",e.isLoading),t.xp6(1),t.Oqu(e.isLoading?"waiting...":"Approve")}}function O(r,c){if(1&r&&(t.TgZ(0,"span",42),t._uU(1),t.qZA()),2&r){const e=t.oxw();t.xp6(1),t.hij(" + ",e.outputValue," TiUSD")}}function B(r,c){if(1&r&&(t.TgZ(0,"span",42),t._uU(1),t.qZA()),2&r){const e=t.oxw();t.xp6(1),t.hij(" + ",e.outputValue," TiUSD")}}function E(r,c){if(1&r&&(t.TgZ(0,"span",42),t._uU(1),t.ALo(2,"number"),t.qZA()),2&r){const e=t.oxw();t.xp6(1),t.hij(" -> ",t.xi3(2,1,e.use2earnService.getNewBuyTiUSDPersonalProportion(e.outputValue),"1.2-2"),"%")}}function Z(r,c){if(1&r&&(t.TgZ(0,"span",42),t._uU(1),t.ALo(2,"number"),t.qZA()),2&r){const e=t.oxw();t.xp6(1),t.hij(" -> ",t.xi3(2,1,e.use2earnService.getNewbuyTiUSDPersonalRewardRate(e.outputValue),"1.4-4")," TiTi")}}function o(r,c){1&r&&(t.TgZ(0,"span",42),t._uU(1,"Buy TiUSD (Rewarded)"),t.qZA())}function F(r,c){1&r&&(t.TgZ(0,"span"),t._uU(1,"Sell TiUSD"),t.qZA())}function L(r,c){if(1&r&&(t.ynx(0),t.TgZ(1,"a",43),t.TgZ(2,"span",44),t._uU(3),t.qZA(),t.TgZ(4,"mat-icon",45),t._uU(5,"open_in_new"),t.qZA(),t.qZA(),t.ynx(6,46),t.YNc(7,o,2,0,"span",47),t.YNc(8,F,2,0,"span",48),t.BQk(),t.TgZ(9,"span"),t._uU(10),t.ALo(11,"number"),t.qZA(),t.TgZ(12,"span"),t._uU(13),t.ALo(14,"date"),t.qZA(),t.BQk()),2&r){const e=c.$implicit,i=t.oxw();t.xp6(1),t.Q6J("href",i.chainInfoService.getChainConfig().blockExplorerUrls[0]+"/tx/"+e.txHash,t.LSH),t.xp6(2),t.Oqu(e.txHash),t.xp6(3),t.Q6J("ngSwitch",e.type),t.xp6(1),t.Q6J("ngSwitchCase","0"),t.xp6(1),t.Q6J("ngSwitchCase","1"),t.xp6(2),t.hij("",t.xi3(11,7,i.formatTokenValue(e.amount,"18"),"1.2-4")," TiUSD"),t.xp6(3),t.Oqu(t.xi3(14,10,1e3*e.timestamp,"dd/M/y HH:mm:ss"))}}function X(r,c){1&r&&(t.ynx(0),t.TgZ(1,"span"),t._uU(2,"No data."),t.qZA(),t.BQk())}const k=[{token0:"TiUSD",token1:"USDC"}];let s=(()=>{class r{constructor(e,i,p,S,_,A,P,ot,rt,st,lt){this.chainInfoService=e,this.accountService=i,this.router=p,this.use2earnService=S,this.web3Service=P,this.dialog=ot,this.graphService=rt,this.echartService=st,this.refreshService=lt,this.isBuyingTiUSD=!0,this.isLoading=!0,this.isApproved=!1,this.token0Balance=0,this.token1Balance=0,this.currentSwapPair=k[0],this.inputValue=0,this.outputValue=0,this.fund0=0,this.fund1=0,this.decimal0=18,this.decimal1=6,this.priceImpact="0.00%",this.MMFfund=0,this.lastFund0=0,this.lastFund1=0,this.chartData=[],this.option={},this.buyTiUSDRecords=[],_.addSvgIconLiteral("USDC",A.bypassSecurityTrustHtml(b)),_.addSvgIconLiteral("TiUSD",A.bypassSecurityTrustHtml(this.chainInfoService.getChainConfig().tiusd.icon))}get prv(){const e=Math.abs(this.lastFund1-this.MMFfund)+(this.lastFund0-this.fund0);return e>0?e:0}ngOnInit(){this.fetchApproveInfo(),this.initData();const e=this.refreshService.registerFunction(()=>this.initData()),i=this.refreshService.registerFunctionWithoutInterval(()=>this.fetchApproveInfo());this.unregister=()=>{e(),i()}}ngOnDestroy(){var e;null===(e=this.unregister)||void 0===e||e.call(this)}initData(){this.fetchBalanceOfToken0(),this.fetchBalanceOfToken1(),this.fetchPoolInfo(),this.fetchMMFFund(),this.fetchLastfund0(),this.fetchLastfund1(),this.fetchOption().then(()=>this.fetchTiUSDChartData()),this.fetchBuyTiUSDRecords()}buildOption(){this.option.series[0].data=this.chartData,this.option=(0,u.cloneDeep)(this.option)}calcPriceImpact(e,i){if(e>0&&i>0){const p=this.fund1/this.fund0;this.priceImpact=(100*Math.abs(p-e/i)/p).toFixed(2)+"%"}}onInputValueChange(e){try{this.inputValue=parseFloat(e.target.value)}catch(_){this.inputValue=0}const i=997*this.inputValue;this.outputValue=parseFloat((i*(this.isBuyingTiUSD?this.fund0:this.fund1)/(1e3*(this.isBuyingTiUSD?this.fund1:this.fund0)+i)).toFixed(4)),this.isBuyingTiUSD?this.calcPriceImpact(this.inputValue,this.outputValue):this.calcPriceImpact(this.outputValue,this.inputValue)}onOutputValueChange(e){try{this.outputValue=parseFloat(e.target.value)}catch(i){this.outputValue=0}this.inputValue=parseFloat((((this.isBuyingTiUSD?this.fund0:this.fund1)*(this.isBuyingTiUSD?this.fund1:this.fund0)*1e3/((this.isBuyingTiUSD?this.fund0:this.fund1)-this.outputValue)-1e3*(this.isBuyingTiUSD?this.fund1:this.fund0))/997).toFixed(4)),this.isBuyingTiUSD?this.calcPriceImpact(this.inputValue,this.outputValue):this.calcPriceImpact(this.outputValue,this.inputValue)}onChangeSwapType(){this.isBuyingTiUSD=!this.isBuyingTiUSD,this.inputValue=this.outputValue;const e=997*this.inputValue;this.outputValue=parseFloat((e*(this.isBuyingTiUSD?this.fund0:this.fund1)/(1e3*(this.isBuyingTiUSD?this.fund1:this.fund0)+e)).toFixed(4)),this.isBuyingTiUSD?this.calcPriceImpact(this.inputValue,this.outputValue):this.calcPriceImpact(this.outputValue,this.inputValue),this.fetchApproveInfo()}fetchBuyTiUSDRecords(){this.graphService.fetchBuyTiUSDRecords().then(({data:e})=>{this.buyTiUSDRecords=e.mammrecords.map(i=>({txHash:i.id,type:i.type,amount:i.amount,timestamp:i.timestamp}))})}fetchApproveInfo(){this.isLoading=!0,this.accountService.getCurrentAccountAsyn().then(e=>Promise.all([this.web3Service.invokeContract(this.isBuyingTiUSD?"USDC":"TiUSD","allowance",[e,this.chainInfoService.getChainConfig().contractAddressMap.MAMMSwapPair]),this.web3Service.invokeContract(this.isBuyingTiUSD?"USDC":"TiUSD","balanceOf",[e])]).then(([i,p])=>{"0"!==i[0]&&new(U())(i[0]).gte(new(U())(p[0]))?(this.isApproved=!0,this.isLoading=!1):(this.isApproved=!1,this.isLoading=!1)}))}onApprove(){this.isLoading=!0,this.web3Service.invokeContract(this.isBuyingTiUSD?"USDC":"TiUSD","approve",[this.chainInfoService.getChainConfig().contractAddressMap.MAMMSwapPair,I.fV]).then(e=>{e.status?(this.isApproved=!0,this.isLoading=!1):(this.isApproved=!1,this.isLoading=!1)},e=>{this.isApproved=!1,this.isLoading=!1})}fetchOption(){return this.echartService.fetchOption("TiUSDPrice").then(e=>this.option=e)}fetchBalanceOfToken0(){this.accountService.getCurrentAccountAsyn().then(e=>this.web3Service.invokeContract(this.currentSwapPair.token0,"balanceOf",[e]).then(i=>{this.token0Balance=parseFloat(new(U())(i[0]).div(new(U())("10").pow(new(U())(this.decimal0-4))).toString())/1e4}))}fetchBalanceOfToken1(){this.accountService.getCurrentAccountAsyn().then(e=>this.web3Service.invokeContract(this.currentSwapPair.token1,"balanceOf",[e]).then(i=>{this.token1Balance=parseFloat(new(U())(i[0]).div(new(U())("10").pow(new(U())(this.decimal1-4))).toString())/1e4}))}fetchPoolInfo(){this.web3Service.invokeContract("MAMMSwapPair","getDepth",[]).then(e=>{this.fund0=e[0]/10**this.decimal0,this.fund1=e[1]/10**this.decimal1})}fetchMMFFund(){this.web3Service.invokeContract("MAMMSwapPair","getMMFFunds",[]).then(e=>{this.MMFfund=e[1]/10**this.decimal1})}fetchLastfund0(){this.web3Service.invokeContract("ReOrdersController","lastFund0",[]).then(e=>{this.lastFund0=e[0]/10**this.decimal0})}fetchLastfund1(){this.web3Service.invokeContract("ReOrdersController","lastFund1",[]).then(e=>{this.lastFund1=e[0]/10**this.decimal1})}fetchTiUSDChartData(){this.graphService.fetchMMFSwapPairHourData(this.chainInfoService.getChainConfig().contractAddressMap.MAMMSwapPair).then(({data:e})=>{var i,p;this.chartData=Array(720).fill(null);const S=(0,m.jn)().reverse();null===(p=null===(i=e.pair)||void 0===i?void 0:i.pairHourData)||void 0===p||p.forEach(A=>{const P=S.indexOf(1e3*A.hourStartTimestamp);-1!==P&&(this.chartData[P]=parseFloat(A.token0Price).toFixed(4))});let _=1;this.chartData.forEach((A,P)=>{null==A?this.chartData[P]=_:_=A}),this.buildOption()})}onSwap(){if(this.isLoading=!0,0!==this.outputValue)if(this.isBuyingTiUSD){const e=(0,v.parseUnits)(this.inputValue+"",this.decimal1);this.web3Service.invokeContract("MAMMSwapPair","mint",[e.toString()]).then(i=>{this.isLoading=!1},i=>{this.isLoading=!1})}else{const e=(0,v.parseUnits)(this.inputValue+"",this.decimal0);this.web3Service.invokeContract("MAMMSwapPair","redeem",[e.toString()]).then(i=>{this.isLoading=!1},i=>{this.isLoading=!1})}}goToUser2EarnPage(){this.router.navigateByUrl("/use2earn")}maxSwapInputValue(){const e=Math.pow(10,4);this.inputValue=parseFloat((Math.floor((this.isBuyingTiUSD?this.token1Balance:this.token0Balance)*e)/e).toFixed(4));const i=997*this.inputValue;this.outputValue=parseFloat((i*(this.isBuyingTiUSD?this.fund0:this.fund1)/(1e3*(this.isBuyingTiUSD?this.fund1:this.fund0)+i)).toFixed(4)),this.isBuyingTiUSD?this.calcPriceImpact(this.inputValue,this.outputValue):this.calcPriceImpact(this.outputValue,this.inputValue)}formatTokenValue(e,i){return(0,v.formatUnits)(e,i)}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(R.Z),t.Y36(j.B),t.Y36(M.F0),t.Y36(N.Q),t.Y36(D.jv),t.Y36(J.H7),t.Y36(I.Uc),t.Y36(Y.uw),t.Y36(Q.h),t.Y36(W.p),t.Y36(H.g))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-swap"]],decls:153,vars:67,consts:[[1,"swap-wrapper"],[1,"page-title",2,"grid-column-start","span 2"],["href","","target","_blank"],[1,"swap-card","mat-elevation-z4"],[2,"grid-column-start","span 3","justify-self","center"],["appearance","outline",1,"swap-input"],["type","text","matInput","","type","number",2,"height","24px","font-size","24px",3,"value","change"],["matPrefix","",2,"padding-right","12px",3,"svgIcon"],["matSuffix",""],["mat-flat-button","",2,"margin-bottom","12px","background-color","transparent","color","#2DD6B5","font-size","18px",3,"click"],[2,"color","rgba(185, 185, 185, 0.9)","font-size","18px","font-weight","bold"],["mat-icon-button","","color","primary",1,"swap-type-btn",2,"justify-self","center",3,"click"],[2,"width","40px","height","40px","font-size","40px","line-height","40px"],["appearance","outline",1,"swap-input",2,"min-height","91px"],[2,"justify-self","start"],["text","This Price will go back to $1 after each ReOrders trigger."],[2,"justify-self","end"],["text","Slippage against Transaction Volume."],["mat-raised-button","","class","swap-btn","color","primary",3,"disabled","click",4,"ngIf"],[2,"grid-column-start","span 3","width","100%"],["expanded","",2,"background","rgba(255, 255, 255, 0.1)"],[1,"golden-highlight",2,"font-weight","bolder"],[2,"display","grid","grid-template-columns","1fr 1fr","align-items","center","padding","12px 0","row-gap","1rem"],["class","golden-highlight",4,"ngIf"],["href","","target","_blank",1,"golden-highlight-a",2,"grid-column-start","span 2","justify-self","center"],[1,"pool-info-card","mat-elevation-z4"],[1,"pool-info-title"],[2,"justify-self","center"],["matTooltip","Total TiUSD and USDC amount in the TiTi-AMMs swap pool, these tokens are used for swapping liquidity.","matTooltipPosition","above","matTooltipHideDelay","200",3,"matTooltipClass"],[2,"justify-self","end","grid-column-start","2","grid-column-end","4"],["matTooltip","The USDC liquidity in this pool are provided partly by PRV, and partly by MMF.","matTooltipPosition","above","matTooltipHideDelay","200",3,"matTooltipClass"],["text","Protocol Reserve Value, referring to the aggregated value of the Reserve Assets backing circulating TiUSDs."],["text","The USDC liquidity provided by LPs through Market Maker Fund."],[1,"pool-chart",2,"width","100%","height","100%"],[2,"width","100%","height","100%",3,"option"],[1,"mat-elevation-z4",2,"display","grid","grid-template-columns","1fr 1fr 1fr 1fr","row-gap","1rem"],[2,"grid-column-start","span 4","justify-self","center"],[1,"divider",2,"grid-column-start","span 4","justify-self","center"],[2,"grid-column-start","span 4","display","grid","grid-template-columns","1fr 1fr 1fr 1fr","row-gap","0.5rem","column-gap","8px","font-size","max(0.8rem,12px)","max-height","20vh","overflow-y","scroll"],[4,"ngFor","ngForOf"],[4,"ngIf"],["mat-raised-button","","color","primary",1,"swap-btn",3,"disabled","click"],[1,"golden-highlight"],["target","_blank",2,"width","100%","display","flex","flex-direction","row","text-decoration","none",3,"href"],[2,"display","block","overflow","hidden","text-overflow","ellipsis","max-width","8vw"],[2,"width","12px","height","12px","font-size","12px","line-height","12px"],[3,"ngSwitch"],["class","golden-highlight",4,"ngSwitchCase"],[4,"ngSwitchCase"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h1"),t._uU(3,"TiTi-AMMs"),t.qZA(),t.TgZ(4,"p"),t._uU(5,"Swap base tokens with TiUSD, "),t.TgZ(6,"a",2),t._uU(7,"click here to learn more about TiTi-AMMs"),t.qZA(),t._uU(8,"."),t.qZA(),t.qZA(),t.TgZ(9,"div",3),t.TgZ(10,"h2",4),t._uU(11),t.qZA(),t.TgZ(12,"mat-form-field",5),t.TgZ(13,"mat-label"),t._uU(14),t.ALo(15,"numberFormat"),t.qZA(),t.TgZ(16,"input",6),t.NdJ("change",function(S){return i.onInputValueChange(S)}),t.qZA(),t._UZ(17,"mat-icon",7),t.TgZ(18,"div",8),t.TgZ(19,"button",9),t.NdJ("click",function(){return i.maxSwapInputValue()}),t._uU(20,"MAX"),t.qZA(),t.TgZ(21,"span",10),t._uU(22),t.qZA(),t.qZA(),t.qZA(),t._UZ(23,"div"),t.TgZ(24,"button",11),t.NdJ("click",function(){return i.onChangeSwapType()}),t.TgZ(25,"mat-icon",12),t._uU(26,"arrow_circle_down"),t.qZA(),t.qZA(),t._UZ(27,"div"),t.TgZ(28,"mat-form-field",13),t.TgZ(29,"mat-label"),t._uU(30),t.ALo(31,"numberFormat"),t.qZA(),t.TgZ(32,"input",6),t.NdJ("change",function(S){return i.onOutputValueChange(S)}),t.qZA(),t._UZ(33,"mat-icon",7),t.TgZ(34,"div",8),t.TgZ(35,"span",10),t._uU(36),t.qZA(),t.qZA(),t.qZA(),t.TgZ(37,"span",14),t._uU(38,"Current Price"),t._UZ(39,"titi-tooltip",15),t._uU(40,":"),t.qZA(),t._UZ(41,"div"),t.TgZ(42,"span",16),t._uU(43),t.ALo(44,"numberFormat"),t.qZA(),t.TgZ(45,"span",14),t._uU(46,"Price Impact"),t._UZ(47,"titi-tooltip",17),t._uU(48,":"),t.qZA(),t._UZ(49,"div"),t.TgZ(50,"span",16),t._uU(51),t.qZA(),t.YNc(52,l,2,2,"button",18),t.YNc(53,d,2,2,"button",18),t.TgZ(54,"div",19),t.TgZ(55,"mat-accordion"),t.TgZ(56,"mat-expansion-panel",20),t.TgZ(57,"mat-expansion-panel-header"),t.TgZ(58,"mat-panel-title"),t.TgZ(59,"span",21),t._uU(60,"Use-To-Earn: Buy TiUSD to get TiTi rewards"),t.qZA(),t.qZA(),t._UZ(61,"mat-panel-description"),t.qZA(),t.TgZ(62,"div",22),t.TgZ(63,"span",14),t._uU(64,"Your Distributed Buy TiUSD Rewards:"),t.qZA(),t.TgZ(65,"span",16),t._uU(66),t.ALo(67,"number"),t.qZA(),t.TgZ(68,"span",14),t._uU(69,"Today's Your Buy TiUSD Amount:"),t.qZA(),t.TgZ(70,"div",16),t._uU(71),t.ALo(72,"number"),t.YNc(73,O,2,1,"span",23),t.qZA(),t.TgZ(74,"span",14),t._uU(75,"Today's Total Buy TiUSD Amount:"),t.qZA(),t.TgZ(76,"div",16),t._uU(77),t.ALo(78,"number"),t.YNc(79,B,2,1,"span",23),t.qZA(),t.TgZ(80,"span",14),t._uU(81,"Your Proportion:"),t.qZA(),t.TgZ(82,"div",16),t._uU(83),t.ALo(84,"number"),t.YNc(85,E,3,4,"span",23),t.qZA(),t.TgZ(86,"span",14),t._uU(87,"Today's Your pending rewards:"),t.qZA(),t.TgZ(88,"div",16),t._uU(89),t.ALo(90,"number"),t.YNc(91,Z,3,4,"span",23),t.qZA(),t.TgZ(92,"a",24),t._uU(93," Click to learn more about this."),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(94,"div",25),t.TgZ(95,"h2",26),t._uU(96,"Pool Info"),t.qZA(),t._UZ(97,"mat-divider"),t.TgZ(98,"mat-chip-list",27),t.TgZ(99,"mat-chip",28),t._uU(100,"Liquidity "),t.qZA(),t.qZA(),t._UZ(101,"mat-divider"),t.TgZ(102,"span",14),t._uU(103,"TiUSD:"),t.qZA(),t.TgZ(104,"span",29),t._uU(105),t.ALo(106,"numberFormat"),t.qZA(),t.TgZ(107,"span",14),t._uU(108,"USDC:"),t.qZA(),t.TgZ(109,"span",29),t._uU(110),t.ALo(111,"numberFormat"),t.qZA(),t._UZ(112,"mat-divider"),t.TgZ(113,"mat-chip-list",27),t.TgZ(114,"mat-chip",30),t._uU(115,"Composition "),t.qZA(),t.qZA(),t._UZ(116,"mat-divider"),t.TgZ(117,"span",14),t._uU(118,"Protocol Reserve Value (PRV)"),t._UZ(119,"titi-tooltip",31),t._uU(120,":"),t.qZA(),t.TgZ(121,"span",29),t._uU(122),t.ALo(123,"numberFormat"),t.qZA(),t.TgZ(124,"span",14),t._uU(125,"Market Maker Fund (MMF)"),t._UZ(126,"titi-tooltip",32),t._uU(127,":"),t.qZA(),t.TgZ(128,"span",29),t._uU(129),t.ALo(130,"numberFormat"),t.qZA(),t._UZ(131,"mat-divider"),t.TgZ(132,"mat-chip-list",27),t.TgZ(133,"mat-chip"),t._uU(134,"TiUSD Price"),t.qZA(),t.qZA(),t._UZ(135,"mat-divider"),t.TgZ(136,"div",33),t._UZ(137,"titi-chart-wrapper",34),t.qZA(),t.qZA(),t.TgZ(138,"div",35),t.TgZ(139,"h2",36),t._uU(140,"User Action Records"),t.qZA(),t.TgZ(141,"span"),t._uU(142,"Tx Hash"),t.qZA(),t.TgZ(143,"span"),t._uU(144,"Act."),t.qZA(),t.TgZ(145,"span"),t._uU(146,"Amount"),t.qZA(),t.TgZ(147,"span"),t._uU(148,"Time"),t.qZA(),t._UZ(149,"div",37),t.TgZ(150,"div",38),t.YNc(151,L,15,13,"ng-container",39),t.YNc(152,X,3,0,"ng-container",40),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(11),t.hij(" ",i.isBuyingTiUSD?i.currentSwapPair.token1+" \u2192 "+i.currentSwapPair.token0:i.currentSwapPair.token0+" \u2192"+i.currentSwapPair.token1," "),t.xp6(3),t.hij("Input - balance:",t.xi3(15,31,i.isBuyingTiUSD?i.token1Balance:i.token0Balance,4),""),t.xp6(2),t.Q6J("value",i.inputValue),t.xp6(1),t.Q6J("svgIcon",i.isBuyingTiUSD?i.currentSwapPair.token1:i.currentSwapPair.token0),t.xp6(5),t.Oqu(i.isBuyingTiUSD?i.currentSwapPair.token1:i.currentSwapPair.token0),t.xp6(8),t.hij("Output - balance:",t.xi3(31,34,i.isBuyingTiUSD?i.token0Balance:i.token1Balance,4),""),t.xp6(2),t.Q6J("value",i.outputValue),t.xp6(1),t.Q6J("svgIcon",i.isBuyingTiUSD?i.currentSwapPair.token0:i.currentSwapPair.token1),t.xp6(3),t.Oqu(i.isBuyingTiUSD?i.currentSwapPair.token0:i.currentSwapPair.token1),t.xp6(7),t.hij("$",t.xi3(44,37,i.fund1/i.fund0||0,4),""),t.xp6(8),t.Oqu(i.priceImpact),t.xp6(1),t.Q6J("ngIf",i.isApproved),t.xp6(1),t.Q6J("ngIf",!i.isApproved),t.xp6(13),t.hij("",t.xi3(67,40,i.use2earnService.buyTiUSDPersonalReward-i.use2earnService.buyTiUSDPersonalRewardRate,"1.4-4")," TiTi"),t.xp6(5),t.hij(" ",t.xi3(72,43,i.formatTokenValue(i.use2earnService.buyTiUSDPersonalAmount+"","18"),"1.4-4")," TiUSD"),t.xp6(2),t.Q6J("ngIf",i.isBuyingTiUSD&&i.outputValue>0),t.xp6(4),t.hij("",t.xi3(78,46,i.formatTokenValue(i.use2earnService.buyTiUSDTotalAmount+"","18"),"1.4-4")," TiUSD"),t.xp6(2),t.Q6J("ngIf",i.isBuyingTiUSD&&i.outputValue>0),t.xp6(4),t.hij("",t.xi3(84,49,i.use2earnService.buyTiUSDPersonalProportion,"1.2-2"),"%"),t.xp6(2),t.Q6J("ngIf",i.isBuyingTiUSD&&i.outputValue>0),t.xp6(4),t.hij("",t.xi3(90,52,i.use2earnService.buyTiUSDPersonalRewardRate,"1.4-4")," TiTi"),t.xp6(2),t.Q6J("ngIf",i.isBuyingTiUSD&&i.outputValue>0),t.xp6(8),t.Q6J("matTooltipClass","titi-tooltip-text"),t.xp6(6),t.Oqu(t.xi3(106,55,i.fund0,4)),t.xp6(5),t.Oqu(t.xi3(111,58,i.fund1,4)),t.xp6(4),t.Q6J("matTooltipClass","titi-tooltip-text"),t.xp6(8),t.hij("",t.xi3(123,61,i.prv,4)," USDC"),t.xp6(7),t.hij("",t.xi3(130,64,i.MMFfund,4)," USDC"),t.xp6(8),t.Q6J("option",i.option),t.xp6(14),t.Q6J("ngForOf",i.buyTiUSDRecords),t.xp6(1),t.Q6J("ngIf",0==i.buyTiUSDRecords.length))},directives:[f.KE,f.hX,x.Nt,D.Hw,f.qo,f.R9,a.lW,T.Q,w.O5,h.pp,h.ib,h.yz,h.yK,h.u4,y.d,g.qn,g.HS,V.gM,z.o,w.sg,w.RF,w.n9],pipes:[K.p,w.JJ,w.uU],styles:[".swap-wrapper[_ngcontent-%COMP%]{padding:12px 24px;display:grid;grid-template-columns:14fr 10fr;grid-column-gap:2vw;column-gap:2vw;grid-row-gap:2vw;row-gap:2vw}.swap-card[_ngcontent-%COMP%]{align-self:start;justify-self:start;width:100%;display:grid;grid-template-columns:1fr 1fr 1fr;grid-row-gap:1vw;row-gap:1vw;align-items:center}.swap-input[_ngcontent-%COMP%], .swap-btn[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:4}.titi-dark-theme[_nghost-%COMP%]   .swap-type-btn[_ngcontent-%COMP%], .titi-dark-theme   [_nghost-%COMP%]   .swap-type-btn[_ngcontent-%COMP%]{color:#cfff9f}.pool-info-card[_ngcontent-%COMP%]{align-self:start;justify-self:start;width:100%;display:grid;grid-template-columns:1fr 1fr 1fr;grid-row-gap:1vw;row-gap:1vw;align-items:center}.pool-info-title[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:4;justify-self:center}.pool-chart[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:4;justify-self:center;width:100%;height:100%}  .mat-form-field-flex{min-height:68px}@media screen and (max-width: 1024px){.swap-wrapper[_ngcontent-%COMP%]{width:100%;padding:12px;margin:0;display:grid;grid-template-columns:1fr;grid-row-gap:1rem;row-gap:1rem}.swap-card[_ngcontent-%COMP%]{width:100%}}"]}),r})();const b='<svg t="1640244631175" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2048" width="24" height="24"><path d="M513.896296 986.074074c263.888593 0 477.866667-213.978074 477.866667-477.866667s-213.978074-477.866667-477.866667-477.866666-477.866667 213.978074-477.866666 477.866666 213.978074 477.866667 477.866666 477.866667z" fill="#1296db" p-id="2049"></path><path d="M644.892444 584.210963c0-69.783704-42.477037-93.297778-124.54874-104.523852-60.529778-8.798815-72.286815-22.983111-72.286815-51.275852 0-26.851556 20.48-45.89037 60.074667-45.89037 35.802074 0 56.357926 12.515556 64.853333 41.263407 1.896296 6.447407 7.661037 10.998519 14.336 10.998519h31.402667c8.722963 0 15.54963-8.040296 13.729185-16.611556-9.936593-45.511111-40.580741-72.817778-88.670815-81.389037v-47.559111c0-8.267852-6.674963-14.942815-14.942815-14.942815h-29.88563c-8.267852 0-14.942815 6.674963-14.942814 14.942815v46.26963c-59.240296 8.419556-97.46963 47.786667-97.46963 98.379852 0 65.460148 39.518815 90.794667 123.031704 102.02074 56.661333 9.253926 72.741926 21.466074 72.741926 53.703111s-27.382519 53.703111-65.91526 53.703112c-52.110222 0-69.328593-22.831407-75.624296-52.337778-1.517037-6.97837-7.509333-12.136296-14.639407-12.136297h-34.057482c-8.571259 0-15.322074 7.736889-13.805037 16.156445 8.647111 49.682963 40.580741 86.167704 105.737482 95.04237v47.179852c0 8.267852 6.674963 14.942815 14.942814 14.942815h29.88563c8.267852 0 14.942815-6.674963 14.942815-14.942815v-47.179852c61.667556-9.784889 101.110519-52.717037 101.110518-105.813333z" fill="#FFFFFF" p-id="2050"></path><path d="M411.496296 793.713778c-114.384593-41.870222-196.228741-151.855407-196.22874-280.576 0-128.720593 81.844148-238.629926 196.22874-280.576 7.130074-2.578963 12.818963-11.226074 12.818963-18.811259v-27.83763c0-11.301926-8.798815-17.673481-19.569778-14.260148C260.171852 217.92237 155.496296 353.317926 155.496296 513.21363c0 159.895704 104.675556 295.291259 249.249185 341.485037 10.770963 3.413333 19.569778-2.958222 19.569778-14.260148v-27.83763c0-7.661037-5.688889-16.232296-12.818963-18.887111zM623.122963 171.728593c-10.770963-3.413333-19.569778 2.958222-19.569778 14.260148v27.837629c0 7.585185 5.688889 16.232296 12.818963 18.81126 114.384593 41.870222 196.228741 151.855407 196.228741 280.576 0 128.720593-81.844148 238.629926-196.228741 280.576-7.812741 2.88237-12.818963 10.543407-12.818963 18.811259v27.83763c0 11.301926 8.798815 17.673481 19.569778 14.260148 144.57363-46.193778 249.249185-181.589333 249.249185-341.485037S767.620741 217.92237 623.122963 171.728593z" fill="#FFFFFF" p-id="2051"></path></svg>',tt=[{path:"",component:s}];let it=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[M.Bz.forChild(tt)],M.Bz]}),r})();var et=n(45922),at=n(87841);let nt=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[w.ez,$.u5,it,x.c,a.ot,D.Ps,y.t,g.Hi,et.F,h.To,at.m]]}),r})()},32681:(G,C,n)=>{n.d(C,{Q:()=>H});var w=n(15861),$=n(57959),M=n(94528),I=n(57424),q=n(32856),U=n(98538),m=n.n(U),u=n(52909),v=n(48634),R=n(61135),j=n(5963),N=n(54004),D=n(5e3),J=n(57610),Y=n(53405),Q=n(11730),W=n(65707);let H=(()=>{class f{constructor(a,T,h,y){this.accountService=a,this.graphService=T,this.web3Service=h,this.chainInfoService=y,this.buyTiUSDReward=0,this.buyTiUSDPersonalReward=0,this.buyTiUSDRewardRate=0,this.buyTiUSDPersonalRewardRate=0,this.buyTiUSDTotalAmount=0,this.buyTiUSDPersonalAmount=0,this.buyTiUSDPersonalProportion=0,this.buyTiUSDAvgApy=0,this.buyTiUSDDailyApy=0,this.buyTiUSDEpochPersonalAmount=u.O$.from("0"),this.buyTiUSDEpochTotalAmount=u.O$.from("0"),this.holdTiUSDReward=0,this.holdTiUSDPersonalReward=0,this.holdTiUSDRewardRate=0,this.holdTiUSDPersonalRewardRate=0,this.holdTotalTiUSDAmount="0",this.holdTiUSDBalance="0",this.holdTiUSDApy=0,this.buyTiTiReward=0,this.buyTiTiPersonalReward=0,this.buyTiTiRewardRate=0,this.buyTiTiPersonalRewardRate=0,this.buyTiTiPersonalAmount=0,this.buyTiTiTotalAmount=0,this.buyTiTiEpochPersonalAmount=u.O$.from("0"),this.buyTiTiEpochTotalAmount=u.O$.from("0"),this.buyTiTiPersonalProportion=0,this.buyTiTiAvgApy=0,this.buyTiTiDailyApy=0,this.totalClaimableRewards=0,this.distributedTiTiRewards=0,this.top20Users$=new R.X([]),this.dailyUserMint$=new R.X([]),this.dailyUserSwap$=new R.X([]),this.APIURL="https://api.thegraph.com/subgraphs/name/titimainnet/titi-use-to-earn",this.client=new $.f({uri:this.APIURL,cache:new M.h}),this.chainInfoService.currentChainId$.subscribe(g=>{this.setNewApi(this.chainInfoService.getChainConfig(g).use2earnApi)}),(0,j.H)(2e3,1e4).pipe((0,N.U)(()=>this.fetchUserData())).subscribe()}getNewBuyTiUSDPersonalProportion(a){return 100*(this.buyTiUSDPersonalAmount+a*10**18)/(this.buyTiUSDTotalAmount+a*10**18)}getNewbuyTiUSDPersonalRewardRate(a){return this.getNewBuyTiUSDPersonalProportion(a)*this.buyTiUSDRewardRate/100}getExpectedDailyRewards(a){return u.O$.from(this.holdTotalTiUSDAmount).isZero()?0:this.holdTiUSDRewardRate*(u.O$.from(a).mul(u.O$.from("10000")).div(u.O$.from(this.holdTotalTiUSDAmount)).toNumber()/1e4)}setNewApi(a){this.client.setLink(new I.u({uri:a}))}fetchUserData(){var a=this;return Promise.all([this.web3Service.invokeContract("TiTiUse2EarnBackendV1","getCurrentEpochInfo",["0"]),this.web3Service.invokeContract("TiTiUse2EarnBackendV1","getCurrentEpochInfo",["1"]),this.web3Service.invokeContract("TiTiUse2EarnBackendV1","getCurrentEpochInfo",["2"])]).then(([T,h,y])=>(this.currentEpochInfo={epochNum:T[0],duration:T[2],starttime:T[3],holdTiUSDReward:T[1],buyTiTiReward:y[1],buyTiUSDReward:h[1],totalRewards:u.O$.from(T[1]).add(u.O$.from(y[1])).add(u.O$.from(h[1])).toString()},this.currentEpochInfo)).then(function(){var T=(0,w.Z)(function*({epochNum:h,duration:y,starttime:g,holdTiUSDReward:V,buyTiTiReward:z,buyTiUSDReward:K}){const l=1e3*g,d=y/86400,O=parseFloat((0,v.formatUnits)(K,"18")),B=parseFloat((0,v.formatUnits)(V,"18")),E=parseFloat((0,v.formatUnits)(z,"18"));a.buyTiUSDReward=O,a.buyTiUSDRewardRate=O/d,a.holdTiUSDReward=B,a.holdTiUSDRewardRate=B/d,a.buyTiTiReward=E,a.buyTiTiRewardRate=E/d;const Z=yield a.fetchTiTiPrice();return a.fetchUserDailyData(h,l,l+1e3*y).then(({data:o})=>{a.buyTiUSDPersonalReward=0,a.holdTiUSDPersonalReward=0,a.buyTiTiPersonalReward=0,a.buyTiUSDPersonalRewardRate=0,a.holdTiUSDPersonalRewardRate=0,a.buyTiTiPersonalRewardRate=0,a.buyTiUSDEpochPersonalAmount=u.O$.from("0"),a.buyTiUSDEpochTotalAmount=u.O$.from("0"),a.buyTiTiEpochPersonalAmount=u.O$.from("0"),a.buyTiTiEpochTotalAmount=u.O$.from("0");const F=Math.floor(((new Date).getTime()-288e5)/864e5),L=Math.floor((l-288e5)/864e5);function k(){let s;const b=(new Date).getTime();return s=b<l?l:b<l+24*d*3600*1e3?b:l+24*d*3600*1e3,s/1e3}o.dailySwaps.forEach(s=>{1e3*(s.dayStartTimestamp+28800)>=l&&1e3*(s.dayStartTimestamp+28800)<l+24*d*3600*1e3&&(a.buyTiTiEpochTotalAmount=a.buyTiTiEpochTotalAmount.add(u.O$.from(s.dailyTotalVolume)))}),o.dailyMints.forEach(s=>{1e3*(s.dayStartTimestamp+28800)>=l&&1e3*(s.dayStartTimestamp+28800)<l+24*d*3600*1e3&&(a.buyTiUSDEpochTotalAmount=a.buyTiUSDEpochTotalAmount.add(u.O$.from(s.dailyTotalVolume)))}),a.buyTiUSDTotalAmount=(new Date).getTime()<l+24*d*3600*1e3&&o.dailyMint&&o.dailyMint.dailyTotalVolume?o.dailyMint.dailyTotalVolume:0,a.buyTiTiTotalAmount=(new Date).getTime()<l+24*d*3600*1e3&&o.dailySwap&&o.dailySwap.dailyTotalVolume?o.dailySwap.dailyTotalVolume:0,a.buyTiUSDDailyApy=a.buyTiUSDTotalAmount>0?a.buyTiUSDRewardRate*Z*365/(a.buyTiUSDTotalAmount/10**18):0,a.buyTiUSDAvgApy=a.buyTiUSDEpochTotalAmount.isZero()?0:a.buyTiUSDRewardRate*Z*365/(a.buyTiUSDEpochTotalAmount.div(u.O$.from(10**14)).toNumber()/1e3/(F-L)),a.buyTiTiDailyApy=a.buyTiTiTotalAmount>0?a.buyTiTiRewardRate*Z*365/(a.buyTiTiTotalAmount/10**18):0,a.buyTiTiAvgApy=a.buyTiTiEpochTotalAmount.isZero()?0:a.buyTiTiRewardRate*Z*365/(a.buyTiTiEpochTotalAmount.div(u.O$.from(10**14)).toNumber()/1e3/(F-L)),a.holdTotalTiUSDAmount=o.holder.totalSupply,a.holdTiUSDApy=a.holdTiUSDRewardRate*Z*365/(o.holder.totalSupply/10**18),o.user&&o.epochUser&&(a.dailyUserMint$.next(o.user.dailyUserMint),a.dailyUserSwap$.next(o.user.dailyUserSwap),o.user.dailyUserMint.forEach(s=>{1e3*(s.dailyMint.dayStartTimestamp+28800)>=l&&1e3*(s.dailyMint.dayStartTimestamp+28800)<l+24*d*3600*1e3&&(a.buyTiUSDPersonalReward+=a.buyTiUSDRewardRate*s.dailyVolume/s.dailyMint.dailyTotalVolume,a.buyTiUSDEpochPersonalAmount=a.buyTiUSDEpochPersonalAmount.add(u.O$.from(s.dailyVolume)))}),a.holdTiUSDBalance=o.user.balance,a.holdTiUSDPersonalReward=parseFloat((0,v.formatUnits)(new(m())(o.epochUser.rewards).add(new(m())(o.user.balance).mul(function(s){if(0===Number.parseInt(s.totalSupply))return new(m())(s.rewardPerTokenStored);const b=new(m())(k()-1*s.lastUpdateTime).mul(new(m())(V)).mul(new(m())("1000000000000000000")).div(new(m())(s.totalSupply).mul(new(m())(86400)).mul(new(m())(d)));return new(m())(s.rewardPerTokenStored).add(b)}(o.holder).sub(new(m())(o.epochUser.userRewardPerTokenPaid))).div(new(m())("10").pow(new(m())("18")))).toString(),"18")),o.user.dailyUserSwap.forEach(s=>{1e3*(s.dailySwap.dayStartTimestamp+28800)>=l&&1e3*(s.dailySwap.dayStartTimestamp+28800)<l+24*d*3600*1e3&&(a.buyTiTiPersonalReward+=a.buyTiTiRewardRate*s.dailyVolume/s.dailySwap.dailyTotalVolume,a.buyTiTiEpochPersonalAmount=a.buyTiTiEpochPersonalAmount.add(u.O$.from(s.dailyVolume)))}),a.buyTiUSDPersonalRewardRate=(new Date).getTime()<l+24*d*3600*1e3&&o.dailyUserMint&&o.dailyUserMint.dailyMint.dailyTotalVolume?a.buyTiUSDRewardRate*o.dailyUserMint.dailyVolume/o.dailyUserMint.dailyMint.dailyTotalVolume:0,a.buyTiUSDPersonalAmount=(new Date).getTime()<l+24*d*3600*1e3&&o.dailyUserMint&&o.dailyUserMint.dailyMint.dailyTotalVolume?o.dailyUserMint.dailyVolume:0,a.buyTiUSDPersonalProportion=(new Date).getTime()<l+24*d*3600*1e3&&o.dailyUserMint&&o.dailyUserMint.dailyMint.dailyTotalVolume?o.dailyUserMint.dailyVolume/o.dailyUserMint.dailyMint.dailyTotalVolume*100:0,a.buyTiTiPersonalRewardRate=(new Date).getTime()<l+24*d*3600*1e3&&o.dailyUserSwap&&o.dailyUserSwap.dailySwap.dailyTotalVolume?a.buyTiTiRewardRate*(o.dailyUserSwap.dailyVolume/10**18)/(o.dailyUserSwap.dailySwap.dailyTotalVolume/10**18):0,a.buyTiTiPersonalAmount=(new Date).getTime()<l+24*d*3600*1e3&&o.dailyUserSwap&&o.dailyUserSwap.dailySwap.dailyTotalVolume?o.dailyUserSwap.dailyVolume:0,a.buyTiTiPersonalProportion=(new Date).getTime()<l+24*d*3600*1e3&&o.dailyUserSwap&&o.dailyUserSwap.dailySwap.dailyTotalVolume?o.dailyUserSwap.dailyVolume/o.dailyUserSwap.dailySwap.dailyTotalVolume*100:0,a.holdTiUSDPersonalRewardRate=(new Date).getTime()<l+24*d*3600*1e3?a.holdTiUSDRewardRate*o.user.balance/o.holder.totalSupply:0),a.distributedTiTiRewards=(1e3*k()-l)/864e5*(a.buyTiUSDRewardRate+a.holdTiUSDRewardRate+a.buyTiTiRewardRate),a.top20Users$.next(o.users)})});return function(h){return T.apply(this,arguments)}}())}fetchTiTiPrice(){return Promise.all([this.web3Service.invokeContract("UniswapV2Pair","getReserves",[]),this.graphService.fetchTodayMMFRewardData(this.chainInfoService.getChainConfig().contractAddressMap.MAMMSwapPair)]).then(a=>a[0][1]/a[0][0]*(a[1].data.pair.fund1*10**12/a[1].data.pair.fund0))}fetchUserDailyData(a,T,h){return this.accountService.getCurrentAccountAsyn().then(g=>this.client.query({query:(0,q.Ps)("\n    query($userId: ID,$epochUserId: ID,$epochId:ID,$dayId:ID,$startDayId:ID,$endDayId:ID,$startId:ID,$endId:ID,$todayId:ID) {\n      epochUser(id:$epochUserId){\n        userRewardPerTokenPaid\n        rewards\n      }\n      users(first:20,orderBy:balance,orderDirection:desc){\n        address\n        balance\n      }\n      user(id:$userId){\n        id\n        address\n        balance\n        dailyUserTransfer(first:1000,where:{id_gte:$startDayId,id_lte:$endDayId}){\n          dailyTransfer{\n            dayStartTimestamp\n            dailyTotalVolume\n          }\n          dailyVolume\n        }\n        dailyUserMint(first:1000,where:{id_gte:$startDayId,id_lte:$endDayId}){\n          dailyMint{\n            dayStartTimestamp\n            dailyTotalVolume\n          }\n          dailyVolume\n        }\n        dailyUserSwap(first:1000,where:{id_gte:$startDayId,id_lte:$endDayId}){\n          dailySwap{\n            dayStartTimestamp\n            dailyTotalVolume\n          }\n          dailyVolume\n        }\n      }\n      holder(id:$epochId){\n        lastUpdateTime\n        rewardPerTokenStored\n        totalSupply\n      }\n      dailyUserTransfer(id:$dayId){\n        dailyVolume\n        dailyTransfer{\n          dailyTotalVolume\n        }\n      }\n      dailyUserMint(id:$dayId){\n        dailyVolume\n        dailyMint{\n          dailyTotalVolume\n        }\n      }\n      dailyUserSwap(id:$dayId){\n        dailyVolume\n        dailySwap{\n          dailyTotalVolume\n        }\n      }\n      dailySwaps(first:1000,where:{id_gte:$startId,id_lte:$endId}){\n        id\n        dailyTotalVolume\n        dayStartTimestamp\n      }\n      dailyMints(first:1000,where:{id_gte:$startId,id_lte:$endId}){\n        id\n        dailyTotalVolume\n        dayStartTimestamp\n      }\n      dailySwap(id:$todayId){\n        id\n        dailyTotalVolume\n        dayStartTimestamp\n      }\n      dailyMint(id:$todayId){\n        id\n        dailyTotalVolume\n        dayStartTimestamp\n      }\n   }\n  "),variables:{userId:g.toLowerCase(),epochUserId:a+"-0-"+g.toLowerCase(),epochId:a,dayId:g.toLowerCase()+"-"+Math.floor(((new Date).getTime()-288e5)/864e5),startDayId:g.toLowerCase()+"-"+Math.floor((T-288e5)/864e5),endDayId:g.toLowerCase()+"-"+Math.floor((h-288e5)/864e5),startId:Math.floor((T-288e5)/864e5),endId:Math.floor((h-288e5)/864e5),todayId:Math.floor(((new Date).getTime()-288e5)/864e5)},fetchPolicy:"network-only"}))}}return f.\u0275fac=function(a){return new(a||f)(D.LFG(J.B),D.LFG(Y.h),D.LFG(Q.Uc),D.LFG(W.Z))},f.\u0275prov=D.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()}}]);