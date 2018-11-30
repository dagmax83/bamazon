var inquirer = require('inquirer');
var mysql = require('mysql');


var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'Please enter a whole non-zero number.';
	}


function promptUserPurchase() {
	// console.log('___ENTER promptUserPurchase___');

	inquirer.prompt([
		{
			type: 'input',
			name: 'item_id',
			message: 'Please enter the Item ID which you would like to purchase.',
			validate: validateInput,
			filter: Number
		},
		{
			type: 'input',
			name: 'quantity',
			message: 'How many do you need?',
			validate: validateInput,
			filter: Number
		}
]).then(function(input) {
    
    // console.log('Customer has selected: \n    item_id = '  + input.item_id + '\n    quantity = ' + input.quantity);

    var item = input.item_id;
    var quantity = input.quantity;

    var queryStr = 'SELECT * FROM products WHERE ?';

    connection.query(queryStr, {item_id: item}, function(err, data) {
        if (err) throw err;


        // console.log('data = ' + JSON.stringify(data));

        if (data.length === 0) {
            console.log('ERROR: Invalid Item ID. Please select a valid Item ID.');
            displayInventory();

        } else {
            var productData = data[0];

            // console.log('productData = ' + JSON.stringify(productData));
            // console.log('productData.stock_quantity = ' + productData.stock_quantity);

            if (quantity <= productData.stock_quantity) {
                console.log('Congratulations, the product you requested is in stock! Placing order!');

            
                var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;
            }
           }
        })
    })
}   

// console.log('updateQueryStr = ' + updateQueryStr);
