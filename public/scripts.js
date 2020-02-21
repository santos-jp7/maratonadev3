document
    .querySelector('header button')
    .addEventListener("click", function(e){
        document
            .querySelector('.form')
            .classList.toggle('hide');
    })