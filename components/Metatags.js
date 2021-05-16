import Head from 'next/head';

export default function Metatags({
    title = 'DEVIUM ',
    description = 'Best place to post about web development and related technologies',
    image = 'https://scontent.fbeg4-1.fna.fbcdn.net/v/t1.18169-9/29541898_1619908894744944_7289498705617795132_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=973b4a&_nc_ohc=bOb5u0RedU4AX_s7NLg&_nc_ht=scontent.fbeg4-1.fna&oh=c6d11dddc5cf5cc273d9c04b3cbbf7f8&oe=60C51E28',
}) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@dev-david-s" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
        </Head>
    );
}