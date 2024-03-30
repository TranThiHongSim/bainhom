$(document).ready(function() {
    pushHeader()
    function pushHeader(){
        var header = '<div class="header-wrapped d-flex" style="background-color: cyan; justify-content: space-between;">' +
        '<div class="logo">'+
            '<a href="#"><img src="../images/logo.png" alt="logo" style=""></a>'+
        '</div>'+
        '<nav class="navbar navbar-expand-lg navbar-light">'+
            '<div class="collapse navbar-collapse" id="navbarNav">'+
                '<ul class="navbar-nav">'+
                    '<li class="nav-item active">'+
                        '<a class="nav-link " href="#">Trang chủ</a>'+
                    '</li>'+
                    '<li class="nav-item">'+
                        '<a class="nav-link" href="#">About</a>'+
                    '</li>'+
                    '<li class="nav-item">'+
                        '<a class="nav-link" href="#">Services</a>'+
                    '</li>'+
                    '<li class="nav-item">'+
                        '<a class="nav-link" href="#">Contact</a>'+
                    '</li>'+
                    '</ul>'+
                '</div>'+
            '</nav>'+
        '</div>' 
        var wrapped = document.getElementById("wrapped")
    
        // wrapped.innerHTML = header
    }

    $('.nav-link').hover(function () {
            $(this).addClass('hover')
        }, function () {
            var parent = $(this).parent()
            if(!parent.hasClass('submenu')){
                $(this).removeClass('hover')
            }
            else{
                $('.submenu').mouseleave(function () {
                    if (!$(this).find('.submenu-content').is(':hover')) {
                        $(this).find('.nav-link').removeClass('hover');
                    }
                });
            }
        }
        );

})