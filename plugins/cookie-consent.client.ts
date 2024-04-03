import { defineNuxtPlugin } from '#app'
import 'vanilla-cookieconsent/src/cookieconsent.css'
import 'vanilla-cookieconsent/src/cookieconsent.js'

export default defineNuxtPlugin(nuxtApp => {
  // const cc = window.initCookieConsent()
  //
  // // run plugin with your configuration
  // cc.run({
  //   current_lang: 'es',
  //   languages: {
  //     es: {
  //       consent_modal: {
  //         title: 'Esta web use cookies de terceros',
  //         description: 'Para mejorar su experiencia de navegación, esta web utiliza cookies de terceros. Al continuar navegando, acepta su uso. Puede cambiar la configuración u obtener más información en nuestra <a href="/cookies">Política de Cookies</a>.',
  //         primary_btn: {
  //           text: 'Accept',
  //           role: 'accept_all'      // 'accept_selected' or 'accept_all'
  //         },
  //         secondary_btn: {
  //           text: 'Settings',
  //           role: 'settings'        // 'settings' or 'accept_necessary'
  //         }
  //       },
  //       settings_modal: {
  //         title: 'Cookie preferences ...',
  //         save_settings_btn: 'Save settings',
  //         accept_all_btn: 'Accept all',
  //         blocks: [
  //           {
  //             title: 'First block title ...',
  //             description: 'First block description ...'
  //           }, {
  //             title: 'Second block title ...',
  //             description: 'Second block description ...',
  //             toggle: {
  //               value: 'my_category1',
  //               enabled: true,
  //               readonly: true
  //             }
  //           }, {
  //             title: 'Third block title ...',
  //             description: 'Third block description ...',
  //             toggle: {
  //               value: 'my_category2',
  //               enabled: false,
  //               readonly: false
  //             }
  //           }
  //         ]
  //       }
  //     }
  //   }
  //   // page_scripts: true,                        // default: false
  //
  //   // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
  //   // delay: 0,                               // default: 0
  //   // auto_language: '',                      // default: null; could also be 'browser' or 'document'
  //   // autorun: true,                          // default: true
  //   // force_consent: false,                   // default: false
  //   // hide_from_bots: true,                   // default: true
  //   // remove_cookie_tables: false             // default: false
  //   // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
  //   // cookie_expiration: 182,                 // default: 182 (days)
  //   // cookie_necessary_only_expiration: 182   // default: disabled
  //   // cookie_domain: location.hostname,       // default: current domain
  //   // cookie_path: '/',                       // default: root
  //   // cookie_same_site: 'Lax',                // default: 'Lax'
  //   // use_rfc_cookie: false,                  // default: false
  //   // revision: 0,                            // default: 0
  //
  //   // onFirstAction: function (user_preferences, cookie) {
  //   //   // callback triggered only once on the first accept/reject action
  //   // },
  //   //
  //   // onAccept: function (cookie) {
  //   //   // callback triggered on the first accept/reject action, and after each page load
  //   // },
  //   //
  //   // onChange: function (cookie, changed_categories) {
  //   //   // callback triggered when user changes preferences after consent has already been given
  //   // }
  // })
})
