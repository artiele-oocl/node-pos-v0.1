module.exports = function main(input) {
    const out = aggregateSubtotal(input)
    return renderText(out);
};

function aggregateSubtotal(input) {
    let arr = [];
    input.forEach(e => {
        if (arr.length === 0 || isInObject(arr,e.Name) === false) {
            arr.push({'Name':e.Name, 'Quantity': 1, 'Unit price': parseFloat(e.Price).toFixed(2), 'Subtotal': parseFloat(e.Price).toFixed(2)})
        } else {
            arr.forEach(ov => {
                if (ov.Name===e.Name) {
                    parseInt(ov.Quantity = ov.Quantity + 1);
                    parseFloat(ov.Subtotal = parseFloat(ov['Quantity'] * ov['Unit price']).toFixed(2));
                }
            })
        }
    });
    return arr;
}

function isInObject(object,val){
    return object.some(ov => ov.Name === val)
}

function renderText(obj) {
    out='***<store earning no money>Receipt ***\n' +
    objectToString(obj)+
    '----------------------\n' +
    `Total: ${getGrandTotal(obj)} (yuan)\n` +
    '**********************\n';
    return out;
}

function objectToString(arr) {
    let s = '';
    arr.map(o=>{
        let unit=' bottles'
        if (o.Name === 'Battery') unit = '';
        s += `Name: ${o.Name}, Quantity: ${o.Quantity}${unit}, Unit price: ${o['Unit price']} (yuan), Subtotal: ${o['Subtotal']} (yuan)\n`        
    });
    return s;
}

function getGrandTotal(arr) {
    let total=0;
    arr.forEach(e=> total = parseFloat(e['Subtotal']) + total)
    return parseFloat(total).toFixed(2);
}
