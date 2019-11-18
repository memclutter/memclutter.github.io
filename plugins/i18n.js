export default ({ app, store }) => {
  // TODO use rtl locales if needed
  const rtlLocales = []

  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    app.vuetify.rtl = rtlLocales.includes(newLocale)
  }
}
