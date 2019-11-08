module.exports = {
  title: '45AIR Cloud Status',
  name: 'air_status',
  description: '45AIR cloud hosting status page',
  baseUrl: 'https://status.air-cloud.app',
  defaultLocale: 'en',
  locales: [
    { code: 'en', iso: 'en-US', name: 'English' }
  ],
  content: {
    systems: [
      'customer-portal',
      'gitlab',
      'pipeline',
      'api'
    ]
  },
  notification: {
    webpush: {
      onesignal: {
        appId: '66906c90-6121-42e1-ab3a-135d1ba8f5ce'
      }
    },
  },
  theme: {
    links: {
      en: {
        contact: 'https://www.45air.com/contact',
        support: 'https://www.45air.com/support',
        home: 'https://status.air-cloud.app'
      }
    }
  }
};
