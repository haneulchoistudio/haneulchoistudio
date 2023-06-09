import Image from 'next/image';
import type { LinkOption, MetaOption, Page, Service } from 'types';
import PrimaryLayout from '~/component/layout/PrimaryLayout';
import HaneulChoi from 'public/haneul_choi.png';
import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';
import { BsArrowRight } from 'react-icons/bs';
import H2 from '~/component/typography/H2';
import H4 from '~/component/typography/H4';
import H3 from '~/component/typography/H3';
import PageLink from '~/component/link/PageLink';
import type { GetServerSidePropsContext } from 'next';
import { ssr } from '~/middleware/ssr';
import ServiceCard from '~/component/page/ServiceCard';

const metadata: MetaOption = {
    title: 'Haneul Choi Studio | Build Web Application & E-commerce Platform With Haneul Choi',
    description:
        'Haneul Choi Studio provides development services for websites, web applications, and e-commerce platform applications.',
    keywords: [
        'Haneul Choi',
        'haneulchoi',
        'Web Development',
        'Software Developer',
        'Web Developer',
        'Software Developer',
        'E-commerce Developer',
        'Web Design',
        'Web Design Agency',
    ],
    image: '/hcs_logo.png',
};

const Homepage: Page<{ services: Service[] }> = ({ services }) => {
    const socialmediadata: LinkOption[] = [
        {
            href: 'https://github.com/haneulchoistudo',
            name: 'Github',
            Icon: SiGithub,
        },
        {
            href: 'https://linkedin.com/company/hcstudio-linkedin',
            name: 'Linkedin',
            Icon: SiLinkedin,
        },
        {
            href: 'mailto:haneulchoi.business@gmail.com',
            name: 'Gmail',
            Icon: SiGmail,
        },
    ];

    return (
        <PrimaryLayout metadata={metadata}>
            <div className="min-h-screen">
                <div className="h-auto flex justify-center flex-col border-b bg-white w-full">
                    <section className="px-8 py-16 max-w-cutoff mx-auto 2xl:px-0 flex flex-col gap-8 items-center w-full">
                        <article className="flex flex-col gap-y-8 items-center">
                            <picture className="block rounded-full overflow-hidden border w-[175px] lg:w-[225px]">
                                <Image
                                    src={HaneulChoi}
                                    alt="Haneul Choi Studio"
                                    className="grayscale"
                                />
                            </picture>
                            <ul className="flex items-center gap-x-4 lg:gap-x-6">
                                {socialmediadata.map((socialmedia, idx) => (
                                    <a
                                        href={socialmedia.href}
                                        key={idx}
                                        className="transition-smooth lg:hover:scale-110 lg:hover:opacity-60"
                                    >
                                        <socialmedia.Icon className="text-2xl lg:text-3xl" />
                                    </a>
                                ))}
                            </ul>
                        </article>
                        <article className="flex flex-col h-auto items-center w-full">
                            <H2 className="text-2xl lg:text-4xl mb-2 lg:mb-3">
                                Hi, I&apos;m Haneul Choi.
                            </H2>
                            <H4 className="lg:text-xl text-center lg:text-left mb-6 lg:mb-7">
                                I build static websites, MVP web applications,
                                and E-commerce platforms
                            </H4>
                            <div>
                                <PageLink
                                    href="/contact"
                                    className="group transition-smooth px-6 py-3 font-medium font-lato text-lg flex items-center gap-x-4 border bg-neutral-900/90 border-neutral-400/25 rounded-md text-neutral-100 lg:hover:bg-neutral-900 ring-2 ring-offset-1 ring-transparent lg:hover:ring-black lg:hover:text-white"
                                >
                                    <span>Request Work</span>
                                    <BsArrowRight
                                        size={26}
                                        className="transition-smooth lg:group-hover:rotate-180"
                                    />
                                </PageLink>
                            </div>
                        </article>
                    </section>
                </div>
                {services && services.length > 0 && (
                    <div className="w-full max-w-2xl mx-auto">
                        <article className="w-full lg:mb-8">
                            <nav className="py-16 px-8 lg:px-0 w-full relative">
                                <H2 className="text-4xl pr-4 py-2 lg:pr-6 lg:py-3 top-6 lg:top-7 relative z-10 bg-white w-max">
                                    Services I Provide
                                </H2>
                                <div className="peer group flex flex-col gap-y-12 pt-10 lg:pt-12 border-t-4 border-neutral-800 relative z-0">
                                    {services.map((service, idx) => (
                                        <ServiceCard {...service} key={idx} />
                                    ))}
                                </div>
                            </nav>
                        </article>
                        <article className="px-8 lg:px-16 pb-16">
                            <H3 className="text-center font-medium text-xl lg:text-2xl leading-relaxed lg:leading-relaxed mb-6">
                                Wanna see my what your future product might look
                                like when considering to work with me?
                            </H3>
                            <div>
                                <PageLink
                                    href="/projects/demo"
                                    className="flex items-center px-8 py-4 border-2 border-neutral-800 group w-max mx-auto gap-x-4 transition-smooth lg:hover:bg-neutral-800 lg:hover:text-white"
                                >
                                    <span className="font-medium text-lg lg:text-xl">
                                        See Portfolio
                                    </span>
                                    <BsArrowRight size={26} />
                                </PageLink>
                            </div>
                        </article>
                    </div>
                )}
            </div>
        </PrimaryLayout>
    );
};

Homepage.getLayout = (page) => {
    return page;
};

export const getServerSideProps = async (_: GetServerSidePropsContext) => {
    const services = await ssr<Service[], 'services'>('services');
    if (services && services.length > 0) return { props: { services } };
    return { props: { services: null } };
};

export default Homepage;
