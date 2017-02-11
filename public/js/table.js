/**
 * Created by npavan on 31-01-2017.
 */

$(function() {

    getTableData();
    $('#edit_1').click(function (e) {
        e.preventDefault();
        console.log('edit_button clicked');
        //  $('#display_table_body').hide();
        $('#display_table_body').remove();
        //     alert('inside edit_button click ');

        var data = {};
        var x, y = '';
        data.id = 'title';
        data.token = 'message';
        data.geo = 'geo';
        // http://localhost/api/users?id=4&token=sdfa3&geo=us
        $.ajax({
            type: 'GET',
            data: data,
            contentType: 'application/json',
            url: 'http://localhost/api/users',
            success: function (data) {
                console.log('success');
                console.log(JSON.stringify(data));
                //  alert(JSON.stringify(data));
                var tableHtml = '<tbody>';
                var jsonContent = data;
                var row = 1;
                var col = 1;
                for (x in jsonContent) {
                    // console.log(jsonContent[x]);
                    //tableHtml = tableHtml + '<tr class=\"success\">';
                    tableHtml = tableHtml + '<tr class=\"success\" id=\"row' + row + '\">';

                    var tempContent = jsonContent[x];
                    for (y in tempContent) {
                        //   tableHtml = tableHtml + '<td colspan=\"1\" class=\"tdCol\" align=\"left\">' + tempContent[y] + '</td>';
                        //  tableHtml = tableHtml + '<td colspan=\"1\" class=\"tdCol\" align=\"left\"><textarea rows=\"3\" style=\"min-width:100%;resize:none;\">' + tempContent[y] + '</textarea></td>';
                        tableHtml = tableHtml + '<td colspan=\"1\" class=\"tdCol\" align=\"left\"><textarea id=\"row' + row + 'col' + col + '\" rows=\"\" style=\"min-width:100%;resize:none;\">' + tempContent[y] + '</textarea></td>';

                        console.log(tempContent[y]);
                        col++;
                    }
                    tableHtml = tableHtml + '</tr>';
                    col = 1;
                    row++;
                }
                tableHtml = tableHtml + '<tbody>';
                //    alert(tableHtml);
                //$("#table_head").append(tableHtml);
                $('#table_head ').after(tableHtml);
                // $('#table_head ').after('<tr><td>123</td><td>23123</td></tr><tr>...</tr>');
            }
        });


        //  $('#table_head').append(tableHtml);
        //console.log("User Name:", jsonContent.username);
        //console.log("Email:", jsonContent.email);
        //console.log("Password:", jsonContent.password);

        //   console.log(tableHtml);

    });

    $('#saveTable').click(function (e) {
        e.preventDefault();
        //  alert('inside saveTable click fcs function ');
        var data = {};
        var x, y = '';

        // http://localhost/api/users?id=4&token=sdfa3&geo=us
        $.ajax({
            type: 'GET',
            data: data,
            contentType: 'application/json',
            url: 'http://localhost/api/users',
            success: function (data) {
                console.log('success');
                console.log(JSON.stringify(data));
                //   alert(JSON.stringify(data));
                var tableHtml = '<tbody >';
                var jsonContent = data;
                var row = 1;
                var col = 1;
                var temp = '';
                var currentColVal = '';
                var fileColVal = '';
                for (x in jsonContent) {
                    // console.log(jsonContent[x]);
                    tableHtml = tableHtml + '<tr class=\"success\" id=\"row' + row + '\">';

                    var tempContent = jsonContent[x];

                    for (y in tempContent) {
                        //  tableHtml = tableHtml + '<td colspan=\"1\" class=\"tdCol\" align=\"left\">' + tempContent[y] + '</td>';
                        tableHtml = tableHtml + '<td colspan=\"1\" class=\"tdCol\" align=\"left\"><textarea id=\"row' + row + 'col' + col + '\" rows=\"\" style=\"min-width:100%;resize:none;\">' + tempContent[y] + '</textarea></td>';
                        temp = '#row' + row + 'col' + col;
                        fileColVal = tempContent[y];
                        currentColVal = $(temp).val();
                        //    alert(temp+'val='+currentColVal);
                        //  console.log(tempContent[y]);
                        if (fileColVal != currentColVal)
                        {
                            //     alert(fileColVal + 'changed to ' + currentColVal);
                            // alert(jsonContent.toString());
                            //alert(JSON.stringify(jsonContent[x][y]));
                            jsonContent[x][y] = currentColVal;
                            //       alert (jsonContent[x]['UPDATEDBY']);

                            //   var objUserInfo = new ActiveXObject('WScript.network');
                            //document.write(objUserInfo.ComputerName+"<br>");
                            //  document.write(objUserInfo.UserDomain+"<br>");
                            //  document.write(objUserInfo.UserName+"<br>");
                            //   var uname =  objUserInfo.UserName;
                            //  alert(uname);
                            //  var systemName =   Components.classes["@mozilla.org/process/environment;1"].getService(Components.interfaces.nsIEnvironment).get('USERNAME');
                            //  alert("maybe"+systemName);
                        }
                        col++;
                    }
                    tableHtml = tableHtml + '</tr>';
                    row++;

                    col = 1;
                }
                tableHtml = tableHtml + '<tbody>';
                // alert(tableHtml);
                //     alert(JSON.stringify(jsonContent));

                $.ajax({
                    type: 'GET',
                    data: data,
                    contentType: 'application/json',
                    url: 'http://localhost/api/saveData',
                    success: function (data) {
                        console.log('success');
                        console.log(JSON.stringify(data));
                    }
                });
            }
        });

    });

    $('#addRow').click(function (e) {
        e.preventDefault();
        data = {};

       alert('inside addRow click fcs function ');
        $.ajax({
            type: 'GET',
            data: data,
            contentType: 'application/json',
            url: 'http://localhost/api/users',
            success: function (data) {
                console.log('success');
                console.log(JSON.stringify(data));
                //   alert(JSON.stringify(data));
                var tableHtml = '<tbody >';
                var jsonContent = data;
                var row = 1;  var col = 1; var x = ''; var y = '';
                var currentColVal = '';  var fileColVal = '';
                var temp = "";
                for (x in jsonContent) {
                    // console.log(jsonContent[x]);
                    tableHtml = tableHtml + '<tr class=\"success\" id=\"row' + row + '\">';
                    console.log('row val='+row+Object.keys(jsonContent).length);
                    if( row+1 > Object.keys(jsonContent).length)
                    {
                        alert("maybe last element");
                        temp = '#row' + (row) ;
                        alert("temp="+temp);
                        tableHtml = '<tr class=\"success\" id=\"row' + (row+1) + '\">';
                        row = row+1;
                        var tempContent = jsonContent[x];
                        for (y in tempContent) {
                            tableHtml = tableHtml + '<td colspan=\"1\" class=\"tdCol\" align=\"left\"><textarea id=\"row' + row + 'col' + col + '\" rows=\"\" style=\"min-width:100%;resize:none;\"></textarea></td>';
                        col++;
                        }

                        $(temp).after(tableHtml);
                        return;
                    }

                    tableHtml = tableHtml + '</tr>';
                    row++;
                    col = 1;
                }
                tableHtml = tableHtml + '<tbody>';

            }
    });
    });
});