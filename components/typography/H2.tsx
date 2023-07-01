import { twMerge } from 'tailwind-merge';
import Style from './__h2.module.css';

interface H2Props {
    className?: string;
    children: React.ReactNode;
}

const H2: React.FC<H2Props> = ({ className = '', children }) => {
    return <h2 className={twMerge(Style.main, className)}>{children}</h2>;
};

export default H2;
