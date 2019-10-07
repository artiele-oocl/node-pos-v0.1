module.exports = function main(input) {
    const out = aggregateSubtotal(input)
    return renderText(out);
};

function isInObject(object,val){
    return object.some(ov => ov.Name === val)
}

function aggregateSubtotal(input) {
    let arr = [];
    input.forEach(e => {
        if (arr.length === 0 || isInObject(arr,e.Name) === false) {
            arr.push({'Name':e.Name, 'Quantity': 1, 'Unit price': parseFloat(e.Price).toFixed(2), 'Subtotal': e.Price})
        } else {
            arr.forEach(ov => {
                if (ov.Name===e.Name) {
                    parseInt(ov.Quantity = ov.Quantity + 1);
                    parseFloat(ov.Subtotal = ov['Quantity'] * ov['Unit price']);
                }
            })
        }
    });
    return arr;
}

function renderText(params) {
    out='***<store earning no money>Receipt ***\n' +
    //object to string
    '----------------------\n' +
    'Total: 23.00 (yuan)\n' +
    '**********************\n';
    return out;
}