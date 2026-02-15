(async function () {
    const API_URL = "https://message-api.adsamtrade.workers.dev/";

    const api = {};

    api.get = async () => {
        const res = await fetch(API_URL);

        return await res.text();
    };

    api.post = async (text) => {
        const res = await fetch(API_URL, {
            method: "POST",
            body: text,
        });

        return res.status;
    };

    const inputBox = document.getElementById("inputBox");
    const updateBtn = document.getElementById("updateBtn");

    const text = await api.get();

    inputBox.value = text;

    updateBtn.addEventListener("click", async () => {
        const text = inputBox.value;

        await api.post(text);

        location.reload(true);
    });
})();
