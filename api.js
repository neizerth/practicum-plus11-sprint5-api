// IIFE
(async () => {
    const root = document.getElementById('root');

    const getPhotos = callback => {
        const url = 'https://mail.ru/photos';

        fetch(url)
            .then(response => response.json())
            .then(data => callback(data))
            .catch(e => {
                console.log(e);
                callback([]);
            });
    };
    const renderPhotos = data => {
        data.forEach(item => {
            const card = getCard(item);
            document.body.append(card);
        })
    };
    const getCard = item => {
        const block = document.createElement('div');
        block.classList.add('card');

        const img = new Image();
        img.src = item.thumbnailUrl;
        img.classList.add('card__image');

        const description = document.createElement('div');
        description.classList.add('card__description');

        description.textContent = item.title;

        block.append(img);
        block.append(description);

        return block;
    }

    getPhotos(renderPhotos);
    // const data = await getPhotos();
    // renderPhotos(data);
})();