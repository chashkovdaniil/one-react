import Link from 'next/link';

function ForwardButton(props: any) {
    return (
        <Link href={props.href}>
            <a className="link-forward">
                {props.children + " "}
            </a>
        </Link>
    );
}

export default ForwardButton;