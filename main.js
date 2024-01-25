$(document).ready(function() {
    // Validate the form of section #comment
    $('#formComment').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            message: {
                required: true,
                minlength: 2
            }
        }, 
        messages: {
            name: 'Por favor, insira um nome com pelo menos 2 caracteres. &#x1F60A',
            message: 'Deixe seu comentário! &#x1F60A'
        }
    })

    // Add comment
    $('#formComment').on('submit', function(e) {
        e.preventDefault()

        const name = $('#name').val()
        const message = $('#message').val()

        addComment(name, message)

        $('#name').val('')
        $('#message').val('')
    })   

    //Add new comment
    $('#formScheduling').validate({
        rules: {
            fullname: "required",
            tel: "required",
            formService: "required",
            date : "required"
        },
        messages: {
            fullname: 'Por favor, insira o seu nome. \n',
            tel: 'Por favor, insira o seu telefone.\n',
            formService: 'Por favor, escolha um dos serviços disponivel.\n',
            date: 'Por favor, escolha um data para a reserva. \n'
        },
        // submitHandler: function(form) {

        // },
        invalidHandler: function(event, validator) {
            let camposInvalidos = validator.numberOfInvalids();
            if (camposInvalidos) {
                alert(`Existe ${camposInvalidos} campo(s) incorreto(s)`);
            }
        }
    });

    // Implement smooth scrolling for a better user experience.
    $('#service .btn').click(function() {
        const destination = $('#contact')

        const autoValue = $(this).closest('.card').find('h3').text().trim()
        $('#formService').val(autoValue)
        $('html').animate({
            scrollTop: destination.offset().top
        }, 1000)
    })

    function addComment(name, message) {
        //Creat a new car
        const newComment = $('<div class="card"></div>')
        //Add title 
        let nameComment = $('<h4 class="p-3 color-yellow">'+name+'</h4>')
        newComment.append(nameComment)
        //Add comment
        let commentMessage = $('<div class="card-body"><p>'+ message +'</p></div>')
        newComment.append(commentMessage)
        // Creat a new carousel item
        const carouselItem = $('<div class="carousel-item" data-bs-interval="3000"></div>')
        carouselItem.append(newComment)

        $('.carousel-inner').append(carouselItem)
    }
})