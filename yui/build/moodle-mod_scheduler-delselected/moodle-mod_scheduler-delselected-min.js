YUI.add("moodle-mod_scheduler-delselected",function(e,t){var n={DELACTION:"div.commandbar a#delselected",SELECTBOX:"table#slotmanager input.slotselect"},r;M.mod_scheduler=M.mod_scheduler||{},r=M.mod_scheduler.delselected={},r.collect_selection=function(t,r){var i="";e.all(n.SELECTBOX).each(function(e){e.get("checked")&&(i.length>0&&(i+=","),i+=e.get("value"))}),t.setAttribute("href",r+"&items="+i)},r.init=function(t){var r=e.one(n.DELACTION);r!=null&&r.on("click",function(e){M.mod_scheduler.delselected.collect_selection(r,t)})}},"@VERSION@",{requires:["base","node","event"]});
