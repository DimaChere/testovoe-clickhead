export default function Button({
    children,
    additionalStyles,
    onClick,
}: {
    children: React.ReactNode;
    additionalStyles: string;
    onClick: () => void;
}) {
    return (
        <button
            className={`${additionalStyles} btn border-none bg-purple-400 hover:bg-purple-500 text-white`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
