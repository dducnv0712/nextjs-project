import Head from 'next/head'
import {useRouter} from 'next/router'

export default function Header({title, desc, img, href}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="description" content={desc}/>
                <meta itemProp="image" content={img}/>
                <meta name="p:domain_verify" content="bfb41b683c277f1dc8778c72d5670429"/>
                <link rel="icon" type="image/png"
                      href="https://uploads-ssl.webflow.com/612a3d9cd9c35344a2460d68/61b2181355e88e77082f397d_Myloc.svg"/>
                <link rel="icon" type="image/png"
                      href="https://uploads-ssl.webflow.com/612a3d9cd9c35344a2460d68/61b2181355e88e77082f397d_Myloc.svg"/>
                <meta name="robots"
                      content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
                {/*<link rel="canonical" href={href} />*/}
                <meta name="google" content="nositelinkssearchbox"/>
                <meta property="og:locale" content="vi_VN"/>
                <meta property="og:type" content="article"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={href}/>
                <meta name="copyright" content="Dduc NV"/>
                <meta name="author" content="Dduc NV, dduc7th.dec@gmail.com"/>
                <meta property="og:description"
                      content={desc}/>
                <meta property="og:image" content={img}/>
                <meta property="og:site_name" content="7th.Dec Hệ Điều Hành"/>
                <meta name="geo.region" content="VN-HN"/>
                <meta name="geo.placename" content="Hà Nội"/>
                <meta name="geo.position" content="21.001563, 105.797235"/>
                <meta name="ICBM" content="21.001563, 105.797235"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content={title}/>
                <meta property="twitter:url" content={href}/>
                <meta name="twitter:description"
                      content={desc}/>
                <meta name="twitter:image" content={img}/>
                <meta name="fb:page_id" content="NVD_7th.dec"/>
                <meta property="fb:app_id" content="NVD_7th.dec" />
                <meta name="twitter:site" content="@dducnv0712"/>
                <meta name="og:email" content="dduc7th.dec@gmail.com"/>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-QZ8BL2S9FF"/>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-QZ8BL2S9FF', { page_path: window.location.pathname });
                    `,
                    }}
                />
                <script async src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"/>

            </Head>


        </>
    )
}