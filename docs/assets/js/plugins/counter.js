/*!
* jquery.countup.js 1.0.3
*
* Copyright 2016, Adrián Guerra Marrero http://agmstudio.io @AGMStudio_io
* Released under the MIT License
*
* Date: Oct 27, 2016
*/
!function(n){"use strict";n.fn.countUp=function(t){var e=n.extend({time:2e3,delay:10},t);return this.each(function(){var i=n(this),p=e;i.waypoint(function(){i.data("counterupTo")||i.data("counterupTo",i.text());for(var t=0<parseInt(i.data("counter-time"))?parseInt(i.data("counter-time")):p.time,e=0<parseInt(i.data("counter-delay"))?parseInt(i.data("counter-delay")):p.delay,n=t/e,a=[r=i.data("counterupTo")],u=/[0-9]+,[0-9]+/.test(r),r=r.replace(/,/g,""),o=(/^[0-9]+$/.test(r),/^[0-9]+\.[0-9]+$/.test(r)),c=o?(r.split(".")[1]||[]).length:0,d=n;1<=d;d--){var s=parseInt(Math.round(r/n*d));if(o&&(s=parseFloat(r/n*d).toFixed(c)),u)for(;/(\d+)(\d{3})/.test(s.toString());)s=s.toString().replace(/(\d+)(\d{3})/,"$1,$2");a.unshift(s)}i.data("counterup-nums",a),i.text("0");i.data("counterup-func",function(){i.text(i.data("counterup-nums").shift()),i.data("counterup-nums").length?setTimeout(i.data("counterup-func"),e):(i.data("counterup-nums"),i.data("counterup-nums",null),i.data("counterup-func",null))}),setTimeout(i.data("counterup-func"),e)},{offset:"100%",triggerOnce:!0})})}}(jQuery);