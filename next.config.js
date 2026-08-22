/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standalone output → imagen Docker portable (Coolify/Railway/Render/Fly).
  output: 'standalone',
  async headers() {
    return [
      {
        // La home es contenido estático (sin fetch), así que Next la mete en
        // el Full Route Cache. Combinado con un proxy/navegador que también
        // cachea el HTML, un redeploy podía seguir sirviendo contenido
        // anterior. Forzamos no-store aquí para que cada despliegue se vea
        // reflejado de inmediato (ver `revalidate = 0` en app/page.tsx).
        source: '/',
        headers: [
          { key: 'Cache-Control', value: 'no-store, must-revalidate' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        // www.jjpg.dev had no DNS record at all, so it resolved to NXDOMAIN for
        // anyone who typed it and Search Console kept both www variants parked
        // in "Crawled - currently not indexed". Once the record exists and
        // Coolify routes the host, this folds www onto the apex with a 308 so
        // there is one canonical origin instead of two.
        source: '/:path*',
        has: [{ type: 'host', value: 'www.jjpg.dev' }],
        destination: 'https://jjpg.dev/:path*',
        permanent: true,
      },
      {
        // /services queda despriorizada del sitio (fuera del nav, la home y
        // el sitemap) pero el código (page.tsx, ServicesClient, diccionario)
        // se conserva por si se retoma más adelante. Este redirect impide
        // que la ruta sirva contenido mientras tanto.
        source: '/services',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
