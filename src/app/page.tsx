import "beercss";
import Image from "next/image";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { classNames } from "@/classnames";
import styles from "./page.module.css";

const strengths = [
  {
    image: "/ai_operation.jpeg",
    imageAlt: "AIを含むシステムのイメージ" ,
    title: "機械学習モデルの本番運用",
    content: "負荷分散、可観測性などを考慮して機械学習モデルを運用",
  },
  {
    image: "/supercar.jpeg",
    imageAlt: "高速化を表すスーパーカーのイメージ",
    title: "高速化",
    content: "学習プロセスやサービングにおけるボトルネックを可視化し、処理にかかる時間を削減",
  },
  {
    image: "/graphs.jpeg",
    imageAlt: "可視化されたデータを表すグラフのイメージ",
    title: "実データの可視化・分析",
    content: "既存のデータセット、評価指標では捉えきれていない特徴を見出し、現実に存在する課題を発見する",
  },
  {
    image: "/legacy_system.jpeg",
    imageAlt: "レガシーシステムのイメージ",
    title: "レガシーシステムの改善",
    content: "テストの追加、デプロイ自動化、Kubernetes化などの運用のモダナイゼーションを遂行",
  },
]

const career = [
  {
    year: "2018–2019",
    organization: "yodayoda, Inc.",
    work: "iOSアプリ・サーバ開発。PjMとしてエンジニアリングチームをリード",
  },
  {
    year: "2018, 2019–2021",
    organization: "京都大学 黒橋研究室",
    work: "RAGを用いた日英翻訳モデルの改善を研究（修士卒）",
  },
  {
    year: "2021–現在",
    organization: (<><span>LINE Corp. →</span><br /><span>LINE WORKS Corp.</span></>),
    work: "音声認識モデルの運用改善、OCRモデルの研究開発、LLMを用いたアプリケーション開発など",
  },
];

const posts = [
  {
    title: "ISUCON13、久々の現地参加してきました（百万円ドリブン：11位）",
    link: "https://nakario.hateblo.jp/entry/2023/12/04/002631",
    date: "2023-12-04",
  },
  {
    title: "ISUCON12予選突破できず無念",
    link: "https://nakario.hateblo.jp/entry/2022/07/31/162601",
    date: "2022-07-31",
  },
  {
    title: "ISUCON11-priorやってみた",
    link: "https://nakario.hateblo.jp/entry/2021/08/11/004103",
    date: "2021-08-11",
  },
  {
    title: "ISUCON10本戦5位でした＆感想戦88000点",
    link: "https://nakario.hateblo.jp/entry/2020/10/13/205802",
    date: "2020-10-13",
  },
  {
    title: "実力を発揮できたと感じるISUCON10予選(百万円ドリブン:21位)",
    link: "https://nakario.hateblo.jp/entry/2020/09/13/120707",
    date: "2020-09-13",
  },
  {
    title: "LSPから派生したLanguage Server Index Formatとは何か",
    link: "https://qiita.com/nakario/items/2a73065a1bc1540c1f00",
    date: "2020-04-01",
  },
  {
    title: "Go Modules時代の静的解析",
    link: "https://qiita.com/nakario/items/737177a9472d7ac9c2fd",
    date: "2019-12-04",
  },
  {
    title: "学生枠、今までありがとう #ISUCON9",
    link: "https://nakario.hateblo.jp/entry/2019/09/09/231122",
    date: "2019-09-09",
  },
  {
    title: "isucon8本戦に参加してきた",
    link: "https://nakario.hateblo.jp/entry/2018/10/27/232731",
    date: "2018-10-27",
  },
  {
    title: ".ioドメイン2017年のまとめ",
    link: "https://qiita.com/nakario/items/e157c8d80eb0b3c2ff58",
    date: "2018-01-05",
  },
  {
    title: "ISUCON7本戦に学生枠で参加してきた & こうしていれば優勝できたかもしれない方法",
    link: "https://nakario.hateblo.jp/entry/2017/12/10/003006",
    date: "2017-12-10",
  },
]

export default function Home() {
  return (
    <>
      <div className="responsive center-align">
        <div className="center-align grey7 large-padding">
            <div className={classNames(
              styles.hero,
              "middle-align center-align"
            )}>
              <h1 className="center-align">nakario</h1>
            </div>

            <div>
              <h5 className="center-align">Research Engineer</h5>
            </div>

            <div className="small-space" />

            <div className="center-align middle-align">
              <nav className="center-align middle-align">
                <a href="https://github.com/nakario" className="center-align middle-align">
                  <i className="small">
                    <FontAwesomeIcon icon={faGithub} />
                  </i>
                  <span className="left-margin tiny-margin large-text">nakario</span>
                </a>
                <a href="mailto:nakario.jp@gmail.com" className="center-align middle-align">
                  <i className="small">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </i>
                  <span className="left-margin tiny-margin large-text">nakario.jp@gmail.com</span>
                </a>
              </nav>
            </div>
          </div>
      </div>
      <main className="responsive center-align white-text">

        <div className="large-space" />

        <section>
          <h2 className="center-align">自己紹介</h2>
          <div className="grid">
            <div className="s1 l2" />
            <div className="s10 l8">
              <span>
                研究の成果物を世に出したり、その過程を効率化することに重きを置くリサーチエンジニア。
                自然言語処理、音声認識ときて最近はOCRとLLMも業務で担当中。
                プログラミング言語はサーバーサイドやCLIにはGoを、書き捨てのスクリプトや機械学習にはPythonをメインに使用。
                データの可視化やGUIでの操作が必要な際にはTypeScript (+HTML/CSS)を使うことも。
                趣味は難解プログラミング言語の作成。
              </span>
            </div>
          </div>
        </section>

        <div className="large-space" />

        <section>
          <h2 className="center-align">得意なこと</h2>
          <div className="s">
          {
              strengths.map(a => (
                <article key={a.title} className="no-padding">
                  <div className="">
                    <Image className="responsive small-height" src={a.image} alt="" width={640} height={480} />
                  </div>
                  <div className="small-height padding">
                    <h5 className="center-align">{a.title}</h5>
                    <p>{a.content}</p>
                  </div>
                </article>
              ))
            }
          </div>
          <div className="m l grid">
            {
              strengths.map(a => (
                <article key={a.title} className="m12 l6 no-padding no-margin small-height">
                  <div className="grid no-space">
                    <div className="s6">
                      <Image className="responsive small-height" src={a.image} alt={a.imageAlt} fill={true} />
                    </div>
                    <div className="s6 padding left-align">
                      <h5>{a.title}</h5>
                      <p>{a.content}</p>
                    </div>
                  </div>
                </article>
              ))
            }
          </div>
        </section>

        <div className="large-space" />

        <section>
          <h2 className="center-align">ポスト</h2>
          <div className="grid">
            <div className="m1 l2" />
            <div className="s12 m10 l8 small-height scroll">
              <table className="stripes">
                <tbody>
                  {
                    posts.map(p => (
                      <tr key={p.title}>
                        <td>
                          <a href={p.link}>{p.title}</a>
                        </td>
                        <td className={styles["min-bugfix"]}>{p.date}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <div className="large-space" />

        <section>
          <h2 className="center-align">経歴</h2>
          <div className="grid">
            <div className="s0 m1 l2" />
            <table className="s12 m10 l8 stripes">
              <thead>
                <tr>
                  <th className={styles["min-bugfix"]}>年</th>
                  <th className={styles["min-bugfix"]}>所属</th>
                  <th>業績</th>
                </tr>
              </thead>
              <tbody>
                {
                  career.map(position => 
                    <tr key={position.year}>
                      <td className={styles["min-bugfix"]}>{position.year}</td>
                      <td className={styles["min-bugfix"]}><div>{position.organization}</div></td>
                      <td>{position.work}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </section>

        <div className="large-space" />

      </main>
      <div className="center-align">
        <p>© 2024 nakario</p>
      </div>
    </>
  );
}
