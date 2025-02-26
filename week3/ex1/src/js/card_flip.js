document.getElementById('frontend-card').addEventListener('click', function() {
    let list = document.getElementById('frontend-skills');
    list.style.display = list.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('backend-card').addEventListener('click', function() {
    let list = document.getElementById('backend-skills');
    list.style.display = list.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('tools-card').addEventListener('click', function() {
    let list = document.getElementById('tools-skills');
    list.style.display = list.style.display === 'block' ? 'none' : 'block';
});