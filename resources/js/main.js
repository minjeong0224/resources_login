$(function(){
    let loginButton=$(".login_button");
    let popupLogin=$("#popup_login");

    loginButton.click(function(){
        popupLogin.toggleClass("active");
        loginButton.toggleClass("active");
    });

    $(document).mouseup(function(e){
        e.preventDefault();
        let container = $("#popup_login");
        if (!container.is(e.target) && container.has(e.target).length === 0){
            container.removeClass("active");
            loginButton.removeClass("active");
        }
    });

    $(".login_submit").click(function(){
        popupLogin.removeClass("active");
        loginButton.removeClass("active");
    });
});