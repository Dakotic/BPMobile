new Vue({
  el: '#row',
  data: function () {
      return {
          lang : document.documentElement.lang
      }
  },

  components: {
    'en': {
      template: `<div>
                   <h1>keep Private
                    Photos & Videos
                    Secure</h1>
                   <h2>7-Day Free Trial</h2>
                 </div>`
    },
    'es': {
      template: `<div>
                   <h1>Mantén Seguras Tus Fotos
                    y Vídeos
                    Privados
                    </h1>
                   <h2>Prueba gratuita de 7 días</h2>
                 </div>`
    },
    'de': {
      template: `<div>
                   <h1>Halten Sie Ihre privaten
                    Fotos & Videos
                    geheim
                    </h1>
                   <h2>7-tägige Gratis-Version</h2>
                 </div>`
    },
    'fr': {
      template: `<div>
                   <h1>Protégez Vos Photos
                    et Vidéos
                    Privées
                   </h1>
                   <h2>7 jours d'essai gratuit</h2>
                 </div>`
    },
    'ja': {
      template: `<div>
                   <h1>プライベート写真と
                    動画を安全に
                    保つ
                    </h1>
                   <h2>日間無料トライアル</h2>
                 </div>`
    },
    'it': {
      template: `<div>
                   <h1>Tieni al Sicuro i Tuoi
                      Video e Foto
                      Private
                    </h1>
                   <h2>Prova gratuita di 7 giorni</h2>
                 </div>`
    },
    'ru': {
      template: `<div>
                   <h1>Держите Личные Фото и Видео
                    под Надежной
                    Защитой
                   </h1>
                   <h2>7-дневная пробная версия</h2>
                 </div>`
    }
  }
})
