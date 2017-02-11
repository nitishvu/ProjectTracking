//var jsonFile = ('temp.json');
//var tableData = require('.ReadJsonData')(jsonFile);
//getJsonContents();
//var getJsonContents = require('./ReadJsonData')(jsonFile);

var getTableHtml = function(getJsonContents) {
    var tableHtml = '<tbody id=\"display_table_body\">';
    var jsonContent = getJsonContents;
    var x, y = '';
    for (x in jsonContent) {
        // console.log(jsonContent[x]);
        tableHtml = tableHtml + '<tr class=\"success\" id=\"td_id'+x+'\">';
        var tempContent = jsonContent[x];
        for (y in tempContent) {
            tableHtml = tableHtml + '<td colspan=\"1\" class=\"tdCol\" align=\"left\">' + tempContent[y] + '</td>';
            console.log(tempContent[y]);
        }
        tableHtml = tableHtml + '</tr>';
    }
    tableHtml = tableHtml + '<tbody>';

    return tableHtml;
    console.log("table html = "+tableHtml);

};

module.exports = getTableHtml;