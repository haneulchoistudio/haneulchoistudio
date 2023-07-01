import { twMerge } from 'tailwind-merge';
import Style from './__p.module.css';

interface PProps {
    className?: string;
    children: React.ReactNode;
}

const P: React.FC<PProps> = ({ className = '', children }) => {
    return <p className={twMerge(Style.main, className)}>{children}</p>;
};

export default P;
