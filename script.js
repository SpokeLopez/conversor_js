const app = new Vue({
    el: '#app',
    data: () => ({
        baseSeleccionada: "10",
        binario: "",
        octal: "",
        decimal: "",
        hexadecimal: "",
        numero: "",
    }),
    methods: {
        onBaseONumeroCambiado() {
            this.convertirDeDecimalALasDemasBases(parseInt(this.numero, this.baseSeleccionada));
        },
        /**
         * ¿Para qué hacer conversiones y muchos ifs, si
         * podemos convertir primero a decimal y de ahi a
         * las demás bases?
         */
        convertirDeDecimalALasDemasBases(numero) {
            if (!numero)
                return;
            this.binario = numero.toString("2");
            this.octal = numero.toString("8");
            this.decimal = numero.toString("10");
            this.hexadecimal = numero.toString("16");
        },
    },
    watch: {
        baseSeleccionada() {
            this.onBaseONumeroCambiado();
        },
        numero() {
            this.onBaseONumeroCambiado();
        }
    }
});