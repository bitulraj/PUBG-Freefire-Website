var data = [
           {
                "No": "1",
                "Name": "malik4740T",
                "Team": "Solo"
            },
            {
                "No": "2",
                "Name": "hunterd0307B",
                "Team": "Solo"
            },
            {
                "No": "3",
                "Name": "Rosse786N",
                "Team": "Solo"
            },
            {
                "No": "4",
                "Name": "LoveYouMONI",
                "Team": "Solo"
            },
            {
                "No": "******",
                "Name": "*****",
                "Team": "Solo"
            },
            ];


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
        var divContainer = document.getElementById("showData_b");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
