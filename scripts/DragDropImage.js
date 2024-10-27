document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone");
    const layerElement = dropZoneElement.querySelector(".layer");
    const fileNameP = document.querySelector('#fileNameP');
    fileNameP.dataset.originalText = fileNameP.innerHTML; 

    layerElement.addEventListener("click", (e) => {
        e.stopPropagation(); 
        removeImage(dropZoneElement, inputElement);
    });

    dropZoneElement.addEventListener("click", (e) => {
        if (!layerElement.contains(e.target)) {
            inputElement.click();
        }
    });

    inputElement.addEventListener("change", (e) => {
        if (inputElement.files.length) {
            updateThumbnail(dropZoneElement, inputElement.files[0]);
        }
    });

    dropZoneElement.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZoneElement.classList.add("drop-zone--over");
    });

    ["dragleave", "dragend"].forEach((type) => {
        dropZoneElement.addEventListener(type, (e) => {
            dropZoneElement.classList.remove("drop-zone--over");
        });
    });

    dropZoneElement.addEventListener("drop", (e) => {
        e.preventDefault();

        if (e.dataTransfer.files.length) {
            inputElement.files = e.dataTransfer.files;
            updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
        }

        dropZoneElement.classList.remove("drop-zone--over");
    });

    dropZoneElement.addEventListener("mouseenter", () => {
        if (inputElement.files.length) {
            layerElement.style.display = 'flex';
        }
    });

    dropZoneElement.addEventListener("mouseleave", () => {
            layerElement.style.display = 'none'; 
    });
});

function removeImage(dropZoneElement, inputElement) {
    inputElement.value = ''; 
    const layerElement = dropZoneElement.querySelector(".layer");
    layerElement.style.display = 'none'; 
    const thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");
    if (thumbnailElement) {
        thumbnailElement.remove(); 
    }
    const promptElement = dropZoneElement.querySelector(".drop-zone__prompt");
    if (!promptElement) {
        const newPromptElement = document.createElement('span');
        newPromptElement.classList.add('drop-zone__prompt');
        newPromptElement.innerHTML = `<img src="../../../images/upload icon.svg" class="mb-3"> <br>قم بسحب وإسقاط صورة أو اختر صورة`;
        dropZoneElement.appendChild(newPromptElement);
    }
    document.querySelector('#fileNameP').innerHTML = document.querySelector('#fileNameP').dataset.originalText; 
    dropZoneElement.style.border = '';
    const fileNameDiv = document.querySelector('.fileNameDiv');
    fileNameDiv.style.background = ''; 
}


function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

    if (dropZoneElement.querySelector(".drop-zone__prompt")) {
        dropZoneElement.querySelector(".drop-zone__prompt").remove();
    }

    if (!thumbnailElement) {
        thumbnailElement = document.createElement("div");
        thumbnailElement.classList.add("drop-zone__thumb");
        dropZoneElement.appendChild(thumbnailElement);
        dropZoneElement.style.border = "none"; 
    }

    let fileNameP = document.querySelector('#fileNameP');
    let fileNameDiv = document.querySelector('.fileNameDiv');
    fileNameP.innerHTML = file.name;
    fileNameDiv.style.background = "#39629C";

    if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        console.log(file.type)
        reader.readAsDataURL(file);
        reader.onload = () => {
            thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
        };
    } else {
        thumbnailElement.style.backgroundImage = null; 
    }
}
