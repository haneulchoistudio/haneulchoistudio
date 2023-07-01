import Style from './__modalbg.module.css';
import { twMerge } from 'tailwind-merge';

interface ModalBgProps {
    show?: boolean;
    children: React.ReactNode;
}

const ModalBg: React.FC<ModalBgProps> = ({ children, show }) => {
    return (
        <>
            {show && <div className={twMerge(Style.bg)} />}
            <aside
                className={twMerge(
                    Style.main,
                    show ? Style['show'] : Style['hide']
                )}
            >
                <section className={twMerge(Style.wrap)}>
                    <article className={twMerge(Style.component)}>
                        {children}
                    </article>
                </section>
            </aside>
        </>
    );
};

export default ModalBg;
