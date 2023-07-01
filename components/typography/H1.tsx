import { twMerge } from 'tailwind-merge';
import Style from './__h1.module.css';

interface H1Props {
    className?: string;
    children: React.ReactNode;
}

const H1: React.FC<H1Props> = ({ className = '', children }) => {
    return <h1 className={twMerge(Style.main, className)}>{children}</h1>;
};

export default H1;
