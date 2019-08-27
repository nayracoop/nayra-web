<template>
    <section class="container-fluid contact" id="contacto">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <h2>Contactanos</h2>
                    <p>¿Algún proyecto en mente? <br />Estamos preparados para ayudarte a realizarlo.</p>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                    <form action="send.php" method="post" data-messages="#messages">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <label class="sr-only" for="name">Nombre</label>
                                <input required type="text" class="form-control form-control-lg mb-2 mr-sm-2 mb-sm-0" name="name" id="name" placeholder="Tu nombre *">
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <label class="sr-only" for="surname">Apellido</label>
                                <input required type="text" class="form-control form-control-lg  mb-2 mr-sm-2 mb-sm-0" name="surname" id="surname" placeholder="Tu apellido *">
                            </div>
                            <div class="col-12">
                                <label class="sr-only" for="email">E-mail</label>
                                <input required type="email" class="form-control form-control-lg  mb-2 mr-sm-2 mb-sm-0" name="email" id="email" placeholder="Tu e-mail *">
                            </div>
                            <div class="col-12">
                                <label class="sr-only" for="message">Mensaje</label>
                                <textarea required class="form-control form-control-lg" name="message" id="message" rows="8" cols="80" placeholder="Mensaje *"></textarea>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary btn-lg">Enviar</button>
                        <span id="messages"></span>
                    </form>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-12 col-xl-12">
                            <div class="qr">
                                <div>
                                    <button type="button"><font-awesome-icon icon="address-card" /><span class="sr-only">Ver tarjeta de contacto</span></button>
                                </div>
                                <p>Descubrí el código QR y agendanos en tu teléfono.</p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-12 col-xl-12">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
