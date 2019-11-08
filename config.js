module.exports = {
  title: '45AIR Cloud Status',
  name: 'air_status',
  description: '45AIR Cloud Status',
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
  webpush: {
    onesignal: {
      appId: '66906c90-6121-42e1-ab3a-135d1ba8f5ce'
    }
  },
  support: {
    en: 'https://www.45air.com/support',
  }
};
