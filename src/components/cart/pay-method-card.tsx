import { PayMethod } from "@/lib/types";
import Image from "next/image";

export default function PayMethodCard({
    method,
    onClickHandler,
}: {
    method: PayMethod;
    onClickHandler: (name: string) => void;
}) {
    return (
        <button
            className="flex flex-col justify-center items-center gap-2 w-full aspect-square border rounded-2xl gradient active:scale-95 ease-in duration-[20ms]"
            onClick={() => onClickHandler(method.name)}
        >
            <Image
                src={method.methodImg}
                alt={method.name}
                width={100}
                height={100}
                className="max-w-[50px] max-h-[50px]"
            />
            <span className="text-gray-700 dark:text-white">{method.name}</span>
        </button>
    );
}
