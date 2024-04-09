import { partnergrid, productdesign } from '../../assets';
import PropTypes from 'prop-types';

export const Productdesign = () => {
    function Card(props) {
        const { content, url } = props;
        return (
            <div className="rounded w-full overflow-hidden shadow-lg">
                <img className="w-full " src={url} />
                <div className="px-7 py-7 xl:px-14 xl:py-14  bg-[#f4f4f4]">
                    <p className="text-fade-gray text-lg ">{content}</p>
                </div>
            </div>
        );
    }
    Card.propTypes = {
        url: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
    };

    return (
        <section>
            <div className="bg-accent-blue w-32 md:w-64">
                <p className="flex justify-center font-serif italic text-white text-lg md:text-xl">Product Design</p>
            </div>

            <div className="flex flex-col md:flex-row pt-9 md:pt-28 gap-12 xl:gap-36">
                <div className="w-90">
                    <h1 className="text-4xl font-medium">Headlines on the Problem Statement</h1>
                </div>
                <div className="w-full">
                    <p className="text-xl opacity-70 ">
                        We’ve crafted a comprehensive solution that seamlessly merges intuitive AI-driven analysis,
                        user-centered product design, and effective project management. Our platform harmonizes these
                        elements to create a unified experience that empowers users at every stage.
                    </p>
                </div>
            </div>

            <div className="relative">
                <div className="absolute h-0 top-[2.25rem]  left-[-137.875rem] md:left-[-156.75rem] lg:left-[-19.5rem] xl:top-[0.25rem] xl:left-[-2.125rem] 3xl:top-[0.25rem] z-[-1]">
                    <img
                        src={partnergrid}
                        alt="Grid image"
                        className="object-none xl:object-contain w-full opacity-100"
                    />
                </div>
            </div>

            <div className="px-7 pt-24 md:px-16 md:py:12 md:pt-40 pb-72 ">
                <div className="flex flex-col justify-center items-center gap-24 lg:flex-row md:gap-9">
                    <Card
                        url={productdesign}
                        content="Creating intuitive and unbiased analysis with the assistance of AI"
                    />
                    <Card
                        url={productdesign}
                        content="Creating intuitive and unbiased analysis with the assistance of AI"
                    />
                    <Card
                        url={productdesign}
                        content="Creating intuitive and unbiased analysis with the assistance of AI"
                    />
                </div>
            </div>
        </section>
    );
};
