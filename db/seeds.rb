dashboard_article1 = Article.create(name: 'Geen Data beschikbaar, maar er is wel degelijk data.',
                                    description: 'Toont je Dashboard page aan dat je geen data beschikaar hebt? Bekijk dan
  deze FAQ om het op te lossen als je wel degelijk data hebt upgeload.',
                                    status: 2,
                                    content: [
                                      { locale: 'nl', title: 'Mijn artikel', content: '<h1>Mijn artikel</h1>' },
                                      { locale: 'en', title: 'My article', content: '<h1>Mijn artikel</h1>' }
                                    ])
dashboard_article1.groups.create(([{ name: 'Dashboard', description: 'FAQ related to Dashboard' }]))
