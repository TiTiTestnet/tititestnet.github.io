"use strict";(self.webpackChunkapp_titi_frontend=self.webpackChunkapp_titi_frontend||[]).push([[2681],{32681:(X,E,l)=>{l.d(E,{Q:()=>N});var b=l(15861),g=l(57959),M=l(94528),$=l(57424),O=l(32856),v=l(98538),n=l.n(v),r=l(52909),m=l(48634),S=l(61135),V=l(5963),C=l(54004),u=l(62686),c=l(5e3),L=l(94602),B=l(53405),W=l(11730),K=l(65707);let N=(()=>{class U{constructor(e,d,T,s){this.accountService=e,this.graphService=d,this.web3Service=T,this.chainInfoService=s,this.buyTiUSDReward=0,this.buyTiUSDPersonalReward=0,this.buyTiUSDRewardRate=0,this.buyTiUSDPersonalRewardRate=0,this.buyTiUSDTotalAmount=0,this.buyTiUSDPersonalAmount=0,this.buyTiUSDPersonalProportion=0,this.buyTiUSDAvgApy=0,this.buyTiUSDDailyApy=0,this.buyTiUSDEpochPersonalAmount=r.O$.from("0"),this.buyTiUSDEpochTotalAmount=r.O$.from("0"),this.holdTiUSDReward=0,this.holdTiUSDPersonalReward=0,this.holdTiUSDRewardRate=0,this.holdTiUSDPersonalRewardRate=0,this.holdTotalTiUSDAmount="0",this.holdTiUSDBalance="0",this.holdTiUSDApy=0,this.buyTiTiReward=0,this.buyTiTiPersonalReward=0,this.buyTiTiRewardRate=0,this.buyTiTiPersonalRewardRate=0,this.buyTiTiPersonalAmount=0,this.buyTiTiTotalAmount=0,this.buyTiTiEpochPersonalAmount=r.O$.from("0"),this.buyTiTiEpochTotalAmount=r.O$.from("0"),this.buyTiTiPersonalProportion=0,this.buyTiTiAvgApy=0,this.buyTiTiDailyApy=0,this.tradeTiUSDReward=0,this.tradeTiUSDPersonalReward=0,this.tradeTiUSDRewardRate=0,this.tradeTiUSDPersonalRewardRate=0,this.tradeTiUSDPersonalAmount=0,this.tradeTiUSDTotalAmount=0,this.tradeTiUSDEpochPersonalAmount=r.O$.from("0"),this.tradeTiUSDEpochTotalAmount=r.O$.from("0"),this.tradeTiUSDPersonalProportion=0,this.tradeTiUSDAvgApy=0,this.tradeTiUSDDailyApy=0,this.dailyUserPairTrades$=new S.X([]),this.totalClaimableRewards=0,this.distributedTiTiRewards=0,this.top20Users$=new S.X([]),this.dailyUserMint$=new S.X([]),this.dailyUserSwap$=new S.X([]),this.dailyUserTrade$=new S.X([]),this.APIURL=this.chainInfoService.getChainConfig().use2earnApi,this.client=new g.f({uri:this.APIURL,cache:new M.h}),this.chainInfoService.currentChainId$.subscribe(y=>{this.setNewApi(this.chainInfoService.getChainConfig(y).use2earnApi)}),(0,V.H)(2e3,1e4).pipe((0,C.U)(()=>this.fetchUserData())).subscribe()}getNewBuyTiUSDPersonalProportion(e){return r.O$.from(this.buyTiUSDPersonalAmount).add((0,m.parseUnits)(e+"","18")).mul(r.O$.from("10000")).div(r.O$.from(this.buyTiUSDTotalAmount).add((0,m.parseUnits)(e+"","18"))).toNumber()/100}getNewbuyTiUSDPersonalRewardRate(e){return this.getNewBuyTiUSDPersonalProportion(e)*this.buyTiUSDRewardRate/100}getExpectedDailyRewards(e){return r.O$.from(this.holdTotalTiUSDAmount).isZero()?0:this.holdTiUSDRewardRate*(r.O$.from(e).mul(r.O$.from("10000")).div(r.O$.from(this.holdTotalTiUSDAmount)).toNumber()/1e4)}setNewApi(e){this.client.setLink(new $.u({uri:e}))}fetchUserData(){var e=this;return Promise.all([this.web3Service.invokeContract("TiTiUse2EarnBackendV1","getCurrentEpochInfo",["0"]),this.web3Service.invokeContract("TiTiUse2EarnBackendV1","getCurrentEpochInfo",["1"]),this.web3Service.invokeContract("TiTiUse2EarnBackendV1","getCurrentEpochInfo",["2"]),this.web3Service.invokeContract("TiTiUse2EarnBackendV1","getCurrentEpochInfo",["3"]).catch(()=>({1:"0"}))]).then(([d,T,s,y])=>(this.currentEpochInfo={epochNum:d[0],duration:d[2],starttime:d[3],holdTiUSDReward:d[1],buyTiTiReward:s[1],buyTiUSDReward:T[1],tradeTiUSDReward:y[1],totalRewards:r.O$.from(d[1]).add(r.O$.from(s[1])).add(r.O$.from(T[1])).add(r.O$.from(y[1])).toString()},this.currentEpochInfo)).then(function(){var d=(0,b.Z)(function*({epochNum:T,duration:s,starttime:y,holdTiUSDReward:P,buyTiTiReward:F,buyTiUSDReward:j,tradeTiUSDReward:Z}){const t=1e3*y,o=s/86400,w=parseFloat((0,m.formatUnits)(j,"18")),A=parseFloat((0,m.formatUnits)(P,"18")),p=parseFloat((0,m.formatUnits)(F,"18")),R=parseFloat((0,m.formatUnits)(Z,"18"));e.buyTiUSDReward=w,e.buyTiUSDRewardRate=(new Date).getTime()<t||(new Date).getTime()>t+1e3*s?0:w/o,e.holdTiUSDReward=A,e.holdTiUSDRewardRate=(new Date).getTime()<t||(new Date).getTime()>t+1e3*s?0:A/o,e.buyTiTiReward=p,e.buyTiTiRewardRate=(new Date).getTime()<t||(new Date).getTime()>t+1e3*s?0:p/o,e.tradeTiUSDReward=R,e.tradeTiUSDRewardRate=(new Date).getTime()<t||(new Date).getTime()>t+1e3*s?0:R/o;const h=yield e.fetchTiTiPrice();return e.fetchUserDailyData(T,t,t+1e3*s).then(({data:i})=>{e.buyTiUSDPersonalReward=0,e.holdTiUSDPersonalReward=0,e.buyTiTiPersonalReward=0,e.tradeTiUSDPersonalReward=0,e.buyTiUSDPersonalRewardRate=0,e.holdTiUSDPersonalRewardRate=0,e.buyTiTiPersonalRewardRate=0,e.tradeTiUSDPersonalRewardRate=0,e.buyTiUSDEpochPersonalAmount=r.O$.from("0"),e.buyTiUSDEpochTotalAmount=r.O$.from("0"),e.buyTiTiEpochPersonalAmount=r.O$.from("0"),e.buyTiTiEpochTotalAmount=r.O$.from("0"),e.tradeTiUSDEpochPersonalAmount=r.O$.from("0"),e.tradeTiUSDEpochTotalAmount=r.O$.from("0");const f=Math.floor(((new Date).getTime()-288e5)/864e5),_=Math.floor((t-288e5)/864e5);function I(){let a;const D=(new Date).getTime();return a=D<t?t:D<t+24*o*3600*1e3?D:t+24*o*3600*1e3,a/1e3}e.dailyUserPairTrades$.next(i.dailyUserPairTrades.map(a=>Object.assign(Object.assign({},a),{dailyVolume:Number((0,m.formatUnits)(a.dailyVolume,"18"))}))),i.dailySwaps.forEach(a=>{1e3*(a.dayStartTimestamp+28800)>=t&&1e3*(a.dayStartTimestamp+28800)<t+24*o*3600*1e3&&(e.buyTiTiEpochTotalAmount=e.buyTiTiEpochTotalAmount.add(r.O$.from(a.dailyTotalVolume)))}),u.Rl.includes(e.chainInfoService.getChainConfig().chainId)&&i.dailyTrades.forEach(a=>{1e3*(a.dayStartTimestamp+28800)>=t&&1e3*(a.dayStartTimestamp+28800)<t+24*o*3600*1e3&&(e.tradeTiUSDEpochTotalAmount=e.tradeTiUSDEpochTotalAmount.add(r.O$.from(a.dailyTotalVolume)))}),i.dailyMints.forEach(a=>{1e3*(a.dayStartTimestamp+28800)>=t&&1e3*(a.dayStartTimestamp+28800)<t+24*o*3600*1e3&&(e.buyTiUSDEpochTotalAmount=e.buyTiUSDEpochTotalAmount.add(r.O$.from(a.dailyTotalVolume)))}),e.buyTiUSDTotalAmount=(new Date).getTime()<t+24*o*3600*1e3&&i.dailyMint&&i.dailyMint.dailyTotalVolume?i.dailyMint.dailyTotalVolume:0,e.buyTiTiTotalAmount=(new Date).getTime()<t+24*o*3600*1e3&&i.dailySwap&&i.dailySwap.dailyTotalVolume?i.dailySwap.dailyTotalVolume:0,u.Rl.includes(e.chainInfoService.getChainConfig().chainId)&&(e.tradeTiUSDTotalAmount=(new Date).getTime()<t+24*o*3600*1e3&&i.dailyTrade&&i.dailyTrade.dailyTotalVolume?i.dailyTrade.dailyTotalVolume:0),e.buyTiUSDDailyApy=e.buyTiUSDTotalAmount>0?e.buyTiUSDRewardRate*h*365/(e.buyTiUSDTotalAmount/10**18):0,e.buyTiUSDAvgApy=e.buyTiUSDEpochTotalAmount.isZero()?0:e.buyTiUSDRewardRate*h*365/(e.buyTiUSDEpochTotalAmount.div(r.O$.from(10**14)).toNumber()/1e4/(f-_)),e.buyTiTiDailyApy=e.buyTiTiTotalAmount>0?e.buyTiTiRewardRate*h*365/(e.buyTiTiTotalAmount/10**18):0,e.buyTiTiAvgApy=e.buyTiTiEpochTotalAmount.isZero()?0:e.buyTiTiRewardRate*h*365/(e.buyTiTiEpochTotalAmount.div(r.O$.from(10**14)).toNumber()/1e4/(f-_)),u.Rl.includes(e.chainInfoService.getChainConfig().chainId)&&(e.tradeTiUSDDailyApy=e.tradeTiUSDTotalAmount>0?e.tradeTiUSDRewardRate*h*365/(e.tradeTiUSDTotalAmount/10**18):0,e.tradeTiUSDAvgApy=e.tradeTiUSDEpochTotalAmount.isZero()?0:e.tradeTiUSDRewardRate*h*365/(e.tradeTiUSDEpochTotalAmount.div(r.O$.from(10**14)).toNumber()/1e4/(f-_))),e.holdTotalTiUSDAmount=i.holder.totalSupply,e.holdTiUSDApy=e.holdTiUSDRewardRate*h*365/(i.holder.totalSupply/10**18),i.user&&(e.dailyUserMint$.next(i.user.dailyUserMint),e.dailyUserSwap$.next(i.user.dailyUserSwap),u.Rl.includes(e.chainInfoService.getChainConfig().chainId)&&e.dailyUserTrade$.next(i.user.dailyUserTrade),i.user.dailyUserMint.forEach(a=>{1e3*(a.dailyMint.dayStartTimestamp+28800)>=t&&1e3*(a.dailyMint.dayStartTimestamp+28800)<t+24*o*3600*1e3&&(e.buyTiUSDPersonalReward+=w/o*a.dailyVolume/a.dailyMint.dailyTotalVolume,e.buyTiUSDEpochPersonalAmount=e.buyTiUSDEpochPersonalAmount.add(r.O$.from(a.dailyVolume)))}),e.holdTiUSDBalance=i.user.balance,e.holdTiUSDPersonalReward=parseFloat((0,m.formatUnits)(new(n())(i.epochUser?i.epochUser.rewards:"0").add(new(n())(i.user.balance).mul(function(a){if(0===Number.parseInt(a.totalSupply))return new(n())(a.rewardPerTokenStored);const D=new(n())(I()-1*a.lastUpdateTime).mul(new(n())(P)).mul(new(n())("1000000000000000000")).div(new(n())(a.totalSupply).mul(new(n())(86400)).mul(new(n())(o)));return new(n())(a.rewardPerTokenStored).add(D)}(i.holder).sub(new(n())(i.epochUser?i.epochUser.userRewardPerTokenPaid:"0"))).div(new(n())("10").pow(new(n())("18")))).toString(),"18")),i.user.dailyUserSwap.forEach(a=>{1e3*(a.dailySwap.dayStartTimestamp+28800)>=t&&1e3*(a.dailySwap.dayStartTimestamp+28800)<t+24*o*3600*1e3&&(e.buyTiTiPersonalReward+=p/o*a.dailyVolume/a.dailySwap.dailyTotalVolume,e.buyTiTiEpochPersonalAmount=e.buyTiTiEpochPersonalAmount.add(r.O$.from(a.dailyVolume)))}),u.Rl.includes(e.chainInfoService.getChainConfig().chainId)&&i.user.dailyUserTrade.forEach(a=>{1e3*(a.dailyTrade.dayStartTimestamp+28800)>=t&&1e3*(a.dailyTrade.dayStartTimestamp+28800)<t+24*o*3600*1e3&&(e.tradeTiUSDPersonalReward+=R/o*a.dailyVolume/a.dailyTrade.dailyTotalVolume,e.tradeTiUSDEpochPersonalAmount=e.tradeTiUSDEpochPersonalAmount.add(r.O$.from(a.dailyVolume)))}),e.buyTiUSDPersonalRewardRate=(new Date).getTime()<t+24*o*3600*1e3&&i.dailyUserMint&&i.dailyUserMint.dailyMint.dailyTotalVolume?e.buyTiUSDRewardRate*i.dailyUserMint.dailyVolume/i.dailyUserMint.dailyMint.dailyTotalVolume:0,e.buyTiUSDPersonalAmount=(new Date).getTime()<t+24*o*3600*1e3&&i.dailyUserMint&&i.dailyUserMint.dailyMint.dailyTotalVolume?i.dailyUserMint.dailyVolume:0,e.buyTiUSDPersonalProportion=(new Date).getTime()<t+24*o*3600*1e3&&i.dailyUserMint&&i.dailyUserMint.dailyMint.dailyTotalVolume?i.dailyUserMint.dailyVolume/i.dailyUserMint.dailyMint.dailyTotalVolume*100:0,e.buyTiTiPersonalRewardRate=(new Date).getTime()<t+24*o*3600*1e3&&i.dailyUserSwap&&i.dailyUserSwap.dailySwap.dailyTotalVolume?e.buyTiTiRewardRate*(i.dailyUserSwap.dailyVolume/10**18)/(i.dailyUserSwap.dailySwap.dailyTotalVolume/10**18):0,e.buyTiTiPersonalAmount=(new Date).getTime()<t+24*o*3600*1e3&&i.dailyUserSwap&&i.dailyUserSwap.dailySwap.dailyTotalVolume?i.dailyUserSwap.dailyVolume:0,e.buyTiTiPersonalProportion=(new Date).getTime()<t+24*o*3600*1e3&&i.dailyUserSwap&&i.dailyUserSwap.dailySwap.dailyTotalVolume?i.dailyUserSwap.dailyVolume/i.dailyUserSwap.dailySwap.dailyTotalVolume*100:0,u.Rl.includes(e.chainInfoService.getChainConfig().chainId)&&(e.tradeTiUSDPersonalRewardRate=(new Date).getTime()<t+24*o*3600*1e3&&i.dailyUserTrade&&i.dailyUserTrade.dailyTrade.dailyTotalVolume?e.tradeTiUSDRewardRate*(i.dailyUserTrade.dailyVolume/10**18)/(i.dailyUserTrade.dailyTrade.dailyTotalVolume/10**18):0,e.tradeTiUSDPersonalAmount=(new Date).getTime()<t+24*o*3600*1e3&&i.dailyUserTrade&&i.dailyUserTrade.dailyTrade.dailyTotalVolume?i.dailyUserTrade.dailyVolume:0,e.tradeTiUSDPersonalProportion=(new Date).getTime()<t+24*o*3600*1e3&&i.dailyUserTrade&&i.dailyUserTrade.dailyTrade.dailyTotalVolume?i.dailyUserTrade.dailyVolume/i.dailyUserTrade.dailyTrade.dailyTotalVolume*100:0),e.holdTiUSDPersonalRewardRate=(new Date).getTime()<t+24*o*3600*1e3?e.holdTiUSDRewardRate*i.user.balance/i.holder.totalSupply:0),e.distributedTiTiRewards=(1e3*I()-t)/864e5*(e.buyTiUSDRewardRate+e.holdTiUSDRewardRate+e.buyTiTiRewardRate+e.tradeTiUSDRewardRate),e.top20Users$.next(i.users)})});return function(T){return d.apply(this,arguments)}}())}fetchTiTiPrice(){return Promise.all([this.web3Service.invokeContract("UniswapV2Pair","getReserves",[]),this.graphService.fetchTodayMMFRewardData(this.chainInfoService.getChainConfig().contractAddressMap.MAMMSwapPair)]).then(e=>e[0][1]/e[0][0]*(e[1].data.pair.fund1*10**12/e[1].data.pair.fund0))}fetchUserDailyData(e,d,T){const s=`\n    query($userId: ID,$epochUserId: ID,$epochId:ID,$dayId:ID,$startDayId:ID,$endDayId:ID,$startId:ID,$endId:ID,$todayId:ID,$todayTimestamp:Int!) {\n      epochUser(id:$epochUserId){\n        userRewardPerTokenPaid\n        rewards\n      }\n      users(first:20,orderBy:balance,orderDirection:desc){\n        address\n        balance\n      }\n      user(id:$userId){\n        id\n        address\n        balance\n        dailyUserTransfer(first:1000,where:{id_gte:$startDayId,id_lte:$endDayId}){\n          dailyTransfer{\n            dayStartTimestamp\n            dailyTotalVolume\n          }\n          dailyVolume\n        }\n        dailyUserMint(first:1000,where:{id_gte:$startDayId,id_lte:$endDayId}){\n          dailyMint{\n            dayStartTimestamp\n            dailyTotalVolume\n          }\n          dailyVolume\n        }\n        dailyUserSwap(first:1000,where:{id_gte:$startDayId,id_lte:$endDayId}){\n          dailySwap{\n            dayStartTimestamp\n            dailyTotalVolume\n          }\n          dailyVolume\n        }\n        ${u.Rl.includes(this.chainInfoService.getChainConfig().chainId)?"dailyUserTrade(first:1000,where:{id_gte:$startDayId,id_lte:$endDayId}){\n            dailyTrade{\n              dayStartTimestamp\n              dailyTotalVolume\n            }\n            dailyVolume\n          }\n          ":""}\n\n      }\n      holder(id:$epochId){\n        lastUpdateTime\n        rewardPerTokenStored\n        totalSupply\n      }\n      dailyUserTransfer(id:$dayId){\n        dailyVolume\n        dailyTransfer{\n          dailyTotalVolume\n        }\n      }\n      dailyUserMint(id:$dayId){\n        dailyVolume\n        dailyMint{\n          dailyTotalVolume\n        }\n      }\n      dailyUserSwap(id:$dayId){\n        dailyVolume\n        dailySwap{\n          dailyTotalVolume\n        }\n      }\n      ${u.Rl.includes(this.chainInfoService.getChainConfig().chainId)?"dailyUserTrade(id:$dayId){\n            dailyVolume\n            dailyTrade{\n            dailyTotalVolume\n          }\n        }\n          ":""}\n\n      dailySwaps(first:1000,where:{id_gte:$startId,id_lte:$endId}){\n        id\n        dailyTotalVolume\n        dayStartTimestamp\n      }\n      ${u.Rl.includes(this.chainInfoService.getChainConfig().chainId)?"\n        dailyTrades(first:1000,where:{id_gte:$startId,id_lte:$endId}){\n          id\n          dailyTotalVolume\n          dayStartTimestamp\n        }\n          ":""}\n\n      dailyMints(first:1000,where:{id_gte:$startId,id_lte:$endId}){\n        id\n        dailyTotalVolume\n        dayStartTimestamp\n      }\n      dailySwap(id:$todayId){\n        id\n        dailyTotalVolume\n        dayStartTimestamp\n      }\n      dailyMint(id:$todayId){\n        id\n        dailyTotalVolume\n        dayStartTimestamp\n      }\n      ${u.Rl.includes(this.chainInfoService.getChainConfig().chainId)?"\n        dailyTrade(id:$todayId){\n          id\n          dailyTotalVolume\n          dayStartTimestamp\n        }\n          ":""}\n      ${u.Rl.includes(this.chainInfoService.getChainConfig().chainId)?"\n      dailyUserPairTrades(where:{dayStartTimestamp:$todayTimestamp,user:$userId}){\n          id\n          dayStartTimestamp\n          pair{\n            name\n          }\n          dailyVolume\n       }\n      ":""}\n   }\n  `;return this.accountService.getCurrentAccountAsyn().then(y=>this.client.query({query:(0,O.Ps)(s),variables:{userId:y.toLowerCase(),epochUserId:e+"-0-"+y.toLowerCase(),epochId:e,dayId:y.toLowerCase()+"-"+Math.floor(((new Date).getTime()-288e5)/864e5),startDayId:y.toLowerCase()+"-"+Math.floor((d-288e5)/864e5),endDayId:y.toLowerCase()+"-"+Math.floor((T-288e5)/864e5),startId:Math.floor((d-288e5)/864e5),endId:Math.floor((T-288e5)/864e5),todayId:Math.floor(((new Date).getTime()-288e5)/864e5),todayTimestamp:86400*Math.floor(((new Date).getTime()-288e5)/864e5)},fetchPolicy:"network-only"}))}}return U.\u0275fac=function(e){return new(e||U)(c.LFG(L.B),c.LFG(B.h),c.LFG(W.Uc),c.LFG(K.Z))},U.\u0275prov=c.Yz7({token:U,factory:U.\u0275fac,providedIn:"root"}),U})()}}]);