import { redirect } from "next/navigation";

export default function NotFound() {
    redirect('/');
    // return(
    //     <div className="flex justify-center align-middle text-red-900">404 - Not Found</div>
    // )
}