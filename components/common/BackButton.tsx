import { useRouter } from "next/router";

function BackButton() {
    const router = useRouter();
    
    return (
        <button onClick={router.back} className="backButton">
            <i className="fas fa-long-arrow-alt-left"></i>
            {" Back"}
        </button>
    );
}
export default BackButton;