function onClicktopPanel(){
    $(".buttonTopPanel").click(function(){
        $("#topPanel").hide();
        $(".trickyBar").show();
    });
}

function hideNewsLetter(){
    if($('.newsLetter').is(":visible")){
        $(".close").click(function(){
         $(".newsLetter").hide();
        });
    }
}

function showNewsLetter() {
    $(".newsLetter").show();
}