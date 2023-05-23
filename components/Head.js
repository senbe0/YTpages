import Head from "next/head"
import Script from 'next/script'

const Head_site = () => {
    return (
        <div>
            <Head>
                <title>Hololive同時接続者数 リアルタイム シンプルUI</title>
                <meta name="description" content="ホロライブの同時接続者数ランキングをチェックする。シンプルなUIで、勢いのあるライブが一目で分かる。" />
                <link rel="icon" href="/webicon.jpg" />
            </Head>

            {/* Google Analytics */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-G6BYLQRKYW"
                strategy="afterInteractive"
            />
            <Script strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-G6BYLQRKYW');
                `}
            </Script>
        </div>
    )
}

export default Head_site
