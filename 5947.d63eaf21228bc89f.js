"use strict";(self.webpackChunkapp_titi_frontend=self.webpackChunkapp_titi_frontend||[]).push([[5947],{55947:(gi,k,s)=>{s.r(k),s.d(k,{LpminingModule:()=>pi});var m=s(69808),f=s(71787),I=s(15861),x=s(11730),A=s(24102),V=s(98538),u=s.n(V),g=s(28321),y=s(17489),P=s(48634),q=s(54482),S=s(25403),M=(s(25032),s(63900)),D=s(54004),h=s(52909),i=s(5e3),O=s(65707),Y=s(57610),w=s(63874),j=s(22313),J=s(53405),E=s(74696),N=s(31657),B=s(48966),U=s(47423),H=s(92134),T=s(67322),b=s(77531),C=s(4834),Z=s(26688),Q=s(11523),$=s(75303);function W(a,p){if(1&a){const t=i.EpF();i.ynx(0),i.TgZ(1,"mat-form-field",21),i.TgZ(2,"mat-label"),i._uU(3),i.ALo(4,"numberFormat"),i.qZA(),i.TgZ(5,"input",41),i.NdJ("input",function(e){return i.CHM(t),i.oxw().onStakingInputValueChange(e)}),i.qZA(),i.TgZ(6,"div",42),i._UZ(7,"mat-icon",43),i._UZ(8,"mat-icon",44),i.qZA(),i.TgZ(9,"button",24),i.NdJ("click",function(){return i.CHM(t),i.oxw().maxStakeInputValue()}),i._uU(10,"MAX"),i.qZA(),i.qZA(),i.TgZ(11,"button",25),i.NdJ("click",function(){return i.CHM(t),i.oxw().onStake()}),i._uU(12),i.qZA(),i.TgZ(13,"mat-form-field",21),i.TgZ(14,"mat-label"),i._uU(15),i.ALo(16,"numberFormat"),i.qZA(),i.TgZ(17,"input",41),i.NdJ("input",function(e){return i.CHM(t),i.oxw().onWithdrawInputValueChange(e)}),i.qZA(),i.TgZ(18,"div",42),i._UZ(19,"mat-icon",43),i._UZ(20,"mat-icon",44),i.qZA(),i.TgZ(21,"button",24),i.NdJ("click",function(){return i.CHM(t),i.oxw().maxWithdrawInputValue()}),i._uU(22,"MAX"),i.qZA(),i.qZA(),i.TgZ(23,"button",25),i.NdJ("click",function(){return i.CHM(t),i.oxw().onWithdraw()}),i._uU(24),i.qZA(),i.BQk()}if(2&a){const t=i.oxw();i.xp6(3),i.AsE("Balance:",i.xi3(4,10,t.LPTokenBalance,4)," ",t.lpminingPoolInfo.symbol,""),i.xp6(2),i.Q6J("value",t.stakingInputValue),i.xp6(6),i.Q6J("disabled",!t.stakingInputValue||t.isZero(t.stakingInputValue)||t.isLoading||t.stakingInputValue>t.LPTokenBalance),i.xp6(1),i.Oqu(t.isLoading?"waiting...":"STAKE"),i.xp6(3),i.AsE("Staked:",i.xi3(16,13,t.stakedLPTokenBalance,4)," ",t.lpminingPoolInfo.symbol,""),i.xp6(2),i.Q6J("value",t.withdrawInputValue),i.xp6(6),i.Q6J("disabled",!t.withdrawInputValue||t.isZero(t.withdrawInputValue)||t.isLoading||t.withdrawInputValue>t.stakedLPTokenBalance),i.xp6(1),i.Oqu(t.isLoading?"waiting...":"WITHDRAW")}}function z(a,p){if(1&a){const t=i.EpF();i.ynx(0),i.TgZ(1,"div",18),i.TgZ(2,"p"),i._uU(3,"Please approve to gain access to subsequent actions."),i.qZA(),i.qZA(),i.TgZ(4,"button",25),i.NdJ("click",function(){return i.CHM(t),i.oxw().onApprove()}),i._uU(5),i.qZA(),i.BQk()}if(2&a){const t=i.oxw();i.xp6(4),i.Q6J("disabled",t.isLoading),i.xp6(1),i.Oqu(t.isLoading?"waiting...":"Approve")}}function G(a,p){1&a&&(i.TgZ(0,"span",51),i._uU(1,"Stake (Rewarded)"),i.qZA())}function X(a,p){1&a&&(i.TgZ(0,"span"),i._uU(1,"Withdraw"),i.qZA())}function K(a,p){1&a&&(i.TgZ(0,"span"),i._uU(1,"Claim Rewards"),i.qZA())}function ii(a,p){if(1&a&&(i.TgZ(0,"span"),i._uU(1),i.ALo(2,"number"),i.qZA()),2&a){const t=i.oxw().$implicit,n=i.oxw();i.xp6(1),i.hij("",i.xi3(2,1,n.formatTokenValue(t.amount,"18"),"1.2-4")," LP Token")}}function ti(a,p){if(1&a&&(i.TgZ(0,"span"),i._uU(1),i.ALo(2,"number"),i.qZA()),2&a){const t=i.oxw().$implicit,n=i.oxw();i.xp6(1),i.hij("",i.xi3(2,1,n.formatTokenValue(t.amount,"18"),"1.2-4")," LP Token")}}function ni(a,p){if(1&a&&(i.TgZ(0,"span"),i._uU(1),i.ALo(2,"number"),i.qZA()),2&a){const t=i.oxw().$implicit,n=i.oxw();i.xp6(1),i.hij("",i.xi3(2,1,n.formatTokenValue(t.amount,"18"),"1.2-4")," TiTi")}}function ei(a,p){if(1&a&&(i.ynx(0),i.TgZ(1,"a",45),i.TgZ(2,"span",46),i._uU(3),i.qZA(),i.TgZ(4,"mat-icon",47),i._uU(5,"open_in_new"),i.qZA(),i.qZA(),i.ynx(6,48),i.YNc(7,G,2,0,"span",49),i.YNc(8,X,2,0,"span",50),i.YNc(9,K,2,0,"span",50),i.BQk(),i.ynx(10,48),i.YNc(11,ii,3,4,"span",50),i.YNc(12,ti,3,4,"span",50),i.YNc(13,ni,3,4,"span",50),i.BQk(),i.TgZ(14,"span"),i._uU(15),i.ALo(16,"date"),i.qZA(),i.BQk()),2&a){const t=p.$implicit,n=i.oxw();i.xp6(1),i.Q6J("href",n.chainInfoService.getChainConfig().blockExplorerUrls[0]+"/tx/"+t.txHash,i.LSH),i.xp6(2),i.Oqu(t.txHash),i.xp6(3),i.Q6J("ngSwitch",t.type),i.xp6(1),i.Q6J("ngSwitchCase","0"),i.xp6(1),i.Q6J("ngSwitchCase","1"),i.xp6(1),i.Q6J("ngSwitchCase","2"),i.xp6(1),i.Q6J("ngSwitch",t.type),i.xp6(1),i.Q6J("ngSwitchCase","0"),i.xp6(1),i.Q6J("ngSwitchCase","1"),i.xp6(1),i.Q6J("ngSwitchCase","2"),i.xp6(2),i.Oqu(i.xi3(16,11,1e3*t.timestamp,"dd/M/y HH:mm:ss"))}}function ai(a,p){1&a&&(i.ynx(0),i.TgZ(1,"span"),i._uU(2,"No data."),i.qZA(),i.BQk())}const _=[{token0:"TiUSD",token1:"UniswapV2Pair"}],oi=[{path:"",component:(()=>{class a{constructor(t,n,e,o,r,c,l,d,v,ci,di,hi){this.chainInfoService=t,this.location=n,this.route=e,this.router=o,this.accountService=r,this.web3Service=c,this.graphService=v,this.echartService=ci,this.refreshService=di,this.dialog=hi,this.isLoading=!0,this.isApproved=!1,this.pairList=_,this.currentPair=_[0],this.totalStakedLPToken=0,this.LPTokenBalance=0,this.stakedLPTokenBalance=0,this.claimableValue=0,this.decimal0=18,this.decimal1=18,this.stakingInputValue="0.0000",this.withdrawInputValue="0.0000",this.claimInputValue="0.0000",this.rewardRate=0,this.epochNum=0,this.startTime=0,this.periodFinish=0,this.distributedTiTiRewards=0,this.liquidity=0,this.dailyStakedValue=[],this.dailyLiquidity=[],this.titiDailyPrice=[],this.historicalAPY=[0],this.tvl=[],this.LPTokenPrice=0,this.fund0="0",this.fund1="0",this.fund0Price=0,this.fund1Price=0,this.option1={},this.option2={},this.historicalRewardRates=[],this.currentRewardRate=0,this.currentAPY=0,this.isTiUSDToken0=!1,this.tradingFeeDailyApy=0,this.tradingFeeAvgApy=0,this.last24HTradingFee=0,this.totalTradingFee=0,this.principal="0",this.tradingFeeReward=0,this.lpminingRecords=[],l.addSvgIconLiteral("USDC",d.bypassSecurityTrustHtml(A.WZ)),l.addSvgIconLiteral("TiUSD",d.bypassSecurityTrustHtml(A.Mg)),l.addSvgIconLiteral("TiTi",d.bypassSecurityTrustHtml(A.FZ)),this.unsubChainInfo=this.chainInfoService.currentChainId$.pipe((0,q.e)((t,n)=>{const e=new Set;t.subscribe(new S.Q(n,o=>{const r=o;e.has(r)||(e.add(r),n.next(o))}))}),(0,M.w)(L=>this.route.paramMap.pipe((0,D.U)(ui=>this.chainInfoService.getChainConfig(L).lpminingPools[ui.get("address")])))).subscribe(L=>{L||this.goBack()})}goBack(){this.location.back()}formatTokenValue(t,n){return(0,P.formatUnits)(t,n)}onStakingInputValueChange(t){this.stakingInputValue=(0,g.Y4)(t.target.value),t.target.value=this.stakingInputValue}onWithdrawInputValueChange(t){this.withdrawInputValue=(0,g.Y4)(t.target.value),t.target.value=this.withdrawInputValue}onClaimInputValueChange(t){this.claimInputValue=(0,g.Y4)(t.target.value),t.target.value=this.claimInputValue}isZero(t){return 0===Number.parseFloat(t)}goToProvide(){window.open(this.lpminingPoolInfo.addLiquidityUrl)}ngOnInit(){this.unsubParamMap=this.route.paramMap.subscribe(t=>{if(t.get("address")){this.lpminingPoolAddress=t.get("address"),this.lpminingPoolInfo=this.chainInfoService.getChainConfig().lpminingPools[this.lpminingPoolAddress],this.isTiUSDToken0=this.chainInfoService.getChainConfig().lpminingPools[this.lpminingPoolAddress].isTiUSDToken0,this.initData(),this.fetchApproveInfo();const n=this.refreshService.registerFunction(()=>this.initData()),e=this.refreshService.registerFunctionWithoutInterval(()=>this.fetchApproveInfo());this.unregister=()=>{n(),e()}}else this.goBack()})}ngOnDestroy(){var t,n;null===(t=this.unregister)||void 0===t||t.call(this),null===(n=this.unsubParamMap)||void 0===n||n.unsubscribe(),this.unsubChainInfo.unsubscribe()}initData(){this.fetchTotalStakedLPToken(),this.fetchBalanceOfStakedLPToken(),this.fetchBalanceOfLPToken(),this.fetchClaimable(),Promise.all([this.fetchEpochInfo(),this.fetchTiTiDailyPrice(),this.fetchPairDailyData(),this.fetchDailyStakedValue(),this.fetchOptions()]).then(()=>this.fetchLPTokenPrice()).then(()=>{this.calcHistoricalAPY(),this.fetchLpminingRecords(),this.fetchTradingFeeApy(),this.fetchLpminingPrincipal(),this.buildOption()})}fetchLpminingPrincipal(){this.accountService.getCurrentAccountAsyn().then(t=>{Promise.all([this.graphService.fetchLpminingPrincipal(t,this.lpminingPoolInfo.contractAddress),this.web3Service.invokeContract("LPStakingPool","balanceOf",[t],this.lpminingPoolInfo.contractAddress),this.web3Service.invokeContract("UniswapV2Pair","totalSupply",[],this.lpminingPoolInfo.pairAddress)]).then(([{data:n},e,o])=>{this.principal=n.lpminingUser?n.lpminingUser.principal:"0";const r=(0,g._b)(h.O$.from(this.fund0).mul(h.O$.from(e[0])).div(h.O$.from(o[0])).mul(h.O$.from(this.fund1).mul(h.O$.from(e[0])).div(h.O$.from(o[0])))).div(h.O$.from(10).pow(5)).div(h.O$.from(10).pow(this.lpminingPoolInfo.anotherTokenDecimals/2)).toNumber()/1e4-(0,g._b)(h.O$.from(this.principal).mul(h.O$.from(10).pow(18))).div(h.O$.from(10).pow(14)).toNumber()/1e4;this.tradingFeeReward=r*this.LPTokenPrice})})}fetchLpminingRecords(){this.graphService.fetchLpminingRecords(this.lpminingPoolInfo.contractAddress).then(({data:t})=>{this.lpminingRecords=t.lpminingRecord?t.lpminingRecord.records.map(n=>({txHash:n.id,type:n.type,amount:n.amount,timestamp:n.timestamp})):[]})}fetchApproveInfo(){this.isLoading=!0,this.accountService.getCurrentAccountAsyn().then(t=>Promise.all([this.web3Service.invokeContract("UniswapV2Pair","allowance",[t,this.lpminingPoolInfo.contractAddress],this.lpminingPoolInfo.pairAddress),this.web3Service.invokeContract("UniswapV2Pair","totalSupply",[],this.lpminingPoolInfo.pairAddress)]).then(([n,e])=>{"0"!==n[0]&&new(u())(n[0]).gt(e[0])?(this.isApproved=!0,this.isLoading=!1):(this.isApproved=!1,this.isLoading=!1)}))}onApprove(){this.isLoading=!0,this.web3Service.invokeContract("UniswapV2Pair","approve",[this.lpminingPoolInfo.contractAddress,x.fV],this.lpminingPoolInfo.pairAddress).then(t=>{t.status?(this.isApproved=!0,this.isLoading=!1):(this.isApproved=!1,this.isLoading=!1)},t=>{this.isApproved=!1,this.isLoading=!1})}getCurrentEpochTiTiRewards(){return(new Date).getTime()>1e3*this.periodFinish?0:this.rewardRate*(1*this.periodFinish-1*this.startTime)/10**18}buildOption(){this.option1.series[0].data=this.dailyLiquidity,this.option2.series[0].data=this.historicalAPY,this.option1=(0,y.cloneDeep)(this.option1),this.option2=(0,y.cloneDeep)(this.option2)}fetchOptions(){return Promise.all([this.echartService.fetchOption("LPMining-Liquidity"),this.echartService.fetchOption("LPMining-APY")]).then(t=>{this.option1=t[0],this.option2=t[1]})}fetchLPTokenPrice(){return Promise.all([this.web3Service.invokeContract("MAMMSwapPair","getDepth",[]),this.web3Service.invokeContract("UniswapV2Pair","getReserves",[],this.lpminingPoolInfo.pairAddress)]).then(([t,n])=>{const r=t[1]/10**6/(t[0]/10**18);this.LPTokenPrice=this.liquidity>0?2*(this.isTiUSDToken0?n[0]:n[1])*r/(this.liquidity*10**18):0,this.fund0=n[0],this.fund1=n[1],this.fund0Price=this.isTiUSDToken0?r:n[1]/10**18*r/(n[0]/10**this.lpminingPoolInfo.anotherTokenDecimals),this.fund1Price=this.isTiUSDToken0?n[0]/10**this.lpminingPoolInfo.anotherTokenDecimals*r/(n[1]/10**18):r})}calcHistoricalAPY(){const t=Array(30).fill(0),n=(0,g.Gq)().reverse();for(let o=0;o<30;o++){const r=this.historicalRewardRates.find(d=>n[o]>=1e3*d.startTimestamp&&n[o]<1e3*d.periodFinish),c=r?r.rewardRate:0,l=this.dailyLiquidity[o]>0?2*(this.isTiUSDToken0?this.tvl[o].fund0:this.tvl[o].fund1)*this.dailyStakedValue[o]/(this.dailyLiquidity[o]*10**18):0;t[o]=l>0?this.titiDailyPrice[o]*c*3600*24*365/l:0}this.historicalAPY=t.map(o=>100*o);const e=this.dailyLiquidity[29]>0?2*(this.isTiUSDToken0?this.tvl[29].fund0:this.tvl[29].fund1)*this.dailyStakedValue[29]/(this.dailyLiquidity[29]*10**18):0;this.currentAPY=e>0?this.titiDailyPrice[29]*this.rewardRate*3600*24*365*100/e:0}fetchTotalStakedLPToken(){this.web3Service.invokeContract("LPStakingPool","totalSupply",[],this.lpminingPoolInfo.contractAddress).then(t=>{this.totalStakedLPToken=parseFloat(new(u())(t[0]).div(new(u())("10").pow(new(u())(this.decimal1-4))).toString())/1e4})}fetchBalanceOfLPToken(){this.accountService.getCurrentAccountAsyn().then(t=>this.web3Service.invokeContract("UniswapV2Pair","balanceOf",[t],this.lpminingPoolInfo.pairAddress).then(n=>{this.LPTokenBalance=parseFloat(new(u())(n[0]).div(new(u())("10").pow(new(u())(this.decimal1-4))).toString())/1e4}))}fetchBalanceOfStakedLPToken(){this.accountService.getCurrentAccountAsyn().then(t=>this.web3Service.invokeContract("LPStakingPool","balanceOf",[t],this.lpminingPoolInfo.contractAddress).then(n=>{this.stakedLPTokenBalance=parseFloat(new(u())(n[0]).div(new(u())("10").pow(new(u())(this.decimal1-4))).toString())/1e4}))}fetchClaimable(){this.accountService.getCurrentAccountAsyn().then(t=>this.web3Service.invokeContract("LPStakingPool","earned",[t],this.lpminingPoolInfo.contractAddress).then(n=>{this.claimableValue=n[0]/10**18;const e=Math.pow(10,4);this.claimInputValue=(Math.floor(this.claimableValue*e)/e).toFixed(4)}))}fetchEpochInfo(){var t=this;return Promise.all([this.web3Service.invokeContract("LPStakingPool","rewardRate",[],this.lpminingPoolInfo.contractAddress),this.graphService.fetchStakingEpochOverview(this.lpminingPoolInfo.contractAddress),this.web3Service.invokeContract("LPStakingPool","startTime",[],this.lpminingPoolInfo.contractAddress),this.web3Service.invokeContract("LPStakingPool","periodFinish",[],this.lpminingPoolInfo.contractAddress)]).then(function(){var n=(0,I.Z)(function*(e){var o;const r=(new Date).getTime()/1e3;t.currentRewardRate=e[0][0],t.rewardRate=r>t.periodFinish||r<t.startTime?0:e[0][0],t.epochNum=(null===(o=e[1].data.lpstakingEpochOverview)||void 0===o?void 0:o.currentEpochNum)||1,t.startTime=e[2][0],t.periodFinish=e[3][0],t.distributedTiTiRewards=0,t.distributedTiTiRewards+=e[0][0]*((r>t.periodFinish?t.periodFinish:r>t.startTime?r:t.startTime)-t.startTime)/10**18,yield t.fetchHistoricalLPStakingEpoch()});return function(e){return n.apply(this,arguments)}}())}fetchHistoricalLPStakingEpoch(){return this.graphService.fetchHistoricalLPStakingEpoch(this.epochNum).then(({data:t})=>{this.historicalRewardRates=[],t.lpstakingEpoches.forEach(n=>{this.distributedTiTiRewards+=1*n.totalReward,this.historicalRewardRates.push({epochNum:n.epochNum,startTimestamp:n.startTimestamp,periodFinish:n.periodFinish,rewardRate:n.totalReward*10**18/(n.periodFinish-n.startTimestamp)})}),this.historicalRewardRates.push({epochNum:this.epochNum,startTimestamp:this.startTime,periodFinish:this.periodFinish,rewardRate:this.currentRewardRate})})}fetchDailyStakedValue(){return this.graphService.fetchDailyLPTokenStakedValue(this.lpminingPoolInfo.contractAddress).then(({data:t})=>{const n=Array(30).fill(null),e=(0,g.Gq)().reverse();t.dailyLPStakings.forEach(r=>{const c=e.indexOf(1e3*r.dayTimestamp);-1!==c&&(n[c]=r.stakedValue)});let o=0;n.forEach((r,c)=>{null==r?n[c]=o:o=r}),this.dailyStakedValue=n})}fetchTradingFeeApy(){this.graphService.fetchTradingFee(this.lpminingPoolInfo.pairAddress).then(({data:t})=>{const{dailyTradeVolume:n,totalTradeVolume:e}=t,{feeVolume0:o,feeVolume1:r}=null!=n?n:{feeVolume0:"0",feeVolume1:"0"},{totalFeeVolume0:c,totalFeeVolume1:l}=null!=e?e:{totalFeeVolume0:"0",totalFeeVolume1:"0"},d=this.isTiUSDToken0?18:this.lpminingPoolInfo.anotherTokenDecimals,v=this.isTiUSDToken0?this.lpminingPoolInfo.anotherTokenDecimals:18;this.last24HTradingFee=o/10**d*this.fund0Price+r/10**v*this.fund1Price,this.totalTradingFee=c/10**d*this.fund0Price+l/10**v*this.fund1Price,this.tradingFeeDailyApy=365*this.last24HTradingFee/(this.totalStakedLPToken*this.LPTokenPrice),this.tradingFeeAvgApy=365*this.totalTradingFee*86400*1e3/(this.totalStakedLPToken*this.LPTokenPrice*((new Date).getTime()-this.chainInfoService.getChainConfig().startTime))})}fetchPairDailyData(){return this.graphService.fetchPairDailyData(this.lpminingPoolInfo.pairAddress).then(({data:t})=>{this.liquidity=t.uniswapPair.liquidity/10**18;const n=Array(30).fill(null),e=Array(30).fill(null),o=(0,g.Gq)().reverse();t.uniswapPair.dailyData.forEach(l=>{const d=o.indexOf(1e3*l.dayStartTimestamp);-1!==d&&(n[d]={fund0:l.fund0,fund1:l.fund1},e[d]=l.liquidity/10**18)});let r={fund0:0,fund1:0},c=0;n.forEach((l,d)=>{null==l?n[d]=r:r=l}),e.forEach((l,d)=>{null==l?e[d]=c:c=l}),this.dailyLiquidity=e,this.tvl=n})}fetchTiTiDailyPrice(){return Promise.all([this.graphService.fetchUniwapPairDailyData(),this.web3Service.invokeContract("UniswapV2Pair","getReserves",[])]).then(([{data:t},n])=>{const e=Array(30).fill(null),o=(0,g.Gq)().reverse();t.uniswapPair&&0===t.uniswapPair.dailyData.length?e.fill(n[1]/n[0]):t.uniswapPair.dailyData.forEach(c=>{const l=o.indexOf(1e3*c.dayStartTimestamp);-1!==l&&(e[l]=c.fund1/c.fund0)});let r="0";e.forEach((c,l)=>{null==c?e[l]=r:r=e[l]}),this.titiDailyPrice=e})}onStake(){this.isLoading=!0,Math.pow(10,4);const n=(0,P.parseUnits)(this.stakingInputValue,18);this.web3Service.openApproveModal("LPs",n,"LPStakingPool",e=>{e&&this.web3Service.invokeContract("LPStakingPool","stake",[n.toString()],this.lpminingPoolInfo.contractAddress).then(o=>{this.isLoading=!1},o=>{this.isLoading=!1})},this.lpminingPoolInfo.pairAddress,this.lpminingPoolInfo.contractAddress)}onWithdraw(){this.isLoading=!0,Math.pow(10,4);const n=(0,P.parseUnits)(this.withdrawInputValue,18);this.web3Service.invokeContract("LPStakingPool","withdraw",[n.toString()],this.lpminingPoolInfo.contractAddress).then(e=>{this.isLoading=!1},e=>{this.isLoading=!1})}onClaim(){this.isLoading=!0;const t=Math.pow(10,4);(Math.floor(this.claimableValue*t*10**18)/t).toFixed(0),this.web3Service.invokeContract("LPStakingPool","getReward",[],this.lpminingPoolInfo.contractAddress).then(e=>{this.isLoading=!1,s.e(1797).then(s.bind(s,51797)).then(({TitiStakingModalComponent:o})=>{this.dialog.open(o).afterClosed().subscribe(c=>{c&&this.router.navigateByUrl("/titiStaking")})})},e=>{this.isLoading=!1})}onWithdrawAll(){this.web3Service.invokeContract("MarketMakerFund","withdrawAll",[]).then(t=>{})}maxStakeInputValue(){const t=Math.pow(10,4);this.stakingInputValue=(Math.floor(this.LPTokenBalance*t)/t).toFixed(4)}maxWithdrawInputValue(){const t=Math.pow(10,4);this.withdrawInputValue=(Math.floor(this.stakedLPTokenBalance*t)/t).toFixed(4)}maxClaimInputValue(){const t=Math.pow(10,4);this.claimInputValue=(Math.floor(this.claimableValue*t)/t).toFixed(4)}}return a.\u0275fac=function(t){return new(t||a)(i.Y36(O.Z),i.Y36(m.Ye),i.Y36(f.gz),i.Y36(f.F0),i.Y36(Y.B),i.Y36(x.Uc),i.Y36(w.jv),i.Y36(j.H7),i.Y36(J.h),i.Y36(E.p),i.Y36(N.g),i.Y36(B.uw))},a.\u0275cmp=i.Xpm({type:a,selectors:[["app-lpmining"]],decls:152,vars:76,consts:[[1,"lpmining-wrapper"],[2,"position","absolute"],["mat-button","","color","primary",1,"back-btn",3,"click"],[1,"page-title",2,"grid-column-start","span 3"],["href","https://docs.titi.finance/titi-mainnet/usdtiti-reward-distribution-rules","target","_blank"],[1,"lpmining-card","mat-elevation-z4"],[2,"justify-self","center","grid-column-start","1","grid-column-end","4"],[2,"justify-self","start"],[2,"justify-self","end"],[1,"golden-highlight",2,"justify-self","start"],["text","This part of the reward needs to be claimed manually by the user."],[1,"golden-highlight",2,"justify-self","end"],["text","This token APY(tAPY) based on current prices of TiTi, current epoch's reward rate and the proportion of your staked value in the entire pool. This part of the reward requires the user to manually claim."],["text","This reward is just a reference value, When the user stakes or withdraws LP Token, the user's remaining staked value is seen as the latest principal, and the calculation of received trading rewards is restarted. The principal calculation method depends on the corresponding AMM."],["text","This variable APY(vAPY) based on trading fee accumulated today in the target AMM pool. These rewards will be automatically increased to your staked value with each user's trading action to achieve the effect of compound interest, you will see your staked value continue to increase."],[2,"justify-self","end","grid-column-start","span 2"],["text","Estimated value based on the trading fee rewards generated on the day."],["text","Estimated value based on the trading fee rewards generated from the beginning till now."],[2,"grid-column-start","span 2"],["mat-raised-button","","color","primary",1,"lpmining-input-btn",3,"click"],[4,"ngIf"],["appearance","outline",1,"lpmining-input"],["type","text","matInput","","disabled","",2,"font-size","18px",3,"value","input"],["matPrefix","","svgIcon","TiTi",2,"padding-right","12px"],["matSuffix","","mat-flat-button","",2,"margin-bottom","12px","background-color","transparent","color","#2DD6B5",3,"click"],["mat-raised-button","","color","primary",1,"lpmining-input-btn",3,"disabled","click"],[1,"pool-info-card","mat-elevation-z4",2,"grid-row-start","span 2"],[1,"pool-info-title"],[2,"justify-self","center","grid-column-start","span 2"],[2,"font-size","8px"],[2,"justify-self","start","grid-column-start","span 2"],["text","Accumulated TiTi Rewards distributed to LP mining."],["text","Current Epoch TiTi Rewards distributed to LP mining."],["text","The number of TiTi rewards released per second, this part of the reward will be distributed according to the proportion of the user's staked value."],[1,"pool-chart"],[2,"width","100%","height","100%",3,"option"],[1,"mat-elevation-z4",2,"grid-column-start","1","grid-column-end","2","display","grid","grid-template-columns","1fr 1fr 1fr 1fr","row-gap","12px"],[2,"grid-column-start","span 4","justify-self","center"],[1,"divider",2,"grid-column-start","span 4","justify-self","center"],[2,"grid-column-start","span 4","display","grid","grid-template-columns","1fr 1fr 1fr 1fr","row-gap","4px","column-gap","8px","font-size","max(0.8rem,12px)","max-height","20vh","overflow-y","scroll"],[4,"ngFor","ngForOf"],["type","text","matInput","","placeholder","0.0000",2,"font-size","18px",3,"value","input"],["matPrefix",""],["svgIcon","TiUSD",2,"margin-right","-6px","float","left"],["svgIcon","TiTi",2,"margin-right","24px"],["target","_blank",2,"width","100%","display","flex","flex-direction","row","text-decoration","none",3,"href"],[2,"display","block","overflow","hidden","text-overflow","ellipsis","max-width","8vw"],[2,"width","12px","height","12px","font-size","12px","line-height","12px"],[3,"ngSwitch"],["class","golden-highlight",4,"ngSwitchCase"],[4,"ngSwitchCase"],[1,"golden-highlight"]],template:function(t,n){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"button",2),i.NdJ("click",function(){return n.goBack()}),i._uU(3," << back "),i.qZA(),i.qZA(),i._UZ(4,"div"),i.TgZ(5,"div",3),i.TgZ(6,"h1"),i._uU(7),i.qZA(),i.TgZ(8,"p"),i._uU(9),i.TgZ(10,"a",4),i._uU(11),i.qZA(),i._uU(12,"."),i.qZA(),i.qZA(),i.TgZ(13,"div",5),i.TgZ(14,"h2",6),i._uU(15),i.qZA(),i.TgZ(16,"span",7),i._uU(17,"Total Staked Value:"),i.qZA(),i._UZ(18,"div"),i.TgZ(19,"span",8),i._uU(20),i.ALo(21,"numberFormat"),i.qZA(),i.TgZ(22,"span",7),i._uU(23,"Your Staked Value:"),i.qZA(),i._UZ(24,"div"),i.TgZ(25,"span",8),i._uU(26),i.ALo(27,"numberFormat"),i.qZA(),i.TgZ(28,"span",9),i._uU(29,"Claimable TiTi Rewards"),i._UZ(30,"titi-tooltip",10),i._uU(31,":"),i.qZA(),i._UZ(32,"div"),i.TgZ(33,"span",11),i._uU(34),i.ALo(35,"numberFormat"),i.qZA(),i.TgZ(36,"span",7),i._uU(37,"TiTi Rewards tAPY"),i._UZ(38,"titi-tooltip",12),i._uU(39,": "),i.qZA(),i._UZ(40,"div"),i.TgZ(41,"span",8),i._uU(42),i.ALo(43,"numberFormat"),i.qZA(),i.TgZ(44,"span",9),i._uU(45,"Trading Fee Rewards"),i._UZ(46,"titi-tooltip",13),i._uU(47,":"),i.qZA(),i._UZ(48,"div"),i.TgZ(49,"span",11),i._uU(50),i.ALo(51,"numberFormat"),i.qZA(),i.TgZ(52,"span",7),i._uU(53,"Trading Fee vAPY"),i._UZ(54,"titi-tooltip",14),i._uU(55,": "),i.qZA(),i.TgZ(56,"span",15),i._uU(57),i.ALo(58,"number"),i._UZ(59,"titi-tooltip",16),i._uU(60),i.ALo(61,"number"),i._UZ(62,"titi-tooltip",17),i.qZA(),i.TgZ(63,"div",18),i.TgZ(64,"p"),i._uU(65),i.qZA(),i.qZA(),i.TgZ(66,"button",19),i.NdJ("click",function(){return n.goToProvide()}),i._uU(67,"Provide"),i.qZA(),i.YNc(68,W,25,16,"ng-container",20),i.YNc(69,z,6,2,"ng-container",20),i.TgZ(70,"mat-form-field",21),i.TgZ(71,"mat-label"),i._uU(72),i.ALo(73,"numberFormat"),i.qZA(),i.TgZ(74,"input",22),i.NdJ("input",function(o){return n.onClaimInputValueChange(o)}),i.qZA(),i._UZ(75,"mat-icon",23),i.TgZ(76,"button",24),i.NdJ("click",function(){return n.maxClaimInputValue()}),i._uU(77,"MAX"),i.qZA(),i.qZA(),i.TgZ(78,"button",25),i.NdJ("click",function(){return n.onClaim()}),i._uU(79),i.qZA(),i.qZA(),i.TgZ(80,"div",26),i.TgZ(81,"h2",27),i._uU(82,"LPMining Rewards Info"),i.qZA(),i._UZ(83,"mat-divider"),i.TgZ(84,"mat-chip-list",28),i.TgZ(85,"mat-chip",29),i._uU(86,"Trading Fee Rewards"),i.qZA(),i.qZA(),i._UZ(87,"mat-divider"),i.TgZ(88,"span",30),i._uU(89,"Total Distributed Trading Fee:"),i.qZA(),i.TgZ(90,"span",15),i._uU(91),i.ALo(92,"number"),i.qZA(),i.TgZ(93,"span",30),i._uU(94,"Last 24H Distributed Trading Fee:"),i.qZA(),i.TgZ(95,"span",15),i._uU(96),i.ALo(97,"number"),i.qZA(),i._UZ(98,"mat-divider"),i.TgZ(99,"mat-chip-list",28),i.TgZ(100,"mat-chip"),i._uU(101,"TiTi Rewards"),i.qZA(),i.qZA(),i._UZ(102,"mat-divider"),i.TgZ(103,"span",30),i._uU(104,"Total Distributed TiTi Rewards"),i._UZ(105,"titi-tooltip",31),i._uU(106,":"),i.qZA(),i.TgZ(107,"span",15),i._uU(108),i.ALo(109,"numberFormat"),i.qZA(),i.TgZ(110,"span",30),i._uU(111,"Current Epoch TiTi Rewards"),i._UZ(112,"titi-tooltip",32),i._uU(113,":"),i.qZA(),i.TgZ(114,"span",15),i._uU(115),i.ALo(116,"number"),i.qZA(),i.TgZ(117,"span",30),i._uU(118,"Current Epoch Rewards Rate"),i._UZ(119,"titi-tooltip",33),i._uU(120,":"),i.qZA(),i.TgZ(121,"span",15),i._uU(122),i.ALo(123,"number"),i.qZA(),i.TgZ(124,"span",30),i._uU(125,"Current Epoch Period:"),i.qZA(),i.TgZ(126,"span",15),i._uU(127),i.ALo(128,"date"),i.ALo(129,"date"),i.qZA(),i._UZ(130,"mat-divider"),i.TgZ(131,"mat-chip-list",28),i.TgZ(132,"mat-chip"),i._uU(133,"Historical APY"),i.qZA(),i.qZA(),i._UZ(134,"mat-divider"),i.TgZ(135,"div",34),i._UZ(136,"titi-chart-wrapper",35),i.qZA(),i.qZA(),i.TgZ(137,"div",36),i.TgZ(138,"h2",37),i._uU(139,"User Action Records"),i.qZA(),i.TgZ(140,"span"),i._uU(141,"Tx Hash"),i.qZA(),i.TgZ(142,"span"),i._uU(143,"Act."),i.qZA(),i.TgZ(144,"span"),i._uU(145,"Amount"),i.qZA(),i.TgZ(146,"span"),i._uU(147,"Time"),i.qZA(),i._UZ(148,"div",38),i.TgZ(149,"div",39),i.YNc(150,ei,17,14,"ng-container",40),i.YNc(151,ai,3,0,"ng-container",20),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(7),i.AsE("",n.lpminingPoolInfo.platform," ",n.lpminingPoolInfo.name," Pair LP Mining"),i.xp6(2),i.AsE("Provide the liquidity of the ",n.lpminingPoolInfo.name," trading pair on ",n.lpminingPoolInfo.platform," to yield TiTi rewards. "),i.xp6(2),i.hij("Click to Learn More about ",n.lpminingPoolInfo.name," LP Mining"),i.xp6(4),i.hij(" ",n.lpminingPoolInfo.name," LP Mining "),i.xp6(5),i.hij("$",i.xi3(21,31,n.totalStakedLPToken*n.LPTokenPrice,4),""),i.xp6(6),i.hij("$",i.xi3(27,34,n.stakedLPTokenBalance*n.LPTokenPrice,4),""),i.xp6(8),i.hij("",i.xi3(35,37,n.claimableValue,4)," TiTi"),i.xp6(8),i.hij("",i.xi3(43,40,n.currentAPY,4),"%"),i.xp6(8),i.hij("$ ",i.xi3(51,43,n.tradingFeeReward,4),""),i.xp6(7),i.hij("Daily ",i.xi3(58,46,100*n.tradingFeeDailyApy,"1.2-4"),"% "),i.xp6(3),i.hij("/ Avg ",i.xi3(61,49,100*n.tradingFeeAvgApy,"1.2-4"),"%"),i.xp6(5),i.AsE("Provide ",n.lpminingPoolInfo.name," Liquidity in ",n.lpminingPoolInfo.platform," to get more LP token."),i.xp6(3),i.Q6J("ngIf",n.isApproved),i.xp6(1),i.Q6J("ngIf",!n.isApproved),i.xp6(3),i.hij("Claimable:",i.xi3(73,52,n.claimableValue,4)," TiTi"),i.xp6(2),i.Q6J("value",n.claimInputValue),i.xp6(4),i.Q6J("disabled",!n.claimInputValue||n.isZero(n.claimInputValue)||n.isLoading),i.xp6(1),i.Oqu(n.isLoading?"waiting...":"CLAIM"),i.xp6(12),i.hij("$ ",i.xi3(92,55,n.totalTradingFee,"1.2-4"),""),i.xp6(5),i.hij("$ ",i.xi3(97,58,n.last24HTradingFee,"1.2-4"),""),i.xp6(12),i.hij("",i.xi3(109,61,n.distributedTiTiRewards,4)," TiTi"),i.xp6(7),i.hij("",i.xi3(116,64,n.getCurrentEpochTiTiRewards(),"1.0")," TiTi"),i.xp6(7),i.hij("",i.xi3(123,67,n.formatTokenValue(n.rewardRate+"","18"),"1.2-4")," TiTi/sec"),i.xp6(5),i.AsE("",i.xi3(128,70,1e3*n.startTime,"dd/M/y")," - ",i.xi3(129,73,1e3*n.periodFinish,"dd/M/y"),""),i.xp6(9),i.Q6J("option",n.option2),i.xp6(14),i.Q6J("ngForOf",n.lpminingRecords),i.xp6(1),i.Q6J("ngIf",0==n.lpminingRecords.length))},directives:[U.lW,H.Q,m.O5,T.KE,T.hX,b.Nt,w.Hw,T.qo,T.R9,C.d,Z.qn,Z.HS,Q.o,m.sg,m.RF,m.n9],pipes:[$.p,m.JJ,m.uU],styles:[".lpmining-wrapper[_ngcontent-%COMP%]{padding:24px;display:grid;grid-template-columns:5fr 3fr;grid-column-gap:2vw;column-gap:2vw;grid-row-gap:2vw;row-gap:2vw}.lpmining-card[_ngcontent-%COMP%]{align-self:start;justify-self:start;width:100%;display:grid;grid-template-columns:1fr 1fr 1fr;grid-row-gap:1rem;row-gap:1rem;align-items:center}.lpmining-input[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:3}.lpmining-btn[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:4}.lpmining-input-btn[_ngcontent-%COMP%]{width:80%;justify-self:end;margin-bottom:18px;height:56px}.pool-info-card[_ngcontent-%COMP%]{align-self:start;justify-self:start;width:100%;display:grid;grid-template-columns:1fr 2fr 2fr 1fr;grid-row-gap:2rem;row-gap:2rem;align-items:center}.pool-info-title[_ngcontent-%COMP%]{grid-column-start:span 4;justify-self:center}.pool-chart[_ngcontent-%COMP%]{grid-column-start:span 4;justify-self:center;width:100%;height:100%}.uniswap-link[_ngcontent-%COMP%]{justify-self:center;grid-column-start:1;grid-column-end:4;color:#29c7a8}@media screen and (max-width: 1024px){.lpmining-wrapper[_ngcontent-%COMP%]{width:100%;padding:12px;margin:0;display:grid;grid-template-columns:1fr;grid-row-gap:1rem;row-gap:1rem}.lpmining-card[_ngcontent-%COMP%], .pool-info-card[_ngcontent-%COMP%]{width:100%}}"]}),a})()}];let si=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=i.oAB({type:a}),a.\u0275inj=i.cJS({imports:[[f.Bz.forChild(oi)],f.Bz]}),a})();var ri=s(45922),li=s(87841);let pi=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=i.oAB({type:a}),a.\u0275inj=i.cJS({imports:[[m.ez,si,b.c,U.ot,w.Ps,C.t,Z.Hi,ri.F,li.m]]}),a})()}}]);