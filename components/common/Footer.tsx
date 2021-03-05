export default function Footer({ children }: any) {
    return <>
        <footer>
            Powered by Chashkov Daniil
        </footer>
        <style jsx>{`
            footer {
                padding: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        `}</style>
    </>;
}