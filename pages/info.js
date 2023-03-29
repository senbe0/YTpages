import SiteTitle from "components/SiteTitle.js";
import Link from "next/link";
import Copyright from "components/Copyright.js";


function Info () {
    return (
        <div>
          <div className="menu-container">
            <SiteTitle />
            <Menu />
          </div>
          <hr/>
          <div className="info-desc">
            <Description />
          </div>
          <hr/>
          <div className="copyright">
          <Copyright />
          </div>
        </div>
    )
}


const Menu = () => {
    return (
      <nav>
          <ul className="menubar">
              <li className="menu"><Link href="/" className="can-selectMenu">Home</Link></li>
              <li className="menu"><Link href="/group/hololive" className="can-selectMenu">ホロライブJP</Link></li>
              <li className="menu">準備中</li>
              <li className="menu">準備中</li>
              <li className="menu">Info</li>
          </ul>
      </nav>
    );
}


const Description = () => {
    return (
        <div>
            <h2>当サイトについて</h2>
            <p>現在試験運用中の為、頻繁にサイトが落ちる可能性があります。ご了承ください。他のVtuberグループに関しては順次追加予定です。ほそぼそと運用していくので、アップデート等遅いと思いますが、悪しからずご容赦ください。</p>
            <p>また、同時接続者数ですが、大きく誤差が生じることがあります。あくまで目安としてご参考下さい。</p>
            <p>当サイトで紹介されている、配信、動画、その他画像等のコンテンツの著作権等は、配信者様とその運営会社様に帰属しております。当サイトは非公式の情報収集サイトであり、公式とは何ら関係ありません。従って、配信内容や、動画コンテンツの内容などに関するお問い合わせには、お答え致しかねます。</p>
            <h2>その他</h2>
            <p>何か連絡がございましたら、twitterにご連絡下さい。片手間に運用してます故、返信が遅れることがございます。</p>
        </div>
    )
}

export default Info
