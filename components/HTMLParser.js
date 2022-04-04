import htmlParse from 'html-react-parser';

export default function HTMLParser({ children }) {
    return (
        <>
        {htmlParse(children)}
        </>
    );
}