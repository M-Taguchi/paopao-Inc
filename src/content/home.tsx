import { css } from "hono/css";
import { Layout } from "../Layout";
import {
  fadeInAnimation,
  fadeInOutAnimation,
  slideBottomFadeInAnimation,
} from "../animation";
import { primary } from "../color";

export const Home = () => {
  const afterContentAnimation = css`
    animation-name: ${slideBottomFadeInAnimation};
    opacity: 0;
    transition: all 1.3s 0s ease-out;
    animation-duration: 2s;
    animation-delay: 2s;
    animation-fill-mode: forwards;
  `;
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
  const main = css`
    padding-left: 48px;
    padding-right: 48px;
    width: 100%;
    background-color: ${primary[50]};
  `;
  const flex = css`
    display: flex;
    justify-content: center;
  `;
  const text = css`
    width: 512px;
    text-align: center;
    padding: 24px;
    margin-inline: auto;
    ${afterContentAnimation};
  `;
  const border = css`
    background: url(${import.meta.env.PROD ? "." : "public"}/border.svg)
      no-repeat;
    width: 561px;
    height: 129px;
    margin-inline: auto;
    ${afterContentAnimation};
  `;
  const box = css`
    height: 16px;
    margin-inline: auto;
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
  const cover = css`
    display: block;
    width: fit-content;
    margin-inline: auto;
    box-shadow: -6px 6px 10px -2px #001b4440, 0 0 3px #8f9aaf1a;
  `;
  const character = css`
    text-align: center;
  `;
  const profile = css`
    margin-inline: auto;
    margin-top: 24px;
    ${afterContentAnimation};
  `;
  const face = css`
    margin-inline: auto;
    margin-bottom: 20px;
    border-radius: 50%;
    border: 4px solid #f3e8e8;
  `;

  return (
    <Layout title="Home">
      <div>
        {/* 初期表示用：一定時間後に非表示 */}
        <img
          class={firstViewImage}
          src={`${import.meta.env.PROD ? "." : "public"}/paopao-fulllength.png`}
          width={512}
          height={726}
          alt="パオパオちゃんの全身"
        />
        <div class={main}>
          {/* 執筆した本の紹介 */}
          <div class={flex}>
            <div class={text}>
              <h2>今まで書いた本</h2>
              <div class={box} />
              <a
                class={cover}
                href="https://techbookfest.org/product/37NM6Jnb5Hz0jy0fhXdvh6"
              >
                <img
                  src={`${
                    import.meta.env.PROD ? "." : "public"
                  }/bun_hyoshi_v1_online.png`}
                  width={240}
                  height={338}
                  alt="技術書展16の表紙"
                />
              </a>
            </div>
          </div>
          {/*登場人物*/}
          <div class={border} />
          <div class={text}>
            <h2>登場人物</h2>
            <div class={character}>
              <div class={profile}>
                <img
                  src={`${
                    import.meta.env.PROD ? "." : "public"
                  }/paopao-face.png`}
                  class={face}
                  alt="パオパオちゃん"
                  width="150px"
                  height="150px"
                />
                <p class={textAlignLeft}>
                  フロントエンド開発が好きな上海出⾝の⼥の⼦。⽇本に留学して情報⼯学を勉強中。好きな⾷べ物は⾁まんと桃まん。将来の夢はOSSコントリビュートすることと、過去の常識を置き去りにした⾁まんを開発すること。
                </p>
              </div>
              <div class={profile}>
                <img
                  src={`${import.meta.env.PROD ? "." : "public"}/paoz-face.png`}
                  class={face}
                  alt="パオズ"
                  width="150px"
                  height="150px"
                />
                <p class={textAlignLeft}>
                  パオパオちゃんのママが開発した⾃律思考型AI。⾃称Bunの妖精。⼈に教えるのが好きでよくしゃべる。パオパオちゃんと仲良し。
                </p>
              </div>
            </div>
          </div>
          <div class={border} />
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
