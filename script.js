document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o primeiro passo como ativo
    const passos = document.querySelectorAll('.passo');
    passos.forEach(passo => passo.classList.remove('ativo'));
    
    const primeiroPasso = document.getElementById('passo-0');
    if (primeiroPasso) {
        primeiroPasso.classList.add('ativo');
    }

    // Adiciona evento de clique aos botões
    document.querySelectorAll('.btn-proximo').forEach(button => {
        button.addEventListener('click', () => {
            const currentStep = button.closest('.passo');
            const nextStepId = button.getAttribute('data-proximo');

            // Esconde o passo atual
            currentStep.classList.remove('ativo');

            // Mostra o próximo passo
            const nextStep = document.getElementById(`passo-${nextStepId}`);
            if (nextStep) {
                nextStep.classList.add('ativo');
            }
        });
    });
});
