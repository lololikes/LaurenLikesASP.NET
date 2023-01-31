// j query way of doing javascript
$("#btnSend").click(function () {
    alert("From: " + $("#txtFrom").val() 
        + ", Subject: " + $("#txtSubject").val()
        + ", Message: " + $("#txtMessage").val());

    $("#picGanderson").fadeOut("slow");
})

