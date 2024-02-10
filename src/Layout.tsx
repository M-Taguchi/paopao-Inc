import { html } from 'hono/html'
import { Style } from 'hono/css' 

export const Layout = (props: { title: string; children?: any }) => {
  return html`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${props.title}</title>
        ${Style()}
      </head>
      <body>
        ${props.children}
      </body>
    </html>`
}