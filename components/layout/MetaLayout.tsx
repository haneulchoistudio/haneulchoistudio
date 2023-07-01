import Head from 'next/head';
import { MetaOption } from 'types';

type MetaLayoutProps = MetaOption;

const MetaLayout: React.FC<MetaLayoutProps> = ({
    title,
    description,
    image,
    keywords,
}) => {
    return (
        <Head>
            {/* image */}
            <meta name="og:image" property={image} />
            {/* keywords */}
            <meta name="keywords" property={keywords.join(', ')} />
            {/* description */}
            <meta name="og:description" property={description} />
            <meta name="description" property={description} />
            {/* title */}
            <meta name="og:title" property={title} />
            <title>{title}</title>
        </Head>
    );
};

export default MetaLayout;
