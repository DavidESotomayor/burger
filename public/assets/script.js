$( function() {
    $('.devoured-btn').on('click', function (e) {
        const id = $(this).data('id');
        const devouredValue = $(this).data('devoured')
        const devouredData = {
            devoured: devouredValue
        }

        let currentURL = window.location.origin
        $.ajax(`${currentURL}/api/burgers/devoured/${id}`, {
            type: 'PUT',
            data: devouredData
        }).then(function() {
            location.reload()
        })
    })

    $('.burger-form').on('submit', function (e) {
        e.preventDefault()

        if ($('#burger-name').val() === ''){
            console.log('Please enter a burger name');
        } else {
            const newBurger = {
                burger_name: $('#burger-name').val()
            }

            let currentURL = window.location.origin
            $.post(`${currentURL}/api/burgers`, newBurger)
                .then(function (data) {
                    console.log(data);
                    location.reload()
                })
        }
    })
});