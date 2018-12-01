import React, { Component } from 'react'
import './Portfolio.css'

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <div className="container projects">
          <h1 className="text-center">Selected Works</h1>

          <div className="row">
            <div className="col-md-6">
              <p>Rentr App</p>
            </div>
            <div className="col-md-6">
              <a href="https://limitless-thicket-78191.herokuapp.com">
                <img alt="Rentr App" src="https://lh3.googleusercontent.com/Otd2BX3MnNAyaKd5hZmlODdm3O6upniqX3dQKNzqt680JRn3NG1YpavF2n6h3rC45UkvCaopbnZf600SHpMojUlDbO1lCSaYhdkLQ9mK531Rywkk8Cp2DQBm-CFfxzku9DpY86MkucfJtXa6nd9mDpKLAa5xjNco5xZ9WkMV8hz-iQhG9rRLS3WMZU62EX5IdZ305mgDdHCZuul5LrX_hNanXsWp_yc9CgGR0UdKcan_IsFhe59IyOkVlobqpNqTGrIzEayZx1o02dSSn501kAXFzQiUGgDJWdP8t_QoNWXCodjTTMG-UXqP9p-mM9Fdcj9IKCHpXgBsUY49VxV7pOOeD47Cj6P6JmYOFrYfoNSEN6plMAcjdHBoWQsTkhknOD8P5Luqv1FbjV3vx242JDB7eC-ZWTUAI8pQEV0KvoU4hetsTiOG2V8VQ4sZE-cUJuwR5HlsUFv-6NwFEMDDBj7n32_y6M4VyvgcrIkX8qGzJI5V7gST4ihhp_t2Hp7jtNMUdp5WL3tG2CdBnh-C-5iLaU4NJ5vqIDp9pMi6YbiogRt19yOr8ujjsuG9J-lcxTTG714y4K_IjSfdTijn7hRSolfNvWkPUtSsHEtACAEHX1dyvKgpdAssnhg0paHBIMh3ttGnzH7VzAXWxKJwVJ8z=w1556-h1054-no"></img>
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <p>Against the Grain</p>
            </div>
            <div className="col-md-6">
              <a href="http://againsthegrain.co">
                <img alt="atg" src="https://lh3.googleusercontent.com/Gn8sqlg2aMPfCupGQDbzQd7pFJ6e2K_aWBDIrUHm5CDvtsEYL7DSHeXmi40XQ-qvqgrvcvBOEtOt6ROryOL5yuIuDGGMhrGmGSNKZsOkXPldIGSOKgnT1WxsN4TyIZE9tSqbGZTMYM4kcd-AknhE527xRjab-AM9QIY6n7JW0aEyCnMzWrdP0peDxoGmkZIZ0mQKQm4VzCx6l71Schqo6WmrQspO6emEH2QeB2PQSL57p1NV33ByV8gj_m6KqXrJMjN5vIBSGfeCfV8XRUAqp0d34P_2uUSANYiwFjv1_TwGEFCuSSb2fDkht0qAw3-ThGooK8o7jKi_3ZYT72HakFnTw1qMdKqw9wWjLURyT5zoNfDDsAE9UXD24BljBvICBqFksP59napWSRldg3S5FR9AEaeDR6TgWFFu8wxPf1PIt7bdJ5Q-iV_gpQmPkQLF3-FxdJS2LElpaftsu4tVmRR3SJvapqrl6jIfATme0_tfmznXEhOy9TymmuaZkDNHkqSZ5IqiOKHeW-iJd-KrOlSoiUwf9RAR6-C-qyDIpdacRlj50At4KpFqaqQMrM8L5yR_-jm9mpBDMMfN1iUryOdFG7pPBewk6XXGdG3_hk_tdyKEU402usaM9m4pR3EiYaYdzfogpaTGRIPgXUQiWmu8=w1556-h1054-no"></img>
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <p>Dungeons and Dragons Helper tool</p>
            </div>

            <div className="col-md-6">
              <a href="https://aaronsy1.github.io/firstGroupProject/">
                <img alt="DungeonAndDragon" src="https://lh3.googleusercontent.com/nB-OlMRFkbPEUlebMEPZJijyxIkMIAsu92rM9kAyWMJ1qRJ3MqxAB6W1l4rSQDBFbkec1IKWGZVJfLJEVIohaPiDH-xzpFj1PnpiJ43aTwQ6Df4v02qXfZcPs7-LnamaF_SeH1ePB-ryUaQ-mVbI60PAScDPn_gzG0RFRSty4hp1k0a71AE_8UxZtFBsYdNArK9mSp9MTpP6-Ul8ATakDpCbjPmomcZINZLG7aRCV-ii7Jz0uQXpmJsQQrzYZyaFXge63FHtgjTUYB5_iAtPNnwSXxie3WQDCNnh2VCujxDSLlajXi3WKkLab5dfd2R-hv3wVMJM1FgKqb7-V1Gr5d4j6fZAk3GLQiTbu4Pl7wrS5-Zgyve_kpDtJiD69ufDnyCb_YsTNnsoST-64WeHlLe-zHD2FjZHemWJ6-W2n3YdlRafhLG4hWJlMkdHfxpVznzoX20VPOfrYRPQe2oFfGOGlxCMcsN6SRD0LxUNjzEPI0HY95KeZhtwieqOOmMEZHwDcyE_OP_0AMeCxkfWdJ93oxd25GK0xahlEOiNh1tSLfXhsiQxBbqUI659ZtHKOYRchFu2pXCK4SbiqSP69w1vXNHNw4MC3y0VgBpsF4V-qlEAXsa7QfYlBKJ26mn-2v0Lkb7xXpw7lfCIVgk9Rstc=w1556-h1054-no"></img>
              </a>
            </div>

          </div>

          <div className="row">
            <div className="col-md-6">
              <p>Giphy</p>
            </div>
            <div className="col-md-6">
              <a href="https://aaronsy1.github.io/giphy/">
                <img alt="giphy " src="https://lh3.googleusercontent.com/_l5tzxPr9LR821Q-weDdQblv5HmooJhQN56MVZGT7aDU3YyQrG8TZVxDpWH5CrmahP6THA3sXuEKfLXkb6OdYhirr64EdDA6yO_2AjfXC-7pd682l3juo9WdVpj46RnhyvtfrZNCGPlLyvrSjqdbcKvH6t4Eq43BrqOTNcvRQk7PhdDe9CBt4EE6qVkgkSDjOR30wqkuArpzLxQKZp0l6co0jBK8xz9LaZ5Fmw1LimsxsvFL-b1IpoTFI6omLbMZ1nffYeqAacU0CYnbRWforWpBpcYFqLt86F9i19HWWg7RNffMfS1V-4wa_fAIRGzVV4CH_OhfMKM4Nlk5YAiCzwNyXhmoeC1cJj8sGjHKSYAzqPJP8i6BuKFD9QPkAIoIDC57waY8j7gM6GpNkaHY4Bx2c3_ZUrEXTcF7viRDQIhNv0d6h_xjsRn5gqwellUhnIxK4_NM_nQR1VsQC7HgNoh7RMjGolx11bahwdYsQVviK1-OabjzaI75A53h4dz3pIeldvxY-v5wjiq2oxAHYJ7ER4LIFOxHt1bNPSYPXBdpBkUnimswvt0vELJeUyocZXCOYH8ygg9-y4fe4OCMzs1f3526NokXxaecom2rYknjrAaCqGeHcT6v1llLZfPvl1VSJE-vVZPZWfQypf3m4adv=w1556-h1054-no"></img>
              </a>
            </div>
          </div>





        </div>
      </div>
    )
  }
}
