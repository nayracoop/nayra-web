<template>
    <section class="contact" id="contacto">
        <b-container>
            <b-row>
                <b-col cols="12">
                    <h2>{{ $t('contact.title') }}</h2>
                    <p>{{ $t('contact.content[0]') }} <br /> {{ $t('contact.content[1]') }}</p>
                </b-col>
                <b-col cols="12" sm="12" md="12" lg="8" xl="8">
                    <b-form action="send.php" method="post" data-messages="#messages">
                        <b-row>
                            <b-col cols="12" sm="12" md="6" lg="6" xl="6">
                                <label class="sr-only" for="name">{{ $t('Name') }}</label>
                                <input required type="text" class="form-control form-control-lg mb-2 mr-sm-2 mb-sm-0" name="name" id="name" :placeholder="$t('Your name')">
                            </b-col>
                            <b-col cols="12" sm="12" md="6" lg="6" xl="6">
                                <label class="sr-only" for="surname">{{ $t('Surname') }}</label>
                                <input required type="text" class="form-control form-control-lg  mb-2 mr-sm-2 mb-sm-0" name="surname" id="surname" :placeholder="$t('Your surname')">
                            </b-col>
                            <b-col cols="12">
                                <label class="sr-only" for="email">{{ $t('Email') }}</label>
                                <input required type="email" class="form-control form-control-lg  mb-2 mr-sm-2 mb-sm-0" name="email" id="email" :placeholder="$t('Your email')">
                            </b-col>
                            <b-col cols="12">
                                <label class="sr-only" for="message">{{ $t('Message') }}</label>
                                <textarea required class="form-control form-control-lg" name="message" id="message" rows="8" cols="80" :placeholder="$t('Your message')"></textarea>
                            </b-col>
                        </b-row>
                        <b-button type="submit" class="btn btn-primary btn-lg">{{ $t('Send') }}</b-button>
                        <span id="messages"></span>
                    </b-form>
                </b-col>
                <b-col cols="12" sm="12" md="12" lg="4" xl="4">
                    <b-row>
                        <b-col cols="12" sm="12" md="6" lg="12" xl="12">
                            <div class="qr">
                                <div>
                                    <b-button><font-awesome-icon icon="address-card" /><span class="sr-only">{{ $t('contact.srContactCard') }}</span>
                                    </b-button>
                                </div>
                                <p>{{ $t('contact.contentQR') }}</p>
                            </div>
                        </b-col>
                        <b-col cols="12" sm="12" md="6" lg="12" xl="12">
                            <div class="vcard">
                                <dl>
                                    <dt><font-awesome-icon icon="mobile-alt" /><span class="sr-only">{{ $t('Phone') }}</span></dt>
                                    <dd class="tel">{{ $t('vCard.phone') }}</dd>
                                    <dt><font-awesome-icon icon="map-marker-alt" /><span class="sr-only">{{ $t('Address') }}</span></dt>
                                    <dd class="adr">
                                        <span class="street-address">{{ $t('vCard.address') }}</span>, <span class="locality">{{ $t('vCard.locality') }}</span><span class="sr-only"> (<abbr title="Código postal">{{ $t('vCard.zipCodeLabel') }}</abbr>:<span class="postal-code">{{ $t('vCard.zipCode') }}</span>)</span>, <span class="region">{{ $t('vCard.region') }}</span>, <span class="country-name">{{ $t('vCard.country') }}</span>.
                                        </dd>
                                    <dt><i class="fas fa-envelope"></i><font-awesome-icon icon="envelope" /><span class="sr-only">{{ $t('Email') }}</span></dt>
                                    <dd><a class="email" href="mailto:info@nayra.coop">{{ $t('vCard.emailAddress') }}</a></dd>
                                    <dt class="sr-only">{{ $t('URL') }}</dt>
                                    <dd class="sr-only"><a class="url" href="https://nayra.coop/">{{ $t('vCard.urlName') }}</a></dd>
                                </dl>
                                <p class="org sr-only">{{ $t('companyLegalName') }}</p>
                            </div>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
        <Map class="map" style="height: 400px;"/>
    </section>
</template>

<script>
import Map from '../components/snippets/Map'

export default {
  components: {
    Map
  },
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
