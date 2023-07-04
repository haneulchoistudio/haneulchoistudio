import type { Service } from 'types';
import { twMerge } from 'tailwind-merge';
import Style from './__servicecard.module.css';
import P from '../typography/P';

type ServiceCardProps = Service;

const ServiceCard: React.FC<ServiceCardProps> = ({
    name,
    description,
    keyWords,
}) => {
    return (
        <div className={twMerge(Style.main)}>
            <div className="flex flex-col">
                <span className={twMerge(Style.name)}>{name}</span>
                {keyWords && keyWords.length > 0 && (
                    <ul className={twMerge(Style.keywords)}>
                        {keyWords.map((keyword, idx) => (
                            <P key={idx} className={twMerge(Style.keyword)}>
                                {keyword}
                            </P>
                        ))}
                    </ul>
                )}
            </div>
            <P className={twMerge(Style.description)}>{description}</P>
        </div>
    );
};

export default ServiceCard;
