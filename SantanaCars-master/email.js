// Inicializa o EmailJS
(function () {
    emailjs.init("STwCu7cH54DPhEDC_"); // Alterado para formato correto
})();

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            if (!form.checkValidity()) {
                form.classList.add('was-validated');
                return;
            }

            const submitButton = form.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';

            const formData = {
                from_name: form.querySelector('[name="name"]').value,
                from_email: form.querySelector('[name="email"]').value,
                phone: form.querySelector('[name="telefone"]').value,
                message: form.querySelector('[name="mensagem"]').value,
                to_email: 'santanacars.contato@gmail.com'
            };

            console.log('Dados do formulário:', formData);

            emailjs.send('service_u046qrl', 'template_5s70zzr', formData)
                .then(function (response) {
                    console.log('Sucesso:', response);
                    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                    form.reset();
                    form.classList.remove('was-validated');
                })
                .catch(function (error) {
                    console.error('Erro:', error);
                    alert('Erro ao enviar a mensagem. Por favor, tente novamente mais tarde.');
                })
                .finally(function () {
                    submitButton.disabled = false;
                    submitButton.textContent = 'Enviar';
                });
        });
    }
});