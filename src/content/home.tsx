import { css } from "hono/css";
import { Layout } from "../Layout";
import {
  fadeInAnmation,
  fadeInOutAnimation,
  slideBottomFadeInAnimation,
} from "../animation";
import { primary } from "../color";

export const Home = () => {
  const firstViewImage = css`
    position: absolute;
    z-index: calc(infinity);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-name: ${fadeInOutAnimation};
    animation-duration: 2s;
    animation-fill-mode: forwards;
  `;
  const sideImage = css`
    display: inline-block;
    position: fixed;
    top: 50%;
    z-index: calc(infinity);
    transform: translateY(-50%);
    opacity: 0;
    animation-name: ${fadeInAnmation};
    transition: all 1.3s 0s ease-out;
    animation-duration: 2s;
    animation-delay: 2s;
    animation-fill-mode: forwards;
  `;
  const main = css`
    padding-left: 48px;
    padding-right: 48px;
    width: 100%;
    height: 100%;
    background-color: ${primary[50]};
  `;
  const flex = css`
    display: flex;
    justify-content: center;
  `;
  const text = css`
    background: url(${import.meta.env.PROD ? "." : "public"}/frame.svg)
      no-repeat;
    background-size: 512px 300px;
    width: 512px;
    height: 300px;
    text-align: center;
    padding: 24px;
    animation-name: ${slideBottomFadeInAnimation};
    opacity: 0;
    transition: all 1.3s 0s ease-out;
    animation-duration: 2s;
    animation-delay: 2s;
    animation-fill-mode: forwards;
  `;
  const box = css`
    height: 16px;
  `;
  const textAlignLeft = css`
    text-align: left;
  `;
  const indent = css`
    text-align: left;
    display: flex;
  `;
  const width100 = css`
    width: 100px;
  `;

  return (
    <Layout title="Home">
      <div>
        <img
          class={firstViewImage}
          src={`${import.meta.env.PROD ? "." : "public"}/paopao-face.png`}
          width={512}
          height={512}
          alt="パオパオちゃんの顔"
        />
        <img
          class={sideImage}
          src={`${import.meta.env.PROD ? "." : "public"}/paopao-fulllength.png`}
          width={300}
          alt="パオパオちゃんの全身"
        />
        <div class={main}>
          {/* 執筆した本の紹介 */}
          <div class={flex}>
            <div class={text}>
              <h2>今まで書いた本</h2>
              <div class={box} />
              {/*<img
                src={`${
                  import.meta.env.PROD ? "." : "public"
                }/bun_hyoshi_v1_online.png`}
                height={300}
                alt="技術書展16の表紙"
              />*/}
            </div>
          </div>
          {/* コンタクト */}
          <div class={flex}>
            <div class={text}>
              <h2>お問い合わせ</h2>
              <div class={box} />
              <p class={indent}>
                <span class={width100}>サークル名:</span>
                馬主に飼われてます
              </p>
              <p class={indent}>
                <span class={width100}>EMAIL:</span>
                banushi.slaves@gmail.com
              </p>
              <p class={indent}>
                <span class={width100}>X:</span>
                <a
                  href="https://twitter.com/paopao_web"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://twitter.com/paopao_web
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
