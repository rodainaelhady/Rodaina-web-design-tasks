document.getElementById('clientForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let clientName = document.getElementById('clientName').value;
    let clientID = document.getElementById('clientID').value;

    if (clientName && clientID) {
        document.getElementById('clientTable').style.display = 'table';

        let newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${clientName}</td>
            <td>${clientID}</td>
            <td>
                <button class="btn btn-warning btn-sm editBtn">Edit</button>
                <button class="btn btn-danger btn-sm removeBtn">Remove</button>
            </td>
        `;

        document.getElementById('tableBody').appendChild(newRow);

        document.getElementById('clientForm').reset();

        newRow.querySelector('.editBtn').addEventListener('click', function() {
            let cells = newRow.querySelectorAll('td');
            document.getElementById('clientName').value = cells[0].innerText;
            document.getElementById('clientID').value = cells[1].innerText;
            newRow.remove();
        });

        newRow.querySelector('.removeBtn').addEventListener('click', function() {
            newRow.remove();
        });
    }
});
