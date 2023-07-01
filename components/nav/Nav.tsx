import { twMerge } from 'tailwind-merge';
import Style from './__nav.module.css';

interface NavProps {
    children: React.ReactNode;
    className?: string;
}

const Nav: React.FC<NavProps> = ({ children, className = '' }) => {
    return (
        <nav className={twMerge(Style.main, className)}>
            <section className={twMerge(Style.wrap, '')}>{children}</section>
        </nav>
    );
};

export default Nav;
