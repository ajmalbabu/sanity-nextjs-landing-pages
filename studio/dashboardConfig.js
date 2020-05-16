export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebf49d35ae70a2ccb859d1d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-3s8b1h86',
                  apiId: '06ce6e7d-8bac-4534-8bf0-3af117612b9d'
                },
                {
                  buildHookId: '5ebf49d358e878f0ce4bb3b3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-y2qh84ga',
                  apiId: 'a5c548a2-f55b-4404-aab8-50ff08b5ad68'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ajmalbabu/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-y2qh84ga.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
