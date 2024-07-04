function toggleHeart(imageId) {
    var image = document.getElementById(imageId);
    if (image.src.includes('coracao_vazado.png')) {
        image.src = '../images/coracao_preenchido.png';
        image.alt = 'Coração Preenchido';
        // Aqui você pode adicionar a lógica para enviar o "match" ao backend quando estiver pronto
        console.log('Match realizado para a ONG com imagem ID: ' + imageId);
    } else {
        image.src = '../images/coracao_vazado.png';
        image.alt = 'Coração Vazado';
    }
}
