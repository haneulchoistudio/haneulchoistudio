import { twMerge } from 'tailwind-merge';
import Style from './__h4.module.css';

interface H4Props {
    className?: string;
    children: React.ReactNode;
}

const H4: React.FC<H4Props> = ({ className = '', children }) => {
    return <h4 className={twMerge(Style.main, className)}>{children}</h4>;
};

export default H4;
