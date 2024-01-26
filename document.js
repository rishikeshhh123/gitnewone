 document.addEventListener('change', function (event) {
            if (event.target.type === 'checkbox' && event.target.classList.contains('checkbox')) {
                moveToDone(event);
            }