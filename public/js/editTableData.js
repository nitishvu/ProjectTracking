/**
 * Created by npavan on 01-02-2017.
 */
function getTableData() {

    // alert("inside getTableData")
    var data = {};
    var x,y = '';
    data.id = 'title';
    data.token = 'message';
    data.geo = 'geo';
    // http://localhost/api/users?id=4&token=sdfa3&geo=us
    $.ajax({
        type: 'GET',
        data: data,
        contentType: 'application/json',
        url: 'http://localhost/api/users',
        success: function(data) {
            console.log('success');
            console.log(JSON.stringify(data));
            //   alert(JSON.stringify(data));
            var tableHtml = '<tbody >';
            var jsonContent = data;
            var row = 1;
            var col = 1;
            for (x in jsonContent)
            {
                // console.log(jsonContent[x]);
             //   tableHtml = tableHtml + '<tr class=\"success\" id=\"td_id' + x + '\">';
                tableHtml = tableHtml + '<tr class=\"success\" id=\"row' + row + '\">';

                var tempContent = jsonContent[x];
                for (y in tempContent)
                {
                    //  tableHtml = tableHtml + '<td colspan=\"1\" class=\"tdCol\" align=\"left\">' + tempContent[y] + '</td>';
                   // tableHtml = tableHtml + '<td colspan=\"1\" class=\"tdCol\" align=\"left\"><textarea rows=\"3\" style=\"min-width:100%;resize:none;\">' + tempContent[y] + '</textarea></td>';
                    tableHtml = tableHtml + '<td colspan=\"1\" class=\"tdCol\" align=\"left\"><textarea id=\"row' + row + 'col' + col + '\" rows=\"\" style=\"min-width:100%;resize:none;\">' + tempContent[y] + '</textarea></td>';

                    console.log(tempContent[y]);
                    col++;
                }
                tableHtml = tableHtml + '</tr>';
                col=1;
                row++;
            }
            tableHtml = tableHtml + '<tbody>';
            // alert(tableHtml);
            //$("#table_head").append(tableHtml);
            // return tableHtml;
            $('#edit_table_head ').after(tableHtml);
            // $('#table_head ').after('<tr><td>123</td><td>23123</td></tr><tr>...</tr>');
        }
    });
}/**
 * Created by npavan on 01-02-2017.
 */
