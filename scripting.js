document.body.innerHTML = `
    <table>
        <tr>
            <td>Car</td>
            <td>Top</td>
            <td>Price</td>
        </tr>
        <tr>
            <td>Chevrolet</td>
            <td>120mph</td>
            <td>$10,000</td>
        </tr>
        <tr>
            <td>Pontiac</td>
            <td>140mph</td>
            <td>$20,000</td>
        </tr>
    </table>
`;

// or
document.body.innerHTML = '';
const info = [
    ['Car', 'Top', 'Price'],
    ['Chevrolet', '120mph', '$10,000'],
    ['Pontiac', '140mph', '$20,000'],
];

const table = document.createElement('table');
table.style.margin = '0 auto';

info.forEach((row, i) => {
    const tr = document.createElement('tr');
    if (i == 0) tr.setAttribute('class', 'top'); // formats top row by by making it .top
    
    // append each element into row (tr)
    tr.append(...row.map((cell, j) => {
        const td = document.createElement('td');
        td.textContent = cell;
        if (j == 0) td.setAttribute('class', 'left'); // formats left-most column by by making it .left
        if (i == 0 && j == 0) td.style.color = 'red'; // formats tr with 'Car' 
        return td;
    }));
    table.append(tr);
});

// append table to body
document.body.append(table);