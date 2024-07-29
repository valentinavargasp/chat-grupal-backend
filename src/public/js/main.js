console.log('FUNCIONAAAAAAAAAAAAAAAA');

//Creamos una instancia de socket.io desde el lado del cliente: 
const socket = io();
//Variable para guardar el nombre del usuario: 
let user;
const chatBox = document.getElementById('chatBox');

//Sweet Alert para el mensaje de bienvenida.

Swal.fire({
    title: 'Identificate, por favor.',
    input: 'text',
    text: 'Ingresa un usuario para identificarte en el chat',
    inputValidator: (value) => {
        return !value && 'Necesitas indicar un usuario para continuar';
    },
    allowOutsideClick: false
}).then(result => {
    user = result.value
})

chatBox.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        if (chatBox.value.trim().length > 0) {
            //Trim para sacar los espacios en blancos, si tiene más de 0 caracteres lo envía al backend.
            socket.emit('message', {user: user, message: chatBox.value});
            chatBox.value = '';
        }
    }
})
