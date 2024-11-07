document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('gallery');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const closeButton = document.getElementById('closeButton');
  
    function fetchPhotos() {
        axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
            .then((response) => {
                const photos = response.data;
                let photoHTML = "";
                photos.forEach((photo, index) => {
                    const pinId = `pin-${index}`;
                    photoHTML += 
                        `<div class="card">
                            <img id="${pinId}" class="pin" src="/img/pin.svg" alt="Pin icon"/>
                            <img class="thumbnail" src="${photo.thumbnailUrl}" alt="${photo.title}" onclick="showImage('${photo.url}', '${pinId}')">
                            <p>${photo.title}</p>
                        </div>`;
                });
                container.innerHTML = photoHTML;
            })
            .catch((err) => {
                console.error("Errore generico:", err);
            });
    }

    window.showImage = function(imageUrl, pinId) {
        lightbox.style.display = "flex";  
        lightboxImage.src = imageUrl;    

        const pin = document.getElementById(pinId);
        pin.style.display = "none";  
        closeButton.style.display = "block";
    }

    closeButton.onclick = function() {
        lightbox.style.display = "none";  
        const pins = document.querySelectorAll('.pin'); 
        pins.forEach(pin => pin.style.display = "block"); 
        closeButton.style.display = "none";
    }

    fetchPhotos();
});


