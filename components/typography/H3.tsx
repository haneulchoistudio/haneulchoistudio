import { twMerge } from 'tailwind-merge';
import Style from './__h3.module.css';

interface H3Props {
    className?: string;
    children: React.ReactNode;
}

const H3: React.FC<H3Props> = ({ className = '', children }) => {
    return <h3 className={twMerge(Style.main, className)}>{children}</h3>;
};

export default H3;
