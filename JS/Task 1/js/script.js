var customers = [];
function addCustomer(name, ID, balance) {
    var customer = {
        name: name,
        ID: ID,
        balance: balance
    };
    customers.push(customer);
}
function editCustomerByID(ID, newName, newBalance) {
    var index = customers.findIndex(customer => customer.ID === ID);
    if(index !== -1) {
        customers[index].name = newName || customers[index].name;
        customers[index].balance = newBalance || customers[index].balance;
    } else {
        console.log("User not found");
    }
}
function deleteCustomerByID(ID) {
    var index = customers.findIndex(customer => customer.ID === ID);
    if(index !== -1) {
        customers.splice(index, 1);
    } else {
        console.log("User not found");
    }
}



addCustomer("Ahmed Mohammed", "5", 1000);
addCustomer("Rodaina Mohammed", "10", 2000);
editCustomerByID("5", "Ahmed Ali", 1500);
deleteCustomerByID("10");
console.log(customers);
