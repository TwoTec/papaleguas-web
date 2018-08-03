<template>
    <div>
        <ul>
            ola
        </ul>
    </div>
</template>
<script>
    export default {
        data() {

            return {
                veiculos: []
            }
        },
        created() {
            let promise = this.$http.post(`${this.url.url}/veiculos`);
                promise.then(res=> {
                    res.json().then(veiculos => this.veiculos = veiculos)

                } )
        },
    }
</script>
