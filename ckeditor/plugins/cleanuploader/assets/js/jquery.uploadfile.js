﻿(function(d){void 0==d.fn.ajaxForm&&d.getScript(("https:"==document.location.protocol?"https://":"http://")+"malsup.github.io/jquery.form.js");var y,q;y=void 0!==d("\x3cinput type\x3d'file'/\x3e").get(0).files;q=void 0!==window.FormData;d.fn.uploadFile=function(G){function z(){u||(u=!0,function b(){e.sequential||(e.sequentialCount=99999);if(0==n.length&&0==r.length)e.afterUploadAll&&e.afterUploadAll(k),u=!1;else{if(r.length<e.sequentialCount){var a=n.shift();void 0!=a&&(r.push(a),a.removeClass(k.formGroup),
a.submit())}window.setTimeout(b,100)}}())}function H(c,b,a){a.on("dragenter",function(a){a.stopPropagation();a.preventDefault();d(this).addClass(b.dragDropHoverClass)});a.on("dragover",function(a){a.stopPropagation();a.preventDefault();a=d(this);a.hasClass(b.dragDropContainerClass)&&!a.hasClass(b.dragDropHoverClass)&&a.addClass(b.dragDropHoverClass)});a.on("drop",function(a){a.preventDefault();d(this).removeClass(b.dragDropHoverClass);c.errorLog.html("");a=a.originalEvent.dataTransfer.files;!b.multiple&&
1<a.length?b.showError&&d("\x3cdiv class\x3d'"+b.errorClass+"'\x3e"+b.multiDragErrorStr+"\x3c/div\x3e").appendTo(c.errorLog):0!=b.onSelect(a)&&A(b,c,a)});a.on("dragleave",function(a){d(this).removeClass(b.dragDropHoverClass)});d(document).on("dragenter",function(a){a.stopPropagation();a.preventDefault()});d(document).on("dragover",function(a){a.stopPropagation();a.preventDefault();a=d(this);a.hasClass(b.dragDropContainerClass)||a.removeClass(b.dragDropHoverClass)});d(document).on("drop",function(a){a.stopPropagation();
a.preventDefault();d(this).removeClass(b.dragDropHoverClass)})}function v(c){var b="";c/=1024;return b=1024<parseInt(c)?(c/1024).toFixed(2)+" MB":c.toFixed(2)+" KB"}function B(c){var b=[],b="string"==jQuery.type(c)?c.split("\x26"):d.param(c).split("\x26");c=b.length;var a=[],g,f;for(g=0;g<c;g++)b[g]=b[g].replace(/\+/g," "),f=b[g].split("\x3d"),a.push([decodeURIComponent(f[0]),decodeURIComponent(f[1])]);return a}function A(c,b,a){for(var g=0;g<a.length;g++)if(C(b,c,a[g].name)){var f;if(f=!c.allowDuplicates){f=
b;var h=a[g].name,m=!1;if(f.existingFileNames.length)for(var l=0;l<f.existingFileNames.length;l++)if(f.existingFileNames[l]==h||e.duplicateStrict&&f.existingFileNames[l].toLowerCase()==h.toLowerCase())m=!0;f=m}if(f)c.showError&&d("\x3cdiv class\x3d'"+c.errorClass+"'\x3e\x3cb\x3e"+a[g].name+"\x3c/b\x3e "+c.duplicateErrorStr+"\x3c/div\x3e").appendTo(b.errorLog);else if(-1!=c.maxFileSize&&a[g].size>c.maxFileSize)c.showError&&d("\x3cdiv class\x3d'"+c.errorClass+"'\x3e\x3cb\x3e"+a[g].name+"\x3c/b\x3e "+
c.sizeErrorStr+v(c.maxFileSize)+"\x3c/div\x3e").appendTo(b.errorLog);else if(-1!=c.maxFileCount&&b.selectedFiles>=c.maxFileCount)c.showError&&d("\x3cdiv class\x3d'"+c.errorClass+"'\x3e\x3cb\x3e"+a[g].name+"\x3c/b\x3e "+c.maxFileCountErrorStr+c.maxFileCount+"\x3c/div\x3e").appendTo(b.errorLog);else{b.selectedFiles++;b.existingFileNames.push(a[g].name);f=c;h=new FormData;m=c.fileName.replace("[]","");h.append(m,a[g]);if(m=c.formData)for(m=B(m),l=0;l<m.length;l++)m[l]&&h.append(m[l][0],m[l][1]);f.fileData=
h;h=new w(b,c);m="";m=a[g].name;c.showFileSize&&(m+=" (\x3cstrong\x3e"+v(a[g].size)+"\x3c/strong\x3e)");h.filename.html(m);m=d("\x3cform style\x3d'display:block; position:absolute;left: 150px;' class\x3d'"+b.formGroup+"' method\x3d'"+c.method+"' action\x3d'"+c.url+"' enctype\x3d'"+c.enctype+"'\x3e\x3c/form\x3e");m.appendTo("body");l=[];l.push(a[g].name);D(m,f,h,l,b,a[g]);b.fileCounter++}}else c.showError&&d("\x3cdiv class\x3d'"+c.errorClass+"'\x3e\x3cb\x3e"+a[g].name+"\x3c/b\x3e "+c.extErrorStr+c.allowedTypes+
"\x3c/div\x3e").appendTo(b.errorLog)}function C(c,b,a){c=b.allowedTypes.toLowerCase().split(/[\s,]+/g);a=a.split(".").pop().toLowerCase();return"*"!=b.allowedTypes&&0>jQuery.inArray(a,c)?!1:!0}function t(c,b){if(c.existingFileNames.length)for(var a=0;a<b.length;a++){var d=c.existingFileNames.indexOf(b[a]);-1!=d&&c.existingFileNames.splice(d,1)}}function I(c,b){if(c){b.show();var a=new FileReader;a.onload=function(a){b.attr("src",a.target.result)};a.readAsDataURL(c)}}function p(c,b){if(c.showFileCounter){var a=
d(b.container).find(".ajax-file-upload-filename").length;b.fileCounter=a+1;d(b.container).find(".ajax-file-upload-filename").each(function(b,f){var h=d(this).html().split(c.fileCounterStyle);parseInt(h[0]);h=a+c.fileCounterStyle+h[1];d(this).html(h);a--})}}function E(c,b,a,g){var f="ajax-upload-id-"+(new Date).getTime(),h=d("\x3cform method\x3d'"+a.method+"' action\x3d'"+a.url+"' enctype\x3d'"+a.enctype+"'\x3e\x3c/form\x3e"),e="\x3cinput type\x3d'file' id\x3d'"+f+"' name\x3d'"+a.fileName+"' accept\x3d'"+
a.acceptFiles+"'/\x3e";a.multiple&&(a.fileName.indexOf("[]")!=a.fileName.length-2&&(a.fileName+="[]"),e="\x3cinput type\x3d'file' id\x3d'"+f+"' name\x3d'"+a.fileName+"' accept\x3d'"+a.acceptFiles+"' multiple/\x3e");var l=d(e).appendTo(h);l.change(function(){c.errorLog.html("");a.allowedTypes.toLowerCase().split(",");var f=[];if(this.files){for(e=0;e<this.files.length;e++)f.push(this.files[e].name);if(0==a.onSelect(this.files))return}else{var l=d(this).val(),e=[];f.push(l);if(!C(c,a,l)){a.showError&&
d("\x3cdiv class\x3d'"+a.errorClass+"'\x3e\x3cb\x3e"+l+"\x3c/b\x3e "+a.extErrorStr+a.allowedTypes+"\x3c/div\x3e").appendTo(c.errorLog);return}e.push({name:l,size:"NA"});if(0==a.onSelect(e))return}p(a,c);g.unbind("click");h.hide();E(c,b,a,g);h.addClass(b);if(a.serialize&&y&&q)h.removeClass(b),f=this.files,h.remove(),A(a,c,f);else{for(var l="",e=0;e<f.length;e++)l=a.showFileCounter?l+(c.fileCounter+a.fileCounterStyle+f[e]+"\x3cbr\x3e"):l+(f[e]+"\x3cbr\x3e"),c.fileCounter++;-1!=a.maxFileCount&&c.selectedFiles+
f.length>a.maxFileCount?a.showError&&d("\x3cdiv class\x3d'"+a.errorClass+"'\x3e\x3cb\x3e"+l+"\x3c/b\x3e "+a.maxFileCountErrorStr+a.maxFileCount+"\x3c/div\x3e").appendTo(c.errorLog):(c.selectedFiles+=f.length,e=new w(c,a),e.filename.html(l),D(h,a,e,f,c,null))}});a.nestedForms?(h.css({margin:0,padding:0}),g.css({position:"relative",overflow:"hidden",cursor:"default"}),l.css({position:"absolute",cursor:"pointer",top:"0px",width:"100px",height:"100%","z-index":"100",opacity:"0.0",filter:"alpha(opacity\x3d0)",
"-ms-filter":"alpha(opacity\x3d0)","-khtml-opacity":"0.0","-moz-opacity":"0.0","text-align":"center"}),h.appendTo(g)):(h.appendTo(d("body")),h.css({margin:0,padding:0,display:"block",position:"absolute",left:"-250px"}),-1!=navigator.appVersion.indexOf("MSIE ")?g.attr("for",f):g.click(function(){l.click()}))}function J(c,b){this.statusbar=d("\x3cdiv class\x3d'container uploadWait'\x3e\x3c/div\x3e");this.table01=d("\x3ctable class\x3d'table table-striped'\x3e\x3c/table\x3e").appendTo(this.statusbar);
this.tableRow01=d("\x3ctr\x3e\x3c/tr\x3e").appendTo(this.table01);this.tableItem01=d("\x3ctd class\x3d'pull-left'\x3e\x3c/td\x3e").appendTo(this.tableRow01);this.tableItem02=d("\x3ctd class\x3d'pull-left text-left box02'\x3e\x3c/td\x3e").appendTo(this.tableRow01);this.tableItem04=d("\x3ctd class\x3d'pull-right'\x3e\x3c/td\x3e").appendTo(this.tableRow01);this.preview=d("\x3cimg /\x3e").width(b.previewWidth).height(b.previewHeight).appendTo(this.tableItem01).hide();this.filename=d("\x3cp class\x3d'text-left'\x3e\x3c/p\x3e").appendTo(this.tableItem02);
this.progressDiv=d("\x3cdiv class\x3d'ajax-file-upload-progress'\x3e").appendTo(this.tableItem02).hide();this.progressbar=d("\x3cdiv class\x3d'ajax-file-upload-bar'\x3e\x3c/div\x3e").appendTo(this.progressDiv);this.abort=d("").appendTo(this.tableItem04).hide();this.cancel=d("\x3cbutton type\x3d'button' class\x3d'btn btn-danger'\x3e\x3ci class\x3d'glyphicon glyphicon-trash'\x3e \x3c/i\x3e Remove\x3c/button\x3e").appendTo(this.tableItem04).hide();this.done=d("").appendTo(this.tableItem04).hide();this.download=
d("").appendTo(this.tableItem04).hide();this.del=d("").appendTo(this.tableItem04).hide();this.table01;return this}function w(c,b){var a=null,a=b.customProgressBar?new b.customProgressBar(c,b):new J(c,b);a.abort.addClass(c.formGroup);a.abort.addClass(b.abortButtonClass);a.cancel.addClass(c.formGroup);a.cancel.addClass(b.cancelButtonClass);b.extraHTML&&(a.extraHTML=d("\x3cdiv class\x3d'extrahtml'\x3e"+b.extraHTML()+"\x3c/div\x3e").insertAfter(a.filename));"bottom"==b.uploadQueueOrder?d(c.container).append(a.statusbar):
d(c.container).prepend(a.statusbar);return a}function D(c,b,a,g,f,e){var k={cache:!1,contentType:!1,processData:!1,forceSync:!1,type:b.method,data:b.formData,formData:b.fileData,dataType:b.returnType,beforeSubmit:function(e,h,k){if(0!=b.onSubmit.call(this,g)){if(b.dynamicFormData&&(e=B(b.dynamicFormData())))for(h=0;h<e.length;h++)e[h]&&(void 0!=b.fileData?k.formData.append(e[h][0],e[h][1]):k.data[e[h][0]]=e[h][1]);b.extraHTML&&d(a.extraHTML).find("input,select,textarea").each(function(a,c){void 0!=
b.fileData?k.formData.append(d(this).attr("name"),d(this).val()):k.data[d(this).attr("name")]=d(this).val()});return!0}a.statusbar.append("\x3cdiv class\x3d'"+b.errorClass+"'\x3e"+b.uploadErrorStr+"\x3c/div\x3e");a.cancel.show();c.remove();a.cancel.click(function(){n.splice(n.indexOf(c),1);t(f,g);a.statusbar.remove();b.onCancel.call(f,g,a);f.selectedFiles-=g.length;p(b,f)});return!1},beforeSend:function(c,d){a.progressDiv.show();a.cancel.hide();a.done.hide();b.showAbort&&(a.abort.show(),a.abort.click(function(){t(f,
g);c.abort();f.selectedFiles-=g.length;b.onAbort.call(f,g,a)}));q?a.progressbar.width("1%"):a.progressbar.width("5%")},uploadProgress:function(c,d,f,e){98<e&&(e=98);c=e+"%";1<e&&a.progressbar.width(c);b.showProgress&&(a.progressbar.html(c),a.progressbar.css("text-align","center"))},success:function(e,h,k){a.cancel.remove();r.pop();"json"==b.returnType&&"object"==d.type(e)&&e.hasOwnProperty(b.customErrorKeyStr)?(a.abort.hide(),h=e[b.customErrorKeyStr],b.onError.call(this,g,200,h,a),b.showStatusAfterError?
(a.progressDiv.hide(),a.statusbar.append("\x3cspan class\x3d'"+b.errorClass+"'\x3eERROR: "+h+"\x3c/span\x3e")):(a.statusbar.hide(),a.statusbar.remove()),f.selectedFiles-=g.length):(f.responses.push(e),a.progressbar.width("100%"),b.showProgress&&(a.progressbar.html("100%"),a.progressbar.css("text-align","center")),a.abort.hide(),b.onSuccess.call(this,g,e,k,a),b.showStatusAfterSuccess?(b.showDone?(a.done.show(),a.done.click(function(){a.statusbar.hide("slow");a.statusbar.remove()})):a.done.hide(),b.showDelete?
(a.del.show(),a.del.click(function(){t(f,g);a.statusbar.hide().remove();b.deleteCallback&&b.deleteCallback.call(this,e,a);f.selectedFiles-=g.length;p(b,f)})):a.del.hide()):(a.statusbar.hide("slow"),a.statusbar.remove()),b.showDownload&&(a.download.show(),a.download.click(function(){b.downloadCallback&&b.downloadCallback(e)})));c.remove()},error:function(d,e,h){a.cancel.remove();r.pop();a.abort.hide();"abort"==d.statusText?(a.statusbar.hide("slow").remove(),p(b,f)):(b.onError.call(this,g,e,h,a),b.showStatusAfterError?
(a.progressDiv.hide(),a.statusbar.append("\x3cspan class\x3d'"+b.errorClass+"'\x3eERROR: "+h+"\x3c/span\x3e")):(a.statusbar.hide(),a.statusbar.remove()),f.selectedFiles-=g.length);c.remove()}};b.showPreview&&null!=e&&"image"==e.type.toLowerCase().split("/").shift()&&I(e,a.preview);b.autoSubmit?(c.ajaxForm(k),n.push(c),z()):(b.showCancel&&(a.cancel.show(),a.cancel.click(function(){d(a.statusbar).fadeOut(550,"linear",function(){n.splice(n.indexOf(c),1);t(f,g);c.remove();a.statusbar.remove();b.onCancel.call(f,
g,a);f.selectedFiles-=g.length;p(b,f)})})),c.ajaxForm(k))}var e=d.extend({url:"",method:"POST",enctype:"multipart/form-data",returnType:null,allowDuplicates:!0,duplicateStrict:!1,allowedTypes:"*",acceptFiles:"*",fileName:"file",formData:!1,dynamicFormData:!1,maxFileSize:-1,maxFileCount:-1,multiple:!0,dragDrop:!0,autoSubmit:!0,showCancel:!0,showAbort:!0,showDone:!1,showDelete:!1,showError:!0,showStatusAfterSuccess:!0,showStatusAfterError:!0,showFileCounter:!0,fileCounterStyle:"",showFileSize:!0,showProgress:!1,
nestedForms:!0,showDownload:!1,onLoad:function(c){},onSelect:function(c){return!0},onSubmit:function(c,b){},onSuccess:function(c,b,a,d){},onError:function(c,b,a,d){},onCancel:function(c,b){},onAbort:function(c,b){},downloadCallback:!1,deleteCallback:!1,afterUploadAll:!1,serialize:!0,sequential:!1,sequentialCount:2,customProgressBar:!1,abortButtonClass:"ajax-file-upload-abort",cancelButtonClass:"ajax-file-upload-cancel",dragDropContainerClass:"ajax-upload-dragdrop",dragDropHoverClass:"state-hover",
errorClass:"ajax-file-upload-error",uploadButtonClass:"ajax-file-upload",dragDropStr:"\x3ch2\x3eDrag your images here\x3c/h2\x3e",uploadStr:"Upload",abortStr:"Abort",cancelStr:"Cancel",deletelStr:"Delete",doneStr:"Done",multiDragErrorStr:"Multiple File Drag \x26amp; Drop is not allowed.",extErrorStr:"is not allowed. Allowed extensions: ",duplicateErrorStr:"is not allowed. File already exists.",sizeErrorStr:"is not allowed. Allowed Max size: ",uploadErrorStr:"Upload is not allowed",maxFileCountErrorStr:" is not allowed. Maximum allowed files are:",
downloadStr:"Download",customErrorKeyStr:"jquery-upload-file-error",showQueueDiv:!1,statusBarWidth:"100%",dragdropWidth:"100%",showPreview:!1,previewHeight:"auto",previewWidth:"100%",extraHTML:!1,uploadQueueOrder:"top"},G);this.fileCounter=1;this.selectedFiles=0;var F="ajax-file-upload-"+(new Date).getTime();this.formGroup=F;this.errorLog=d("\x3cdiv\x3e\x3c/div\x3e");this.responses=[];this.existingFileNames=[];q||(e.dragDrop=!1);q||(e.multiple=!1);d(this).html("");var k=this,x=d("\x3cdiv class\x3d'btn btn-primary'\x3e\x3ci class\x3d'glyphicon glyphicon-folder-open'\x3e\x26nbsp;\x3c/i\x3e.. Or browse\x3c/div\x3e");
(function b(){if(d.fn.ajaxForm){if(e.dragDrop){var a=d("\x3cdiv class\x3d'"+e.dragDropContainerClass+"'\x3e\x3c/div\x3e");d(k).append(a);d(a).append(d(e.dragDropStr));d(a).append(x);H(k,e,a)}else d(k).append(x);d(k).append(k.errorLog);k.container=e.showQueueDiv?d("#"+e.showQueueDiv):d("\x3cdiv class\x3d'col-xs-12' id\x3d'div1'\x3e\x3c/div\x3e").appendTo(d("#filelist"));e.onLoad.call(this,k);E(k,F,e,x)}else window.setTimeout(b,10)})();this.startUpload=function(){d("form").each(function(b,a){d(this).hasClass(k.formGroup)&&
n.push(d(this))});1<=n.length&&z()};this.getFileCount=function(){return k.selectedFiles};this.stopUpload=function(){d("."+e.abortButtonClass).each(function(b,a){d(this).hasClass(k.formGroup)&&d(this).click()});d("."+e.cancelButtonClass).each(function(b,a){d(this).hasClass(k.formGroup)&&d(this).click()})};this.cancelAll=function(){d("."+e.cancelButtonClass).each(function(b,a){d(this).hasClass(k.formGroup)&&d(this).click()})};this.update=function(b){e=d.extend(e,b)};this.reset=function(b){k.fileCounter=
1;k.selectedFiles=0;k.errorLog.html("");0!=b&&k.container.html("")};this.remove=function(){k.container.html("");d(k).remove()};this.createProgress=function(b,a,d){var f=new w(this,e);f.progressDiv.show();f.progressbar.width("100%");var h="",h=b;e.showFileSize&&(h+=" ("+v(d)+")");f.filename.html(h);k.fileCounter++;k.selectedFiles++;e.showPreview&&(f.preview.attr("src",a),f.preview.show());e.showDownload&&(f.download.show(),f.download.click(function(){e.downloadCallback&&e.downloadCallback.call(k,[b])}));
e.showDelete&&(f.del.show(),f.del.click(function(){f.statusbar.hide().remove();var a=[b];e.deleteCallback&&e.deleteCallback.call(this,a,f);--k.selectedFiles;p(e,k)}));return f};this.getResponses=function(){return this.responses};var n=[],r=[],u=!1;return this}})(jQuery);