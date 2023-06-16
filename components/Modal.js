    import ReactModal from "react-modal";
    import { useState } from "react";
    import MyButton from "./MyButton";

    const Modal = ({ isopen, isclose }) => {
    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(true);
        console.log("+1");
    };

    const closeModal = () => {
        setModal(false);
        console.log("-1");
    };

    return (
        <>
        <div className="p-4 flex items-center justify-center flex-col">
            <MyButton
            functionn={openModal}
            style="bg-white rounded-md px-3 py-1 text-sm"
            buttonText={"open modal"}
            onClick={openModal}
            />
            <div className="z-50 absolute flex justify-center items-center h-screen">
            {modal && (
                <div className=" fixed flex justify-center bg-opacity-25 backdrop-blur-sm items-center inset-0 w-screen h-screen  bg-black">
                <div className="bg-white p-5 gap-2 rounded-md flex flex-col  w-[300px]">
                    <h2 className="text-xl font-semibold">Hello Modal</h2>
                    <p className="text-[10px]">
                    Nikhil sharma is the best coder. Nikhil sharma is the best
                    coder. Nikhil sharma is the best coder.
                    </p>
                    <MyButton
                    functionn={closeModal}
                    style="bg-red-400 rounded-md px-3 py-1 text-sm"
                    buttonText={"close modal"}
                    onClick={openModal}
                    />
                </div>
                </div>
            )}
            </div>
        </div>
        </>
    );
    };

    export default Modal;
