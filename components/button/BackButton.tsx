import { useRouter } from "next/router";

function BackButton() {
    const router = useRouter();
    
    return (
        <a onClick={router.back} href="#back" className="link-back">
            {" Go back"}
        </a>
    );
}
export default BackButton;