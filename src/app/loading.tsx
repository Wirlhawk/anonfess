import React from "react";
import { Loader } from "lucide-react"; // Import the Loader icon

const Loading = () => {
    return (
        <div className="flex flex-col max-w-md pt-12 px-6 pb-6  min-h-screen mx-auto gap-6 justify-center items-center">
            <Loader className="animate-spin h-16 w-16    text-primary" />
        </div>
    );
};

export default Loading;
