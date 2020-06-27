var data = [
            {
                "No": "1",
                "Name": "b.r",
                "Kills": "95",
            },
            {
                "No": "1",
                "Name": "Shujan",
                "Kills": "99",
            },
            {
                "No": "1",
                "Name": "Shujan",
                "Kills": "99",
            },
            {
                "No": "1",
                "Name": "Shujan",
                "Kills": "99",
            },
            {
                "No": "1",
                "Name": "Shujan",
                "Kills": "99",
            },
          ]


        // EXTRACT VALUE FOR HTML HEADER. 
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        var col = [];
        for (var i = 0; i < data.length; i++) {
            for (var key in data[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < data.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = data[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
