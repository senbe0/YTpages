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
          <li className="menu"><Link href="/group/jp" className="can-selectMenu">Home</Link></li>
          <li className="menu"><Link href="/group/jp" className="can-selectMenu">JP</Link></li>
          <li className="menu"><Link href="/group/en" className="can-selectMenu">EN</Link></li>
          <li className="menu"><Link href="/group/id" className="can-selectMenu">ID</Link></li>
          <li className="menu">Info</li>
      </ul>
  </nav>
    );
}


const Description = () => {
    return (
        <div>
            <h2>Info</h2>
            <p>当サイトは、サーバーの再起動時、登録されているvtuberの配信情報の更新に遅延が生じ、一部配信がリストされないことがあります。時間がたつと復旧し、全ての配信がリストされるように戻ります。</p>
            <p><strong>現在試験運用中の為、頻繁にサイトが停止する可能性があります。</strong></p>
            <p>大規模アクセスが想定されていない為、混雑時にサイトが停止する可能性があります。ご了承ください。</p>
            <p>当サイトは、同時接続者数取得の際に外部のAPIを使用していません。当サイトは公に公開されている情報を、集計しています。その為、大きく誤差が生じることがあります。</p>
            <p>当サイトは、情報の集計に際し、youtube或いは外部サイトに通常利用以上のリクエストを送信していません。日本国の法律の範囲内で情報を収集しております。</p>
            <p>当サイトは他社の業務の妨害を目的とするサイトではありません。</p>
            <p>当サイトは過度な営利を目的とするサイトではありません。</p>
            <p>サーバー保守費用が高額である為、広告を記載しています。ご理解ください。</p>
            <p>当サイトで紹介されている、配信、動画、その他画像等のコンテンツの著作権等は、配信者様とその運営会社様に帰属しております。当サイトは非公式の情報収集サイトであり、公式とは一切関係ありません。</p>
            <p>当サイトは、当サイトをきっかけとし、youtubeの利用、或いは紹介されているvtuberに対する応援を支援するものです。</p>
            <h2>その他</h2>
            <p>手動でvtuberの登録を行っております。漏れが生じている場合はご連絡ください。</p>
            <p>何か連絡がございましたら、twitterにご連絡下さい。個人で片手間に運用してます故、返信が遅れることがございます。ご了承ください。</p>
        </div>
    )
}

export default Info
