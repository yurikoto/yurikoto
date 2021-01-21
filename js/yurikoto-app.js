$(document).ready(function(){
    //控制台绘画
    console.log("%c##    ## ##     ## ########  #### ##    ##  #######  ########  #######  \n ##  ##  ##     ## ##     ##  ##  ##   ##  ##     ##    ##    ##     ## \n  ####   ##     ## ##     ##  ##  ##  ##   ##     ##    ##    ##     ## \n   ##    ##     ## ########   ##  #####    ##     ##    ##    ##     ## \n   ##    ##     ## ##   ##    ##  ##  ##   ##     ##    ##    ##     ## \n   ##    ##     ## ##    ##   ##  ##   ##  ##     ##    ##    ##     ## \n   ##     #######  ##     ## #### ##    ##  #######     ##     #######  ", "color: #fc8217");
    console.log("%c     Ver 1.0.0  By van_fantasy  Github https://github.com/yurikoto", "color: #fa7298");
    //移动端主页优化
    if(mobileCheck()){
        console.log("检测到您正在手机端浏览，已为您进行必要的UI优化。");
        $("#sentence-container").css("font-size", "22px");
        $("#sentence-container").css("line-height", "24px");
        $("#source").css("font-size", "17px");
      }
});

window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

/**
 * repo-card
 */
async function repocardInit(){
    async function get(url) {
      const resp = await fetch(url);
      return resp.json();
    }
  
    const emojis = await get('https://api.github.com/emojis');
    const colors = await get('https://raw.githubusercontent.com/ozh/github-colors/master/colors.json');
  
    document.querySelectorAll('.repo-card').forEach(async function(el) {
      const name = el.getAttribute('data-repo');
  
      const data = await get(`https://api.github.com/repos/${name}`);
  
      data.description = (data.description || '').replace(/:\w+:/g, function(match) {
        const name = match.substring(1, match.length - 1);
        const emoji = emojis[name];
  
        if (emoji) {
          return `<span><img src="${emoji}" style="width: 1rem; height: 1rem; vertical-align: -0.2rem;"></span>`;
        }
  
        return match;
      });
  
      el.innerHTML = `
      <div style="font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji; border: 1px solid #e1e4e8; border-radius: 6px; background: white; padding: 16px; font-size: 14px; line-height: 1.5; color: #24292e;">
        <div style="display: flex; align-items: center;">
          <svg style="fill: #586069; margin-right: 8px;" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
          <span style="font-weight: 600; color: #0366d6;">
            <a style="text-decoration: none; color: inherit;" href="${data.html_url}" target="_blank">${data.name}</a>
          </span>
        </div>
        <div style="display: ${data.fork ? 'block' : 'none'}; font-size: 12px; color: #586069;">Forked from <a style="color: inherit; text-decoration: none;" href="${data.fork ? data.source.html_url : ''}">${data.fork ? data.source.full_name : ''}</a></div>
        <div style="font-size: 12px; margin-bottom: 16px; margin-top: 8px; color: #586069;">${data.description}</div>
        <div style="font-size: 12px; color: #586069; display: flex;">
          <div style="${data.language ? '' : 'display: none'}; margin-right: 16px;">
            <span style="width: 12px; height: 12px; border-radius: 100%; background-color: ${data.language ? colors[data.language].color : ''}; display: inline-block; top: 1px; position: relative;"></span>
            <span>${data.language}</span>
          </div>
          <div style="display: ${data.stargazers_count == 0 ? 'none' : 'flex'}; align-items: center; margin-right: 16px;">
            <svg style="fill: #586069;" aria-label="stars" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
            &nbsp; <span>${data.stargazers_count}</span>
          </div>
          <div style="display: ${data.forks == 0 ? 'none' : 'flex'}; align-items: center;">
            <svg style="fill: #586069;" aria-label="fork" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>
            &nbsp; <span>${data.forks}</span>
          </div>
        </div>
      </div>
      `;
    });
  }

// 台词投稿
function sentence_upload(){
    window.text_max = 50;
    $('#sentence-content').on('input propertychange', function(){
        window.text_length = $('#sentence-content').val().length;
      // var text_remaining = text_max - text_length;
      $('#count-message').html(text_length + ' / ' + text_max);
    });
    $("#sentence-submit").bind("click", sentence_submit());
}
function sentence_submit(){
    var obj;
    vaptcha({
        vid: '5fffd24f07869387c7416033', // 验证单元id
        type: 'invisible', // 显示类型 隐藏式
        scene: 0, // 场景值 默认0
        offline_server: 'localhost', //离线模式服务端地址，若尚未配置离线模式，请填写任意地址即可。
        //可选参数
        //lang: 'auto', // 语言 默认auto,可选值auto,zh-CN,en,zh-TW,jp
        //https: true, // 使用https 默认 true
    }).then(function (vaptchaObj) {
        initFingerprintJS();
        obj = vaptchaObj //将VAPTCHA验证实例保存到局部变量中
        //获取token的方式一：
        //vaptchaObj.renderTokenInput('.login-form')//以form的方式提交数据时，使用此函数向表单添加token值
        //获取token的方式二：
        vaptchaObj.listen('pass', function () {
            // 验证成功进行后续操作
            var data = {
            //表单数据
                token: vaptchaObj.getToken(),
                content: $('#sentence-content').val(),
                source: $('#sentence-source').val(),
                email: $('#sentence-email').val(),
                fingerprint: window.visitorId
            }
            // console.log("validation passed");
            $("#sentence-submit").attr("disabled", "true");
            $("#sentence-submit-info").text("正在提交，请稍候...");
            $("#sentence-submit-info").css({
                "color": "green",
                "margin-left": "20px"
            });
            $("#sentence-submit-info").fadeIn(500);
            // console.log(window.visitorId);
            $.ajax({
                type: "POST",
                url: "https://yuri-test-submit.sunxiaochuan258.com/sentence",
                data: data,
                dataType: "json",
                success: function(r){
                    $("#sentence-submit").removeAttr("disabled");
                    $("#sentence-submit-info").text("投稿成功！");
                    $("#sentence-submit-info").css({
                        "color": "green",
                        "margin-left": "20px"
                    });
                    // $("#sentence-submit-info").fadeIn();
                    setTimeout(function () {
                        $("#sentence-submit-info").fadeOut();
                    }, 5000)
                    $('#sentence-content').val(""),
                    $('#sentence-source').val(""),
                    $('#sentence-email').val(""),
                    text_length = $('#sentence-content').val().length;
                    text_remaining = window.text_max - text_length;
                    $('#count-message').html(text_length + ' / ' + text_max);
                    vaptchaObj.reset();
                    return true;
                },
                error: function(r){
                    console.log(r);
                    if(r.status == 403){
                        $("#sentence-submit").removeAttr("disabled");
                        $("#sentence-submit-info").text("您的投稿功能已被禁用，无法进行投稿，更多信息请联系页脚邮箱。");
                        $("#sentence-submit-info").css({
                            "color": "red",
                            "margin-left": "20px"
                        });
                        // $("#sentence-submit-info").fadeIn();
                        setTimeout(function () {
                            $("#sentence-submit-info").fadeOut();
                        }, 5000)
                        vaptchaObj.reset();
                        return false;
                    }
                    else if(r.status == 429){
                        $("#sentence-submit").removeAttr("disabled");
                        $("#sentence-submit-info").text("请求过于频繁，请稍后再试。");
                        $("#sentence-submit-info").css({
                            "color": "red",
                            "margin-left": "20px"
                        });
                        // $("#sentence-submit-info").fadeIn();
                        setTimeout(function () {
                            $("#sentence-submit-info").fadeOut();
                        }, 3000)
                        vaptchaObj.reset();
                        return false;
                    }
                    else{
                        // $("#sentence-submit-info").fadeOut();
                        $("#sentence-submit").removeAttr("disabled");
                        $("#sentence-submit-info").text("很抱歉，发生了一点错误，请重试");
                        $("#sentence-submit-info").css({
                            "color": "red",
                            "margin-left": "20px"
                        });
                        // $("#sentence-submit-info").fadeIn();
                        setTimeout(function () {
                            $("#sentence-submit-info").fadeOut();
                        }, 2000)
                        vaptchaObj.reset();
                        return false;
                    }
                }
            });
        })
        //关闭验证弹窗时触发
        vaptchaObj.listen('close', function () {
            //验证弹窗关闭触发
        })
    })
    //VAPTCHA实例初始化完成后，等到用户点击登录按钮时执行validate()方法
    $('#sentence-submit').bind('click', function () {
        var content = $("#sentence-content").val();
        var source = $("#sentence-source").val();
        var email = $("#sentence-email").val();
        if(!(content && source)){
            $("#sentence-submit-info").text("请检查所有必填项是否均已填写");
            $("#sentence-submit-info").css({
                "color": "red",
                "margin-left": "20px"
            });
            $("#sentence-submit-info").fadeIn();
            setTimeout(function () {
                $("#sentence-submit-info").fadeOut();
            }, 2000)
            if(!source){
                $("#sentence-source").focus();
            }
            if(!content){
                $("#sentence-content").focus();
            }
            return false;
        }
        else if(email){
            var search_str = /^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/;
            if(!search_str.test(email)){       
                $("#sentence-submit-info").text("邮箱格式不正确");
                $("#sentence-submit-info").css({
                    "color": "red",
                    "margin-left": "20px"
                });
                $("#sentence-submit-info").fadeIn();
                setTimeout(function () {
                    $("#sentence-submit-info").fadeOut();
                }, 2000)
                $('#sentence-email').focus();
                return false;
            }
            //obj.validate();
        }
        else if(content.length > 50 || source.length > 50 || email.length > 50){
            $("#sentence-submit-info").text("所填信息长度不合理");
            $("#sentence-submit-info").css({
                "color": "red",
                "margin-left": "20px"
            });
            $("#sentence-submit-info").fadeIn();
            setTimeout(function () {
                $("#sentence-submit-info").fadeOut();
            }, 2000)
            if(email.length > 50){
                $('#sentence-email').focus();
            }
            if(source.length > 50){
                $('#sentence-source').focus();
            }
            if(content.length > 50){
                $('#sentence-content').focus();
            }
            return false;
        }
        obj.validate();
    })
}

// 请求地址生成
function copyToClip(content) {
    var aux = document.createElement("input"); 
    aux.setAttribute("value", content); 
    document.body.appendChild(aux); 
    aux.select();
    document.execCommand("copy"); 
    document.body.removeChild(aux);
}
function generate_sentence_url(){
    $('input[type=radio][name=encode]').change(function(){
        if(this.value == 'json'){
            $('#request-link').val("https://v1.yurikoto.com/sentence");
        }
        else if(this.value == 'text'){
            $('#request-link').val("https://v1.yurikoto.com/sentence?encode=text");
        }
    });
    $('#request').bind('click', function(){
        link = $('#request-link').val();
        $.get(link, function(data, status){
            if(status == "success"){
                $("#request-result").val(data);
            }
        });
    });
    $('#copy').bind('click', function(){
        link = $('#request-link').val();
        copyToClip(link);
    });
}
function get_wallpaper_url(){
    var encode = 'redirect';
    var type = 'all';
    $('input[type=radio][name=encode]').change(function(){
        encode = this.value;
        generate(encode, type);
    });
    $('input[type=radio][name=type]').change(function(){
        type = this.value;
        generate(encode, type);
    });
    $('#request').bind('click', function(){
        link = $('#request-link').val();
        if(encode == "redirect"){
            window.open(link);
        }
        else{
            $.get(link, function(data, status){
                if(status == "success"){
                    $("#request-result").val(data);
                }
            });
        }
        
    });
    $('#copy').bind('click', function(){
        link = $('#request-link').val();
        copyToClip(link);
    });
}
function generate(encode, type){
    if(encode == "redirect" && type == "all"){
        $('#request-link').val("https://v1.yurikoto.com/wallpaper");
    }else if(encode == "redirect" && type == "day"){
        $('#request-link').val("https://v1.yurikoto.com/wallpaper?type=day");
    }else if(encode == "redirect" && type == "night"){
        $('#request-link').val("https://v1.yurikoto.com/wallpaper?type=night");
    }else if(encode == "json" && type == "all"){
        $('#request-link').val("https://v1.yurikoto.com/wallpaper?encode=json");
    }else if(encode == "json" && type == "day"){
        $('#request-link').val("https://v1.yurikoto.com/wallpaper?encode=json&type=day");
    }else if(encode == "json" && type == "night"){
        $('#request-link').val("https://v1.yurikoto.com/wallpaper?encode=json&type=night");
    }else if(encode == "text" && type == "all"){
        $('#request-link').val("https://v1.yurikoto.com/wallpaper?encode=text");
    }else if(encode == "text" && type == "day"){
        $('#request-link').val("https://v1.yurikoto.com/wallpaper?encode=text&type=day");
    }else if(encode == "text" && type == "night"){
        $('#request-link').val("https://v1.yurikoto.com/wallpaper?encode=text&type=night");
    }
}

// 请求量统计
function get_statistics(){
    $.get("https://yuri-test-backend.sunxiaochuan258.com/statistic", function(data, status){
        if(status == "success"){
            try{
                data = JSON.parse(data);
                $("#count-sentence-requested").text(data.data.sentence.requested);
                $("#count-wallpaper-requested").text(data.data.wallpaper.requested);
                $("#count-sentence-uploaded").text(data.data.sentence.uploaded);
                $("#count-sentence-approved").text(data.data.sentence.approved);
                $("#count-wallpaper-approved").text(data.data.wallpaper.approved);
            }catch(e){}
        }
    });
    $.get("https://yuri-test-backend.sunxiaochuan258.com/statistic", function(data, status){
        if(status == "success"){
            try{
                data = JSON.parse(data);
                $("#count-sentence-requested").text(data.data.sentence.requested);
                $("#count-wallpaper-requested").text(data.data.wallpaper.requested);
                $("#count-sentence-uploaded").text(data.data.sentence.uploaded);
                $("#count-sentence-approved").text(data.data.sentence.approved);
                $("#count-wallpaper-approved").text(data.data.wallpaper.approved);
            }catch(e){}
        }
    });
}

//用户指纹
function initFingerprintJS() {
    var visitorId;
    FingerprintJS.load().then(fp => {
      // The FingerprintJS agent is ready.
      // Get a visitor identifier when you'd like to.
      fp.get().then(result => {
        // This is the visitor identifier:
        window.visitorId = result.visitorId;
      });
    });
  }

// 首页句子
function show_sentence(){
    var source;
    var prefix = "From: ";
    $.get("https://yuri-test-backend.sunxiaochuan258.com/sentence", function(data, status){
        try{
            data = JSON.parse(data);
            source = prefix + data.source;
        }
        catch(e){};
        if(status == "success"){
            $("#source").text(source);
            var typed = new Typed("#sentence", {
                strings: [data.content],
                startDelay: 300,
                typeSpeed: 150,
                backDelay: 5000,
                loop: true,
                backSpeed: 50,
                showCursor: true,
                onComplete: function(self){
                $.get("https://yuri-test-backend.sunxiaochuan258.com/sentence", function(data, status){
                    if(status == "success"){
                    try{
                        data = JSON.parse(data);
                        source = prefix + data.source;
                    }
                    catch(e){};
                    self.strings[0] = data.content;
                    }
                });
                },
                onLastStringBackspaced: function(self){
                $("#source").text(source);
                }
            });
        }
    });
}