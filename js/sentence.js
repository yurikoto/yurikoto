// function sentence_submit(){
//     var obj;
//     vaptcha({
//         vid: '5fffd24f07869387c7416033', // 验证单元id
//         type: 'invisible', // 显示类型 隐藏式
//         scene: 0, // 场景值 默认0
//         offline_server: 'localhost', //离线模式服务端地址，若尚未配置离线模式，请填写任意地址即可。
//         //可选参数
//         //lang: 'auto', // 语言 默认auto,可选值auto,zh-CN,en,zh-TW,jp
//         //https: true, // 使用https 默认 true
//     }).then(function (vaptchaObj) {
//         initFingerprintJS();
//         obj = vaptchaObj //将VAPTCHA验证实例保存到局部变量中
//         //获取token的方式一：
//         //vaptchaObj.renderTokenInput('.login-form')//以form的方式提交数据时，使用此函数向表单添加token值
//         //获取token的方式二：
//         vaptchaObj.listen('pass', function () {
//             // 验证成功进行后续操作
//             var data = {
//             //表单数据
//                 token: vaptchaObj.getToken(),
//                 content: $('#sentence-content').val(),
//                 source: $('#sentence-source').val(),
//                 email: $('#sentence-email').val(),
//                 fingerprint: window.visitorId
//             }
//             // console.log("validation passed");
//             $("#sentence-submit").attr("disabled", "true");
//             $("#sentence-submit-info").text("正在提交，请稍候...");
//             $("#sentence-submit-info").css({
//                 "color": "green",
//                 "margin-left": "20px"
//             });
//             $("#sentence-submit-info").fadeIn(500);
//             // console.log(window.visitorId);
//             $.ajax({
//                 type: "POST",
//                 url: "https://yuri-test-submit.sunxiaochuan258.com/sentence",
//                 data: data,
//                 dataType: "json",
//                 success: function(r){
//                     $("#sentence-submit").removeAttr("disabled");
//                     $("#sentence-submit-info").text("投稿成功！");
//                     $("#sentence-submit-info").css({
//                         "color": "green",
//                         "margin-left": "20px"
//                     });
//                     // $("#sentence-submit-info").fadeIn();
//                     setTimeout(function () {
//                         $("#sentence-submit-info").fadeOut();
//                     }, 5000)
//                     $('#sentence-content').val(""),
//                     $('#sentence-source').val(""),
//                     $('#sentence-email').val(""),
//                     text_length = $('#sentence-content').val().length;
//                     text_remaining = text_max - text_length;
//                     $('#count-message').html(text_length + ' / ' + text_max);
//                     vaptchaObj.reset();
//                     return true;
//                 },
//                 error: function(r){
//                     console.log(r);
//                     if(r.status == 403){
//                         $("#sentence-submit").removeAttr("disabled");
//                         $("#sentence-submit-info").text("您的投稿功能已被禁用，无法进行投稿，更多信息请联系页脚邮箱。");
//                         $("#sentence-submit-info").css({
//                             "color": "red",
//                             "margin-left": "20px"
//                         });
//                         // $("#sentence-submit-info").fadeIn();
//                         setTimeout(function () {
//                             $("#sentence-submit-info").fadeOut();
//                         }, 5000)
//                         vaptchaObj.reset();
//                         return false;
//                     }
//                     else if(r.status == 429){
//                         $("#sentence-submit").removeAttr("disabled");
//                         $("#sentence-submit-info").text("请求过于频繁，请稍后再试。");
//                         $("#sentence-submit-info").css({
//                             "color": "red",
//                             "margin-left": "20px"
//                         });
//                         // $("#sentence-submit-info").fadeIn();
//                         setTimeout(function () {
//                             $("#sentence-submit-info").fadeOut();
//                         }, 3000)
//                         vaptchaObj.reset();
//                         return false;
//                     }
//                     else{
//                         // $("#sentence-submit-info").fadeOut();
//                         $("#sentence-submit").removeAttr("disabled");
//                         $("#sentence-submit-info").text("很抱歉，发生了一点错误，请重试");
//                         $("#sentence-submit-info").css({
//                             "color": "red",
//                             "margin-left": "20px"
//                         });
//                         // $("#sentence-submit-info").fadeIn();
//                         setTimeout(function () {
//                             $("#sentence-submit-info").fadeOut();
//                         }, 2000)
//                         vaptchaObj.reset();
//                         return false;
//                     }
//                 }
//             });
//         })
//         //关闭验证弹窗时触发
//         vaptchaObj.listen('close', function () {
//             //验证弹窗关闭触发
//         })
//     })
//     //VAPTCHA实例初始化完成后，等到用户点击登录按钮时执行validate()方法
//     $('#sentence-submit').bind('click', function () {
//         var content = $("#sentence-content").val();
//         var source = $("#sentence-source").val();
//         var email = $("#sentence-email").val();
//         if(!(content && source)){
//             $("#sentence-submit-info").text("请检查所有必填项是否均已填写");
//             $("#sentence-submit-info").css({
//                 "color": "red",
//                 "margin-left": "20px"
//             });
//             $("#sentence-submit-info").fadeIn();
//             setTimeout(function () {
//                 $("#sentence-submit-info").fadeOut();
//             }, 2000)
//             if(!source){
//                 $("#sentence-source").focus();
//             }
//             if(!content){
//                 $("#sentence-content").focus();
//             }
//             return false;
//         }
//         else if(email){
//             var search_str = /^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/;
//             if(!search_str.test(email)){       
//                 $("#sentence-submit-info").text("邮箱格式不正确");
//                 $("#sentence-submit-info").css({
//                     "color": "red",
//                     "margin-left": "20px"
//                 });
//                 $("#sentence-submit-info").fadeIn();
//                 setTimeout(function () {
//                     $("#sentence-submit-info").fadeOut();
//                 }, 2000)
//                 $('#sentence-email').focus();
//                 return false;
//             }
//             //obj.validate();
//         }
//         else if(content.length > 50 || source.length > 50 || email.length > 50){
//             $("#sentence-submit-info").text("所填信息长度不合理");
//             $("#sentence-submit-info").css({
//                 "color": "red",
//                 "margin-left": "20px"
//             });
//             $("#sentence-submit-info").fadeIn();
//             setTimeout(function () {
//                 $("#sentence-submit-info").fadeOut();
//             }, 2000)
//             if(email.length > 50){
//                 $('#sentence-email').focus();
//             }
//             if(source.length > 50){
//                 $('#sentence-source').focus();
//             }
//             if(content.length > 50){
//                 $('#sentence-content').focus();
//             }
//             return false;
//         }
//         obj.validate();
//     })
// }
