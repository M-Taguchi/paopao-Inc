import { css } from 'hono/css'
export const resetCss = css`
*,*::before,*::after{box-sizing:border-box}html{-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}body,h1,h2,h3,h4,p,figure,blockquote,dl,dd{margin:0}ul[role='list'],ol[role='list']{list-style:none}body{min-height:100vh;line-height:1.5}h1,h2,h3,h4,button,input,label{line-height:1.1}h1,h2,h3,h4{text-wrap:balance}a:not([class]){text-decoration-skip-ink:auto;color:currentColor}img,picture{max-width:100%;display:block}input,button,textarea,select{font:inherit}textarea:not([rows]){min-height:10em}:target{scroll-margin-block:5ex}
`