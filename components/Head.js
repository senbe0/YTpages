import Head from "next/head"


const Head_site = () => {
    return (
        <div>
            <Head>
                <title>Hololive同時接続者数 リアルタイム シンプルUI</title>
                <meta name="description" content="Holiveの同時接続者数ランキングをチェックする。シンプルなUIで、勢いのあるライブが一目で分かる。" />
                {/* Google Analytics */}
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-G6BYLQRKYW"
                />
                <script
                    dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-G6BYLQRKYW');
                `,
                }}
                />
            </Head>
        </div>
    )
}


export default Head_site