<template>
    <section class="contact" id="contacto">
        <b-container>
            <b-row>
                <b-col cols="12">
                    <h2>Contactanos</h2>
                    <p>¿Algún proyecto en mente? <br />Estamos preparados para ayudarte a realizarlo.</p>
                </b-col>
                <b-col cols="12" sm="12" md="12" lg="8" xl="8">
                    <form action="send.php" method="post" data-messages="#messages">
                        <b-row>
                            <b-col cols="12" sm="12" md="6" lg="6" xl="6">
                                <label class="sr-only" for="name">Nombre</label>
                                <input required type="text" class="form-control form-control-lg mb-2 mr-sm-2 mb-sm-0" name="name" id="name" placeholder="Tu nombre *">
                            </b-col>
                            <b-col cols="12" sm="12" md="6" lg="6" xl="6">
                                <label class="sr-only" for="surname">Apellido</label>
                                <input required type="text" class="form-control form-control-lg  mb-2 mr-sm-2 mb-sm-0" name="surname" id="surname" placeholder="Tu apellido *">
                            </b-col>
                            <b-col cols="12">
                                <label class="sr-only" for="email">E-mail</label>
                                <input required type="email" class="form-control form-control-lg  mb-2 mr-sm-2 mb-sm-0" name="email" id="email" placeholder="Tu e-mail *">
                            </b-col>
                            <b-col cols="12">
                                <label class="sr-only" for="message">Mensaje</label>
                                <textarea required class="form-control form-control-lg" name="message" id="message" rows="8" cols="80" placeholder="Mensaje *"></textarea>
                            </b-col>
                        </b-row>
                        <b-button type="submit" class="btn btn-primary btn-lg">Enviar</b-button>
                        <span id="messages"></span>
                    </form>
                </b-col>
                <b-col cols="12" sm="12" md="12" lg="4" xl="4">
                    <b-row>
                        <b-col cols="12" sm="12" md="6" lg="12" xl="12">
                            <div class="qr">
                                <div>
                                    <b-button><font-awesome-icon icon="address-card" /><span class="sr-only">Ver tarjeta de contacto</span>
                                    </b-button>
                                </div>
                                <p>Descubrí el código QR y agendanos en tu teléfono.</p>
                            </div>
                        </b-col>
                        <b-col cols="12" sm="12" md="6" lg="12" xl="12">
                            <div class="vcard">
                                <dl>
                                    <dt><font-awesome-icon icon="mobile-alt" /><span class="sr-only">Teléfono</span></dt>
                                    <dd class="tel">+54 9 11 5347 6740</dd>
                                    <dt><font-awesome-icon icon="map-marker-alt" /><span class="sr-only">Dirección</span></dt>
                                    <dd class="adr"><span class="street-address">Wenceslao de Tata 4561 2C</span>, <span class="locality">Caseros</span><span class="sr-only"> (<abbr title="Código postal">CP</abbr>:<span class="postal-code">B1678CSB</span>)</span>, <span class="region">Buenos Aires</span>, <span class="country-name">Argentina</span>.</dd>
                                    <dt><i class="fas fa-envelope"></i><font-awesome-icon icon="envelope" /><span class="sr-only">Email</span></dt>
                                    <dd><a class="email" href="mailto:info@nayra.coop">info@nayra.coop</a></dd>
                                    <dt class="sr-only">URL</dt>
                                    <dd class="sr-only"><a class="url" href="https://nayra.coop/">nayra.coop</a></dd>
                                </dl>
                                <p class="org sr-only">Cooperativa de trabajo Crear Arte y Tenología LTDA</p>
                            </div>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
        <div id="map"></div>
    </section>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="sass" scoped>
</style>
