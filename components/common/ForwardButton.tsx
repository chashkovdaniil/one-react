import Link from 'next/link';

function ForwardButton(props: any) {
    return (
        <Link href={props.href}>
            <button className="forwardButton">
                {props.children + " "}
                <i className="fas fa-long-arrow-alt-right"></i>
            </button>
        </Link>
    );
}

export default ForwardButton;