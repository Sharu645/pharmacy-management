$(document).ready(function() {

    $('#addMedicine').click(function(event) {
        event.preventDefault();
        displayForm(); 
    });


    $('#listMedicines').click(function() {
        $.ajax({
            url: 'get_data.php', 
            type: 'GET',
            success: function(response) {
                displayTable(response); 
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    $('#removeMedicine').click(function() {
        RemdisplayForm();
    });
});

   

function displayTable(data) {
    var tableHtml = '<table border="1"><tr><th>Name</th><th>Quantity</th><th>Price</th></tr>';
    data.forEach(function(item) {
        tableHtml += '<tr><td>' + item.name + '</td><td>' + item.quantity + '</td><td>' + item.price + '</td></tr>';
    });
    tableHtml += '</table>';
    $('#tableContainer').html(tableHtml);
}

function displayForm() {
    var formHtml = `
        <form id="addItemForm">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" required><br><br>
            <label for="quantity">Quantity:</label><br>
            <input type="number" id="quantity" name="quantity" required><br><br>
            <label for="price">Price:</label><br>
            <input type="number" id="price" name="price" step="0.01" required><br><br>
            <button type="submit">Add Item</button>
        </form>
    `;
    $('#tableContainer').html(formHtml);

   
    $('#addItemForm').submit(function(event) {
        event.preventDefault(); 
        var formData = $(this).serialize(); 

        $.ajax({
            url: 'add_data.php', 
            type: 'POST',
            data: formData,
            success: function(response) {
                console.log(response);
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });
}

function RemdisplayForm() {
    var formHtml = `
        <form id="removeItemForm">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" required><br><br>
            <button type="submit">Remove Item</button>
        </form>
    `;
    $('#tableContainer').html(formHtml);

    $('#removeItemForm').submit(function(event) {
        event.preventDefault(); 
        var formData = $(this).serialize(); 

        $.ajax({
            url: 'remove_data.php', 
            type: 'POST',
            data: formData,
            success: function(response) {
                console.log(response);
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });
}