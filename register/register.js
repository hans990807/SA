$(document).ready(function(){
    alert("菜陶桂")
 });
    /* 處理表單點擊事件
    var $form = $('#submit');
    $form.click(function() {
        submit();
    });

    function submit() {
        var name = $('#member_name').val();
        var email = $('#member_email').val();
        var password = $('#member_password').val();

        var email_rule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
        var password_rule = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if (!email_rule.test(email)) {
            alert("Email格式不符！");
        }
        else if(!password_rule.test(password)) {
            alert("密碼格式不符，長度至少8，且至少包含一個數字和英文字母！");
        }
        else {
            // 將資料組成JSON格式
            var data_object = {
                "name": name,
                "email": email,
                "password": password
            };

            // 將JSON格式轉換成字串
            var data_string = JSON.stringify(data_object);

            // 發出POST的AJAX請求
            $.ajax({
                    type: "POST",
                    url: "api/member.do",
                    data: data_string,
                    crossDomain: true,
                    cache: false,
                    dataType: 'json',
                    timeout: 5000,
                    success: function (response) {
                        $('#flashMessage').html(response.message);
                        $('#flashMessage').show();
                        if(response.status == 200){
                            updateSQLTable(response.response);
                        }
                    },
                    error: function () {
                        alert("無法連線到伺服器！");
                    }
            });
        }
    }

    function updateSQLTable(data) {
        $("#sql_log > tbody").empty();
        var time = (data.time / 1000000).toFixed(2);
        var table_html = "";

        table_html += '<tr>';
        table_html += '<td>' + '1' + '</td>';
        table_html += '<td>' + data.sql + '</td>';
        table_html += '<td style="text-align: right">' + '0' + '</td>';
        table_html += '<td style="text-align: right">' + data.row + '</td>';
        table_html += '<td style="text-align: right">' + data.row + '</td>';
        table_html += '<td style="text-align: right">' + time + '</td>';
        table_html += '</tr>';
        $("#sql_log > tbody").append(table_html);
        $("#sql_summary").html("(default) " + data.row + " queries took " + time + " ms");
    }
}*/

