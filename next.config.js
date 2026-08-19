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
