document.querySelectorAll('#myList li').forEach((item) => {
    item.addEventListener('click', function() {
        document.querySelectorAll('#myList li').forEach((li) => {
            li.style.color = 'black';
        });
        this.style.color = 'red';
    });
});
