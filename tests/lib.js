// Testing numbers
module.exports.absolute = function(number) {
    // Unit tests help refactor the code with confidence. 
    return (number >= 0) ? number : -number;

}

// Testing strings 
module.exports.greet = function(name) {
    return 'Welcome ' + name + '!';
}


// Testing arrays 
module.exports.getCurrencies = function() {
    return ['USD', 'AUD', 'EUR'];
}

// Testing objects
module.exports.getProduct = function(productId) {
    return {id: productId, price: 10};
}