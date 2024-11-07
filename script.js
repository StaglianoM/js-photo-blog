document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('gallery'); 

    function fetchPhotos() {
        axios
            .get("https://jsonplaceholder.typicode.com/photos?_limit=6") 
            .then((response) => {
                const photos = response.data;
                let photoHTML = ""; 
                photos.forEach((photo) => {
                    photoHTML +=
                        `<div class="card">
                            <img id="pin" src="/img/pin.svg" alt="Pin icon">
                            <img id="placeholder" src="${photo.thumbnailUrl}" alt="${photo.title}">
                            <p>${photo.title}</p>
                        </div>`;
                });
                container.innerHTML = photoHTML; 
            })
            .catch((err) => 
                console.error("Errore generico:", err)
            );
    }

    fetchPhotos(); 
});