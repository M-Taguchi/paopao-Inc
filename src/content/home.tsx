import { Layout } from "../Layout"
import { css } from "hono/css"

export const Home = () => {
    const style = css`
        color: red;
    `
    return (
        <Layout title="Home">
            <div class={style}>Homeページあるよ！</div>
        </Layout>
    )
}