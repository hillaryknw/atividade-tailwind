function atualizarIconeTema() {

    const html = document.documentElement;

    const icon = document.getElementById("themeIcon");
    const text = document.getElementById("themeText");

    if (html.classList.contains("dark")) {

        text.textContent = "Light mode";

        icon.setAttribute("data-lucide", "sun");

    } else {

        text.textContent = "Dark mode";

        icon.setAttribute("data-lucide", "moon");
    }

    lucide.createIcons();
}


function alternarTema() {

    const html = document.documentElement;

    if (html.classList.contains("dark")) {

        html.classList.remove("dark");

        html.setAttribute(
            "data-theme",
            "light"
        );

    } else {

        html.classList.add("dark");

        html.setAttribute(
            "data-theme",
            "dark"
        );
    }

    atualizarIconeTema();
}



function selecionarPagamento(tipo) {

    const cartao = document.getElementById("cartaoContent");
    const pix = document.getElementById("pixContent");
    const boleto = document.getElementById("boletoContent");

    const btnCartao = document.getElementById("btnCartao");
    const btnPix = document.getElementById("btnPix");
    const btnBoleto = document.getElementById("btnBoleto");

    const total = document.getElementById("total");
    const totalInfo = document.getElementById("totalInfo");
    const finalizarText = document.getElementById("finalizarText");
    const descontoLinha = document.getElementById("descontoLinha");



    cartao.classList.add("hidden");
    pix.classList.add("hidden");
    boleto.classList.add("hidden");



    [btnCartao, btnPix, btnBoleto].forEach(btn => {

        btn.classList.remove(
            "border-gray-800",
            "dark:border-gray-300"
        );

        btn.classList.add(
            "border-gray-200",
            "dark:border-[#29292c]"
        );

    });



    if (tipo === "cartao") {

        cartao.classList.remove("hidden");

        btnCartao.classList.remove(
            "border-gray-200",
            "dark:border-[#29292c]"
        );

        btnCartao.classList.add(
            "border-gray-800",
            "dark:border-gray-300"
        );

        total.textContent = "R$ 274,55";

        totalInfo.textContent =
            "em até 3x de R$ 86,70 sem juros";

        finalizarText.textContent =
            "Finalizar Pedido • R$ 260,10";

        descontoLinha.innerHTML = `
            <span class="text-gray-500 dark:text-gray-400">
                Desconto (Cupom 10%)
            </span>

            <span class="text-emerald-500">
                - R$ 28,90
            </span>
        `;
    }



    if (tipo === "pix") {

        pix.classList.remove("hidden");

        btnPix.classList.remove(
            "border-gray-200",
            "dark:border-[#29292c]"
        );

        btnPix.classList.add(
            "border-gray-800",
            "dark:border-gray-300"
        );

        total.textContent = "R$ 274,55";

        totalInfo.textContent =
            "À vista no PIX com 5% de desconto";

        finalizarText.textContent =
            "Gerar Código PIX • R$ 274,55";

        descontoLinha.innerHTML = `
            <span class="text-gray-500 dark:text-gray-400">
                Desconto PIX (5% OFF)
            </span>

            <span class="text-emerald-500">
                - R$ 14,45
            </span>
        `;
    }



    if (tipo === "boleto") {

        boleto.classList.remove("hidden");

        btnBoleto.classList.remove(
            "border-gray-200",
            "dark:border-[#29292c]"
        );

        btnBoleto.classList.add(
            "border-gray-800",
            "dark:border-gray-300"
        );

        total.textContent = "R$ 289,00";

        totalInfo.textContent =
            "Pagamento à vista no boleto";

        finalizarText.textContent =
            "Gerar Boleto • R$ 289,00";

        descontoLinha.innerHTML = `
            <span class="text-gray-500 dark:text-gray-400">
                Desconto
            </span>

            <span>
                R$ 0,00
            </span>
        `;
    }
}



document.addEventListener("DOMContentLoaded", () => {

    const html = document.documentElement;


    html.classList.remove("dark");

    html.setAttribute(
        "data-theme",
        "light"
    );

    atualizarIconeTema();

    selecionarPagamento("cartao");

});
