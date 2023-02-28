export const Button = ({ color, text, ...props }: any) => {
    return (
        <button className="w-full bg-[#e0001f] hover:bg-[#ff0022] text-white px-4 py-2 rounded-md transition-all ease-in-out duration-75" {...props}>
            {text}
        </button>
    );
};
