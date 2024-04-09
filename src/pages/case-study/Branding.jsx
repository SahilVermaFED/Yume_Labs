import PropTypes from 'prop-types';

import { cardsImage, loginImage, workImage } from '../../assets';

const Paragraph = (props) => {
    const { children } = props;
    return <p className="text-neutral-500 md:text-2xl text-lg">{children}</p>;
};
const Box = (props) => {
    const { children, color } = props;
    return (
        <div
            className="aspect-[1/1] flex-1 rounded-xl"
            style={{
                backgroundColor: color
            }}>
            {children}
        </div>
    );
};

const Branding = () => {
    return (
        <section className="px-6 md:px-16 lg:px-20 xl:px-28 2xl:px-36">
            <h2 className="font-serif italic text-lg md:text-2.5xl bg-accent-blue inline px-4 text-white md:px-8">
                Branding
            </h2>
            <div className="border-b-2 border-gray-200 md:mt-1.2 -mt-1"></div>
            <div className="flex pt-2 md:pt-24 md:gap-10 gap-2 flex-col md:flex-row">
                <div className="md:w-1/3">
                    <h2 className="zinc-950 text-2.5xl md:text-4xl font-poppins font-medium">Typography & Color</h2>
                </div>
                <div className="md:w-2/3">
                    <Paragraph>
                        The color palette artfully blends shades of blue, violet, and green, evoking a harmonious and
                        visually engaging experience. This palette conveys a sense of trustworthiness, innovation, and
                        tranquility. Moving to typography, the deliberate selection of Work Sans lends a balanced and
                        sophisticated touch to the design.
                    </Paragraph>
                    <div className="md:py-14 py-7">
                        <div className="flex gap-2 flex-col md:flex-row font-medium text-white text-base">
                            <Box color={'#4E43AB'}>
                                <div className="py-8 px-4">
                                    <p>Ocean Blue</p>
                                    <p>#4E43AB</p>
                                </div>
                            </Box>
                            <Box color={'#8F65F5'}>
                                <div className="py-8 px-4">
                                    <p>Crocus Purple</p>
                                    <p>#8F65F5</p>
                                </div>
                            </Box>
                        </div>
                        <div className="flex mt-2 gap-2 text-xs md:text-base text-white font-medium">
                            <Box color={'#40C1E6'}>
                                <div className="md:py-8 md:px-4 py-4 px-2">
                                    <p>Picton Blue</p>
                                    <p>#40C1E6</p>
                                </div>
                            </Box>
                            <Box color={'#04BA70'}>
                                <div className="md:py-8 md:px-4 py-4 px-2">
                                    <p>Green Teal</p>
                                    <p>#04BA70</p>
                                </div>
                            </Box>
                            <Box color={'#DBE4F3'}>
                                <div className="md:py-8 md:px-4 py-4 px-2 text-black">
                                    <p>Azureish White</p>
                                    <p>#DBE4F3</p>
                                </div>
                            </Box>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row mt-12">
                        <div className="md:w-2/4">
                            <h2 className="leading-10">
                                <span className="text-7.5xl">Aa</span>

                                <span className="text-4.5xl">
                                    <br />
                                    Work Sans
                                </span>
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 md:gap-4 md:w-3/4">
                            <div>
                                <p>
                                    60 pt <br className="hidden md:block" /> Work Sans Bold
                                </p>
                            </div>
                            <div>
                                <h2 className="text-4.5xl font-bold">Heading 1</h2>
                            </div>

                            <div>
                                <p>
                                    42 pt <br className="hidden md:block" /> Work Sans Regular
                                </p>
                            </div>
                            <div>
                                <h2 className="text-3xl">Heading 2</h2>
                            </div>

                            <div>
                                <p>
                                    36 pt <br className="hidden md:block" /> Work Sans Bold
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">Heading 3</h3>
                            </div>

                            <div>
                                <p>
                                    21 pt <br className="hidden md:block" /> Work Sans Regular
                                </p>
                            </div>
                            <div>
                                <h4 className="text">Heading 4</h4>
                            </div>

                            <div>
                                <p>
                                    14 pt <br className="hidden md:block" /> Work Sans Regular
                                </p>
                            </div>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis libero eu
                                    accumsan fringilla.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="py-20">
                        <Paragraph>
                            During the design evolution, a concerted effort was made to synchronize all design elements
                            with the carefully chosen color palette. This cohesion was extended to the realm of
                            illustration, where a minimalist approach was adopted. Solid colors were employed, resulting
                            in clean and straightforward illustrations that effortlessly blend with the overall
                            aesthetic. These uncomplicated visuals not
                        </Paragraph>
                    </div>
                    <Paragraph>
                        only maintain a visual consistency but also facilitate clear communication of complex concepts,
                        aligning with the goal of simplicity in the face of extensive data. Furthermore, the decision to
                        integrate standard Google Material icons for the iconography amplifies user familiarity and ease
                        of understanding. The overarching aim of keeping elements simple aligns seamlessly with the
                        complex nature of data analysis.
                    </Paragraph>
                </div>
            </div>
            <div className="py-20">
                <img src={loginImage} className="w-full mb-4 md:h-full h-96 object-cover" />
                <div className="flex md:flex-row flex-col gap-4 w-full h-full">
                    <div>
                        <img src={workImage} className="w-full h-full" />
                    </div>
                    <div>
                        <img src={cardsImage} className="w-full h-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Branding;

Paragraph.propTypes = {
    children: PropTypes.node.isRequired
};

Box.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string.isRequired
};
