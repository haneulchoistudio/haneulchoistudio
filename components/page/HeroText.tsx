import { twMerge } from 'tailwind-merge';
import H2 from '../typography/H2';
import Style from './__herotext.module.css';
interface HeroTextProps {
    title?: string;
}

const HeroText: React.FC<HeroTextProps> = ({ title = '' }) => {
    return <H2 className={twMerge(Style.main)}>{title}</H2>;
};

export default HeroText;
