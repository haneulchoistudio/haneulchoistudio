import Style from './__pagelink.module.css';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface PageLinkProps {
    href?: string;
    className?: string;

    children?: React.ReactNode;
}

const PageLink: React.FC<PageLinkProps> = ({
    href,
    className = '',
    children,
}) => {
    return (
        <Link href={href} className={twMerge(Style.main, className)}>
            {children}
        </Link>
    );
};

export default PageLink;
