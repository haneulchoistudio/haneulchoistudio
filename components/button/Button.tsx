import { twMerge } from 'tailwind-merge';
import Style from './__button.module.css';

interface ButtonProps {
    className?: string;
    children: React.ReactNode;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
    className = '',
    children,
    onClick,
}) => {
    return (
        <button className={twMerge(Style.main, className)} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
