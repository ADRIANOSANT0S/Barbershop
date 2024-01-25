$(document).ready(function() {
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
})


// Feat 
// Smooth Scrolling
// Implement smooth scrolling for a better user experience.
// Enhance the system with form validation to ensure accurate user input.
// Auto-complete Form:
// Integrate auto-complete functionality for a more efficient form-filling process.
// Confirmation Message for Scheduling
// Add a confirmation message for users when they schedule an appointment.
// Add Comments