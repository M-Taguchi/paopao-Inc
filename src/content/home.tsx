import { Layout } from "../Layout"
import { css } from "hono/css"

export const Home = () => {
    const style = css`
        color: red;
    `
    const main = css`
        padding-left: 48px;
        padding-right: 48px;
    `
    const flex = css`
        display: flex;
        justify-content: center;
    `
    const text = css`
        background: url(${import.meta.env.PROD ? "." : "public"}/frame.svg) no-repeat;
        background-size: 512px 300px;
        width: 512px;
        height: 300px;
        text-align: center;
        padding: 24px;
    `
    return (
        <Layout title="Home">
            <div class={style}>Homeページあるよ！</div>
            <div class={main}>
              <div class={flex}>
                <div class={text}>
                    <span>
                        紹介文を書く
                    </span>
                </div>
              </div>
            </div>
        </Layout>
    )
}