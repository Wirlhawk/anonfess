import Link from "next/link";
import NotFound  from "@/components/message/notFound"

export default function NotFoundPage() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-primary">
            <NotFound />
        </div>
    );
}
