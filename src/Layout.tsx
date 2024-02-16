import { Style } from 'hono/css' 
import { resetCss } from './resetCss'

export const Layout = (props: { title: string; children?: any }) => {
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{props.title}</title>
        <Style>
        {resetCss}
        </Style>
      </head>
      <body>
        {props.children}
      </body>
    </html>
    )
}