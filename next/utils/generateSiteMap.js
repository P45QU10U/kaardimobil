const fs = require('fs')
const globby = require('globby')
const prettier = require('prettier')

const domain = 'homecano.fr'

async function generateSiteMap() {
  const pages = await globby([
    'pages/**/*.js',
    '!pages/_*.js', // On évince avec un bang !
    '!pages/**/[id].js',
    '!pages/api',
  ])

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map((page) => {
        const path = page.replace('pages', '').replace('.js', '').replace('.md', '')
        const route = path === '/index' ? '' : path

        return `<url>
          <loc>${`https://${domain}${route}`}</loc>
        </url>`
      })
      .join('')}
  </urlset>
  `

  const formatted = prettier.format(sitemap, {
    parser: 'html',
  })

  fs.writeFileSync('public/sitemap.xml', formatted)
}

generateSiteMap()
