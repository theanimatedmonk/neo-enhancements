document.addEventListener('DOMContentLoaded', () => {
    const openPopupBtn = document.getElementById('open-popup-btn');
    const popupMenu = document.getElementById('popup-menu');
    const generateDesign = document.getElementById('generate-design')
    const generateContent = document.getElementById('generate-content')

    openPopupBtn.addEventListener('click', () => {
        popupMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (event) => {
        if (!popupMenu.contains(event.target) && !openPopupBtn.contains(event.target)) {
            popupMenu.classList.add('hidden');
        }
    });

    const b = new rive.Rive({
        src: "Generate with ai.riv",
        canvas: document.getElementById("open-popup-btn"),
        artboard: "AI button",
        stateMachines: ["Build-with-ai"],
        autoplay: true,
        onLoad: () => {
            const inputs = b.stateMachineInputs("Build-with-ai");
            openPopupBtn.addEventListener("mouseover", () => {
                console.log('button hovered');
                inputs[0].value = true;
            });
            openPopupBtn.addEventListener("mouseout", () => {
                console.log('button not hovered');
                inputs[0].value = false;
            });
        }
    });

    const r = new rive.Rive({
        src: "Generate with ai.riv",
        canvas: document.getElementById("generate-design-option"),
        artboard: "Generate design",
        stateMachines: ["generate-design"],
        autoplay: true,
        onLoad: () => {
            const inputs = r.stateMachineInputs("generate-design");
            generateDesign.addEventListener("mouseover", () => {
                console.log('button hovered');
                inputs[0].value = true;
            });
            generateDesign.addEventListener("mouseout", () => {
                console.log('button not hovered');
                inputs[0].value = false;
            });
        }
    });


    const a = new rive.Rive({
        src: "Generate with ai.riv",
        canvas: document.getElementById("generate-content-option"),
        artboard: "Generate content",
        stateMachines: ["generate-content"],
        autoplay: true,
        onLoad: () => {
            const inputs = a.stateMachineInputs("generate-content");
            generateContent.addEventListener("mouseover", () => {
                console.log('button hovered');
                inputs[0].value = true;
            });
            generateContent.addEventListener("mouseout", () => {
                console.log('button not hovered');
                inputs[0].value = false;
            });
        }
    });


});